import {Image, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors, Fonts, Images} from '../constants';
import {Displayer} from '../utils';
const {Plumber, Electrician, RGB_AI, Fii} = Images;
const {setWidth, setHeight} = Displayer;
const allServices = [
  {ID: 0, Name: 'Text', Icon: Electrician},
  {ID: 1, Name: 'Text', Icon: RGB_AI},
  {ID: 2, Name: 'Text', Icon: Fii},
  {ID: 3, Name: 'Text', Icon: Plumber},
];

const ServicesScreen = ({navigation}) => {
  return (
    <>
      <StatusBar backgroundColor={Colors.Primary} />
      <View style={styles.Container}>
        <View style={styles.Header}>
          <Text
            style={{
              color: Colors.Primary,
              fontSize: 34,
              fontFamily: Fonts.EC_Bold,
            }}>
            أصلح منزلك بسرعة و نجاعة
          </Text>
        </View>
        <View style={styles.Services}>
          <View style={{flexDirection: 'row'}}>
            {allServices.map(Service => {
              return (
                <View
                  key={Service.ID}
                  style={[
                    styles.Cir,
                    {
                      marginHorizontal:
                        Service.ID == 0 || Service.ID == 3 ? 0 : setWidth(2.5),
                      transform: [
                        {
                          translateY:
                            Service.ID == 0 || Service.ID == 3 ? 70 : 0,
                        },
                      ],
                    },
                  ]}>
                  <View>
                    <Image
                      source={Service.Icon}
                      style={{resizeMode: 'contain', height: 60, width: 60}}
                    />
                  </View>
                </View>
              );
            })}
          </View>
          <View style={styles.Builder}></View>
        </View>
      </View>
    </>
  );
};

export default ServicesScreen;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: Colors.Secondary,
  },
  Header: {
    alignItems: 'center',
    marginVertical: 30,
  },
  Services: {
    backgroundColor: Colors.Light,
    height: setHeight(55),
    width: setWidth(100),
    marginVertical: 20,

    paddingHorizontal: setWidth(5),
  },
  Cir: {
    width: setWidth(20),
    height: setWidth(20),
    backgroundColor: Colors.Primary,
    borderRadius: setWidth(20) / 2,

    alignItems: 'center',
    justifyContent: 'center',
  },
  Builder: {},
});
