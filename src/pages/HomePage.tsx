import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import styled from 'styled-components/native';
import Header from '../components/Header';
import Post from '../components/Post';
import BottomNav from '../components/BottomNav';
import { useHistory } from "react-router-native";

const Root = styled.SafeAreaView`
  background-color: #323232;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 80%;
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

const PostScrollView = styled.ScrollView.attrs({
  contentContainerStyle: props => {
    return {
      alignItems: 'center',
      justifyContent: 'center',
    };
  },
})`
  width: 100%;
`;



const HomePage = () => {
  let history = useHistory();

  console.log("history", history.location)
  return (
    <Root>
      <PostScrollView>
        <Post
          postContent="content"
          postTime="8h"
          posterAvatar=""
          posterName="dylan edwards"
        />
      </PostScrollView>
    </Root>
  );
};

export default HomePage;
