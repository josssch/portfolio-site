import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Link } from './items';
import './tiles.css';

export default function InfoTile({ children, title }) {
  return (
    <div className='info-tile'>
      <h1 className='info-tile__title'>{title}</h1>
      <div className='info-tile__content'>
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
    homepage,
    language
  } = project;

  return (
    <div className='project-tile'>
      <h1 className='project-tile__name'><i>{name}</i> {language && `(${language})`}</h1>
      <p className='project-tile__desc'>{description}</p>

      <span className='project-tile__urls'>
        <Link className='project-tile__url' icon={faGithub} url={html_url}>View here</Link>
        { homepage && <Link className='project-tile__url' icon={faLink} url={homepage}>Homepage</Link> }
      </span>
    </div>
  );
}

export function CaptionTile({ children, caption }) {
  return (
    <div className='captioned-tile'>
      {children}
      <p className='captioned-tile__caption'>{caption}</p>
    </div>
  );
}
