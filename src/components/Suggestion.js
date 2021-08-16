import React, { Component } from 'react';

export class Suggestion extends Component {
  render() {
    const { suggestion } = this.props;
    return (
      <div className='suggestionUser'>
        <div className='suggestionUserImage'>
          <div className='sugUserButton' role='button'>
            <canvas className='sugImageCanvas' height={53} width={53} />

            <img
              alt=''
              className='sugImage'
              src={suggestion.sugImage}
              style={{ width: '35px', height: '35px', borderRadius: '50%' }}
            />
          </div>
        </div>
        <div className='suggestionUserDetail'>
          <div className='suggestionUserName'>{suggestion.sugName}</div>
          <div className='recomendedBy'>Instagram Official Account</div>
        </div>
        <button className='follow'>Follow</button>
      </div>
    );
  }
}

export default Suggestion;
