import {View} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from '../styles';
import AuthHeader from '../components/AuthHeader/index';
import Input from '../../../common/components/Input/index';
import DefaultButton from '../../../common/components/DefaultButton/index';
import AuthLayout from '../components/AuthLayout/index';
import auth from '@react-native-firebase/auth';
import {CommonActions, useNavigation} from '@react-navigation/core';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackNavigation} from '../../../navigation/types';
import {ScreenNames} from '../../../constants/screenNames';

interface IInputValue {
  email: string;
  password: string;
  errorEmail: null | string;
  errorPassword: null | string;
}

export default function LoginPage() {
  const [inputValues, setInputValues] = useState<IInputValue>({
    email: '',
    password: '',
    errorEmail: null,
    errorPassword: null,
  });
  const navigation = useNavigation<StackNavigationProp<RootStackNavigation>>();

  const handleChangeInput = (
    key: 'email' | 'password' | 'errorEmail' | 'errorPassword',
    value: string | null,
  ) => {
    setInputValues(prevState => ({...prevState, [key]: value}));
  };
  const checkEmail = () => {
    const emailValidator = new RegExp(
      '^([a-z0-9._%-]+@[a-z0-9.-]+.[a-z]{2,6})*$',
    );
    if (!emailValidator.test(inputValues.email)) {
      handleChangeInput('errorEmail', 'Not valid email');
    } else {
      handleChangeInput('errorEmail', null);
    }
  };
  const checkPassword = text => {
    if (text.length < 8) {
      handleChangeInput(
        'errorPassword',
        'Password must be more then 8 symbols ',
      );
    } else {
      handleChangeInput('errorPassword', null);
    }
  };
  const onLogin = async (email, password) => {
    try {
      const result = await auth().signInWithEmailAndPassword(email, password);
      console.log('RESULT', result);
    } catch (e) {
      console.log('e', e);
    }
  };
  const isDisabledLoginBtn = Boolean(
    inputValues.errorEmail ||
      inputValues.errorPassword ||
      !inputValues.email ||
      !inputValues.password,
  );
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(user => {
      if (user) {
        navigation.dispatch(
          CommonActions.reset({
            index: 1,
            routes: [{name: ScreenNames.LOGGED_IN_STACK}],
          }),
        );
      }
    });

    return subscriber;
  }, []);
  return (
    <AuthLayout>
      <AuthHeader activeTab={'login'} />
      <View style={styles.formContainer}>
        <Input
          onBlur={checkEmail}
          value={inputValues.email}
          onChangeText={text => handleChangeInput('email', text)}
          error={inputValues.errorEmail}
          placeholder={'Email'}
        />
        <Input
          placeholder={'Password'}
          value={inputValues.password}
          onChangeText={text => {
            handleChangeInput('password', text);
            checkPassword(text);
          }}
          secureTextEntry={true}
        />
      </View>
      <DefaultButton
        onPress={() => {
          void onLogin(inputValues.email, inputValues.password);
        }}
        disabled={isDisabledLoginBtn}
        text={'Увійти'}
      />
    </AuthLayout>
  );
}
