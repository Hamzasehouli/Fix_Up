import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Colors, Fonts} from '../constants';
import {StackActions, useNavigation} from '@react-navigation/native';

const Btn = ({children, navigation}) => {
  return (
    <TouchableOpacity
      onPress={navigation}
      style={{
        width: 200,
        alignItems: 'center',
        backgroundColor: Colors.Light,
        paddingVertical: 12,
        marginTop: 15,
        borderRadius: 100,
      }}>
      <Text
        style={{
          color: Colors.Primary,
          fontSize: 30,
          fontFamily: Fonts.EC_Bold,
        }}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default Btn;

const styles = StyleSheet.create({});
