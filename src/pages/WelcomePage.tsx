import React from 'react';
import {Button, SafeAreaView, View} from 'react-native';
import { useSelector } from 'react-redux';
import styled from 'styled-components/native';
import {RootState} from "../store"

const StyledView = styled.View`
  background-color: #323232;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`

const TextOne = styled.Text`
  color: ${(props) => props.theme.primaryColor};
`;



const Root = styled.SafeAreaView``;

interface Props {}

const WelcomePage = (props: Props) => {

  const state = useSelector((state: RootState) => state.auth);


  return (
    <StyledView>
      <Button
        title="Increase enthusiasm"
        accessibilityLabel="increment"
        onPress={() => console.log('pressed', state)}
        color="blue"
      />
    </StyledView>
  );
};

export default WelcomePage;
