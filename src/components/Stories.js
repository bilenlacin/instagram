import React, { Component } from 'react';
import Story from './Story';

export class Stories extends Component {
  componentDidMount() {
    this.props.fetchStory();
  }
  displayStory = () => {
    const { stories } = this.props;
    return stories.map((story) => {
      return <Story story={story} />;
    });
  };

  render() {
    return (
      <div className='storybox'>
        <div className='stories'>
          <ul className='storyUl'>{this.displayStory()}</ul>
        </div>
      </div>
    );
  }
}

export default Stories;
