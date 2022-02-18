import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  Colors,
  Fonts,
  Electrician,
  Icone4,
  IconeThree,
  Plumber,
} from '../constants';
import {Displayer} from '../utils';

const {setWidth, setHeight} = Displayer;
const allServices = [
  {ID: 0, Name: 'Text', Icon: Electrician},
  {ID: 1, Name: 'Text', Icon: Icone4},
  {ID: 2, Name: 'Text', Icon: IconeThree},
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
                        translateY: Service.ID == 0 || Service.ID == 3 ? 70 : 0,
                      },
                    ],
                  },
                ]}>
                <View>
                  <Service.Icon />
                </View>
              </View>
            );
          })}
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
    flexDirection: 'row',
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
});
