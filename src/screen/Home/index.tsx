import {Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackNavigation} from '../../navigation/types';

export default function Home() {
  const navigation = useNavigation<StackNavigationProp<RootStackNavigation>>();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.goBack();
      }}>
      <Text>Hello </Text>
    </TouchableOpacity>
  );
}
