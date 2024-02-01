import React from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <View>
        <Text>Раді тебе вітати!</Text>
        <Text>
          Кожен пухнастик заслуговує на дбайливих господарів.Ми допоможемо тобі
          знайти друга.
        </Text>
      </View>
      <View>
        <TouchableOpacity>
          <Text>Вхід</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Реєстрація</Text>
        </TouchableOpacity>
      </View>
      <View>
        <View>
          <TextInput />
        </View>
        <View>
          <TextInput />
        </View>
      </View>
      <TouchableOpacity>
        <Text>Увійти</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default App;
