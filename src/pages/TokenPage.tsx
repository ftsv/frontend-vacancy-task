import React from 'react';
import { useLocation } from 'react-router-dom';
import IToken from '../models/IToken';
import { tokens } from '../tokens';

const TokenPage = () => {
  const location = useLocation();
  const [token, setToken] = React.useState<IToken | null>(null)
  
  React.useEffect(() => {
    const tokenAddress = location.pathname.split('/')[2];
    const index = tokens.filter((a) => a.address === tokenAddress)[0];
    setToken((prev) => index ? index : prev);
    
  }, [location])

  return (
    <>
      <div className='page-header' >
        <span className='page-header-text' >
          {token?.name}
        </span>
      </div>
      <div className="page-content">
        <span className='page-no-content' >Тестовое задание не предусматривает реализацию контента здесь.</span>
      </div>
    </>
  )
}

export default TokenPage;