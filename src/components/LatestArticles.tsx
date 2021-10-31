import React from "react";
import { Link } from "react-router-dom";
import '../style.css';

type Props = {
    post: any;
};

// const className = 'Article';



const LatestArticles: React.FC<Props> = ({ post }) => {
    // console.log('excerpt id:',id);
    // console.log('excerpt title:',title);
    // console.log('excerpt content:',content);
    const className = 'Article';

    const { title, author_name, date, content } = post;
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
export default LatestArticles;