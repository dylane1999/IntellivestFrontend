import React from 'react'
import { Button, View } from 'react-native'

interface Props {
    
}

const WelcomePage = (props: Props) => {
    return (
        <View>
        <Button
        title="Increase enthusiasm"
        accessibilityLabel="increment"
        onPress={()=> console.log("pressed")}
        color="blue"
      />
        </View>
    )
}

export default WelcomePage
