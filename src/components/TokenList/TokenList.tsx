import React from 'react';
import IToken from '../../models/IToken';
import { categories } from '../../tokens';
import TokenListItem from '../TokenListItem/TokenListItem';

import styles from './TokenList.module.scss'

interface TokenListProps {
  tokens: IToken[];
  filter: string;
}

const TokenList: React.FC<TokenListProps> = (props) => {
  const { tokens, filter } = props;

  return (
      <div className={styles.tokens}>
        {tokens.map((token, i) => {
          if (filter !== categories[0].id ) {
            return token.categories.includes(filter.toLowerCase()) ? <TokenListItem token={token} key={token.address} index={i} /> : '';
          }
          return <TokenListItem token={token} key={token.address} index={i} />;
        }
        )}
      </div>
  )
}

export default TokenList;