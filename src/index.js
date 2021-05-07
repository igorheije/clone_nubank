import React from 'react';
import { StatusBar} from 'react-native'

import '~/config/ReactotronConfig';

import Routes from '~/routes';
import {ViewContextProvider} from './context/viewContext';

const App = () => (
  <ViewContextProvider>
    <StatusBar barStyle="light-content" backgroundColor="#8b10a3"/>
    <Routes/>
    </ViewContextProvider>
  )

export default App;
