import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './items.css';

export function Link({ children, url, className, icon }) {
  return (
    <a className={className} href={url} target='_blank' rel='noreferrer noopener'>
      {icon && <FontAwesomeIcon className='link-icon' icon={icon} />}
      {children}
    </a>
  );
}

export function StringList({ items }) {
  return (
    <ul className='basic-list'>
      {items.map(item => <li className='item' key={item}>{item}</li>)}
    </ul>
  );
}

export function FlexList({ children, gap = '5px' }) {
  return (
    <div className='flex-list' style={{ gap }}> 
      {children}
    </div>
  );
}
