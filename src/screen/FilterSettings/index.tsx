import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useState} from 'react';
import {fonts} from '../../constants/fonts';
import {FemailIcon, MailAndFemailIcon, SearchIcon} from '../../assets/icons';
import SwitchBtn from './components/SwitchBtn';
import MailIcon from '../../assets/icons/Mail';
import DefaultButton from '../../common/components/DefaultButton';
import SearchInput from './components/SearchInput';

export default function FilterSettings() {
  const [settings, setSettings] = useState({
    sortByTime: false,
    sortByType: false,
    type: '',
    color: '',
    selectedAnimal: 'Собаки',
    selectedSex: 'Хлопець',
    size: 'Великі',
    age: 1,
    isVaccinate: false,
  });
  const handleSwitchAnimal = (animal: string) => {
    setSettings(prevState => ({
      ...prevState,
      selectedAnimal: animal,
    }));
  };
  const handleSwitchSex = (sex: string) => {
    setSettings(prevState => ({
      ...prevState,
      selectedSex: sex,
    }));
  };
  const handleSwitchSize = (size: string) => {
    setSettings(prevState => ({
      ...prevState,
      size: size,
    }));
  };
  return (
    <ScrollView style={{margin: 10, gap: 20}}>
      <View style={{gap: 20}}>
        <TouchableOpacity
          onPress={() => {
            setSettings(prevState => ({
              ...prevState,
              sortByTime: !prevState.sortByTime,
            }));
          }}
          style={styles.sortByTimeBtn}>
          <View style={styles.activeSortByTime}>
            {settings.sortByTime && <View style={styles.checkedSortByTime} />}
          </View>
          <Text style={styles.sortByTimeText}>
            Сортувати за датою додавання
          </Text>
        </TouchableOpacity>
        <SwitchBtn
          handleSwitch={handleSwitchAnimal}
          active={settings.selectedAnimal}
          items={[{text: 'Собаки'}, {text: 'Коти'}]}
        />
        <SwitchBtn
          handleSwitch={handleSwitchSex}
          active={settings.selectedSex}
          items={[
            {text: 'Хлопець', icon: <MailIcon />},
            {text: 'Дівчина', icon: <FemailIcon />},
            {text: 'Будь-хто', icon: <MailAndFemailIcon />},
          ]}
        />
        <SwitchBtn
          handleSwitch={handleSwitchSize}
          active={settings.size}
          items={[{text: 'Маленькі'}, {text: 'Середні'}, {text: 'Великі'}]}
        />
        <View style={{gap: 5}}>
          <Text style={styles.btnText}>Вік,роки</Text>
          <View style={styles.searchWrapper}>
            <View style={styles.searchIconWrapper}>
              <SearchIcon />
            </View>
            <TextInput
              placeholder={'1'}
              value={settings.age.toString()}
              onChangeText={text =>
                setSettings(prevState => ({
                  ...prevState,
                  age: +text,
                }))
              }
            />
          </View>
        </View>
        <SearchInput
          onSearch={text =>
            setSettings(prevState => ({
              ...prevState,
              type: text,
            }))
          }
          title={'Порода'}
          value={settings.type}
        />
        <TouchableOpacity
          onPress={() => {
            setSettings(prevState => ({
              ...prevState,
              sortByType: !prevState.sortByTime,
            }));
          }}
          style={styles.sortByTimeBtn}>
          <View style={styles.activeSortByType}>
            {settings.sortByType && <View style={styles.checkedSortByType} />}
          </View>
          <Text style={styles.sortByTimeText}>Без породи</Text>
        </TouchableOpacity>
        <SearchInput
          title={'Колір'}
          onSearch={text =>
            setSettings(prevState => ({
              ...prevState,
              color: text,
            }))
          }
          value={settings.color}
        />
        <View style={styles.switcherContainer}>
          <Text style={styles.btnText}>Вакцінація</Text>
          <TouchableOpacity
            style={[
              styles.switcherBtn,
              settings.isVaccinate && {
                alignItems: 'flex-end',
                backgroundColor: '#D0CBF1',
              },
            ]}
            onPress={() => {
              setSettings(prevState => ({
                ...prevState,
                isVaccinate: !prevState.isVaccinate,
              }));
            }}>
            <View style={styles.switcherCircle} />
          </TouchableOpacity>
        </View>
        <DefaultButton onPress={() => {}} text={'Показати варіанти'} />
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  sortByTimeBtn: {flexDirection: 'row', gap: 10, alignItems: 'center'},
  activeSortByTime: {
    borderRadius: 50,
    width: 15,
    height: 15,
    borderWidth: 1,
    borderColor: '#7A71BA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeSortByType: {
    width: 15,
    height: 15,
    borderWidth: 1,
    borderColor: '#7A71BA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkedSortByTime: {
    borderRadius: 50,
    width: 10,
    height: 10,
    backgroundColor: '#7A71BA',
  },
  checkedSortByType: {
    width: 10,
    height: 10,
    backgroundColor: '#7A71BA',
  },
  sortByTimeText: {
    fontFamily: fonts.MontserratRegular,
    color: 'black',
  },
  searchIconWrapper: {marginHorizontal: 20},
  settingsIcon: {
    height: 40,
    width: 40,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EFF1F4',
  },
  searchWrapper: {
    borderRadius: 20,
    borderColor: '#A0A0A0',
    borderWidth: 1,
    height: 50,
    width: Dimensions.get('window').width - 20,
    alignItems: 'center',
    flexDirection: 'row',
  },
  switcherWrapper: {
    flexDirection: 'row',
    padding: 5,
    borderRadius: 50,
    backgroundColor: '#EAE9FB',
    height: 50,
    alignItems: 'center',
  },
  activeBtn: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    backgroundColor: 'white',
    height: 40,
  },
  btnText: {fontFamily: fonts.MontserratRegular, color: '#0B0B0B'},
  nonActiveBtn: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    borderRadius: 50,
  },
  selectSearch: {
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    backgroundColor: '#EAE9FB',
    height: 50,
    width: Dimensions.get('window').width - 20,
    alignItems: 'center',
    flexDirection: 'row',
  },
  switcherContainer: {
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  switcherBtn: {
    width: 50,
    borderRadius: 50,
    alignItems: 'flex-start',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#D0CBF1',
    padding: 3,
  },
  switcherCircle: {
    width: 20,
    height: 20,
    borderRadius: 50,
    backgroundColor: '#7A71BA',
  },
});
