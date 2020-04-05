import React, { FC, useState } from 'react';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

import Header from '../../components/Header';
import { isSmallDevice, deviceWidth } from '../../utils/layout';
import normalize from '../../utils/normalize';
import pizzaImg from '../../resources/images/pizza.png';
import arrowLeft from '../../resources/images/left-arrow.png';
import Constants from '../../routes/utils/Constants';

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

const ChooseToppings: FC = () => {
  const navigation = useNavigation();
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
      <Container />
    </>
  );
};

export default ChooseToppings;
