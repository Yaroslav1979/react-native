import {View} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {useEffect, useState} from 'react';
import PetsList from './components/PetsList';
import SearchBar from './components/SearchBar';

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

  const getPets = async () => {
    try {
      const result = await firestore().collection('animals').get();
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
    getPets();
  }, []);
  console.log('pets', pets);
  return (
    <View style={{flex: 1}}>
      <SearchBar handleSearch={handleSearch} pets={pets} />
      <PetsList pets={pets} />
    </View>
  );
}
