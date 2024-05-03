import React from 'react';
import { Text, TextInput, View } from 'react-native';

import HelloWorld from './src/HelloWorld';
import Gato from './src/Exemplo_Gato';
import NomePersonalizado from './src/ExemploParametro';
import Aprovado from './src/Exercicio';
import ExemploStyleView from './src/ExemploStyleView';
import ExemploStyleText from './src/ExemploStyleText';
import TelaLogin from './src/TelaLogin';

function App(): React.JSX.Element {
  return (
    <TelaLogin />
    //<>
    //<View style={{ backgroundColor: 'green', borderRadius: 15 }}>
    //<HelloWorld />
    //<Gato />
    //<NomePersonalizado nome='' sobrenome={''} />
    //<Aprovado nome='' nota1={0} nota2={0} />
    //<Login />
    //</View>
    //</>
  );
}

export default App;
