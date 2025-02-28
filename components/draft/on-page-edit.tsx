//components/draft/on-page-edit.tsx
'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

interface ContentSavedEventArgs {
  contentLink: string
  previewUrl: string
  previewToken: string
  parentId?: string
  sectionId?: string
}

const OnPageEdit = ({
  version,
  currentRoute,
}: {
  version: string
  currentRoute: string
}) => {
  const router = useRouter()

  useEffect(() => {
    const handleContentSaved = (event: Event) => {
      const message = (event as CustomEvent).detail as ContentSavedEventArgs
      console.log('Content saved event received:', message)
      const [, contentVersion] = message?.contentLink?.split('_')
      if (contentVersion && contentVersion !== version) {
        const newUrl = currentRoute?.replace(version, contentVersion)
        router.push(newUrl)
      } else {
        router.refresh()
      }
    }

    window.addEventListener('optimizely:cms:contentSaved', handleContentSaved)
  }, [currentRoute, router, version])

  return null
}

export default OnPageEdit
