import LandingPage from './pages/LandingPage';
import ArticlePage from './pages/ArticlePage';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import NavBar from './components/NavBar';
import React from 'react';
import axios from 'axios';


const App = () => {

  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    axios.get('https://hammer.forexco.com.au/wp-json/wp/v2/posts?_embed')
      .then((response) => {
        console.log('response:', response.data);
        let allData = response.data.map((item: any) => {
          return {
            id: item.id, data: item.date.substr(0, 10), title: item.title.rendered,
            content: item.content.rendered,
            excerpt: item.excerpt.rendered,
            author_name: item._embedded.author[0].name,
            author_description: item._embedded.author[0].description,
            author_link: item._embedded.author[0].link,
            author_avatar_urls: item._embedded.author[0].avatar_urls['96']
          }
        })

        console.log('allData', allData);
        console.log('content:', allData[1].content)

        // let b =allData.find((x: any) => x['id'] === 1149);
        // console.log('id:1149', b);
        setPosts(allData);
      })
  }, []);

  return (
    <div >
      <Router>
        <div className="navBar">
          <NavBar />
        </div>
        <Switch>
          <Route exact path="/"
            render={() => (
              <LandingPage   posts={posts}/>
            )}
          />
          <Route exact path="/articles/:id"
            render={() => (
              <ArticlePage   posts={posts}/>
            )}
          />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
