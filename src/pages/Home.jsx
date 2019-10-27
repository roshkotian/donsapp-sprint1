import React, { Component } from "react";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import Posts from "../components/Posts";
import Navbar from "../layout/Navbar";

require("dotenv").config();

const API_URL = process.env.REACT_APP_API_URL;
console.log(API_URL);

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { posts: [] };
  }
  componentDidMount() {
    axios
      .get(API_URL + "/posts")
      .then(response => {
        this.setState({ posts: response.data });
      })
      .catch(function(error) {
        console.log(error);
        alert("Error occurred : " + error);
      });
  }
  render() {
    let recentPostsMarkup = this.state.posts ? (
      this.state.posts.map(post => <Posts post={post} key={post._id}></Posts>)
    ) : (
      <p>Loading...</p>
    );
    return (
      <React.Fragment>
        <Navbar className="nav"></Navbar>
        <div className="container">
          <Grid container>
            <Grid item sm={8} xs={12}>
              {recentPostsMarkup}
            </Grid>
            <Grid item sm={1} xs={12}></Grid>
            <Grid item sm={3} xs={12}>
              <p>Profile Coming soon...</p>
            </Grid>
          </Grid>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
