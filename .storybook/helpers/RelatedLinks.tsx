// Unpublished Work © 2024 Deere & Company.

import React from 'react';

import { useOf, Markdown } from '@storybook/addon-docs/blocks';


export function RelatedLinks(): React.ReactElement | null {

const { preparedMeta } = useOf<'meta'>('meta');

  return preparedMeta.parameters?.pageContent?.relatedLinks
    ? (
        <blockquote className='related-links'>
          <p>
            <strong>Related Links:</strong>
          </p>
          <ul>
            {preparedMeta.parameters.pageContent.relatedLinks.map(link => (
              <li key={link.text}>
                <Markdown>
                  {`[${link.text}](${link.href})`}
                </Markdown>
              </li>
            ))}
          </ul>
        </blockquote>
      )
    : null;
}