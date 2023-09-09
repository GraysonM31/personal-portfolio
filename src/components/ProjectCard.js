import React from 'react';
import { Col } from 'react-bootstrap';

export const ProjectCard = ({ title, description, imgUrl, url }) => {
  return (
    <Col sm={10} md={10}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          {url && (
            <a href={url} target="_blank" rel="noopener noreferrer">
              Link
            </a>
          )}
        </div>
      </div>
    </Col>
  );
};
