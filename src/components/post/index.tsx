import React from 'react'
import { View } from 'react-native'
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
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  padding: 26px;
`;


/**
 * post component 
 * @param props - the post props 
 * @returns - jsx for post 
 */
const Post = (props: IPostProps) => {
    return (
        <View>
            
        </View>
    )
}

export default Post
