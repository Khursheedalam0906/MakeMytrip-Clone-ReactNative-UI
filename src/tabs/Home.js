import {
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Text,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import Demo from '../screens/Demo';

const Home = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <View style={{flex: 1}}>
      <View>
        <Image
          source={require('../images/sunset.jpg')}
          style={{height: 120, width: '100%'}}
        />
        <View
          style={{flexDirection: 'row', position: 'absolute', marginTop: 20}}>
          <Image
            source={require('../images/hamburger.png')}
            style={{
              width: 30,
              height: 30,
              marginHorizontal: 20,
              tintColor: '#fff',
            }}
          />
          <Image
            source={require('../images/myTrip.jpg')}
            style={{width: 35, height: 35, borderRadius: 25}}
          />
        </View>
        <Demo />
      </View>
      <View style={{width: '100%', height: 1000, marginTop: 50}}>
        <TouchableOpacity
          style={{
            marginTop: 70,
            width: '90%',
            alignSelf: 'center',
            borderRadius: 10,
            height: 150,
            backgroundColor: '#fff',
          }}>
          <View style={{width: '100%', height: '100%', borderRadius: 10}}>
            <View
              style={{
                width: '100%',
                height: '50%',
                flexDirection: 'row',
              }}>
              <TouchableOpacity
                style={{
                  width: '25%',
                  height: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={require('../images/car.png')}
                  style={{width: 30, height: 30, tintColor: 'blue'}}
                />
                <Text style={{color: '#000'}}>Airports Cabs</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: '25%',
                  height: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={require('../images/homestays.png')}
                  style={{width: 30, height: 30}}
                />
                <Text style={{color: '#000'}}>Homestays</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: '25%',
                  height: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={require('../images/outstation-cabs.png')}
                  style={{width: 30, height: 30}}
                />
                <Text style={{color: '#000'}}>OutStation Cabs</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: '25%',
                  height: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={require('../images/activity&tours.png')}
                  style={{width: 30, height: 30}}
                />
                <Text style={{color: '#000'}}>Activity & Tours</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                width: '100%',
                height: '50%',
                flexDirection: 'row',
              }}>
              <TouchableOpacity
                style={{
                  width: '25%',
                  height: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={require('../images/gift-card.png')}
                  style={{width: 30, height: 30, tintColor: 'blue'}}
                />
                <Text style={{color: '#000'}}>Gift Cards</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: '25%',
                  height: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={require('../images/nearby-gateways.png')}
                  style={{width: 30, height: 30}}
                />
                <Text style={{color: '#000'}}>nearby gateways</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: '25%',
                  height: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={require('../images/trainsPNR.png')}
                  style={{width: 30, height: 30}}
                />
                <Text style={{color: '#000'}}>Trains PNR status</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: '25%',
                  height: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={require('../images/forex.png')}
                  style={{width: 30, height: 30}}
                />
                <Text style={{color: '#000'}}>Forex</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 20,
            marginVertical: 25,
          }}>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('../images/discount.png')}
              style={{
                width: 30,
                height: 30,
                backgroundColor: 'purple',
                tintColor: '#fff',
                borderRadius: 50,
              }}
            />
            <Text
              style={{
                fontSize: 20,
                fontWeight: 800,
                marginLeft: 10,
                color: 'purple',
              }}>
              Offers
            </Text>
          </View>
          <Text style={{fontWeight: 800, fontSize: 20, color: 'purple'}}>
            View All
          </Text>
        </View>
        <View style={{marginTop: 5}}>
          <FlatList
            data={[
              'Trending',
              'Flights',
              'Hotels',
              'Homestays',
              'Trains',
              'Holidays',
              'Cabs',
              'Buses',
              'Activities',
            ]}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => {
              return (
                <View
                  style={{
                    height: 50,
                    marginLeft: 20,
                    borderBottomWidth: selectedIndex == index ? 3 : 0,
                    borderBottomColor: '#4da0ff',
                  }}>
                  <TouchableOpacity
                    style={{
                      height: 40,
                      borderWidth: 1,
                      borderColor: '#8e8e8e',
                      borderRadius: 5,
                      justifyContent: 'center',
                      alignItems: 'center',
                      paddingLeft: 10,
                      paddingRight: 10,
                      backgroundColor:
                        selectedIndex == index ? '#4da0ff' : '#fff',
                    }}
                    onPress={() => {
                      setSelectedIndex(index);
                    }}>
                    <Text
                      style={{
                        color: selectedIndex == index ? '#fff' : '#000',
                        fontWeight: '600',
                      }}>
                      {item}
                    </Text>
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        </View>

        <View style={{marginTop: 20}}>
          <FlatList
            data={[
              'Trending',
              'Flights',
              'Hotels',
              'Homestays',
              'Trains',
              'Holidays',
              'Cabs',
              'Buses',
              'Activities',
            ]}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => {
              return (
                <View
                  style={{
                    width: 200,
                    marginLeft: 20,
                  }}>
                  <Image
                    source={require('../images/bus_banner.jpg')}
                    style={{width: '100%', height: 120, borderRadius: 10}}
                  />
                </View>
              );
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default Home;
