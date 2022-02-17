import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {Displayer} from '../utils';
import {Colors, Waves, Images} from '../constants';

const {setWidth, setHeight} = Displayer;
const logoSize = 35;
const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      <View style={styles.Header}>
        <Image
          resizeMode="contain"
          source={Images.Logo}
          style={[
            styles.Img,
            {
              ...StyleSheet.absoluteFillObject,
              left: setWidth(50) - setWidth(logoSize) / 2,
            },
          ]}
        />
      </View>
      <View style={{...StyleSheet.absoluteFillObject}}>
        <Waves />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff'},
  Header: {
    width: setWidth(100),
    height: setHeight(20),
    backgroundColor: Colors.Primary,
  },
  Img: {
    width: setWidth(logoSize),
    height: setWidth(logoSize),
  },
});
