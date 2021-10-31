// import React from "react";
import * as React from 'react';
import '../style.css';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

type Props = {
    data: {
        getPostById: any;
    };
};

const className = 'Article';

const article = {
    post_id: "2",
    title: "Smile",
    author_name: "John Dally",
    author_country: "Australia",
    // categories:[
    //   {category_name:"sport"},
    //   {category_name:"soccer"},
    // ],
    category_name: "soccer",
    content: "ftsgas hertyc kudfpj nsdfdgfqsd dsfrgthyhytjuj  oklhsdfdsf",
    createdAt: "2021-10-28"
}

export default function Article({ data }: Props) {
    console.log("article data:", data)
    // const { post_id, title, author_name, author_country, category_name, createdAt, content } = data.getPostById[0];
    
    const { post_id, title, author_name, author_country, category_name, createdAt, content } = article;



    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    if (!post_id) {
        return <div>No article available</div>;
    }
    return (
        <div>
            <div className={className}>
                <div className={`${className}__status`}>
                    <h1 className={`${className}__title`} >
                        {title}
                    </h1>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <p className={`${className}__description`}>{author_name}</p>
                        <p className={`${className}__description`}>{author_country}</p>
                        <div>
                            <Button aria-describedby={id} variant="contained" onClick={handleClick}>
                                Share 
                            </Button>
                            <Popover
                                id={id}
                                open={open}
                                anchorEl={anchorEl}
                                onClose={handleClose}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                            >
                                <Typography sx={{ p: 2 }}>{window.location.href}</Typography>
                            </Popover>
                        </div>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <p className={`${className}__tag`}
                            style={{ border: 'solid, 2px' }}
                        >{category_name}</p>
                        <p className={`${className}__description`}>{createdAt}</p>
                    </div>
                    <p
                        className={`${className}__description`
                        }>{content}</p>
                </div>
            </div>

        </div>
    )
        ;
}