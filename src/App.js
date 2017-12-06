//External Dependancies
import React, { Component } from 'react';

//Our Dependancies
import 'sanitize.css'
import './css/style.css';
import Select from './components/form/Select'
import BlogList from './components/display/BlogList'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      users:[],
      filteredPosts:[]
    }

    this.handleChange = this.handleChange.bind(this)
  }

  componentWillMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => this.setState({ posts: data }))
      .then(data => {

        let posts = this.state.posts
        let users = new Set()

        for(let i = 0; i < posts.length; i++){
          users.add(posts[i].userId)
        }

        this.setState({ users: [...users] })
      })
  }

  handleChange(e){
    const target = e.target;
    const value = target.value;
    let posts = this.state.posts

    const filteredPosts = posts.filter(function(post){
      return post.userId === Number(value)
    })

    this.setState({
      filteredPosts
    })
  }

  render() {
    return (
      <div className="app-container">
        <header>
          <h1 className="app-title">My First Blog</h1>
          <span className="app-description">A collection of thoughts and feelings</span>
        </header>
        <div className="app-form">
          <Select options={this.state.users} handleChange={this.handleChange} />
        </div>
        <div className="app-body">
          <BlogList posts={this.state.filteredPosts} />
        </div>
      </div>
    );
  }
}

export default App;
