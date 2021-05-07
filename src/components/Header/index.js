import React,{useContext} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons'

import {Container,Icons,Title,ButtonIcon} from './styles.js'
import { ViewContext } from '~/context/viewContext';

export default function Header() {
  const {setViewCash, viewCash} = useContext(ViewContext)

  return (
    <Container>
        <Title>Olá, Igor</Title>
      <Icons>
        <ButtonIcon onPress={()=>setViewCash(!viewCash)}>
        {viewCash? <Ionicons name="eye-outline" size={24} color="#fff"/>:<Ionicons name="eye-off-outline" size={24} color="#fff"/>}

        </ButtonIcon>
        <ButtonIcon>
        <Ionicons name="settings-outline" size={24} color="#fff"/>

        </ButtonIcon>
      </Icons>
    </Container>
  )
}
