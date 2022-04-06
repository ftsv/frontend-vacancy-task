import React from 'react';
import { Outlet } from 'react-router-dom';
import Menu from '../../components/Menu/Menu';

import styles from './Wrapper.module.scss';

const Wrapper = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.menu}>
        <Menu />
      </div>
      <div className={styles.outlet}>
        <Outlet />
      </div>
    </div>
  )
}

export default Wrapper;