// components/visual-builder/wrapper.tsx
import ContentAreaMapper from '../content-area/mapper'
import type {
  Column,
  Row,
  VisualBuilderNode,
  SafeVisualBuilderExperience,
} from '@/lib/optimizely/types/experience'

export default function VisualBuilderExperienceWrapper({
  experience,
}: {
  experience?: SafeVisualBuilderExperience
}) {
  if (!experience?.composition?.nodes) {
    return null
  }

  const { nodes } = experience.composition

  return (
    <div className="vb:outline relative w-full flex-1">
      <div className="vb:outline relative w-full flex-1">
        {nodes.map((node: VisualBuilderNode) => {
          if (node.nodeType === 'section') {
            return (
              <div
                key={node.key}
                className="vb:grid relative flex w-full flex-col flex-wrap"
                data-epi-block-id={node.key}
              >
                {node.rows?.map((row: Row) => (
                  <div
                    key={row.key}
                    className="vb:row flex flex-1 flex-col flex-nowrap md:flex-row"
                  >
                    {row.columns?.map((column: Column) => (
                      <div
                        className="vb:col flex flex-1 flex-col flex-nowrap justify-start"
                        key={column.key}
                      >
                        <ContentAreaMapper
                          experienceElements={column.elements}
                          isVisualBuilder
                        />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            )
          }

          if (node.nodeType === 'component' && node.component) {
            return (
              <div
                key={node.key}
                className="vb:node relative w-full"
                data-epi-block-id={node.key}
              >
                <ContentAreaMapper blocks={[node.component]} />
              </div>
            )
          }

          return null
        })}
      </div>
    </div>
  )
}
