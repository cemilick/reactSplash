import { View, Text, Pressable } from 'react-native'
import React from 'react'

export default function Button(props) {
  return (
    <Pressable onPress={() => props.onPress(true)}>
      <View style={{flexDirection: 'column', alignItems: 'center'}}>      
        <View style={{ 
            backgroundColor: props.color,
            width: props.width,
            height: props.height,
            borderRadius: 10,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            {props.children}
        </View>
        <Text>{props.nama}</Text>
      </View>
    </Pressable>
  )
}