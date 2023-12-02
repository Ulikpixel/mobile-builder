import React, { FC } from 'react'
import { Link, Stack } from 'expo-router'
import { Text, View } from 'react-native'

const NotFoundScreen: FC = () => (
  <>
    <Stack.Screen options={{ title: 'Oops!' }} />
    <View>
      <Text>This screen doesnt exist.</Text>
      <Link href="/">
        <Text>Go to home screen!</Text>
      </Link>
    </View>
  </>
)
export default NotFoundScreen
