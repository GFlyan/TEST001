import { View, TouchableOpacity } from 'react-native'
import React from 'react'
import { DotsThree } from 'phosphor-react-native';

function InfoButton () {
    return (
        <TouchableOpacity>
            <View style={{borderRadius: 20}}>
                <DotsThree size={40} weight='bold' color='white'/>
            </View>
      </TouchableOpacity>
    )
}
export default InfoButton;

