import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {Displayer} from '../utils';
import {Colors, Waves, Images, Fonts} from '../constants';
import {Box, Btn} from '../components';
import {CommonActions} from '@react-navigation/native';

const {setWidth, setHeight} = Displayer;
const logoSize = 35;

const HomeScreen = ({navigation}) => {
  const toServicesScreen = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: 'Services'}],
      }),
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={Colors.Primary} barStyle={'dark-content'} />
      {/* Header */}
      <View style={{...StyleSheet.absoluteFillObject}}>
        <Waves />
      </View>
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

      {/* Header End */}

      {/* Body */}
      <ScrollView>
        <View style={{marginTop: setHeight(15), alignItems: 'center'}}>
          <Text
            style={{
              width: setWidth(90),
              textAlign: 'center',
              fontFamily: Fonts.EC_Bold,
              fontSize: 22,
              color: '#000',
              marginBottom: 15,
            }}>
            Lorem ipsum dolor sit amet,cons ectetur adipiscing elit.{' '}
          </Text>
          <Box> - Lorem ipsum dolor sit amet. </Box>
          <Box> - Lorem ipsum dolor sit amet. </Box>
          <Box> - Lorem ipsum dolor sit amet. </Box>
          <Btn navigation={toServicesScreen}>Next</Btn>
        </View>
      </ScrollView>
      {/* End Body */}
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff'},
  Header: {
    width: setWidth(100),
    height: setHeight(18),
    backgroundColor: Colors.Primary,
  },
  Img: {
    width: setWidth(logoSize),
    height: setWidth(logoSize),
  },
});
