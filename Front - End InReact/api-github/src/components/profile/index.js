import React from 'react'
import * as S from './styled'

const Profile = () => {
  return (
    <S.Wrapper>
      <div>
        <img
          src="https://avatars.githubusercontent.com/u/86615648?s=400&u=980ffac95cb49e7a7cc9af22ba718071be8b4ec7&v=4"
          alt="Avatar of user"
        />
        <h1>Rafael Santos</h1>
        <h3>UserName</h3>
        <span>Whazys</span>
        <div>
          <div>
            <h4>Fllowers</h4>
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
    </S.Wrapper>
  )
}

export default Profile
