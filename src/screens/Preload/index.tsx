import React, { FC, useEffect } from 'react';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

import Loader from '../../components/Loader';
import contants from '../../routes/utils/Constants';

const { ROUTES } = contants;

const Container = styled.SafeAreaView({
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#CEBEBE',
});

const Preload: FC = () => {
  const navigation = useNavigation();
  const { navigate } = navigation;

  useEffect(() => {
    // Simulate a loading screen
    setTimeout(() => {
      navigate(ROUTES.CHOOSE_SIZE);
    }, 1500);
  }, []);

  return (
    <Container>
      <Loader />
    </Container>
  );
};

export default Preload;
