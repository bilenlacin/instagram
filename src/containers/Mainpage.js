import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Stories from '../components/Stories';
import Post from '../components/Post';
import Suggestions from '../components/Suggestions';
import Endnav from '../components/Endnav';
import { fetchPosts, fetchStory } from '../action-creators';

class Mainpage extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  displayPosts = () => {
    const { posts } = this.props;
    if (typeof posts === 'undefined') {
      return;
    }
    return posts.map((post) => {
      return <Post post={post} />;
    });
  };
  render() {
    const { stories } = this.props;
    return (
      <div className='mainContainer'>
        <div className='albumContainer'>
          <div className='album'>
            <Stories stories={stories} fetchStory={this.props.fetchStory} />
            {this.displayPosts()}
          </div>
        </div>
        <Suggestions />
        <Endnav />
        <div className='aboutInsta'>
          <span>© 2021 INSTAGRAM FROM FACEBOOK</span>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  const { posts } = state.postReducer;
  const { stories } = state.storyReducer;
  return { posts, stories };
};

export default withRouter(
  connect(mapStateToProps, { fetchPosts: fetchPosts, fetchStory: fetchStory })(
    Mainpage
  )
);
