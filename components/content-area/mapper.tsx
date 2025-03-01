// components/content-area/mapper.tsx
import { ExperienceElement } from '@/lib/optimizely/types/experience'
import Block from './block'

function ContentAreaMapper({
  blocks,
  preview = false,
  isVisualBuilder = false,
  experienceElements,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  blocks?: any[] | null
  preview?: boolean
  isVisualBuilder?: boolean
  experienceElements?: ExperienceElement[] | null
}) {
  if (isVisualBuilder) {
    if (!experienceElements || experienceElements.length === 0) return null

    return (
      <>
        {experienceElements?.map(
          ({ displaySettings, component, key }, index) => (
            <div
              data-epi-block-id={key}
              key={`${component?.__typename satisfies string}--${index}`}
            >
              <Block
                typeName={component?.__typename}
                props={{
                  ...component,
                  displaySettings,
                  isFirst: index === 0,
                  preview,
                }}
              />
            </div>
          )
        )}
      </>
    )
  }
  if (!blocks || blocks.length === 0) return null

  return (
    <>
      {blocks?.map(({ __typename, ...props }, index) => (
        <Block
          key={`${__typename satisfies string}--${index}`}
          typeName={__typename}
          props={{
            ...props,
            isFirst: index === 0,
            preview,
          }}
        />
      ))}
    </>
  )
}

export default ContentAreaMapper
