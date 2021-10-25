import React, {ReactElement} from 'react';
import styled from 'styled-components/native';
import {Text} from 'react-native';
import {useParams} from 'react-router-native';
import ProfilePageHeader from '../components/ProfilePageHeader';
import axios from 'axios';
import ProfileFollowerDisplay from '../components/ProfileFollowerDisplay';

const Root = styled.SafeAreaView`
  background-color: #323232;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 80%;
  width: 100%;
`;

type idParams = {
    id: string
}

const getUserInfo = async (userId: string) => {

  const response = await axios.get(`http:localhost:8080/user?id=${userId}`)
  
}


const UserProfilePage = () => {
  const userIdParams: idParams = useParams();


  return (
    <Root>
      <ProfilePageHeader firstname="Dylan" lastname="Edwards" username="dylanedwards290" userId={userIdParams.id} profilePictureLink={null}/>
      <ProfileFollowerDisplay numberFollowers={432} numberFollwoing={234}/>
      <Text> USER PROFILE PAGE {userIdParams.id}</Text>
    </Root>
  );
};

export default UserProfilePage;
