import React from "react";
import '../style.css';
import LatestArticles from "../components/LatestArticles";

interface Props{
    posts:any[]
};
const className = 'Article';
const LatestPage:React.FC<Props>=({posts})=> {

    console.log('latest posts:',posts)

    let four=posts.slice(0, 4);
    console.log('latest 4:',four)

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h4 style={{ textAlign: 'center' }}>The 4 latest articles:</h4>
            {posts.slice(0, 4).map((post: any) => (
                <LatestArticles key={post.id} post={post} />
            ))}
        </div>
    );
};

export default LatestPage;

