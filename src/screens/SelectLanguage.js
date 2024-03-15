import {View, Text, Dimensions, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

const {height, width} = Dimensions.get('window');

const SelectLanguage = () => {
  const navigation = useNavigation();

  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <View style={{flex: 1}}>
      <Image
        source={require('../images/bg-img.jpg')}
        style={{width: '100%', height: height / 1.5}}
      />
      <View
        style={{
          flex: 1,
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          backgroundColor: 'rgba(0,0,0,.5)',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 10,
          }}>
          <Image
            source={require('../images/MakeMyTrip_Logo.png')}
            style={{
              width: 100,
              height: 40,
              resizeMode: 'contain',
              marginLeft: 20,
            }}
          />
          <Text style={{marginRight: 20, color: '#fff', fontSize: 18}}>
            SKIP
          </Text>
        </View>
        <View
          style={{width: '100%', height: 500, position: 'absolute', bottom: 0}}>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('../images/languages.png')}
              style={{width: 30, height: 30, marginLeft: 20}}
            />
            <Text
              style={{
                color: '#fff',
                fontSize: 20,
                fontWeight: '600',
                marginLeft: 20,
              }}>
              Welcome
            </Text>
          </View>
          <Text
            style={{
              fontSize: 24,
              fontWeight: '700',
              color: '#fff',
              marginLeft: 20,
              marginTop: 10,
            }}>
            Select Languages
          </Text>
          <Text
            style={{
              fontSize: 16,
              width: '90%',
              color: '#fff',
              marginLeft: 20,
              marginTop: 10,
            }}>
            You can also change your Language in app Setting after signing in
          </Text>
          <TouchableOpacity
            disabled={true}
            style={{
              backgroundColor: '#fff',
              width: '90%',
              alignItems: 'center',
              height: 300,
              borderRadius: 5,
              alignSelf: 'center',
              marginTop: 15,
            }}>
            <TouchableOpacity
              style={{
                width: '90%',
                height: 50,
                borderRadius: 6,
                borderWidth: 0.5,
                borderColor: selectedTab == 0 ? '#3385ff' : '#8e8e8e',
                backgroundColor: selectedTab == 0 ? '#e6f0ff' : '#fff',
                alignSelf: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: 30,
              }}
              onPress={() => {
                setSelectedTab(0);
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image
                  source={
                    selectedTab == 0
                      ? require('../images/selected.png')
                      : require('../images/non-selected.png')
                  }
                  style={{
                    width: 24,
                    height: 24,
                    marginLeft: 10,
                    tintColor: '#3385ff',
                  }}
                />
                <Text
                  style={{
                    marginLeft: 10,
                    fontSize: 16,
                    color: selectedTab == 0 ? 'black' : 'gray',
                  }}>
                  English
                </Text>
              </View>
              <Text style={{marginRight: 20, fontSize: 20}}>A</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: '90%',
                height: 50,
                borderRadius: 6,
                borderWidth: 0.5,
                borderColor: selectedTab == 1 ? '#3385ff' : '#8e8e8e',
                backgroundColor: selectedTab == 1 ? '#e6f0ff' : '#fff',
                alignSelf: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: 20,
              }}
              onPress={() => {
                setSelectedTab(1);
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image
                  source={
                    selectedTab == 1
                      ? require('../images/selected.png')
                      : require('../images/non-selected.png')
                  }
                  style={{
                    width: 24,
                    height: 24,
                    marginLeft: 10,
                    tintColor: '#3385ff',
                  }}
                />
                <Text
                  style={{
                    marginLeft: 10,
                    fontSize: 16,
                    color: selectedTab == 1 ? '#000' : 'gray',
                  }}>
                  हिंदी
                </Text>
              </View>
              <Text style={{marginRight: 20, fontSize: 20}}>क</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: '90%',
                height: 50,
                borderRadius: 6,
                backgroundColor: '#3385ff',
                alignSelf: 'center',
                marginTop: 45,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => {
                navigation.navigate('Login');
              }}>
              <Text style={{color: '#fff', fontSize: 18}}>Continuous</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SelectLanguage;
