import React from "react";
import Item from "./Item";
import { Link } from "react-router-dom";
import '../style.css';

const className = 'ArticleList';
interface Props {
    posts: any[]
}


const List: React.FC<Props> = ({ posts }) => {

    return (
        <>
            <ol className={`${className}__list`}>
                {posts.map((post: any) => (
                    <Link to={`/articles/${post.id}`} style={{ textDecoration: 'none', color: 'black' }}>
                        <Item key={post.id + post.title } title={post.title} />
                    </Link>
                ))}
            </ol>
        </>
    );
};

export default List;