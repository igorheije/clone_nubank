import React,{useContext} from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import AntDesign from 'react-native-vector-icons/AntDesign'
import {
  Container,
  Image,
  Header,
  Title,
  Subtitle,
  NotViewCash,
  ViewCash,
  Cash,
  Limit,

} from './styles';
import { ViewContext } from '~/context/viewContext';

const Tabs = (props) => {
  const {viewCash} = useContext(ViewContext)

  return (
    <Container>
      <Header>
        {props.card ?
        <AntDesign name="creditcard" size={18}/>:
        <FontAwesome5 name="coins" size={18}/>
      }
        <Title>{props.title}</Title>
      </Header>
      <Subtitle>{props.subtitle}</Subtitle>
      <ViewCash>
        {viewCash ? (
          <NotViewCash />
        ) : (
          <>
            <Cash style={!props.card&&{color:'#333'}}>{props.cash}</Cash>
            {props.card&&<Limit>Limite dispônivel: R$ 3.000,00</Limit>}
          </>
        )}
      </ViewCash>
    </Container>
  );
};

export default Tabs;
