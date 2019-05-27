import React, { Component } from 'react';
import Header from './Header';
import Post from './Post';

export default class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        name: 'Danilo Santos',
        avatar: 'https://avatars0.githubusercontent.com/u/37278681?s=400v=4',
        time: 'há 3 min',
        body:
          'Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero posuere vulputate. Etiam elit elit, elementum sed varius at, adipiscing vitae est. Sed nec felis',
      },
      {
        id: 2,
        name: 'Augusto Correia',
        avatar: 'https://avatars0.githubusercontent.com/u/37278681?s=400v=4',
        time: 'há 30 min',
        body:
          'Pellentesque, lacinia dui sed, ultricies sapien. Pellentesque orci lectus, consectetur vel posuere posuere, rutrum eu ipsum.',
      },
      {
        id: 3,
        name: 'Danilo Augusto',
        avatar: 'https://avatars0.githubusercontent.com/u/37278681?s=400v=4',
        time: 'há 45 min',
        body:
          'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
      },
      {
        id: 4,
        name: 'Correia Santos',
        avatar: 'https://avatars0.githubusercontent.com/u/37278681?s=400v=4',
        time: 'há 53 min',
        body:
          'There are many variations of passages of Lorem Ipsum available, but the majority.',
      },
    ],
  };

  render() {
    const { posts } = this.state;

    return (
      <div>
        <Header />
        <div className="post-container">
          {posts && posts.map(post => <Post key={post.id} data={post} />)}
        </div>
      </div>
    );
  }
}
