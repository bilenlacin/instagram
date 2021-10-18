import React, { Component } from 'react';

export class Profile extends Component {
  render() {
    const { profil } = this.props;
    return (
      <div className='profileIcon'>
        <img
          alt={profil.profileUserName}
          className='userAvatar'
          src={profil.profileUserImage}
          style={{ width: '24px', height: '24px', borderRadius: '50%' }}
        />
      </div>
    );
  }
}

export default Profile;
