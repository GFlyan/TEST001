import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { CaretLeft } from 'phosphor-react-native';

function ReturnButton () {
  return (
    <TouchableOpacity>
        <View style={{borderRadius: 20}}>
            <CaretLeft size={40} weight='bold' color='white' />
       </View>
    </TouchableOpacity>
  )
}
export default ReturnButton;