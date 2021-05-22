import React from 'react';
import { Route, Switch } from 'react-router-native';
import HomePage from '../pages/HomePage';
import BottomNav from "../components/BottomNav"
import {Text} from "react-native"
import UserProfilePage from '../pages/UserProfilePage';
import styled from 'styled-components/native';
import Header from '../components/Header';

const Root = styled.SafeAreaView`
  background-color: #323232;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

export const PrivateRoutes = () => {
  return (
    <Root>
      <Header/>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/profile" component={UserProfilePage}/>
      </Switch>
      <BottomNav/>
    </Root>
  );
};


{/* <Header />
<PostScrollView>
  <Post
    postContent="content"
    postTime="8h"
    posterAvatar="avatar"
    posterName="dylan edwards"
  />
  
</PostScrollView>
<BottomNav/>
</Root> */}