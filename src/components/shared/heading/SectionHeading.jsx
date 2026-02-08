import React from 'react';

const SectionHeading = ({text, customClass=""}) => {
  return (
    <h2 className={`section-heading ${customClass}`}>
      {text.split(" ").map((word, i) => (
        <span key={i}>{word} <br /></span>
      ))}
    </h2>
  );
};

export default SectionHeading;