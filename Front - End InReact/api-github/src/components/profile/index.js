import React from 'react'
import * as S from './styled'

const Profile = () => {
  return (
    <S.Wrapper>
      <S.WrapperImage
        src="https://avatars.githubusercontent.com/u/86615648?s=400&u=980ffac95cb49e7a7cc9af22ba718071be8b4ec7&v=4"
        alt="Avatar of user"
      />
      <S.WrapperInfoUser>
        <div>
          <h1>Rafael Santos</h1>
          <S.WrapperUserName>
            <h3>UserName</h3>
            <a
              href="https://github.com/Whazys/Eduzz-Dio/tree/main/Front%20-%20End%20InReact/api-github"
              target="_blank"
              rel="noreferrer"
            >
              Whazys
            </a>
          </S.WrapperUserName>
        </div>
        <S.WrapperStatusCount>
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
        </S.WrapperStatusCount>
      </S.WrapperInfoUser>
    </S.Wrapper>
  )
}

export default Profile
