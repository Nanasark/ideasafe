import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput,Pressable} from 'react-native';

export default function Writeidea(){
    const [title, setTitle] =useState("")
    const [content,setContent] =useState("")
   
    return(
        <View className="bg-[#0E2C33] w-full h-full text-white justify-center  items-center ">


        <View className="h-[100px] text-justify p-2 w-[300px] bg-white border-2 border-[#FAAE3B] rounded-[5px]">
            <View className="w-[300px] h-[30px]">
                <Text>Idea Title </Text>
            </View>
                    <TextInput 
                    multiline
                    editable
                    value={(value)=> setTitle(value)}
                    />
            </View>

            <View className="h-[250px] text-justify p-2 w-[300px] bg-white border-2 border-[#FAAE3B] rounded-[5px]">

            <View className="w-[300px] h-[30px]">
                <Text>Idea Content</Text>
            </View>
                    <TextInput 
                    multiline
                    editable
                    value={(value) => setContent(value)}
                    />
            </View>

            <Pressable
        
       className=" bg-[#235064] mt-[350px] flex border-[#A16813] border-[2px] text-center rounded-[40px] w-[313px] h-[62px] relative top-10 S items-center justify-center">
      
        <Text className="relative  text-center text-[22px] text-white font-bold">Save</Text>
      </Pressable>
           
            <Text className="text-white"> Write </Text>
        </View>
    )

}

