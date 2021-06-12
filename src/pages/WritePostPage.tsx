import React from 'react';
import {useSelector} from 'react-redux';
import styled from 'styled-components/native';
import TextInput from '../components/TextInput';
import {RootState} from '../store';
import {Text} from "react-native"

const Root = styled.SafeAreaView`
  background-color: #323232;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 80%;
  width: 100%;
`;

const WritePostPage = () => {
  const state = useSelector((state: RootState) => state.user.id);

  return <Root>
    <Text> fdafsdfadsf</Text>
  </Root>;
};

export default WritePostPage;
