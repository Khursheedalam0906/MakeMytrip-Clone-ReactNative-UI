import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import MyTrips from '../tabs/MyTrips';
import WhereToGo from '../tabs/WhereToGo';
import TripMoney from '../tabs/TripMoney';
import BeAHost from '../tabs/BeAHost';
import Home from '../tabs/Home';

const HomeScreen = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <View style={{flex: 1}}>
      {selectedTab == 0 ? (
        <Home />
      ) : selectedTab == 1 ? (
        <MyTrips />
      ) : selectedTab == 2 ? (
        <WhereToGo />
      ) : selectedTab == 3 ? (
        <TripMoney />
      ) : selectedTab == 4 ? (
        <BeAHost />
      ) : null}
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#000',
          height: 70,
          position: 'absolute',
          bottom: 0,
          width: '100%',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={{
            width: '20%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            setSelectedTab(0);
          }}>
          <Text
            style={{
              color: selectedTab == 0 ? '#0381ff' : '#8e8e8e',
              fontSize: 17,
              fontStyle: 'italic',
              fontWeight: '800',
            }}>
            My
          </Text>
          <Text
            style={{
              color: selectedTab == 0 ? '#0381ff' : '#8e8e8e',
              fontSize: 13,
              borderBottomWidth: selectedTab == 0 ? 2 : 0,
              borderBottomColor: '#0381ff',
            }}>
            Home
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: '20%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            setSelectedTab(1);
          }}>
          <Image
            source={require('../images/trips.png')}
            style={{
              width: 22,
              height: 22,
              tintColor: selectedTab == 1 ? '#0381ff' : '#8e8e8e',
              marginBottom: 3,
            }}
          />
          <Text
            style={{
              color: selectedTab == 1 ? '#0381ff' : '#8e8e8e',
              fontSize: 13,
              borderBottomWidth: selectedTab == 1 ? 2 : 0,
              borderBottomColor: '#0381ff',
            }}>
            My Trips
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: '20%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            setSelectedTab(2);
          }}>
          <Image
            source={require('../images/earth.png')}
            style={{
              width: 22,
              height: 22,
              tintColor: selectedTab == 2 ? '#0381ff' : '#8e8e8e',
              marginBottom: 3,
            }}
          />
          <Text
            style={{
              color: selectedTab == 2 ? '#0381ff' : '#8e8e8e',
              fontSize: 13,
              borderBottomWidth: selectedTab == 2 ? 2 : 0,
              borderBottomColor: '#0381ff',
            }}>
            WhereToGo
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: '20%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            setSelectedTab(3);
          }}>
          <Image
            source={require('../images/money.png')}
            style={{
              width: 22,
              height: 22,
              tintColor: selectedTab == 3 ? '#0381ff' : '#8e8e8e',
              marginBottom: 3,
            }}
          />
          <Text
            style={{
              color: selectedTab == 3 ? '#0381ff' : '#8e8e8e',
              fontSize: 13,
              borderBottomWidth: selectedTab == 3 ? 2 : 0,
              borderBottomColor: '#0381ff',
            }}>
            Trip Money
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: '20%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            setSelectedTab(4);
          }}>
          <Image
            source={require('../images/home.png')}
            style={{
              width: 22,
              height: 22,
              tintColor: selectedTab == 4 ? '#0381ff' : '#8e8e8e',
              marginBottom: 3,
            }}
          />
          <Text
            style={{
              color: selectedTab == 4 ? '#0381ff' : '#8e8e8e',
              fontSize: 13,
              borderBottomWidth: selectedTab == 4 ? 2 : 0,
              borderBottomColor: '#0381ff',
            }}>
            Be A Host
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
