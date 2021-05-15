import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import GoBackArrow from '../components/GoBackArrow';
import TextInput from '../components/TextInput';

const Root = styled.SafeAreaView`
  background-color: #323232;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  width: 100%;
`;

const Heading = styled.Text`
  color: #ffffff;
  font-size: 36px;
  /* text-decoration: underline; */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding-bottom: 36px;
`;
const SubHeading = styled.Text`
  color: #ffffff;
  font-size: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
const Spacing = styled.View`
  padding: 6px;
`;

const Line = styled.View`
  position: absolute;
  width: 260px;
  height: 1px;
  border: 1px solid #f9f9f9;
`;

const TextWrapper = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-right: 60px;
`;

const LoginButtonWrapper = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: rgba(85, 89, 175, 0.79);
  width: 322px;
  height: 69px;
  border-radius: 5px;
  margin-top: 60%;
`;
const ButtonText = styled.Text`
  font-size: 16px;
  color: white;
`;

const LoginPage = () => {
  const [emailLogin, changeEmail] = useState('');
  const [password, changePassword] = useState('');

  return (
    <Root>
      <GoBackArrow path={'/'} />
      <TextWrapper>
        <Heading>Lets Log You In</Heading>
        <Spacing />
        <Line />
        <SubHeading>Welcome Back!</SubHeading>
      </TextWrapper>
      <Spacing />

      <TextInput
        value={emailLogin}
        onChange={changeEmail}
        placeholder="First Name"
      />

      <TextInput
        value={password}
        onChange={changePassword}
        placeholder="Last Name"
      />
      <LoginButtonWrapper>
        <ButtonText>Login</ButtonText>
      </LoginButtonWrapper>
    </Root>
  );
};

export default LoginPage;
