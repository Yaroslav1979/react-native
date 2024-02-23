import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ArrowIcon} from '../../../assets/icons';
import {fonts} from '../../../constants/fonts';
import {useNavigation} from '@react-navigation/core';
import {StackNavigationProp} from '@react-navigation/stack';
import {LoggedInStackType} from '../../../navigation/types';

export default function SettingsHeader({title = 'Фільтри'}) {
  const navigation = useNavigation<StackNavigationProp<LoggedInStackType>>();
  return (
    <View style={styles.mainWrapper}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backBtn}>
        <ArrowIcon width={20} height={20} />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  mainWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: 'white',
  },
  backBtn: {
    transform: [{rotate: '180deg'}],
  },
  title: {
    flex: 0.7,
    fontFamily: fonts.MontserratSemiBold,
    color: 'black',
  },
});
