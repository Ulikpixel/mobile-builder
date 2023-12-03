import React, { FC } from 'react'
import { Stack } from 'expo-router'
import { Text, View } from 'react-native'

const NotFoundScreen: FC = () => (
  <>
    <Stack.Screen options={{ title: 'Oops!' }} />
    <View>
      <Text>This screen doesnt exist.</Text>
    </View>
  </>
)
export default NotFoundScreen
