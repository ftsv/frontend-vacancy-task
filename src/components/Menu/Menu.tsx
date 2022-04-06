import React from 'react';
import { NavLink } from 'react-router-dom';
import { menu } from '../../menu';
import SVG from '../../constants/index';

import cn from 'classnames';
import styles from './Menu.module.scss';

const Menu = () => {
  return (
    <div className={styles.menu} >
      <div>
        <div className={styles['menu__logo']} >
          <NavLink
            to={'/'}
          >
            {SVG.EVER_BOARD_LOGO}
            <span className={styles['menu__logo-text']}>
              project subheading
            </span>
          </NavLink>
        </div>
        {menu.map((item) => (
          <NavLink
            className={({isActive}) => cn(styles['menu-item'], {
              [`${styles['menu-item--active']}`] : isActive,
            })}
            key={item.id}
            to={`/${item.id}`}
          >
            <span className={styles['menu-item__icon']} >{item.icon}</span>
            <span className={styles['menu-item__text']} >{item.title}</span>
          </NavLink>
        ))}
      </div>
      <div className={styles['menu-language']} >
        {'Русский'}
      </div>

    </div>
  )
}

export default Menu;