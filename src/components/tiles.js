import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Link } from './items';
import './tiles.css';

export default function InfoTile({ children, title }) {
  return (
    <div className='info-tile'>
      <h1 className='title'>{title}</h1>
      <div className='content'>
        {children}
      </div>
    </div>
  );
}

export function ProjectTile({ project }) {
  let {
    name,
    description,
    html_url,
    homepage
  } = project;

  return (
    <div className='project-tile'>
      <h1 className='project-name'><i>{name}</i></h1>
      <p className='project-desc'>{description}</p>

      <span>
        <Link className='project-url' icon={faGithub} url={html_url}>View here</Link>
        { homepage && <Link className='project-url' icon={faLink} url={homepage}>Homepage</Link> }
      </span>
    </div>
  );
}

export function CaptionTile({ children, caption }) {
  return (
    <div className='captioned-tile'>
      {children}
      <p className='caption'>{caption}</p>
    </div>
  );
}
