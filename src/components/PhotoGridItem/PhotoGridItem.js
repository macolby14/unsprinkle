import React from 'react';
import styled from 'styled-components/macro';

const PhotoGridItem = ({ id, src, alt, tags }) => {

  const baseSrc = src.split(".")[0];

  return (
    <article>
      <Anchor href={`/photos/${id}`}>
      <picture>
        <source type="image/avif" srcset={`
          ${baseSrc}.avif 1x,
          ${baseSrc}@2x.avif 2x,
          ${baseSrc}@3x.avif 3x,
          ` }
        />
        <Image src={src}
        alt={`Image of ${tags[0]}`}
        srcset={`
          ${baseSrc}.jpg 1x,
          ${baseSrc}@2x.jpg 2x,
          ${baseSrc}@3x.jpg 3x,
          `}  />
      </picture>
      </Anchor>
      <Tags>
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Tags>
    </article>
  );
};

const Anchor = styled.a`
  text-decoration: none;
  color: inherit;
  outline-offset: 4px;
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: 300px;
  object-fit: cover;
  object-position: center center;
  border-radius: 2px;
  margin-bottom: 8px;
`;

const Tags = styled.ul`
  display: flex;
  /* flex-wrap: wrap; */
  gap: 8px;
`;

const Tag = styled.li`
  padding: 4px 8px;
  background: var(--color-gray-300);
  font-size: 0.875rem;
  font-weight: 475;
  color: var(--color-gray-800);
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export default PhotoGridItem;
