import { CONFIG_STYLES } from 'constants/theme'
import React, { FC } from 'react'
import { FlatList, Text } from 'react-native'
import styled from 'styled-components/native'

interface ListProps {
  data: string[]
}

export const ListIndex = styled.Text`
  color: ${CONFIG_STYLES.colors['organick-dark']};
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
    data={data.map(key => ({ key }))}
    renderItem={({ item, index }) => (
      <ListItem>
        <ListIndex>{index}.</ListIndex>
        <Text>{item.key}</Text>
      </ListItem>
    )}
  />
)

export default List
