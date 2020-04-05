import React, { FC } from 'react';
import styled, { ReactNativeStyledInterface } from 'styled-components/native';

import { headerBarHeight, statusBarHeight } from '../utils/layout';

const Container = styled.View({
  flexDirection: 'row',
  width: '100%',
  height: headerBarHeight,
  justifyContent: 'space-between',
  paddingTop: statusBarHeight,
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 5,
  },
  shadowOpacity: 0.5,
  shadowRadius: 12.35,
  elevation: 20,
  backgroundColor: '#fff',
  zIndex: 50,
});

const HeaderArea = styled.View(
  {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  ({ alignment }: { alignment: string }) => ({
    flex: alignment === 'center' ? 3 : 1,
  }),
);

interface HeaderProps {
  headerLeft?: FC;
  headerCenter?: FC;
  headerRight?: FC;
}

const Header: FC<HeaderProps> = ({
  headerLeft,
  headerCenter,
  headerRight,
}: HeaderProps) => {
  return (
    <Container>
      <HeaderArea alignment="flex-start">{headerLeft}</HeaderArea>
      <HeaderArea alignment="center">{headerCenter}</HeaderArea>
      <HeaderArea alignment="flex-end">{headerRight}</HeaderArea>
    </Container>
  );
};

export default Header;
