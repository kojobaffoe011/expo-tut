import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from "expo-router";


export default function TabsLayout() {
  return <Tabs
  screenOptions={{
    tabBarActiveTintColor: '#ffd33d',
    headerStyle: {
      backgroundColor: '#25292e',
    },
    headerShadowVisible: false,
    headerTintColor: '#fff',
    tabBarStyle: {
      backgroundColor: '#25292e',
    },
  }}
  >
    <Tabs.Screen  name="index" options={{
      title: 'Home',
   
      headerLeft: () => <></>,
      tabBarIcon: ({ color, focused }) => (
        <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
      )
    }}/>
    <Tabs.Screen  name="about"         
        options={{
          title: 'About',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'information-circle' : 'information-circle-outline'} color={color} size={24}/>
          ),
        }}
/>

  </Tabs>;
}
