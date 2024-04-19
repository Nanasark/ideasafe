import React, {useState} from 'react'
import { View, ImageBackground, Pressable, Text, Image } from 'react-native'


const Signup = ({navigation}) => {

  const [loggedIn, setLoggedIn] = useState(false);

  function PressHandler() {
     setLoggedIn(true);

     if(loggedIn) {
      navigation.navigate('MenuTabs')
     }

  }

    const [theText, setTheText] = useState("Continue With Google");

    const presser = () => {
      setTheText(theText === "haha i made it" ? "hahaha God did it" : "haha i made it");
    };


  return (
  <View className="w-full h-full">
  <ImageBackground
    className="w-full h-full justify-center items-center flex flex-col space-y-4 "
    source={require('../../images/ideasafe.png')}
  >

     <Pressable
       onPress={PressHandler}   
       className=" bg-[#235064] mt-[350px] flex border-[#A16813] border-[2px] text-center rounded-[40px] w-[313px] h-[62px] relative top-10 S items-center justify-center">
      
        <Text className="relative  text-center text-[22px] text-white font-bold">Register</Text>
      </Pressable>
     
      <Pressable
       onPress={presser} 
       className=" flex bg-white border-[#A16813] border-[2px] text-center rounded-[40px] w-[313px] h-[62px] relative top-10 S items-center justify-center">
        <Image className="left-[-90px] top-[10px] items w-[30px] h-[40px] relative"
          source={require('../../images/google.png')}
        /> 
        <Text className="relative bottom-[20px] left-[10px] text-center text-[18px] font-bold">{theText}</Text>
      </Pressable>
      <Text className="relative top-10 text-[18px] ">
        Already have an account? <Text className="text-[#A16813]">Login</Text>
      </Text>
    </ImageBackground>
     
  </View>
  )
}

export default Signup;