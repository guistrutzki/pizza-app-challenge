import React, { FC, useState, useEffect } from 'react';
import styled from 'styled-components/native';

import Header from '../../components/Header';
import { isSmallDevice, deviceWidth } from '../../utils/layout';
import normalize from '../../utils/normalize';
import pizzaImg from '../../resources/images/pizza.png';

const Container = styled.View({
  flex: 1,
  backgroundColor: '#ECECED',
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
  marginTop: isSmallDevice ? 20 : 50,
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

const SizeOptionsWrapper = styled.View({
  width: '100%',
  marginTop: 10,
  justifyContent: 'center',
  flexDirection: 'row',
});

const SizeOptionsLabel = styled.Text({
  fontSize: normalize(16),
  marginTop: isSmallDevice ? 20 : 50,
  textAlign: 'center',
  color: 'rgba(0,0,0, 0.5)',
});

const SizeOption = styled.TouchableOpacity(
  {
    width: isSmallDevice ? 40 : 50,
    height: isSmallDevice ? 40 : 50,
    borderRadius: isSmallDevice ? 20 : 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    marginTop: 5,
  },
  ({ isSelected }: { isSelected: boolean }) => ({
    backgroundColor: isSelected ? '#fff' : 'transparent',
    ...(isSelected
      ? {
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.5,
          shadowRadius: 4,
          elevation: 10,
        }
      : null),
  }),
);

const SizeOptionText = styled.Text({
  color: '#000',
  fontSize: normalize(18),
});

const CrustOptionsLabel = styled.Text({
  fontSize: normalize(16),
  marginTop: isSmallDevice ? 10 : 20,
  textAlign: 'center',
  color: 'rgba(0,0,0, 0.5)',
});

const CrustWrapper = styled.View({
  width: '100%',
  marginTop: 10,
  justifyContent: 'center',
  flexDirection: 'row',
});

const CrustOption = styled.TouchableOpacity(
  {
    width: 80,
    marginTop: isSmallDevice ? 5 : 10,
    height: isSmallDevice ? 30 : 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  ({ isSelected }: { isSelected: boolean }) => ({
    backgroundColor: isSelected ? '#fff' : 'transparent',
    ...(isSelected
      ? {
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.5,
          shadowRadius: 4,
          elevation: 10,
        }
      : null),
  }),
);

const CrustOptionText = styled.Text({
  color: '#000',
  fontSize: normalize(18),
});

const ButtonWrapper = styled.TouchableOpacity(
  {
    width: deviceWidth * 0.8,
    height: 50,
    borderRadius: 10,
    marginTop: isSmallDevice ? 15 : 30,
    marginLeft: deviceWidth * 0.1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#c1c1c1',
  },
  ({ isDisabled }: { isDisabled: boolean }) => ({
    backgroundColor: isDisabled ? 'rgba(114,71,32, 0.2)' : 'rgba(114,71,32, 1)',
  }),
);

const ButtonText = styled.Text({
  fontSize: normalize(24),
  color: '#fff',
});

const ChooseSize: FC = () => {
  const [selectedSize, setselectedSize] = useState<number>(1);
  const [selectedCrust, setSelectedCrust] = useState<number | null>(null);
  const [sizeValue, setSizeValue] = useState<number>(0);
  const [crustValue, setCrustValue] = useState<number>(0);

  const sizeOptions = ['S', 'M', 'L'];
  const crustOptions = ['Thin', 'Thick'];

  const handleSizeChange = (option: number): void => {
    setselectedSize(option);
  };

  const handleCrustChange = (option: number): void => {
    setSelectedCrust(option);
  };

  useEffect(() => {
    switch (selectedCrust) {
      case 0:
        setCrustValue(2);
        break;

      case 1:
        setCrustValue(4);
        break;

      default:
        setCrustValue(0);
    }
  }, [selectedCrust]);

  useEffect(() => {
    switch (selectedSize) {
      case 0:
        setSizeValue(8);
        break;

      case 1:
        setSizeValue(10);
        break;

      case 2:
        setSizeValue(12);
        break;

      default:
        setSizeValue(10);
        break;
    }
  }, [selectedSize]);

  return (
    <>
      {/* //TODO FIX THIS SHIT */}
      <Header
        headerCenter={
          <HeaderTitleWrapper>
            <HeaderTitleText>Choose Your Pizza</HeaderTitleText>
          </HeaderTitleWrapper>
        }
      />
      <Container>
        <PizzaWrapper>
          <PizzaImg source={pizzaImg} />
          <PizzaPrice>{`$${sizeValue + crustValue},00`}</PizzaPrice>
        </PizzaWrapper>

        <SizeOptionsLabel>Choose your size</SizeOptionsLabel>
        <SizeOptionsWrapper>
          {sizeOptions.map((option: string, index: number) => (
            <SizeOption
              key={option}
              isSelected={selectedSize === index}
              onPress={(): void => handleSizeChange(index)}>
              <SizeOptionText>{option}</SizeOptionText>
            </SizeOption>
          ))}
        </SizeOptionsWrapper>

        <CrustOptionsLabel>Choose your crust</CrustOptionsLabel>
        <CrustWrapper>
          {crustOptions.map((option: string, index: number) => (
            <CrustOption
              isSelected={selectedCrust === index}
              onPress={(): void => handleCrustChange(index)}>
              <CrustOptionText>{option}</CrustOptionText>
            </CrustOption>
          ))}
        </CrustWrapper>

        <ButtonWrapper
          disabled={selectedCrust === null}
          isDisabled={selectedCrust === null}>
          <ButtonText>Next</ButtonText>
        </ButtonWrapper>
      </Container>
    </>
  );
};

export default ChooseSize;
