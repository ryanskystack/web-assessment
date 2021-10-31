import { useQuery } from "@apollo/client";
import React from "react";
import FetchHolder from "../components/FetchHolder";
import List from "../components/List";
import { ArticlesList } from "../generated/graphql";

import '../style.css';
interface Props{
  posts:any[]
}
const className = 'ArticleList';
const ArticleList:React.FC<Props>=({posts})=> {
  // const { data, error, loading } = useQuery(ArticlesList);
  return (
    <div className={className}>
      <h3> Article Archive</h3>
        <List posts={posts} />
    </div>
  );
};

export default ArticleList;