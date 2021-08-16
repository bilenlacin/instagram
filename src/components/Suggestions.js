import React, { Component } from 'react';

export class Suggestions extends Component {
  render() {
    return (
      <div className='sugContainer'>
        <div className='suguserInfo'>
          <div className='sugUserImage'>
            <a href='#'>
              <img
                src='icons/person.svg'
                alt=''
                className='sugUserAvatar'
                height='56px'
                width='56px'
              />
            </a>
          </div>
          <div className='sugUserName'>bilenlacin </div>
          <button className='switch'>Switch</button>
        </div>
        <div className='suggestionHeader'>
          <div className='suggestionText'>Suggestions For You</div>
          <button className='seeAll'>See All</button>
        </div>
        <div className='suggestionUserDiv'>
          <div className='suggestionUser'>
            <div className='suggestionUserImage'>
              <div className='sugUserButton' role='button'>
                <canvas className='sugImageCanvas' height={53} width={53} />

                <img
                  alt=''
                  className='sugImage'
                  src='icons/instagramImage.jpg'
                  style={{ width: '32px', height: '32px' }}
                />
              </div>
            </div>
            <div className='suggestionUserDetail'>
              <div className='suggestionUserName'>instagram</div>
              <div className='recomendedBy'>Instagram Official Account</div>
            </div>
            <button className='follow'>Follow</button>
          </div>
          <div className='suggestionUser'>
            <div className='suggestionUserImage'>
              <div className='sugUserButton' role='button'>
                <canvas className='sugImageCanvas' height={53} width={53} />

                <img
                  alt=''
                  className='sugImage'
                  src='icons/instagramImage.jpg'
                  style={{ width: '32px', height: '32px' }}
                />
              </div>
            </div>
            <div className='suggestionUserDetail'>
              <div className='suggestionUserName'>instagram</div>
              <div className='recomendedBy'>Instagram Official Account</div>
            </div>
            <button className='follow'>Follow</button>
          </div>
          <div className='suggestionUser'>
            <div className='suggestionUserImage'>
              <div className='sugUserButton' role='button'>
                <canvas className='sugImageCanvas' height={53} width={53} />

                <img
                  alt=''
                  className='sugImage'
                  src='icons/instagramImage.jpg'
                  style={{ width: '32px', height: '32px' }}
                />
              </div>
            </div>
            <div className='suggestionUserDetail'>
              <div className='suggestionUserName'>instagram</div>
              <div className='recomendedBy'>Instagram Official Account</div>
            </div>
            <button className='follow'>Follow</button>
          </div>
          <div className='suggestionUser'>
            <div className='suggestionUserImage'>
              <div className='sugUserButton' role='button'>
                <canvas className='sugImageCanvas' height={53} width={53} />

                <img
                  alt=''
                  className='sugImage'
                  src='icons/instagramImage.jpg'
                  style={{ width: '32px', height: '32px' }}
                />
              </div>
            </div>
            <div className='suggestionUserDetail'>
              <div className='suggestionUserName'>instagram</div>
              <div className='recomendedBy'>Instagram Official Account</div>
            </div>
            <button className='follow'>Follow</button>
          </div>

          <div className='suggestionUser'>
            <div className='suggestionUserImage'>
              <div className='sugUserButton' role='button'>
                <canvas className='sugImageCanvas' height={53} width={53} />

                <img
                  alt=''
                  className='sugImage'
                  src='icons/instagramImage.jpg'
                  style={{ width: '32px', height: '32px' }}
                />
              </div>
            </div>
            <div className='suggestionUserDetail'>
              <div className='suggestionUserName'>instagram</div>
              <div className='recomendedBy'>Instagram Official Account</div>
            </div>
            <button className='follow'>Follow</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Suggestions;
