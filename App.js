import React from 'react';
import {View, Text} from 'react-native';
import CustomBottomSheet from './Calender/CustomBottomsheet';

const Calender = () => {
  return (
    <View
      style={{alignItems: 'center', marginTop: 20, flexDirection: 'column'}}>
      <Text style={{textAlign: 'center', fontSize: 20, fontWeight: 'bold',color:'green'}}>
        Calender
      </Text>
      <View style={{marginTop: 150}}>
        <CustomBottomSheet />
      </View>
    </View>
  );
};

export default Calender;
