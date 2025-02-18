import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import TabBar from '../components/TabBar'

const _layout = () => {
  return (
    <Tabs
        tabBar={props=> <TabBar {...props} />}
    >
        <Tabs.Screen
            name="home"
            options={{
                title: "Home"
            }}
        />
        <Tabs.Screen
            name="tutors"
            options={{
                title: "Tutors"
            }}
        />
        <Tabs.Screen
            name="institutions"
            options={{
                title: "Institutions"
            }}
        />
        <Tabs.Screen
            name="courses"
            options={{
                title: "Courses"
            }}
        />
    </Tabs>
  )
}

export default _layout