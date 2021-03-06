import React from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {Link} from 'react-router-native';
import styled from 'styled-components/native';
import Avatar from './Avatar';

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
  posterAvatar?: string;
  posterId: string;
}

const PostRoot = styled.View`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  padding: 16px;
  border-style: solid;
  border-bottom-color: #a2a2a2;
  border-bottom-width: 1px;
  border-top-width: 1px;
  border-top-color: #a2a2a2;
`;

const PostAuthorText = styled.Text`
  font-size: 16px;
  color: #ffffff;
  padding-bottom: 16px;
`;

const PostContentText = styled.Text`
  font-size: 12px;
  color: #ffffff;
`;

const PostTextWrapper = styled.View`
  padding-left: 16px;
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
  const getAvatar = () => {
    if (props.posterAvatar) {
      return props.posterAvatar;
    }
    return 'https://reactnative.dev/img/tiny_logo.png';
  };

  return (
    <PostRoot>
      <Avatar imageUrl={getAvatar()} userId={props.posterId} />
      <PostTextWrapper>
        <Link
          to={`/profile/${props.posterId}`}
          component={TouchableOpacity}
          onPress={() => {
            console.log(`go to user: ${props.posterId} profile`);
          }}>
          <PostAuthorText>
            {props.posterName} - {props.postTime}
          </PostAuthorText>
        </Link>
        <PostContentText> {props.postContent} </PostContentText>
      </PostTextWrapper>
    </PostRoot>
  );
};

export default Post;
