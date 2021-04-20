import React from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
  margin: 0 auto;
`;

const CardContent = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;

  width: 300px;
  height: 250px;

  border-radius: 5px;
  background-color: #fff;
  margin-right: 10px;
  margin-bottom: 20px;
  padding: 10px;
`;

const FlexRow = styled.div`
  display: flex;
  align-items: center;
`;

const CityName = styled.span`
  font-size: 24px;
  font-weight: bold;
`;

const Country = styled.span`
  font-size: 14px;
  background: #ff5821;
  padding: 5px;
  border-radius: 50%;
  margin-left: 10px;
  color: #fff;
`;

const Temp = styled.span`
  font-size: 60px;
  font-weight: bold;
`;

const ImgTemp = styled.img`
  width: 50px;
  height: 50px;
`;

const Description = styled.span`
  font-size: 18px;
`;

const Card = ({ weather }) => {
  const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/`;

  return (
    <>
      {weather.map(({ main, name, sys, weather }, index) => (
        <CardWrapper key={index}>
          <CardContent>
            <FlexRow>
              <CityName>{name}</CityName>
              <Country>{sys.country}</Country>
            </FlexRow>
            <Temp>{main.temp.toString().substr(0, 2)}°C</Temp>
            <ImgTemp src={icon + weather[0].icon + '.svg'} />
            <Description>{weather[0].description}</Description>
          </CardContent>
        </CardWrapper>
      ))}
    </>
  );
};

export default Card;
