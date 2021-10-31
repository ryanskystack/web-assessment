import { useQuery } from "@apollo/client";
import React from "react";
import { useParams } from 'react-router-dom';

import { GetPostById } from "../generated/graphql";
import '../style.css';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { LocalPostOfficeSharp } from "@material-ui/icons";


interface Props {
  posts: any[]
}

const className = 'Article';
const ArticlePage: React.FC<Props> = ({ posts }) => {
  const { id } = useParams<{ id: string }>();

  console.log("id", parseInt(id));
  console.log("id", typeof id);
  let article = posts.find((x: any) => x['id'] === parseInt(id));
  console.log('article', article);

  const { title, author_name, date, content } = article;

  const className = 'Article';
  return (
    <div>
      <div className={className}>
        <div className={`${className}__status`}>
          <h1 className={`${className}__title`} >
            {title}
          </h1>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <p className={`${className}__description`}>{author_name}</p>
            <p className={`${className}__description`}>{date}</p>
          </div>

          {/* <div style={{ display: 'flex', justifyContent: 'center' }}>
            <p className={`${className}__tag`}
              style={{ border: 'solid, 2px' }}
            >{category_name}</p>
            <p className={`${className}__description`}>{createdAt}</p>
          </div> */}
          {/* <p
            className={`${className}__description`
            }>{content}</p>
        </div> */}

          <div dangerouslySetInnerHTML={{ __html: content }} style={{ display: 'flex', flexDirection: 'column' }} />


        </div>
      </div>
    </div>
  );
};

export default ArticlePage;


