import React from 'react';
import {
  ImFacebook,
  ImTwitter,
  ImPinterest,
  ImYouTube,
  ImInstagram,
} from 'react-icons/im';

const Socials = () => {
  return (
    <div className='hidden xl:flex ml-24'>
      <ul className='flex gap-x-4'>
        <li>
          <a href='http://www.facebook.com' target='_blank' rel='noopener noreferrer'>
            <ImFacebook />
          </a>
        </li>
        <li>
          <a href='https://x.com/?lang=ru' target='_blank' rel='noopener noreferrer'>
            <ImTwitter />
          </a>
        </li>
        <li>
          <a href='https://ru.pinterest.com/' target='_blank' rel='noopener noreferrer'>
            <ImPinterest />
          </a>
        </li>
        <li>
          <a href='https://www.instagram.com/' target='_blank' rel='noopener noreferrer'>
            <ImInstagram />
          </a>
        </li>
      </ul> 
    </div>
  );
};

export default Socials;