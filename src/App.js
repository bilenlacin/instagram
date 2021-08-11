import './App.css';

import React, { Component } from 'react';

export class App extends Component {
  render() {
    return (
      <div className='instaApp'>
        <nav className='navbar navbar-expand-lg' id='navbar-app'>
          <div className='navContainer'>
            <a className='navbar-brand' href='#'>
              <img
                src='icons/InstagramLogo.png'
                alt=''
                width='103'
                height='27'
                class='d-inline-block align-text-top'
              />
            </a>

            <div className='searchbar'>
              <img
                className='searchIcon'
                src='icons/search.svg'
                width='10'
                height='10'
                alt=''
              />
              <input
                class='searchInput '
                type='search'
                placeholder='Search'
                aria-label='Search'
              />
            </div>
            <div className='nav'>
              <div className='navIcon'>
                <a href='/' tabindex='0'>
                  <svg
                    aria-label='Home'
                    class='_8-yf5 '
                    fill='#262626'
                    height='22'
                    role='img'
                    viewBox='0 0 48 48'
                    width='22'
                  >
                    <path d='M45.5 48H30.1c-.8 0-1.5-.7-1.5-1.5V34.2c0-2.6-2.1-4.6-4.6-4.6s-4.6 2.1-4.6 4.6v12.3c0 .8-.7 1.5-1.5 1.5H2.5c-.8 0-1.5-.7-1.5-1.5V23c0-.4.2-.8.4-1.1L22.9.4c.6-.6 1.6-.6 2.1 0l21.5 21.5c.3.3.4.7.4 1.1v23.5c.1.8-.6 1.5-1.4 1.5z'></path>
                  </svg>
                </a>
              </div>
              <div className='navIcon'>
                <a class='xWeGp' href='/direct/inbox/' tabindex='0'>
                  <svg
                    aria-label='Direct'
                    class='_8-yf5 '
                    fill='#262626'
                    height='22'
                    role='img'
                    viewBox='0 0 48 48'
                    width='22'
                  >
                    <path d='M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z'></path>
                  </svg>
                </a>
              </div>
              <div className='navIcon'>
                <button class='newPost' type='button'>
                  <svg
                    aria-label='New Post'
                    class='_8-yf5 '
                    fill='#262626'
                    height='22'
                    role='img'
                    viewBox='0 0 48 48'
                    width='22'
                  >
                    <path d='M31.8 48H16.2c-6.6 0-9.6-1.6-12.1-4C1.6 41.4 0 38.4 0 31.8V16.2C0 9.6 1.6 6.6 4 4.1 6.6 1.6 9.6 0 16.2 0h15.6c6.6 0 9.6 1.6 12.1 4C46.4 6.6 48 9.6 48 16.2v15.6c0 6.6-1.6 9.6-4 12.1-2.6 2.5-5.6 4.1-12.2 4.1zM16.2 3C10 3 7.8 4.6 6.1 6.2 4.6 7.8 3 10 3 16.2v15.6c0 6.2 1.6 8.4 3.2 10.1 1.6 1.6 3.8 3.1 10 3.1h15.6c6.2 0 8.4-1.6 10.1-3.2 1.6-1.6 3.1-3.8 3.1-10V16.2c0-6.2-1.6-8.4-3.2-10.1C40.2 4.6 38 3 31.8 3H16.2z'></path>
                    <path d='M36.3 25.5H11.7c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5h24.6c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5z'></path>
                    <path d='M24 37.8c-.8 0-1.5-.7-1.5-1.5V11.7c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5v24.6c0 .8-.7 1.5-1.5 1.5z'></path>
                  </svg>
                </button>
              </div>
              <div className='navIcon'>
                <a href='/explore/' tabindex='0'>
                  <svg
                    aria-label='Find People'
                    class='_8-yf5 '
                    fill='#262626'
                    height='22'
                    role='img'
                    viewBox='0 0 48 48'
                    width='22'
                  >
                    <path
                      clip-rule='evenodd'
                      d='M24 0C10.8 0 0 10.8 0 24s10.8 24 24 24 24-10.8 24-24S37.2 0 24 0zm0 45C12.4 45 3 35.6 3 24S12.4 3 24 3s21 9.4 21 21-9.4 21-21 21zm10.2-33.2l-14.8 7c-.3.1-.6.4-.7.7l-7 14.8c-.3.6-.2 1.3.3 1.7.3.3.7.4 1.1.4.2 0 .4 0 .6-.1l14.8-7c.3-.1.6-.4.7-.7l7-14.8c.3-.6.2-1.3-.3-1.7-.4-.5-1.1-.6-1.7-.3zm-7.4 15l-5.5-5.5 10.5-5-5 10.5z'
                      fill-rule='evenodd'
                    ></path>
                  </svg>
                </a>
              </div>
              <div className='navIcon'>
                <a class='_0ZPOP kIKUG ' href='/accounts/activity/'>
                  <svg
                    aria-label='Activity Feed'
                    class='_8-yf5 '
                    fill='#262626'
                    height='22'
                    role='img'
                    viewBox='0 0 48 48'
                    width='22'
                  >
                    <path d='M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z'></path>
                  </svg>
                </a>
              </div>
              <div className='navIcon'>
                <img
                  alt="bilenlacin's profile picture"
                  className='userAvatar'
                  // crossOrigin='anonymous'
                  // data-testid='user-avatar'
                  // draggable='false'
                  src='icons/person.svg'
                  style={{ width: '22px', height: '22px' }}
                />
              </div>
            </div>
          </div>
        </nav>
        <div className='mainContainer'>
          <div className='albumContainer'>
            <div className='album'>
              <div className='storybox'>
                <div className='stories'>
                  <ul className='storyUl'>
                    <li className='liSpace'></li>
                    <li className='storyli'>
                      <canvas
                        className='canvasBorder'
                        height='83'
                        width='83'
                      ></canvas>
                      <img
                        src='icons/earthOffice.jpg'
                        alt=''
                        className='stroyimage'
                        height='56px'
                        width='56px'
                      />
                      <div className='storyUser'>earthofficial</div>
                    </li>

                    <li className='storyli'>
                      <canvas
                        className='canvasBorder'
                        height='83'
                        width='83'
                      ></canvas>
                      <img
                        src='icons/earthOffice.jpg'
                        alt=''
                        className='stroyimage'
                        height='56px'
                        width='56px'
                      />
                      <div className='storyUser'>earthofficial</div>
                    </li>

                    <li className='storyli'>
                      <canvas
                        className='canvasBorder'
                        height='83'
                        width='83'
                      ></canvas>
                      <img
                        src='icons/earthOffice.jpg'
                        alt=''
                        className='stroyimage'
                        height='56px'
                        width='56px'
                      />
                      <div className='storyUser'>earthofficial</div>
                    </li>

                    <li className='storyli'>
                      <canvas
                        className='canvasBorder'
                        height='83'
                        width='83'
                      ></canvas>
                      <img
                        src='icons/earthOffice.jpg'
                        alt=''
                        className='stroyimage'
                        height='56px'
                        width='56px'
                      />
                      <div className='storyUser'>earthofficial</div>
                    </li>

                    <li className='storyli'>
                      <canvas
                        className='canvasBorder'
                        height='83'
                        width='83'
                      ></canvas>
                      <img
                        src='icons/earthOffice.jpg'
                        alt=''
                        className='stroyimage'
                        height='56px'
                        width='56px'
                      />
                      <div className='storyUser'>earthofficial</div>
                    </li>

                    <li className='storyli'>
                      <canvas
                        className='canvasBorder'
                        height='83'
                        width='83'
                      ></canvas>
                      <img
                        src='icons/earthOffice.jpg'
                        alt=''
                        className='stroyimage'
                        height='56px'
                        width='56px'
                      />
                      <div className='storyUser'>earthofficial</div>
                    </li>

                    <li className='storyli'>
                      <canvas
                        className='canvasBorder'
                        height='83'
                        width='83'
                      ></canvas>
                      <img
                        src='icons/earthOffice.jpg'
                        alt=''
                        className='stroyimage'
                        height='56px'
                        width='56px'
                      />
                      <div className='storyUser'>earthofficial</div>
                    </li>

                    <li className='storyli'>
                      <canvas
                        className='canvasBorder'
                        height='83'
                        width='83'
                      ></canvas>
                      <img
                        src='icons/earthOffice.jpg'
                        alt=''
                        className='stroyimage'
                        height='56px'
                        width='56px'
                      />
                      <div className='storyUser'>earthofficial</div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='post'>
                <div className='postHeader'>
                  <div className='userImage'>
                    <canvas
                      className='userCanvasBorder'
                      height='53'
                      width='53'
                    ></canvas>
                    <img
                      src='icons/earthOffice.jpg'
                      alt=''
                      height='32px'
                      width='32px'
                    />
                  </div>
                  <div className='userName'>earthofficial</div>
                  <div
                    className='moreIcon                                                                                                              '
                    style={{ height: '24px' }}
                  >
                    <svg
                      aria-label='More options'
                      className='_8-yf5 '
                      fill='#262626'
                      height={16}
                      role='img'
                      viewBox='0 0 48 48'
                      width={16}
                    >
                      <circle
                        clipRule='evenodd'
                        cx={8}
                        cy={24}
                        fillRule='evenodd'
                        r='4.5'
                      />
                      <circle
                        clipRule='evenodd'
                        cx={24}
                        cy={24}
                        fillRule='evenodd'
                        r='4.5'
                      />
                      <circle
                        clipRule='evenodd'
                        cx={40}
                        cy={24}
                        fillRule='evenodd'
                        r='4.5'
                      />
                    </svg>
                  </div>
                </div>
                <div className='postImage'>
                  <img className='postPıtcure' src='icons/natgeo.jpg' alt='' />
                </div>
                <div className='postIcons'>
                  <div className='postCommentIcons'>
                    <button className='iconButton'>
                      <svg
                        aria-label='Like'
                        class='_8-yf5 '
                        fill='#262626'
                        height='24'
                        role='img'
                        viewBox='0 0 48 48'
                        width='24'
                      >
                        <path d='M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z'></path>
                      </svg>
                    </button>
                    <button className='iconButton'>
                      <svg
                        aria-label='Comment'
                        class='_8-yf5 '
                        fill='#262626'
                        height='24'
                        role='img'
                        viewBox='0 0 48 48'
                        width='24'
                      >
                        <path
                          clip-rule='evenodd'
                          d='M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z'
                          fill-rule='evenodd'
                        ></path>
                      </svg>
                    </button>
                    <button className='iconButton'>
                      {' '}
                      <svg
                        aria-label='Share Post'
                        class='_8-yf5 '
                        fill='#262626'
                        height='24'
                        role='img'
                        viewBox='0 0 48 48'
                        width='24'
                      >
                        <path d='M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z'></path>
                      </svg>
                    </button>
                  </div>
                  <div className='postSignIcon'>
                    <button className='iconButton'>
                      <svg
                        aria-label='Save'
                        class='_8-yf5 '
                        // fill='#8e8e8e'
                        height='24'
                        role='img'
                        viewBox='0 0 48 48'
                        width='24'
                      >
                        <path d='M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z'></path>
                      </svg>
                    </button>
                  </div>
                </div>
                <div className='postLike'>
                  <div className='likeValue'>
                    <a className='likeVal' href='#'>
                      <span>2,231</span> likes
                    </a>
                  </div>
                </div>
                <div className='comments'>
                  <div className='userComment'>
                    <a
                      class='userNameComment'
                      title='earthoffical'
                      href='/earthoffical/'
                      tabindex='0'
                    >
                      earthoffical
                    </a>
                    &nbsp;
                    <span>
                      Photos by Pete McBride @pedromcbride / The gritty behind
                      the pretty: While wildfire smoke makes for dramatic
                      sunsets, it has created drama for fresh air across the
                      West (and the world) lately. In the Rocky Mountains where
                      I live, smoke has tipped the air quality index over 150,
                      into the “unhealthy” category, multiple days in a row. And
                      on Sunday in early August, Denver’s air quality was
                      reported at one point to be the worst in the world—an
                      eye-opener to the exponential changes happening to our
                      big, shared home. The second image shows my front-door
                      view a few years ago during the Basalt Fire. My heart goes
                      out to all those fighting wildfires around the world—from
                      California and Canada to Greece and Turkey and beyond. To
                      see more of our natural world, follow
                    </span>
                    <button className='moreButton'>... more</button>
                  </div>
                  <div className='commentDiv'>
                    <a className='commentViewer'>
                      View all <span>111</span> comments
                    </a>
                    <div className='followersComment'>
                      <a
                        class='followersName '
                        href='/vximcmxcii/'
                        tabindex='0'
                      >
                        vximcmxcii
                      </a>
                      &nbsp;
                      <span>You remained silent for Turkey!!❤️</span>
                      <div className='followerCommentsLike'>
                        <svg
                          aria-label='Like'
                          class='_8-yf5 '
                          fill='#262626'
                          height='12'
                          role='img'
                          viewBox='0 0 48 48'
                          width='12'
                        >
                          <path d='M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z'></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='postTime'>
                  <time>10 HOURS AGO</time>
                </div>
                <div className='postMessageArea'>
                  <div className='message'>
                    <button className='emojiButton'>
                      <svg
                        aria-label='Emoji'
                        class='emojiSvg '
                        fill='#262626'
                        height='24'
                        role='img'
                        viewBox='0 0 48 48'
                        width='24'
                      >
                        <path d='M24 48C10.8 48 0 37.2 0 24S10.8 0 24 0s24 10.8 24 24-10.8 24-24 24zm0-45C12.4 3 3 12.4 3 24s9.4 21 21 21 21-9.4 21-21S35.6 3 24 3z'></path>
                        <path d='M34.9 24c0-1.4-1.1-2.5-2.5-2.5s-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5zm-21.8 0c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5-2.5-1.1-2.5-2.5zM24 37.3c-5.2 0-8-3.5-8.2-3.7-.5-.6-.4-1.6.2-2.1.6-.5 1.6-.4 2.1.2.1.1 2.1 2.5 5.8 2.5 3.7 0 5.8-2.5 5.8-2.5.5-.6 1.5-.7 2.1-.2.6.5.7 1.5.2 2.1 0 .2-2.8 3.7-8 3.7z'></path>
                      </svg>
                    </button>
                    <div className='textareaDiv'>
                      <textarea
                        name='postArea'
                        id='postArea'
                        placeholder='Add a comment...'
                        //cols='74'
                      ></textarea>
                    </div>
                    <button class='postButton' type='submit'>
                      Post
                    </button>
                  </div>
                </div>
              </div>
              <div className='post'>
                <div className='postHeader'>
                  <div className='userImage'>
                    <canvas
                      className='userCanvasBorder'
                      height='53'
                      width='53'
                    ></canvas>
                    <img
                      src='icons/earthOffice.jpg'
                      alt=''
                      height='32px'
                      width='32px'
                    />
                  </div>
                  <div className='userName'>earthofficial</div>
                  <div
                    className='moreIcon                                                                                                              '
                    style={{ height: '24px' }}
                  >
                    <svg
                      aria-label='More options'
                      className='_8-yf5 '
                      fill='#262626'
                      height={16}
                      role='img'
                      viewBox='0 0 48 48'
                      width={16}
                    >
                      <circle
                        clipRule='evenodd'
                        cx={8}
                        cy={24}
                        fillRule='evenodd'
                        r='4.5'
                      />
                      <circle
                        clipRule='evenodd'
                        cx={24}
                        cy={24}
                        fillRule='evenodd'
                        r='4.5'
                      />
                      <circle
                        clipRule='evenodd'
                        cx={40}
                        cy={24}
                        fillRule='evenodd'
                        r='4.5'
                      />
                    </svg>
                  </div>
                </div>
                <div className='postImage'>
                  <img className='postPıtcure' src='icons/natgeo.jpg' alt='' />
                </div>
                <div className='postIcons'>
                  <div className='postCommentIcons'>
                    <button className='iconButton'>
                      <svg
                        aria-label='Like'
                        class='_8-yf5 '
                        fill='#262626'
                        height='24'
                        role='img'
                        viewBox='0 0 48 48'
                        width='24'
                      >
                        <path d='M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z'></path>
                      </svg>
                    </button>
                    <button className='iconButton'>
                      <svg
                        aria-label='Comment'
                        class='_8-yf5 '
                        fill='#262626'
                        height='24'
                        role='img'
                        viewBox='0 0 48 48'
                        width='24'
                      >
                        <path
                          clip-rule='evenodd'
                          d='M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z'
                          fill-rule='evenodd'
                        ></path>
                      </svg>
                    </button>
                    <button className='iconButton'>
                      {' '}
                      <svg
                        aria-label='Share Post'
                        class='_8-yf5 '
                        fill='#262626'
                        height='24'
                        role='img'
                        viewBox='0 0 48 48'
                        width='24'
                      >
                        <path d='M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z'></path>
                      </svg>
                    </button>
                  </div>
                  <div className='postSignIcon'>
                    <button className='iconButton'>
                      <svg
                        aria-label='Save'
                        class='_8-yf5 '
                        // fill='#8e8e8e'
                        height='24'
                        role='img'
                        viewBox='0 0 48 48'
                        width='24'
                      >
                        <path d='M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z'></path>
                      </svg>
                    </button>
                  </div>
                </div>
                <div className='postLike'>
                  <div className='likeValue'>
                    <a className='likeVal' href='#'>
                      <span>2,231</span> likes
                    </a>
                  </div>
                </div>
                <div className='comments'>
                  <div className='userComment'>
                    <a
                      class='userNameComment'
                      title='earthoffical'
                      href='/earthoffical/'
                      tabindex='0'
                    >
                      earthoffical
                    </a>
                    &nbsp;
                    <span>
                      Photos by Pete McBride @pedromcbride / The gritty behind
                      the pretty: While wildfire smoke makes for dramatic
                      sunsets, it has created drama for fresh air across the
                      West (and the world) lately. In the Rocky Mountains where
                      I live, smoke has tipped the air quality index over 150,
                      into the “unhealthy” category, multiple days in a row. And
                      on Sunday in early August, Denver’s air quality was
                      reported at one point to be the worst in the world—an
                      eye-opener to the exponential changes happening to our
                      big, shared home. The second image shows my front-door
                      view a few years ago during the Basalt Fire. My heart goes
                      out to all those fighting wildfires around the world—from
                      California and Canada to Greece and Turkey and beyond. To
                      see more of our natural world, follow
                    </span>
                    <button className='moreButton'>... more</button>
                  </div>
                  <div className='commentDiv'>
                    <a className='commentViewer'>
                      View all <span>111</span> comments
                    </a>
                    <div className='followersComment'>
                      <a
                        class='followersName '
                        href='/vximcmxcii/'
                        tabindex='0'
                      >
                        vximcmxcii
                      </a>
                      &nbsp;
                      <span>You remained silent for Turkey!!❤️</span>
                      <div className='followerCommentsLike'>
                        <svg
                          aria-label='Like'
                          class='_8-yf5 '
                          fill='#262626'
                          height='12'
                          role='img'
                          viewBox='0 0 48 48'
                          width='12'
                        >
                          <path d='M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z'></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='postTime'>
                  <time>10 HOURS AGO</time>
                </div>
                <div className='postMessageArea'>
                  <div className='message'>
                    <button className='emojiButton'>
                      <svg
                        aria-label='Emoji'
                        class='emojiSvg '
                        fill='#262626'
                        height='24'
                        role='img'
                        viewBox='0 0 48 48'
                        width='24'
                      >
                        <path d='M24 48C10.8 48 0 37.2 0 24S10.8 0 24 0s24 10.8 24 24-10.8 24-24 24zm0-45C12.4 3 3 12.4 3 24s9.4 21 21 21 21-9.4 21-21S35.6 3 24 3z'></path>
                        <path d='M34.9 24c0-1.4-1.1-2.5-2.5-2.5s-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5zm-21.8 0c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5-2.5-1.1-2.5-2.5zM24 37.3c-5.2 0-8-3.5-8.2-3.7-.5-.6-.4-1.6.2-2.1.6-.5 1.6-.4 2.1.2.1.1 2.1 2.5 5.8 2.5 3.7 0 5.8-2.5 5.8-2.5.5-.6 1.5-.7 2.1-.2.6.5.7 1.5.2 2.1 0 .2-2.8 3.7-8 3.7z'></path>
                      </svg>
                    </button>
                    <div className='textareaDiv'>
                      <textarea
                        name='postArea'
                        id='postArea'
                        placeholder='Add a comment...'
                        //cols='74'
                      ></textarea>
                    </div>
                    <button class='postButton' type='submit'>
                      Post
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
          <div className='endNAv'>
            <nav className='aboutInstNav'>
              <ul className='navUl'>
                <li className='navLi'>
                  <a className='navA' href='#'>
                    About
                  </a>
                </li>
                <li className='navLi'>
                  <a className='navA' href='#'>
                    Help
                  </a>
                </li>
                <li className='navLi'>
                  <a className='navA' href='#'>
                    Press
                  </a>
                </li>
                <li className='navLi'>
                  <a className='navA' href='#'>
                    API
                  </a>
                </li>
                <li className='navLi'>
                  <a className='navA' href='#'>
                    Jobs
                  </a>
                </li>
                <li className='navLi'>
                  <a className='navA' href='#'>
                    Privacy
                  </a>
                </li>
                <li className='navLi'>
                  <a className='navA' href='#'>
                    Terms
                  </a>
                </li>
                <li className='navLi'>
                  <a className='navA' href='#'>
                    Locations
                  </a>
                </li>
                <li className='navLi'>
                  <a className='navA' href='#'>
                    {' '}
                  </a>
                </li>
                <li className='navLi'>
                  <a className='navA' href='#'>
                    Top Accounts
                  </a>
                </li>
                <li className='navLi'>
                  <a className='navA' href='#'>
                    Hashtags
                  </a>
                </li>
                <li className='navLi'>
                  <a className='navA' href='#'>
                    Language
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className='aboutInsta'>
            <span>© 2021 INSTAGRAM FROM FACEBOOK</span>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
