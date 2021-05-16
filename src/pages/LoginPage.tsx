import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import loginUserWithCredentials from '../actions/loginUserWithCredentials';
import GoBackArrow from '../components/GoBackArrow';
import TextInput from '../components/TextInput';
import store from '../store';

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

  const loginUser = async (userLogin: string, userPassword: string) => {
    console.log("call login user")
    const resData = await store.dispatch(loginUserWithCredentials({login: userLogin, password: userPassword}))
    console.log(resData)
  }

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
        placeholder="Email Login"
      />

      <TextInput
        value={password}
        onChange={changePassword}
        placeholder="Password"
        secure={true}
      />
      <LoginButtonWrapper onPress={()=> loginUser(emailLogin, password)}>
        <ButtonText>Login</ButtonText>
      </LoginButtonWrapper>
    </Root>
  );
};

export default LoginPage;
