import { View, Text, Image } from 'react-native'
import { Tabs, Redirect } from 'expo-router'
import { icons } from '../../constants'

const TabIcon = ({ icon, color, name, focused}) => {
  return (
    <View className = "items-center justify-center gap-0">
      <Image 
      source={icon}
      resizeMode= "contain"
      tintColor={color}
      className = "w-7 h-7"
      />
      <Text className = {`${focused ? 'font-semibold' : 'font-pregular'} text-xs`} style = {{color:color}}>{name}</Text>
    </View>
  )
}


const TabsLayout = () => {
  return (
    <>
      <Tabs 
      screenOptions={{

        tabBarShowLabel: false,
        tabBarActiveTintColor: '#7EA9FE',
        tabBarHideOnKeyboard: 'true',
        tabBarStyle: {
          backgroundColor: '#FFFFFF',
         height: 47,
         position: 'absolute',
         bottom: 16,
         right: 14,
         left: 14,
         borderRadius: 30,
         marginHorizontal: 20,
        },
      }}>
       

        <Tabs.Screen 
        name= "home"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon 
              icon = {icons.home}
              color = {color}
              name = "Home"
              focused = {focused}
            />
          )
        }}
        />

                  
          <Tabs.Screen 
                  name= "create"
                  options={{
                    title: 'Create',
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                      <TabIcon 
                        icon = {icons.plus}
                        color = {color}
                        name = "Publish"
                        focused = {focused}
                      />
                    )
                  }}
                  />


                          
                <Tabs.Screen 
                name= "bookmark"
                options={{
                  title: 'Bookmark',
                  headerShown: false,
                  href: null,
                  tabBarIcon: ({ color, focused }) => (
                    <TabIcon 
                      icon = {icons.bookmark}
                      color = {color}
                      name = "Your Apps"
                      focused = {focused}
                    />
                  )
                }}
                />

        
              <Tabs.Screen 
                      name= "profile"
                      options={{
                        title: 'Profile',
                        headerShown: false,
                        href: null,
                        tabBarIcon: ({ color, focused }) => (
                          <TabIcon 
                            icon = {icons.profile}
                            color = {color}
                            name = "Profile"
                            focused = {focused}
                          />
                        )
                      }}
                      />

                <Tabs.Screen 
                      name= "community"
                      options={{
                        title: 'Community',
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                          <TabIcon 
                            icon = {icons.community}
                            color = {color}
                            name = "Community"
                            focused = {focused}
                          />
                        )
                      }}
                      />
      </Tabs>
    </>
  )
}

export default TabsLayout