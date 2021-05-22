import React from 'react'
import { SafeAreaView, Text } from 'react-native'
import styled from 'styled-components/native';
import Header from "../components/Header"

const Root = styled.SafeAreaView`
  background-color: #323232;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  width: 100%;
`;


const HeaderWrapper = styled.View`
  background-color: #323232;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 16px;
`;





const HomePage = () => {
    return (
        <Root>
            <Header/>
            <Text> YOU ARE LOGGED IN  </Text>
        </Root>
    )
}

export default HomePage
