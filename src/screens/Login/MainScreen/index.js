import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';
import { toSize } from '../../../globalStyle';
import { WithLocalSvg } from 'react-native-svg';
import logo from '../../../icons/logo.svg';
import { FormStyles } from '../../../styles/FormView';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { loginAPI, formCheckAPI, refreshTokenAPI } from '../../../api/Login';
import ToastMessage from '../../../components/Modal/Toast';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RKButton from '../../../components/rk/button';
import RKText from '../../../components/rk/text';

const LoginMainScreen = () => {
  const navigation = useNavigation();
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [failLogin, handelFailLogin] = useState();

  useEffect(() => {
    const checkLogin = refreshTokenAPI();
    if (checkLogin === 1) navigation.navigate('Explore');
  }, []);

  const handleLogin = async () => {
    if (phone != 0 && password != '') {
      setPhone('');
      setPassword('');
      loginAPI(phone, password).then((response) => {
        if (response === 1) {
          formCheckAPI()
            .then((res) => {
              AsyncStorage.setItem(
                'catNumber',
                String(Math.floor(Math.random() * 5)),
              );
              res === 1
                ? navigation.navigate('Explore')
                : navigation.navigate('SignUpScreen');
            })
            .catch((error) => {
              console.log(error);
            });
        } else {
          handelFailLogin(1);
        }
      });
    }
  };

  return (
    <>
      <ToastMessage
        visible={failLogin}
        handleFunction={handelFailLogin}
        title={'Fail'}
        content={'Validation verified'}
        fail
      />

      <View style={styles.fullscreen}>
        <StatusBar style="auto" />
        <View style={styles.container}>
          <WithLocalSvg width={toSize(184)} height={toSize(210)} asset={logo} />
          <View style={styles.loginView}>
            <View
              style={[
                FormStyles.FormInput,
                FormStyles.Row,
                { borderColor: '#C5C6CC', marginBottom: toSize(16) },
              ]}
            >
              <FontAwesome
                name="phone"
                size={toSize(15)}
                color="#8F9098"
                style={{ marginRight: toSize(13) }}
              />
              <TextInput
                onChangeText={setPhone}
                value={phone.toString()}
                maxLength={11}
                keyboardType="number-pad"
                placeholder="Phone Number"
                style={styles.textInput}
              />
            </View>

            <View
              style={[
                FormStyles.FormInput,
                FormStyles.Row,
                { borderColor: '#C5C6CC', marginBottom: toSize(16) },
              ]}
            >
              <MaterialIcons
                name="lock"
                size={toSize(15)}
                color="#8F9098"
                style={{ marginRight: toSize(13) }}
              />
              <TextInput
                onChangeText={setPassword}
                value={password.toString()}
                placeholder="Password"
                secureTextEntry={true}
                style={styles.textInput}
              />
            </View>

            <RKText size={12} color={'#FFCC00'}>
              Forgot password?
            </RKText>

            <RKButton
              text={'Login'}
              onPress={handleLogin}
              style={{ marginVertical: toSize(24) }}
            />

            <View style={[FormStyles.Row, { justifyContent: 'center' }]}>
              <RKText size={12} color={'#71727A'}>
                Not a member?
              </RKText>
              <TouchableOpacity
                activeOpacity={0.8}
                style={{ marginLeft: toSize(4) }}
                onPress={() => navigation.navigate('CreateAccountScreen')}
              >
                <RKText size={12} color={'#FFCC00'}>
                  Register now
                </RKText>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default LoginMainScreen;
