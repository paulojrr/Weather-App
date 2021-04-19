import React, { useState } from 'react';
import axios from 'axios';

import GlobalStyle from './styles/global';

import CardWrapper from './Components/CardWrapper';
import Container from './Components/Container';
import Card from './Components/Card';
import Button from './Components/Button.js';
import Input from './Components/Input';
import Title from './Components/Title';

const App = () => {
  const [tempData, setTempData] = useState('');
  const [city, setCity] = useState('');

  async function handleFetch() {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=pt_br&appid=92996da95f63bca04162f30ecbb9a844`,
    );

    setTempData([...tempData, response.data]);
  }

  function handleInput(e) {
    setCity(e.target.value);
  }

  return (
    <>
      <Container>
        <Title>Weather App</Title>
      </Container>
      <Container>
        <Input onChange={handleInput} placeholder="Digite o nome da cidade" />
        <Button onClick={handleFetch}>Buscar</Button>
      </Container>
      <CardWrapper>{tempData ? <Card weather={tempData} /> : ''}</CardWrapper>
      <GlobalStyle />
    </>
  );
};

export default App;
