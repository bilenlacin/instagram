import React, { Component } from 'react';
import { connectAdvanced } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import ProfileComponent from '../components/ProfileComponent';
import Navbar from './Navbar';
import './Profile.css';
import { fetchProfile } from '../action-creators';

export class Profile extends Component {
  forwardProfile = () => {
    const profileName = this.props.match.params.profile;
    const { profile } = this.props;
    return profile.map((prof) => {
      if (prof.profileUserName === profileName) {
        return (
          <ProfileComponent
            prof={prof}
            fetchProfile={this.props.fetchProfile}
          />
        );
      }
    });
  };
  render() {
    return (
      <div>
        {this.forwardProfile()}
        <Navbar />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  const { profile } = state.profileReducer;
  return { profile };
};

export default withRouter(
  connect(mapStateToProps, { fetchProfile: fetchProfile })(Profile)
);
