import React, { useState } from 'react';
import axios from 'axios';

import GlobalStyle from './styles/global';

import CardWrapper from './Components/CardWrapper';
import Container from './Components/Container';
import Card from './Components/Card';
import Button from './Components/Button.js';
import Input from './Components/Input';
import InputError from './Components/InputError';
import Title from './Components/Title';
import Form from './Components/Form';
import FormContent from './Components/FormContent';

const App = () => {
  const [weatherData, setWeatherData] = useState('');
  const [city, setCity] = useState('');
  const [inputError, setInputError] = useState('');

  async function handleFetch(event) {
    event.preventDefault();

    if (!city) {
      setInputError('Digite o nome da cidade');
      return;
    }

    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=pt_br&appid=92996da95f63bca04162f30ecbb9a844`,
      );

      setWeatherData([...weatherData, response.data]);

      setCity('');
      setInputError('');
    } catch (err) {
      setInputError('Nome da cidade inválido');
    }
  }

  return (
    <>
      <Container>
        <Title>Weather App</Title>
      </Container>

      <Form onSubmit={handleFetch}>
        <FormContent>
          <Input
            value={city}
            hasError={!!inputError}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Digite o nome da cidade"
          />
          <Button type="submit">Buscar</Button>
        </FormContent>
        {inputError ? <InputError>{inputError}</InputError> : ''}
      </Form>

      <CardWrapper>
        {weatherData ? <Card weather={weatherData} /> : ''}
      </CardWrapper>
      <GlobalStyle />
    </>
  );
};

export default App;
