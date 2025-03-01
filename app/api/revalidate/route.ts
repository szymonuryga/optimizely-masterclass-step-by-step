// app/api/revalidate/route.ts
import { optimizely } from '@/lib/optimizely/fetch'
import { revalidatePath, revalidateTag } from 'next/cache'
import { type NextRequest, NextResponse } from 'next/server'

const OPTIMIZELY_REVALIDATE_SECRET = process.env.OPTIMIZELY_REVALIDATE_SECRET

export async function POST(request: NextRequest) {
  try {
    validateWebhookSecret(request)
    const docId = await extractDocId(request)

    if (!docId || !docId.includes('Published')) {
      return NextResponse.json({ message: 'No action taken' })
    }

    const [guid, locale] = docId.split('_')
    const formattedGuid = guid.replaceAll('-', '')

    const content = await fetchContentByGuid(formattedGuid)
    const urlType = content?._metadata?.url?.type
    const url =
      urlType === 'SIMPLE'
        ? content?._metadata?.url?.default
        : content?._metadata?.url?.hierarchical?.replace('/s', '')

    if (!url) {
      return NextResponse.json({ message: 'Page Not Found' }, { status: 400 })
    }

    const urlWithLocale = normalizeUrl(url, locale)

    await handleRevalidation(urlWithLocale)

    return NextResponse.json({ revalidated: true, now: Date.now() })
  } catch (error) {
    return handleError(error)
  }
}

function validateWebhookSecret(request: NextRequest) {
  const webhookSecret = request.nextUrl.searchParams.get('cg_webhook_secret')
  if (webhookSecret !== OPTIMIZELY_REVALIDATE_SECRET) {
    throw new Error('Invalid credentials')
  }
}

async function extractDocId(request: NextRequest): Promise<string> {
  const requestJson = await request.json()
  return requestJson?.data?.docId || ''
}

async function fetchContentByGuid(guid: string) {
  const { data, errors } = await optimizely.GetContentByGuid({ guid })
  if (errors) {
    console.error(errors)
    throw new Error('Error fetching content')
  }
  return data?._Content?.items?.[0]
}

function normalizeUrl(url: string, locale: string): string {
  const normalizedUrl = url.startsWith('/') ? url : `/${url}`
  return normalizedUrl.startsWith(`/${locale}`)
    ? normalizedUrl
    : `/${locale}${normalizedUrl}`
}

async function handleRevalidation(urlWithLocale: string) {
  if (urlWithLocale.includes('footer')) {
    console.log(`Revalidating tag: optimizely-footer`)
    await revalidateTag('optimizely-footer')
  } else if (urlWithLocale.includes('header')) {
    console.log(`Revalidating tag: optimizely-header`)
    await revalidateTag('optimizely-header')
  } else {
    console.log(`Revalidating path: ${urlWithLocale}`)
    await revalidatePath(urlWithLocale)
  }
}

function handleError(error: unknown) {
  console.error('Error processing webhook:', error)
  if (error instanceof Error) {
    if (error.message === 'Invalid credentials') {
      return NextResponse.json(
        { message: 'Invalid credentials' },
        { status: 401 }
      )
    }
    return NextResponse.json({ message: error.message }, { status: 500 })
  }
  return NextResponse.json(
    { message: 'Internal Server Error' },
    { status: 500 }
  )
}
