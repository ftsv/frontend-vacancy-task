import React from 'react';

const SearchPage = () => {
  React.useEffect(() => {
    document.title = 'Поиск (EverBoard)'
  }, []);

  return (
    <>
      <div className='page-header' >
        <span className='page-header-text' >
          Поиск
        </span>
      </div>
      <div className="page-content">
        <span className='page-no-content' >Тестовое задание не предусматривает реализацию контента здесь.</span>
      </div>
    </>
  )
}

export default SearchPage;