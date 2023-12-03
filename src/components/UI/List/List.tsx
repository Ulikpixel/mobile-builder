import React, { FC } from 'react'
import { FlatList, Text } from 'react-native'
import styled from 'styled-components/native'
import { ITheme } from '../../../types/theme'

interface ListProps {
  data: {
    key: string
  }[]
}

export const ListIndex = styled.Text<ITheme>`
  color: ${props => props.theme.colors['organick-dark']};
  font-size: 14px;
  line-height: 20px;
`

ListIndex.defaultProps = {
  style: {
    fontFamily: 'open-sans-bold',
  },
}

export const ListItem = styled.View`
  display: flex;
  gap: 3px;
  flex-direction: row;
  margin-bottom: 10px;
  align-items: center;
`

const List: FC<ListProps> = ({ data }) => (
  <FlatList
    data={data}
    renderItem={({ item, index }) => (
      <ListItem>
        <p>hello</p>
        <ListIndex>{index}.</ListIndex>
        <Text>{item.key}</Text>
      </ListItem>
    )}
  />
)

export default List
