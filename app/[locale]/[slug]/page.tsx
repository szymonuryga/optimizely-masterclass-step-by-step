// app/[locale]/[slug]/page.tsx
import ContentAreaMapper from '@/components/content-area/mapper';
import { optimizely } from '@/lib/optimizely/fetch';
import { getValidLocale, mapPathWithoutLocale } from '@/lib/optimizely/utils/language';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';

export async function generateStaticParams() {
  try {
    const pageTypes = ['CMSPage']
    const pathsResp = await optimizely.AllPages({ pageType: pageTypes })
    const paths = pathsResp.data?._Content?.items ?? []
    const filterPaths = paths.filter(
      (path) => path && path._metadata?.url?.default !== null
    )
    const uniquePaths = new Set<string>()
    filterPaths.forEach((path) => {
      const cleanPath = mapPathWithoutLocale(
        path?._metadata?.url?.default ?? ''
      )
      uniquePaths.add(cleanPath)
    })

    return Array.from(uniquePaths).map((slug) => ({
      slug,
    }))
  } catch (e) {
    console.error(e)
    return []
  }
}

export default async function CmsPage(props: {
  params: Promise<{ locale: string; slug?: string }>
}) {
  const { locale, slug = '' } = await props.params
  const locales = getValidLocale(locale)
  const formattedSlug = `/${slug}`

  const { data, errors } = await optimizely.getPageByURL({
    locales: [locales],
    slug: formattedSlug,
  })

  if (errors || !data?.CMSPage?.items?.[0]) {
    return notFound()
  }

  const page = data.CMSPage.items[0]
  const blocks = (page?.blocks ?? []).filter(
    (block) => block !== null && block !== undefined
  )

  return (
    <>
      <Suspense>
        <ContentAreaMapper blocks={blocks} />
      </Suspense>
    </>
  )
}