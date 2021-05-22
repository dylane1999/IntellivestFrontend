import React, {useState} from 'react';
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
  justify-content: space-around;
  width: 100%;
  padding: 26px;
`;

const BottomNav = () => {
  const [activeIcon, setActiveIcon] = useState<string>('home');
  return (
    <NavContainer>
      <Link
        active
        to={'/'}
        component={TouchableOpacity}
        onPress={() => {
          console.log('return to homepage');
          setActiveIcon('home');
        }}>
        <HomeIcon activeIcon={activeIcon} />
      </Link>
      <Link
        to={'/portfolio'}
        component={TouchableOpacity}
        onPress={() => {
          console.log('return to portfolio');
          setActiveIcon('portfolio');
        }}>
        <PortfolioIcon activeIcon={activeIcon} />
      </Link>
      <Link
        to={'/search'}
        component={TouchableOpacity}
        onPress={() => {
          console.log('return to search');
          setActiveIcon('search');
        }}>
        <SearchIcon activeIcon={activeIcon} />
      </Link>
      <Link
        to={'/profile'}
        component={TouchableOpacity}
        onPress={() => {
          console.log('return to user');
          setActiveIcon("user")
        }}>
        <UserIcon activeIcon={activeIcon} />
      </Link>
    </NavContainer>
  );
};

export default BottomNav;
