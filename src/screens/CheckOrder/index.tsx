import React, { FC } from 'react';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

import Header from '../../components/Header';
import normalize from '../../utils/normalize';
import arrowLeft from '../../resources/images/left-arrow.png';

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

const CheckOrder: FC = () => {
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
            <HeaderTitleText>Check your pizza</HeaderTitleText>
          </HeaderTitleWrapper>
        }
      />
    </>
  );
};

export default CheckOrder;
