// lib/optimizely/utils/block-factory.ts

import { createElement, ComponentType } from 'react'

type ComponentMap = Record<string, ComponentType<any>>

export default function blocksMapperFactory<TMap extends ComponentMap>(
  contentTypeMap: TMap
) {
  function factory<TypeName extends keyof TMap>({
    typeName,
    props,
  }: {
    typeName: TypeName
    props: React.ComponentProps<TMap[TypeName]>
  }) {
    const Component = contentTypeMap[typeName]

    if (!Component) {
      return null
    }

    return createElement(Component, props)
  }

  return factory
}
