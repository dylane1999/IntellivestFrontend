import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import styled from 'styled-components/native';
import IntellivestSmallLogo from '../assets/IntellivestSmallLogo';
import CreatePostIcon from '../assets/CreatePostIcon';
import {Link} from 'react-router-native';
import GoBackArrow from './GoBackArrow';
import HeaderBackArrow from '../assets/HeaderBackArrow';
import {RootState} from '../store';
import {useDispatch, useSelector} from 'react-redux';
import { setIsWritingPost } from '../reducers/postSlice';

const PrimaryHeaderWrapper = styled.View`
  background-color: #323232;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const SecondaryHeaderWrapper = styled.View`
  background-color: #323232;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 16px;
`;

const Underline = styled.View`
  position: absolute;
  width: 100%;
  height: 0px;
  left: 0px;
  top: 65px;

  border: 1px solid #a2a2a2;
`;

const Header = () => {
  const userId = useSelector<RootState>(state => state.user.id);
  const isWritingPost = useSelector<RootState>(
    state => state.post.isWritingPost,
  );
  const dispatch = useDispatch()

  return (
    <>
      {!isWritingPost && (
        <PrimaryHeaderWrapper>
          <SecondaryHeaderWrapper>
            <HeaderBackArrow />
            <Link
              to={'/'}
              component={TouchableOpacity}
              onPress={() => console.log('return to homepage')}>
              <IntellivestSmallLogo />
            </Link>
            <Link
              to={`/write/post/${userId}`}
              component={TouchableOpacity}
              onPress={() => {
                console.log('go to create post page');
                dispatch(setIsWritingPost(true))
              }}>
              <CreatePostIcon />
            </Link>
          </SecondaryHeaderWrapper>
          <Underline />
        </PrimaryHeaderWrapper>
      )}
    </>
  );
};

export default Header;
