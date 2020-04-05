import React, { FC, useState } from 'react';
import { ImageSourcePropType } from 'react-native';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

import Header from '../../components/Header';
import { isSmallDevice, deviceWidth } from '../../utils/layout';
import normalize from '../../utils/normalize';
import pizzaImg from '../../resources/images/pizza.png';
import arrowLeft from '../../resources/images/left-arrow.png';
import Constants from '../../routes/utils/Constants';

import * as IMAGES from '../../resources/images';

const { ROUTES } = Constants;

const Container = styled.View({
  flex: 1,
  backgroundColor: '#ECECED',
});

const HeaderBackButton = styled.TouchableOpacity({
  width: 50,
  height: 50,
  justifyContent: 'center',
  alignItems: 'center',
});
const HeaderBackImage = styled.Image({
  width: 25,
  height: 25,
});

const HeaderTitleWrapper = styled.Text({
  flex: 1,
});

const HeaderTitleText = styled.Text({
  fontSize: normalize(24),
  textAlign: 'center',
  color: '#7e512a',
});

const PizzaWrapper = styled.View({
  width: '100%',
  marginTop: isSmallDevice ? 20 : 30,
  alignItems: 'center',
});

const PizzaImg = styled.Image({
  width: isSmallDevice ? 200 : 250,
  height: isSmallDevice ? 200 : 250,
});

const PizzaPrice = styled.Text({
  fontSize: normalize(32),
  marginTop: 5,
  color: '#724720',
  fontWeight: 700,
});

const ToppingWrapper = styled.ScrollView({
  width: deviceWidth * 0.9,
  marginLeft: deviceWidth * 0.05,
  marginTop: 10,
  maxHeight: 100,
});

const ToppingItemWrapper = styled.TouchableOpacity({
  borderRadius: 10,
  backgroundColor: '#fff',
  padding: 10,
  justifyContent: 'center',
  alignItems: 'center',
  marginHorizontal: 10,
  marginTop: 10,
  height: 80,
  width: 130,
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.5,
  shadowRadius: 4,
  elevation: 10,
});

const ToppingItemImage = styled.Image({
  width: 25,
  height: 25,
});

const ToppingItemText = styled.Text({
  fontSize: 18,
  textAlign: 'center',
  color: '#724720',
});

const Label = styled.Text({
  fontSize: normalize(16),
  marginTop: 20,
  textAlign: 'center',
  color: 'rgba(0,0,0, 0.5)',
});

interface ToppingInterface {
  name: string;
  image: ImageSourcePropType;
}

const ChooseToppings: FC = () => {
  const navigation = useNavigation();

  const [selectedToppings, setSelectedToppings] = useState<string[]>([]);

  const toppings: ToppingInterface[] = [
    {
      name: 'Pepperoni',
      image: IMAGES.pepperoniLabel,
    },
    {
      name: 'Mushrooms',
      image: IMAGES.champignonLabel,
    },
    {
      name: 'Onions',
      image: IMAGES.onionLabel,
    },
    {
      name: 'Sausage',
      image: IMAGES.sausageLabel,
    },
    {
      name: 'Bacon',
      image: IMAGES.baconLabel,
    },
    {
      name: 'Extra cheese',
      image: IMAGES.cheeseLabel,
    },
    {
      name: 'Black olives',
      image: IMAGES.blackOlivesLabel,
    },
    {
      name: 'Green peppers',
      image: IMAGES.greenPepperLabel,
    },
    {
      name: 'Pineapple',
      image: IMAGES.pineappleLabel,
    },
    {
      name: 'Spinach',
      image: IMAGES.spinachLabel,
    },
  ];

  const handleToppingClick = (index: number): void => {
    // setSelectedToppings([...selectedToppings, toppings[index]]);
  };

  return (
    <>
      <Header
        headerLeft={
          <HeaderBackButton onPress={(): void => navigation.goBack()}>
            <HeaderBackImage source={arrowLeft} />
          </HeaderBackButton>
        }
        headerCenter={
          <HeaderTitleWrapper>
            <HeaderTitleText>Pizza&apos;s topping</HeaderTitleText>
          </HeaderTitleWrapper>
        }
      />
      <Container>
        <PizzaWrapper>
          <PizzaImg source={pizzaImg} />
          {/* <PizzaPrice>{`$${sizeValue + crustValue},00`}</PizzaPrice> */}
          <PizzaPrice>$10,00</PizzaPrice>
        </PizzaWrapper>

        <Label>Available toppings</Label>
        <ToppingWrapper horizontal showsHorizontalScrollIndicator={false}>
          {toppings.map((item: ToppingInterface, index: number) => (
            <ToppingItemWrapper
              key={item.name}
              resizeMode="contain"
              onPress={(): void => handleToppingClick(index)}>
              <ToppingItemImage source={item.image} />
              <ToppingItemText>{item.name}</ToppingItemText>
            </ToppingItemWrapper>
          ))}
        </ToppingWrapper>

        <Label>{selectedToppings}</Label>
      </Container>
    </>
  );
};

export default ChooseToppings;