import React, { FC } from 'react';
import styled from 'styled-components/native';

import { headerBarHeight, statusBarHeight } from '../utils/Layout';

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
});

const HeaderArea = styled.View(
  {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },
  ({ alignment }: { alignment: string }) => ({
    justifyContent: alignment,
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
