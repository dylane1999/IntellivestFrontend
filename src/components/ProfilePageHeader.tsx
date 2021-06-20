import React from 'react';
import getProfilePictureHook from '../hooks/getProfilePictureHook';
import Avatar from './Avatar';

/**
 * @interface profilePictureLink
 * @field  profilePictureLink: string | null;
 * @field userId: string;
 */
interface IProfilePageHeader {
  profilePictureLink: string | null;
  userId: string;
}


const ProfilePageHeader = (props: IProfilePageHeader) => {
  const profilePic: string = getProfilePictureHook(props.profilePictureLink);

  return (
      <Avatar imageUrl={profilePic} userId={props.userId} />
  );
};

export default ProfilePageHeader;
