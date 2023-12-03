import List from 'components/UI/List/List'
import React, { FC } from 'react'
import { Text, View } from 'react-native'

const Home: FC = () => (
  <View>
    <Text>Home</Text>
    <List data={['one', 'two', 'three']} />
  </View>
)

export default Home
