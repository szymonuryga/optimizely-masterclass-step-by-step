// components/content-area/mapper.tsx

import Block from './block';

function ContentAreaMapper({
  blocks,
  preview = false
}: {
  blocks?: any[] | null;
  preview?: boolean;
}) {
  if (!blocks || blocks.length === 0) return null;

  return (
    <>
      {blocks?.map(({ __typename, ...props }, index) => (
        <Block
          key={`${__typename satisfies string}--${index}`}
          typeName={__typename}
          props={{
            ...props,
            isFirst: index === 0,
            preview
          }}
        />
      ))}
    </>
  );
}

export default ContentAreaMapper;
