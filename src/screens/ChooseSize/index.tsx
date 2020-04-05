import React, { FC } from 'react';
import styled from 'styled-components/native';

import Header from '../../components/Header';

const Container = styled.View({
  flex: 1,
});

const ChooseSize: FC = () => {
  return (
    <>
      <Header />
      <Container>
        <></>
      </Container>
    </>
  );
};

export default ChooseSize;
