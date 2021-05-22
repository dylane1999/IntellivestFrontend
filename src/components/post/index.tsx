import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import styled from 'styled-components/native';

/**
 * @interface IPostProps
 * @field postTime: string;
 * @field posterName: string;
 * @field postContent: string;
 * @field posterAvatar: string;
 *
 */
interface IPostProps {
  postTime: string;
  posterName: string;
  postContent: string;
  posterAvatar: string;
}

const PostRoot = styled.View`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  padding: 16px;
  border-style: solid; 
  border-bottom-color: #A2A2A2; 
  border-bottom-width: 1px;
  border-top-width: 1px;
  border-top-color: #A2A2A2;
`;

const PostTitleText = styled.Text`
  font-size: 16px;
  color: #ffffff;
  padding-bottom: 16px;
`;

const PostContentText = styled.Text`
  font-size: 12px;
  color: #ffffff;
`;

const PostTextWrapper = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;




/**
 * post component
 * @param props - the post props
 * @returns - jsx for post
 */
const Post = (props: IPostProps) => {
  return (
    <PostRoot>
      <PostTextWrapper>
        <PostTitleText> hello wrol</PostTitleText>
        <PostContentText> conent </PostContentText>
      </PostTextWrapper>
    </PostRoot>
  );
};

export default Post;
