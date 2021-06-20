import React, {ReactElement} from 'react';
import styled from 'styled-components/native';
import {Text} from 'react-native';
import {useParams} from 'react-router-native';
import ProfilePageHeader from '../components/ProfilePageHeader';
import axios from 'axios';

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
    profilePictureLink: string | null
}

const getUserInfo = async (userId: string) => {

  const response = await axios.get(`http:localhost:8080/user?id=${userId}`)
  
}


const UserProfilePage = () => {
  const userIdParams: idParams = useParams();


  return (
    <Root>
      {/* <ProfilePageHeader profilePictureLink={props.prof}/> */}
      <Text> USER PROFILE PAGE {userIdParams.id}</Text>
    </Root>
  );
};

export default UserProfilePage;
