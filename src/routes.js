import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/app';
import PostsIndex from './components/posts_index';
import PostNew from './components/post_new';
import PostShow from './components/post_show';

const Greet = ()=>{
  return <div> Hey there! </div>;
}

export default(
  <Route path='/' component={App}>
      <IndexRoute component={PostsIndex}/>
      <Route path='greet' component={Greet}/>
      <Route path='posts/new' component={PostNew}/>
      <Route path='posts/:id' component={PostShow}/>
  </Route>
);
