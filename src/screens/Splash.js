import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {CommonActions, useNavigation} from '@react-navigation/native';

export default function Splash() {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name: 'Home'}],
        }),
      );
    }, 3000);
  }, []);

  return (
    <View>
      <Text>Splash</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
