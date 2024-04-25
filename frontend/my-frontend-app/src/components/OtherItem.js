import React from 'react';
import { Link } from 'react-router-dom';

function OtherItem(props) {
    return (
      <>
        <li className='other__item'>
          <Link className='other__item__link' to={props.path}>
            <figure className='other__item__pic-wrap' >
              <img
                className='other__item__img'
                alt=''
                src={props.src}
              />
            </figure>
            <div className='other__item__info'>
              <h5 className='other__item__text'>{props.text}</h5>
            </div>
          </Link>
        </li>
      </>
    );
}

export default OtherItem;