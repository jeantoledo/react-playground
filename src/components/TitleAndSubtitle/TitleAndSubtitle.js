import React from 'react';

const TitleAndSubtitle = ({ title, subtitle }) => (
  <div>
    <h1>{title}</h1>
    <h2>{subtitle}</h2>
  </div>
);

TitleAndSubtitle.defaultProps = {
  title: "Title",
  subtitle: "Subtitle"
}

export default TitleAndSubtitle;
