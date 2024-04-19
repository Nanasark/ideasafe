import React from 'react'
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'
import { createBottomTabNavigator }  from '@react-navigation/bottom-tabs';
import Homepage from '../screens/Homepage';
import Writeidea from '../screens/writeidea';
import Verify from '../screens/Verify';
import Profile from '../screens/profile';

const Tab = createBottomTabNavigator();

const MenuTabs= () => {
  return (
   
      <Tab.Navigator 
    
    screenOptions={
      {
        showLabel:false,
        headerShown: false,
        tabBarShowLabel:false,
        tabBarStyle: { position:'absolute', 
        height: 65, 
        backgroundColor:'#061011' ,
        borderColor:'#061011', 
        borderTopLeftRadius:50, 
        borderTopRightRadius:50,
        ...styles.shadow
      },
      style:{
        ...styles.shadow
      }
      
      
      }
      
  }
    
    >
       <Tab.Screen name="Homepage" component={Homepage}
       options={{
          tabBarIcon:({focused}) =>(
              <View className="items-center">
                  <Image className="relative w-[25px] h-[25px]"
                  source={require('../../images/homeicon.png')}
                  resizeMode="contain"
                  style={{
                    tintColor:focused ? "#FAAE3B" : "#FFFFFF",
                  }}
                  />
                  <Text
                   style={{
                    color:focused ? "#FAAE3B" : "#FFFFFF",
                  }}>Home</Text>

              </View>
              
          ),
       }}
       />
       <Tab.Screen name="Writeidea" component={Writeidea}
        options={{
          tabBarIcon:({focused}) =>(
              <View className="items-center">
                  <Image className="relative w-[25px] h-[25px]"
                  source={require('../../images/writeicon.png')}
                  resizeMode="contain"
                  style={{
                    tintColor:focused ? "#FAAE3B" : "#FFFFFF",
                  }}
                  />
                  <Text
                   style={{
                    color:focused ? "#FAAE3B" : "#FFFFFF",
                  }}>WriteIdea</Text>

              </View>
              
          ),
       }}
       />
       <Tab.Screen name="Verify" component={Verify}
       
       options={{
        tabBarIcon:({focused}) =>(
            <View className="items-center">
                <Image className="relative w-[25px] h-[25px]"
                source={require('../../images/verifyicon.png')}
                resizeMode="contain"
                style={{
                  tintColor:focused ? "#FAAE3B" : "#FFFFFF",
                }}
                />
                <Text
                 style={{
                  color:focused ? "#FAAE3B" : "#FFFFFF",
                }}>Verify</Text>

            </View>
            
        ),
     }}
       />
       <Tab.Screen name ="Profile" component={Profile}
        options={{
          tabBarIcon:({focused}) =>(
              <View className="items-center">
                  <Image className="relative w-[25px] h-[25px]"
                  source={require('../../images/profile.png')}
                  resizeMode="contain"
                  style={{
                    tintColor:focused ? "#FAAE3B" : "#FFFFFF",
                  }}
                  />
                  <Text
                   style={{
                    color:focused ? "#FAAE3B" : "#FFFFFF",
                  }}>profile</Text>

              </View>
              
          ),
       }}
       
       />
    </Tab.Navigator>
  
  )

 
}

const styles = StyleSheet.create({
  shadow:{
    shadowColor: 'white',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5
     
  }
});
 

export default MenuTabs