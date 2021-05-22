import React, { useState } from 'react';
import PortfolioIcon from '../assets/PortfolioIcon';
import SearchIcon from '../assets/SearchIcon';
import UserIcon from '../assets/UserIcon';
import HomeIcon from '../assets/HomeIcon';
import styled from 'styled-components/native';
import {Link} from 'react-router-native';
import {TouchableOpacity} from 'react-native';

const NavContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 26px;
`;

const BottomNav = () => {
    const [activeIcon, setActiveIcon] = useState("home")
  return (
    <NavContainer>
      <Link
      active
        to={'/'}
        component={TouchableOpacity}
        onPress={() => console.log('return to homepage')}>
        <HomeIcon activeIcon={activeIcon} />
      </Link>
      <Link
        to={'/portfolio'}
        component={TouchableOpacity}
        onPress={() => console.log('return to portfolio')}>
        <PortfolioIcon activeIcon={activeIcon} />
      </Link>
      <Link
        to={'/search'}
        component={TouchableOpacity}
        onPress={() => console.log('return to search')}>
        <SearchIcon activeIcon={activeIcon} />
      </Link>
      <Link
        to={'/profile'}
        component={TouchableOpacity}
        onPress={() => console.log('return to user')}>
      <UserIcon activeIcon={activeIcon} />
      </Link>
    </NavContainer>
  );
};

export default BottomNav;
