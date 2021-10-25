import React from 'react'
import * as S from './styled'

const Layout = ({ children }) => {
  return (
    <div>
      <S.WrapperLayout>
        <header>Header</header>
        {children}
      </S.WrapperLayout>
    </div>
  )
}

export default Layout
