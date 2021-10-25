import React from 'react'
import Layout from './components/layout'
import Profile from './components/profile'
import { ResetCSS } from './global/resetCss'

const App = () => {
  return (
    <main>
      <ResetCSS />
      <Layout>
        <Profile />
        <div>Reporitoreis</div>
        <div>Starreds</div>
      </Layout>
    </main>
  )
}
export default App
