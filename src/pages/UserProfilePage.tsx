import React, {ReactElement} from 'react';
import styled from 'styled-components/native';
import {Text} from 'react-native';
import {useParams} from 'react-router-native';

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

const UserProfilePage = () => {
  const userIdParams: idParams = useParams();
  return (
    <Root>
      <Text> USER PROFILE PAGE {userIdParams.id}</Text>
    </Root>
  );
};

export default UserProfilePage;
