import { Text } from 'react-native'
import React from 'react'

const Poppins = ({type = "Regular", children}) => {
    return (
        <Text style={{fontFamily: `Poppins-${type}`}}>{children}</Text>
    )
}

export default Poppins;