import React from 'react'
import Layout from './components/layout'

function App() {
  return (
    <main>
      <Layout>
        <div>
          <img
            source="https://github.com/images/error/octocat_happy.gif"
            alt="Avatar of user"
          />
          <h1>Rafael Santos</h1>
          <h3>Username: </h3>
          <span>Whazys</span>
          <div>
            <div>
              <h4>Followers</h4>
              <span>5</span>
            </div>
            <div>
              <h4>Starreds</h4>
              <span>5</span>
            </div>
            <div>
              <h4>Followings</h4>
              <span>5</span>
            </div>
          </div>
        </div>
        <div>Repositories</div>
        <div>Starreds</div>
      </Layout>
    </main>
  )
}

export default App
