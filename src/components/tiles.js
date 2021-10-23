import { faGithub } from '@fortawesome/free-brands-svg-icons';
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

export function ProjectTile({ children, projName, projUrl }) {
  return (
    <div className='project-tile'>
      <h1 className='project-name'><i>{projName}</i></h1>
      <p className='project-desc'>{children}</p>
      <Link className='project-url' icon={faGithub} url={projUrl}>View here</Link>
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
