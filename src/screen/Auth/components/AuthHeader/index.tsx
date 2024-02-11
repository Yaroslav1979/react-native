import {Text, TouchableOpacity, View} from 'react-native';
import styles from '../../styles';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {ScreenNames} from '../../../../constants/screenNames';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStack} from '../../../../navigation/index';

interface IAuthHeader {
  activeTab: 'login' | 'registration';
}

export default function AuthHeader({activeTab}: IAuthHeader) {
  const navigation = useNavigation<NativeStackNavigationProp<RootStack>>();
  const navigateToLogin = () => {
    navigation.navigate(ScreenNames.LOGIN_PAGE);
  };
  const navigateToRegistration = () => {
    navigation.navigate(ScreenNames.REGISTRATION_PAGE);
  };
  return (
    <>
      <View style={[styles.titleContainer]}>
        <Text style={styles.title}>Раді тебе вітати!</Text>
        <Text style={styles.welcomeText}>
          Кожен пухнастик заслуговує на дбайливих господарів.{'\n'}Ми допоможемо
          тобі знайти друга.
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={navigateToLogin}
          style={activeTab === 'login' ? styles.activeTab : styles.disabledTab}>
          <Text style={styles.authText}>Вхід</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={navigateToRegistration}
          style={
            activeTab === 'registration' ? styles.activeTab : styles.disabledTab
          }>
          <Text style={styles.authText}>Реєстрація</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
