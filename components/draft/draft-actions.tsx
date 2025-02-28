// components/draft/draft-actions.tsx
'use client'

import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

const DraftActions = () => {
  const router = useRouter()

  const handleDisableDraft = () => {
    fetch('/api/draft/disable')
  }

  return (
    <div className="flex justify-end gap-5 p-4">
      <Button onClick={() => router.refresh()}>Refresh Page</Button>
      <Button onClick={() => handleDisableDraft()}>Disable Draft</Button>
    </div>
  )
}

export default DraftActions
