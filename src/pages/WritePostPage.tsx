import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import styled from 'styled-components/native';
import TextInput from '../components/TextInput';
import {RootState} from '../store';
import {Text, TouchableOpacity, } from 'react-native';
import {setIsWritingPost} from '../reducers/postSlice';
import PostTextInput from '../components/PostTextInput';
import { Overlay } from 'react-native-elements';

const Root = styled.SafeAreaView`
  background-color: #323232;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  width: 100%;
`;

const WritePostOperationsWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 26px;
`;

const CancelText = styled.Text`
  font-size: 16px;
  color: white;
`;

const SubmitText = styled.Text`
  font-size: 16px;
  color: white;
`;

const CancelButton = styled.TouchableOpacity`
  width: 69px;
  height: 36px;
  background: #555ba9;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const WritePostPage = () => {
  const state = useSelector((state: RootState) => state.user.id);
  const dispatch = useDispatch();

  const handleSubmitPost = params => {};

  const [postContent, setPostContent] = useState('');

  return (
    <Root>
      <WritePostOperationsWrapper>
        <TouchableOpacity>
          <CancelText>Cancel</CancelText>
        </TouchableOpacity>
        <CancelButton>
          <SubmitText>Submit</SubmitText>
        </CancelButton>
      </WritePostOperationsWrapper>
      <PostTextInput
        value={postContent}
        onChange={setPostContent}
        placeholder="..."></PostTextInput>
    </Root>
  );
};

export default WritePostPage;
