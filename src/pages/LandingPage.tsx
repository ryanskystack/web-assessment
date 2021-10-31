
import { PossibleFragmentSpreadsRule } from 'graphql';
import * as React from 'react';
import ArticleList from '../components/ArticleList';
import ExcerptPage from './LatestPage';

interface Props{
    posts: any[] 
}

const LandingPage:React.FC<Props>=({posts})=> {
console.log("posts:",PossibleFragmentSpreadsRule)

  return (
    <div >
      <div  style={{ display: 'flex', flexDirection: 'row' }}>
        
        <ArticleList posts={posts} />
        <ExcerptPage posts={posts} />
      </div>
    </div>
  );
};



export default LandingPage;