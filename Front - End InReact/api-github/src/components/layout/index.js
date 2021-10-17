import React from 'react'

const Layout = ({ children }) => {
  return (
    <div>
      <section>
        <header>Header</header>
        {children}
      </section>
    </div>
  )
}

export default Layout
