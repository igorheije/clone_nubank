import React from 'react';

import Header from '~/components/Header';
import Tabs from '~/components/Tabs';
import { Container } from './styles';

const Main = () => {

  return(
    <Container>
      <Header />
      <Tabs card={true}cash="R$389,00" title="Cartão de Crédito" subtitle="Fatura atual"/>
      <Tabs card={false} cash="R$2.000.000,00" title="Conta" subtitle="Saldo disponível"/>
   </Container>
)};

export default Main;
