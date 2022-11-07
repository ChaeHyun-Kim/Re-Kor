import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { FormStyles } from '../../../styles/FormView';
import { phoneCheckAPI } from '../../../api/Login';
import { toSize } from '../../../globalStyle';
import ToastMessage from '../../../components/Modal/Toast';
import SignupModal from '../../../components/Modal/SignupModal';
import Header from '../../../components/MyHeader';
import RKButton from '../../../components/rk/button';
import RKText from '../../../components/rk/text';

export default function CreateAccountScreen() {
  const navigation = useNavigation();
  const [phone, setChangePhone] = useState('');
  const [password, setPassword] = useState('');
  const [btn, setBtn] = useState(false);
  const [checkPW, setCheckPW] = useState('');

  const [confirmCheckPhone, setConfirmCheckPhone] = useState(false);
  const [confirmCheckPW, setConfirmCheckPW] = useState(0);
  const [confirmCheck, setConfirmCheck] = useState(0);
  const [checkTerm, setCheckTerm] = useState(false);

  useEffect(() => {
    confirmCheckPhone && setConfirmCheckPhone(false);
  }, [phone]);

  useEffect(() => {
    setConfirmCheck(confirmCheckPW === 1 && btn);
  }, [btn, confirmCheckPW]);

  useEffect(() => {
    if (password != '' && password === checkPW) {
      setConfirmCheckPW(1);
    } else {
      setConfirmCheckPW(0);
    }
  }, [checkPW]);

  const handleCheckPhone = async () => {
    if (isNaN(phone) === false && (phone.length == 10 || phone.length == 11)) {
      phoneCheckAPI(phone)
        .then((response) => {
          console.log(response);
          response ? setBtn(true) : setConfirmCheckPhone(true);
        })
        .catch((error) => {
          console.log(error);
        });
    } else setConfirmCheckPhone(0);
  };

  return (
    <View style={styles.fullscreen}>
      <StatusBar style="auto" />
      <ToastMessage
        visible={confirmCheckPhone}
        handleFunction={setConfirmCheckPhone}
        title={'Fail'}
        content={'Validation verified'}
        fail
      />
      {/* <ToastMessage
        visible={confirmCheckPW}
        handleFunction={setConfirmCheckPW}
        title={'Success'}
        content={'Validation verified'}
      /> */}

      {checkTerm && <SignupModal phone={phone} password={password} />}
      <Header />

      <View style={styles.container}>
        <RKText size={20} weight={'800'}>
          Create Account
        </RKText>
        <RKText weight={'400'} style={{ marginTop: toSize(8) }}>
          Please fill out your phone number and password
        </RKText>
        <View style={styles.FormView}>
          <View style={FormStyles.FormOneView}>
            <RKText
              size={12}
              color={'#000'}
              weight={'700'}
              style={{ marginBottom: toSize(8) }}
            >
              Phone Number
            </RKText>
            <View
              style={[
                FormStyles.FormInput,
                FormStyles.RowView,
                !confirmCheckPhone
                  ? { borderColor: '#8F9098' }
                  : { borderColor: '#FF0000' },
              ]}
            >
              <TextInput
                onChangeText={setChangePhone}
                value={phone.toString()}
                color={btn ? '#8F9098' : '#000'}
                style={{ width: toSize(200) }}
                maxLength={11}
                returnKeyType="done"
                keyboardType="number-pad"
                placeholder="Phone Number"
                editable={!btn}
              />
              <TouchableOpacity
                activeOpacity={0.8}
                style={[
                  FormStyles.checkNickName,
                  { backgroundColor: btn ? '#DCDCDC' : '#FFCC00' },
                ]}
                onPress={handleCheckPhone}
              >
                <RKText size={8} color={'#fff'} weight={'700'}>
                  Check Availability
                </RKText>
              </TouchableOpacity>
            </View>

            {confirmCheckPhone === 2 && (
              <View style={FormStyles.hideView}>
                <Text style={[FormStyles.hideText, { color: '#FF453A' }]}>
                  The same nickname exists. Please write another nickname
                </Text>
              </View>
            )}
          </View>

          <View style={FormStyles.FormOneView}>
            <RKText
              size={12}
              color={'#000'}
              weight={'700'}
              style={{ marginBottom: toSize(8) }}
            >
              Password
            </RKText>

            <TextInput
              style={[
                FormStyles.FormInput,
                FormStyles.RowView,
                { borderColor: '#8F9098' },
              ]}
              onChangeText={setPassword}
              value={password.toString()}
              placeholder="Password"
              secureTextEntry={true}
            />

            <TextInput
              onChangeText={setCheckPW}
              value={checkPW.toString()}
              placeholder="Confirm password"
              secureTextEntry={true}
              style={[
                FormStyles.FormInput,
                FormStyles.RowView,
                styles.marginTop,
                checkPW == ''
                  ? { borderColor: '#8F9098' }
                  : confirmCheckPW === 0
                  ? { borderColor: '#FF0000' }
                  : { borderColor: '#23A047' },
              ]}
            />
            {checkPW != '' && (
              <View style={FormStyles.hideView}>
                <Text
                  style={[
                    FormStyles.hideText,
                    confirmCheckPW === 0
                      ? { color: '#FF453A' }
                      : { color: '#23A047' },
                  ]}
                >
                  {confirmCheckPW === 0
                    ? 'Please make sure your passwords match'
                    : 'Passwords match'}
                </Text>
              </View>
            )}
          </View>
        </View>
        <View style={styles.buttonView}>
          <RKButton
            text={'Next'}
            disabled={!confirmCheck}
            onPress={() => {
              confirmCheck && setCheckTerm(true);
            }}
          />
        </View>
      </View>
    </View>
  );
}
