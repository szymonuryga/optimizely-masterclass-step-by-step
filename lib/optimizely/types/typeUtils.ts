// lib/optimizely/types/typeUtils.ts

import type { _IContent } from '@/lib/optimizely/types/generated'

export type SafeContent = {
  __typename?: string
} & _IContent

// Utility type to extract a specific type from _IContent union
export type ExtractContent<T extends { __typename: string }> = Extract<
  _IContent,
  { __typename?: T['__typename'] }
>

// Helper function to safely cast _IContent to a specific type
export function castContent<T extends { __typename?: string }>(
  content: SafeContent | null | undefined,
  typename: T['__typename']
): T | null {
  if (content && content?.__typename === typename) {
    return content as unknown as T
  }
  return null
}
