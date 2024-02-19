import {ActivityIndicator, View} from 'react-native';
import firestore, {
  FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore';
import {useEffect, useState} from 'react';
import PetsList from './components/PetsList';
import SearchBar from './components/SearchBar';
import {ISettings} from '../FilterSettings';
import {RouteProp, useRoute} from '@react-navigation/core';

export interface IPets {
  age: number;
  color: string;
  description: string;
  images: string[];
  isDog: boolean;
  isVaccinated: boolean;
  location: string;
  name: string;
  sex: string;
  type: string;
  timeStamp: number;
  size: 'big' | 'medium' | 'small';
}
export default function Home() {
  const [pets, setPets] = useState<IPets[]>([]);
  const route = useRoute<RouteProp<{params: {settings: ISettings}}>>();
  const handleSearchWithSettings = async (settings: ISettings) => {
    try {
      let query: FirebaseFirestoreTypes.Query<FirebaseFirestoreTypes.DocumentData> =
        firestore().collection('animals');
      Object.entries(settings).forEach(([key, value]) => {
        if (key !== 'timeStamp' && value !== null) {
          query = query.where(key, '==', key === 'age' ? +value : value);
        }
      });
      query = query.orderBy('timeStamp', settings.timeStamp ? 'desc' : 'asc');

      const result = await query.get();
      const temp: IPets[] = result.docs.map(e => e.data()) as IPets[];
      setPets(temp);
    } catch (e) {
      console.log('e', e);
    }
  };
  const handleSearch = async (text: string) => {
    try {
      const result = await firestore()
        .collection('animals')
        .orderBy('name')
        .startAt(text)
        .endAt(text + '\uf8ff')
        .get();
      const temp: IPets[] = result.docs.map(e => e.data()) as IPets[];
      setPets(temp);
    } catch (e) {
      console.log('e', e);
    }
  };
  useEffect(() => {
    handleSearchWithSettings(route?.params?.settings);
  }, [route]);

  return (
    <View style={{flex: 1}}>
      <SearchBar handleSearch={handleSearch} pets={pets} />
      {pets.length ? <PetsList pets={pets} /> : <ActivityIndicator />}
    </View>
  );
}
