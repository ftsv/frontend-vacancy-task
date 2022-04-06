import React from 'react';
import { tokens, categories } from '../../tokens';
import TokenList from '../../components/TokenList/TokenList';

import cn from 'classnames';

const TokensPage: React.FC = () => {
  const [category, setCategory] = React.useState(categories[0]);

  React.useEffect(() => {
    document.title = 'Токены (EverBoard)'
  }, []);

  return (
    <>
      <div className='page-header' >
        <span className='page-header-text' >
          Токены EverScale
        </span>
        <ul className='page-header-filter' >
        { categories.map((item) => (
          <li
            key={item.id}
            className={cn('page-header-filter__item' , {
              'page-header-filter__item--active': item.id === category.id,
            })}
            onClick={() => setCategory(item)}
          >
            {item.title}
          </li>
        ))}
        </ul>
      </div>
      <div className='page-content'>
      <TokenList tokens={tokens} filter={category.id} />
      </div>
    </>
  )
}

export default TokensPage;