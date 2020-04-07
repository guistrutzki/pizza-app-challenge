import React, { FC, ComponentElement } from 'react';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';

import { ApplicationState } from '../../state';
import { isSmallDevice, deviceWidth, deviceHeight } from '../../utils/layout';
import PizzaActions from '../../state/ducks/Pizza/actions';
import { PizzaState } from '../../state/ducks/Pizza/types';
import Header from '../../components/Header';
import normalize from '../../utils/normalize';
import arrowLeft from '../../resources/images/left-arrow.png';

const Container = styled.ScrollView({
  flex: 1,
  backgroundColor: '#ECECED',
  padding: 20,
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

const ConfirmOrderText = styled.Text({
  fontSize: normalize(32),
  color: '#7e512a',
  marginTop: 10,
  marginLeft: 10,
});

const ConfirmTable = styled.View({
  marginTop: 20,
  width: '100%',
  marginBottom: 20,
});

const TableLine = styled.View({
  height: 45,
  padding: 10,
  width: '100%',
  flexDirection: 'row',
  justifyContent: 'space-between',
  borderBottomWidth: 1,
  borderBottomColor: '#c1c1c1',
});

const LineText = styled.Text(
  {
    fontSize: 18,
    color: '#7e512a',
  },
  ({ isTitle }: { isTitle?: boolean }) => ({
    fontWeight: isTitle ? 700 : 400,
  }),
);

const ToppingsWrapper = styled.View({
  paddingLeft: 10,
  width: '100%',
  borderBottomWidth: 1,
  borderBottomColor: '#c1c1c1',
  marginBottom: 20,
  paddingBottom: 10,
});

const ButtonWrapper = styled.TouchableOpacity({
  width: deviceWidth * 0.9,
  height: 50,
  borderRadius: 10,
  marginTop: isSmallDevice ? 15 : 30,
  justifyContent: 'center',
  alignItems: 'center',
  borderWidth: 1,
  borderColor: '#c1c1c1',
  backgroundColor: 'rgba(114,71,32, 1)',
});

const ButtonText = styled.Text({
  fontSize: normalize(24),
  color: '#fff',
});

const ToppingTitle = styled.Text({
  fontSize: 18,
  color: '#7e512a',
  marginBottom: 15,
  fontWeight: 700,
});

const ToppingItem = styled.View({
  flexDirection: 'row',
  alignItems: 'center',
});

const Circle = styled.View({
  width: 10,
  height: 10,
  borderRadius: 5,
  backgroundColor: '#7e512a',
  marginRight: 10,
});

interface ToppingInterface {
  name: string;
  image: ImageSourcePropType;
}

const CheckOrder: FC = () => {
  const navigation = useNavigation();
  const pizzaState: PizzaState = useSelector(
    (state: ApplicationState) => state.pizza,
  );

  const sizeStringfied = {
    0: 'Small',
    1: 'Medium',
    2: 'Large',
  };

  const crustStringfied = {
    0: 'Thin',
    1: 'Thick',
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
            <HeaderTitleText>Check your order</HeaderTitleText>
          </HeaderTitleWrapper>
        }
      />

      <Container>
        <ConfirmOrderText>Confirm your pizza</ConfirmOrderText>
        <ConfirmTable>
          <TableLine>
            <LineText isTitle>Size</LineText>
            <LineText>{sizeStringfied[pizzaState.size]}</LineText>
          </TableLine>

          <TableLine>
            <LineText isTitle>Crust</LineText>
            <LineText>{crustStringfied[pizzaState.crust]}</LineText>
          </TableLine>
        </ConfirmTable>

        <ToppingsWrapper>
          <ToppingTitle>Pizza&apos;s topping</ToppingTitle>
          {pizzaState.selectedToppings.length <= 0 && (
            <LineText>No pizza topping selected</LineText>
          )}
          {pizzaState.selectedToppings.map((item: ToppingInterface) => (
            <ToppingItem>
              <Circle />
              <LineText>{item.name}</LineText>
            </ToppingItem>
          ))}
        </ToppingsWrapper>

        <TableLine>
          <LineText isTitle>Total</LineText>
          <LineText>
            {`$${pizzaState.totalValue.toFixed(2).replace('.', ',')}`}
          </LineText>
        </TableLine>

        <ButtonWrapper>
          <ButtonText>Confirm</ButtonText>
        </ButtonWrapper>
      </Container>
    </>
  );
};

export default CheckOrder;
