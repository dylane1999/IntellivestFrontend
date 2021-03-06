import React from 'react';
import {Button, SafeAreaView, TouchableOpacity, View, Text} from 'react-native';
import {useSelector} from 'react-redux';
import styled from 'styled-components/native';
import {RootState} from '../store';
import IntellivestLogo from '../assets/IntellivestLogo';
import {Link} from 'react-router-native';
import BackArrow from '../assets/BackArrow';

const Root = styled.SafeAreaView`
  background-color: #323232;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

const WelcomeContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 70%;
  width: 100%;
`;

const ButtonContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const LoginButton = styled.Button`
  background: rgba(146, 146, 146, 0.5);
  border-bottom-left-radius: 5px;
`;

const LogInButtonWrapper = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: rgba(146, 146, 146, 0.5);
  width: 159px;
  height: 69px;
  border-top-left-radius: 5;
  border-bottom-left-radius: 5;
`;

const SignUpButtonWrapper = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: rgba(85, 89, 175, 0.79);
  border-top-right-radius: 5;
  border-bottom-right-radius: 5;
  width: 159px;
  height: 69px;
`;

const StyledLink = styled(Link)`
z-index: 10;
`;

const ButtonText = styled.Text`
  font-size: 16px;
  color: white;
`;

interface Props {}

const WelcomePage = (props: Props) => {
  const state = useSelector((state: RootState) => state.auth);

  return (
    <Root>
      <WelcomeContainer>
        <IntellivestLogo />
        <ButtonContainer>
          <Link to="/login" component={LogInButtonWrapper}>
              <ButtonText> Log In</ButtonText>
          </Link>
          <Link to="/signup" component={SignUpButtonWrapper}>
              <ButtonText> Sign Up </ButtonText>
          </Link>
        </ButtonContainer> 
      </WelcomeContainer>
    </Root>
  );
};

export default WelcomePage;
