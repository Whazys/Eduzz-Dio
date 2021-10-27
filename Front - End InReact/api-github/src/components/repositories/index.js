import React from 'react'
import RepositoryItem from '../repository-item'
import * as S from './styled'

const Repositories = () => {
  return (
    <S.WrapperTabs
      selectedTabClassName="is-selected"
      selectedTabPanelClassName="is-selected"
    >
      <S.WrapperTabList>
        <S.WrapperTab>Repositories</S.WrapperTab>
        <S.WrapperTab>Starred</S.WrapperTab>
      </S.WrapperTabList>
      <S.WrapperTabPanel>
        <RepositoryItem
          name="repo 1"
          linkToRepo="https://github.com/Whazys/Eduzz-Dio"
          fullName="Whazys/Eduzz-Dio"
        />
      </S.WrapperTabPanel>
      <S.WrapperTabPanel>
        <RepositoryItem
          name="repo 2"
          linkToRepo="https://github.com/Whazys/Eduzz-Dio/tree/main/Front%20-%20End%20InReact/api-github"
          fullName="https://github.com/Whazys"
        />
      </S.WrapperTabPanel>
    </S.WrapperTabs>
  )
}

export default Repositories
