import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const Demo = () => {
  return (
    <View style={Styles.container}>
      <View style={Styles.box}>
        <TouchableOpacity style={[Styles.box2, {borderRightWidth: 0.5}]}>
          <Image
            source={require('../images/flights.png')}
            style={{height: 40, width: 40}}
          />
          <Text style={{fontSize: 16, fontWeight: 'bold', color: '#000'}}>
            Flights
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={[Styles.box2, {borderRightWidth: 0.5}]}>
          <Image
            source={require('../images/hotels.png')}
            style={{height: 40, width: 40}}
          />
          <Text style={{fontSize: 16, fontWeight: 'bold', color: '#000'}}>
            Hotels
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={[Styles.box2, {borderRightWidth: 0.5}]}>
          <Image
            source={require('../images/buses.png')}
            style={{height: 40, width: 40}}
          />
          <Text style={{fontSize: 16, fontWeight: 'bold', color: '#000'}}>
            Buses
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={Styles.box2}>
          <Image
            source={require('../images/holidays.png')}
            style={{height: 40, width: 40}}
          />
          <Text style={{fontSize: 16, fontWeight: 'bold', color: '#000'}}>
            Holidays
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: -50,
  },
  box: {
    width: '90%',
    height: 80,
    backgroundColor: '#fff',
    marginTop: 20,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderRadius: 10,
  },
  box2: {
    width: '25%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Demo;
