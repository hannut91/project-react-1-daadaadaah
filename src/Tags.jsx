import React from 'react';

import {
  TagsContainer,
} from './styles/DevLinks';

export default function Tags({ subjects }) {
  return (
    <TagsContainer>
      {subjects.map((subjectItem, index) => {
        if (index < 3) {
          return (
            <button type="button" key={subjectItem.id}>
              #
              {subjectItem.name}
            </button>
          );
        }
        if (index === 4) {
          return (
            <button type="button" key={subjectItem.id}>
              ...
            </button>
          );
        }
        return null;
      })}
    </TagsContainer>
  );
}
