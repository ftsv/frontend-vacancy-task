import React from 'react';
import { Link } from 'react-router-dom';
import { FiChevronDown,FiChevronUp, FiUsers } from "react-icons/fi";
import { numberPerDigit } from '../../utils/numbersPerDigits';
import PriceChange from '../PriceChange/PriceChange';
import IToken from '../../models/IToken';

import cn from 'classnames';
import styles from './TokenListItem.module.scss';

interface TokenListItemProps {
  token: IToken;
  index: number;
}

const TokenListItem: React.FC<TokenListItemProps> = (props) => {
  const { token, index } = props;
  const [isHidden, setIsHidden] = React.useState(true);

  const priceChange = {
    day: 0.025,
    week: 0.035,
    month: -10.5,
  }

  const toggleDescription = () => {
    setIsHidden(!isHidden);
  }

  return (
    <div className={styles.token} >
      <div className={styles['token__data']} >
        <div className={styles['token-index']} >{`#${index + 1}`}</div>
        <img src={token.logoURI} className={styles['token-logo']} alt="" />
        <div className={cn(styles['token-item'], styles['token-name'])} >
          <div >
            {token.name}
          </div >
          <div className={styles['token-name__symbol']} >
            <Link
              to={`/token/${token.address}`}
              state={token}
            >
              {token.symbol}
            </Link>
          </div>
        </div>
        <div className={cn(styles['token-item'], styles['token-price'])} >
          <span className={styles['token-price__value']} >{`${0.0001} $`}</span>
          <ul className={styles['token-price__changes']} >
            <li><PriceChange price={priceChange.day} /></li>
            <li><PriceChange price={priceChange.week} /></li>
            <li><PriceChange price={priceChange.month} /></li>
          </ul>
        </div>
        <div className={cn(styles['token-item'], styles['token-volume'])} >
          <span className={styles['token-volume__currency']} >
            {`${numberPerDigit(10070)} $`}
          </span>
          <span className={styles['token-volume__percents']} >
            {`${numberPerDigit(28)}%`}
          </span>
        </div>
        
        <div className={cn(styles['token-item'], styles['token-tvl'])} >
          <span className={styles['token-tvl__currency']}>
            {`${numberPerDigit(10281296)} $`}
          </span>
          <span className={styles['token-tvl__percents']} >
            {`${numberPerDigit(1028)}%`}
          </span>
        </div>
        <div className={cn(styles['token-item'], styles['token-accounts'])} >
          <span className={styles.icon} >
            <FiUsers />
          </span>
          <span className={styles['token-accounts__text']} >
            {numberPerDigit(123561)}
          </span>
        </div>
          <button className={styles['token-description__button']} onClick={toggleDescription} >
            <strong>{ isHidden ? <FiChevronDown /> : <FiChevronUp /> }</strong>
          </button>
      </div>
      <div className={cn(styles['token-description__text'], {
        [`${styles.hidden}`]: isHidden,
      })}>
          {token.description}
      </div>
    </div>
  )
}

export default TokenListItem;