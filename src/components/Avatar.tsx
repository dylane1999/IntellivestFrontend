import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Link } from 'react-router-native';
import styled from 'styled-components/native';

interface IAvatarProps {
  imageUrl: string;
  size?: string;
  userId: string;
}

const Avatar = (props: IAvatarProps) => {
  const getImageSize = () => {
    if (props.size) {
      return props.size;
    }
    return '50px';
  };

  const AvatarImage = styled.Image`
    height: ${getImageSize()};
    width: ${getImageSize()};
    border-radius: 50px;
  `;

  return (
    <Link
      to={`/profile/${props.userId}`}
      component={TouchableOpacity}
      onPress={() => {
        console.log('return to user');
      }}>
      <AvatarImage
        source={{
          uri: props.imageUrl,
        }}
      />
    </Link>
  );
};

export default Avatar;
