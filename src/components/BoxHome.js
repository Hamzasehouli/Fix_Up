import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Displayer} from '../utils';
import {Colors, Fonts} from '../constants';
const {setWidth, setHeight} = Displayer;

const BoxHome = ({children}) => {
  return (
    <View
      style={{
        width: setWidth(90),
        backgroundColor: Colors.Primary,
        marginVertical: 15,
        borderRadius: 12,
        paddingHorizontal: 15,
        paddingVertical: 20,
      }}>
      <Text
        style={{
          color: Colors.Secondary,
          fontFamily: Fonts.EC_Bold,
          fontSize: 20,
        }}>
        {children}
      </Text>
    </View>
  );
};

export default BoxHome;

const styles = StyleSheet.create({});
