import React from 'react'
import * as S from './styled'
import useGithub from '../../hooks/github-hooks'

const Profile = () => {
  const { githubState } = useGithub()

  return (
    <S.Wrapper>
      <S.WrapperImage
        src="https://avatars.githubusercontent.com/u/86615648?s=400&u=980ffac95cb49e7a7cc9af22ba718071be8b4ec7&v=4"
        alt="Avatar of user"
      />
      <S.WrapperInfoUser>
        <div>
          <h1>{githubState.user.name}</h1>
          <S.WrapperUserName>
            <h3>UserName</h3>
            <a
              href={githubState.user.html_url}
              target="_blank"
              rel="noreferrer"
            >
              {githubState.user.login}
            </a>
          </S.WrapperUserName>
        </div>
        <S.WrapperStatusCount>
          <div>
            <h4>Fllowers</h4>
            <span>{githubState.user.followers}</span>
          </div>
          <div>
            <h4>Followings</h4>
            <span>{githubState.user.following}</span>
          </div>
          <div>
            <h4>Gists</h4>
            <span>{githubState.user.public_gists}</span>
          </div>
          <div>
            <h4>Repos</h4>
            <span>{githubState.user.public_repos}</span>
          </div>
        </S.WrapperStatusCount>
      </S.WrapperInfoUser>
    </S.Wrapper>
  )
}

export default Profile
