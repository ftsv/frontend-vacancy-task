import React from 'react';

import cn from 'classnames';
import styles from './PriceChange.module.scss';

interface PriceChangeProps {
  price: number;
}

const PriceChange: React.FC<PriceChangeProps> = (props) => {
  const { price } = props;

  return (
    <span className={cn(styles['price-change'], {
      [`${styles['price-change__up']}`]: price > 0 ? true : false,
      [`${styles['price-change__down']}`]: price < 0 ? true : false,
    })}>{price > 0 ? `+${price}%` : `${price}%`}</span>
  )
}

export default PriceChange;