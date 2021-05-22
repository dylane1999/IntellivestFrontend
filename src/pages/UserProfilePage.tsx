import React, { ReactElement } from 'react'
import styled from 'styled-components/native';
import {Text } from "react-native"

interface Props {
    
}


const Root = styled.SafeAreaView`
  background-color: #323232;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 80%;
  width: 100%;
`;

function UserProfilePage({}: Props): ReactElement {
    return (
        <Root>
            <Text> USER PROFILE PAGE</Text>
        </Root>
    )
}

export default UserProfilePage
