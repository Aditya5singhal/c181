import React from 'react'
import {Image,View}from 'react-native'

const Filter1 = ({
    face:{
        bounds:{
            size:{width: faceWidth,height: faceHeight}
        },
        leftEyePosition,
        RightEyePosition
    }
})=>{
    const glassesWidth=faceWidth
    const glassesHeight=faceHeight/3

    const transformAngle=()=>angleRad *180/Math.PI
    return(
        <View style={{
            position:'absolute',
            left:leftEyePosition.x-glassesWidth*0.675,
            top:leftEyePosition.y-glassesHeight*0.5

        }}>
             <Image 
             source={require('../assets/glasses.png')}
             style={{
                width:glassesWidth,
                height:glassesHeight,
                resizeMode:'contain',
                transform:[{rotate: `${transformAngle()}deg`}]
             }}/>
             </View>
    )
};

export default Filter1