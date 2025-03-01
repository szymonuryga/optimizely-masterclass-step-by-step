// lib/optimizely/types/experience.ts
import type { SeoExperience } from '@/lib/optimizely/types/generated'

export interface Row {
  key: string
  columns?: Column[]
}

export interface Column {
  key: string
  elements?: ExperienceElement[]
}

export interface ExperienceElement {
  key: string
  displaySettings?: {
    value: string
    key: string
  }[]
  component?: any
}

export interface VisualBuilderNode {
  nodeType: 'section' | 'component'
  key: string
  component?: any
  rows?: Row[]
}

export type SafeVisualBuilderExperience = {
  composition?: {
    nodes?: VisualBuilderNode[]
  }
} & SeoExperience
