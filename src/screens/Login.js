import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

const data = [
  'Join the club of 10 crore Happy\nTravellers',
  'Book your first international trip\nOn MakeMyTrip',
  'Upto 10% off on your\nFirst Booking',
];

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');

  return (
    <View style={myStyle.container}>
      <Image
        source={require('../images/waterfall.jpg')}
        style={myStyle.backImg}
      />
      <View style={myStyle.blurStyle}>
        <Image
          source={require('../images/MakeMyTrip_Logo.png')}
          style={myStyle.logo}
        />
        <View>
          <FlatList
            pagingEnabled
            horizontal
            showsHorizontalScrollIndicator={false}
            data={data}
            renderItem={({item, index}) => {
              return (
                <View style={{width: Dimensions.get('window').width}}>
                  <Text style={myStyle.title}>{item}</Text>
                </View>
              );
            }}
          />
        </View>
        <View style={{marginLeft: 10, marginTop: 20}}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={data}
            renderItem={({item, index}) => {
              return <View style={myStyle.indicator}></View>;
            }}
          />
        </View>
      </View>
      <View style={myStyle.cardView}>
        <TouchableOpacity style={myStyle.card} disabled={true}>
          <View style={myStyle.innerCardView}>
            <Text style={myStyle.innerCardViewTitle}>
              Use Mobile Number or Email to Login/Signup
            </Text>

            <TextInput
              value={email}
              onChangeText={txt => {
                setEmail(txt);
              }}
              style={myStyle.inputText}
              placeholder="Enter Mobile No./Email"
              placeholderTextColor={'gray'}
            />
            <TouchableOpacity
              style={[
                myStyle.continueBtn,
                {backgroundColor: email == '' ? '#f2f2f2' : '#3385ff'},
              ]}
              onPress={() => {
                email == '' ? '' : navigation.navigate('HomeScreen');
              }}>
              <Text style={{color: 'white', fontSize: 18, fontWeight: '600'}}>
                Continue
              </Text>
            </TouchableOpacity>
            <View style={myStyle.devider}>
              <View style={myStyle.line}></View>
              <Text style={{color: 'gray'}}>or Login/Signup width</Text>
              <View style={myStyle.line}></View>
            </View>
            <TouchableOpacity style={myStyle.googleBtn}>
              <Image
                source={require('../images/google.png')}
                style={myStyle.googleIcon}
              />
              <Text style={myStyle.googleTitle}>Sign in With Google</Text>
            </TouchableOpacity>
            <View style={myStyle.referalView}>
              <Text style={myStyle.ref1}>Have a</Text>
              <Text style={myStyle.ref2}> Referal Code?</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

const myStyle = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'black',
  },
  backImg: {
    width: '100%',
    height: '70%',
  },
  blurStyle: {
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '70%',
    backgroundColor: 'rgba(0,0,0,.5)',
  },
  logo: {
    marginLeft: 20,
    width: 100,
    height: 50,
    resizeMode: 'contain',
    margin: 20,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 800,
    marginLeft: 20,
    marginTop: 40,
    width: '100%',
  },
  cardView: {
    width: '100%',
    marginTop: -250,
    height: 100,
  },
  card: {
    width: '85%',
    //height: 350,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignSelf: 'center',
  },
  innerCardView: {
    width: '100%',
    // height: '100%',
  },
  innerCardViewTitle: {
    alignSelf: 'center',
    marginTop: 20,
    fontSize: 12,
    color: '#000',
    fontSize: 14,
  },
  inputText: {
    width: '90%',
    height: 50,
    borderRadius: 10,
    borderWidth: 2,
    alignSelf: 'center',
    marginTop: 20,
    borderColor: '#3385ff',
    paddingLeft: 20,
    fontSize: 16,
    fontWeight: '600',
    color: 'black',
  },
  continueBtn: {
    width: '90%',
    height: 50,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 20,
  },
  devider: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 30,
  },
  line: {
    width: 60,
    height: 2,
    backgroundColor: '#8e8e8e',
    opacity: 0.3,
    marginLeft: 10,
    marginRight: 10,
  },
  googleBtn: {
    width: '90%',
    height: 50,
    borderWidth: 1,
    flexDirection: 'row',
    borderRadius: 6,
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 30,
  },
  googleIcon: {
    width: 24,
    height: 24,
    marginLeft: 40,
    marginRight: 20,
  },
  googleTitle: {
    fontSize: 18,
    color: '#000',
  },
  referalView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  ref1: {
    color: '#000',
  },
  ref2: {
    color: '#3385ff',
    fontWeight: '700',
  },
  indicator: {
    width: 10,
    height: 5,
    borderRadius: 5,
    backgroundColor: '#fff',
    marginLeft: 20,
  },
});
