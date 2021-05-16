import React from 'react'
import { SafeAreaView, Text } from 'react-native'
import styled from 'styled-components/native';

const Root = styled.SafeAreaView`
  background-color: #323232;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

const HomePage = () => {
    return (
        <Root>
            <Text> YOU ARE LOGGED IN  </Text>
            {console.log("logggedddd innnnnnn")}
        </Root>
    )
}

export default HomePage
