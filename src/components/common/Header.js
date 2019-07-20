import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import API from "../../utils/API";
import Logo from "./img/bellotero.png";

class Header extends Component {
  state = {
    posts: []
  };
  componentDidMount() {
    API.getHeader()
      .then(res => {
        // console.log(res);
        this.setState({
          posts: res.data.menu.items
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    const activeStyle = { color: "#F15B2A" };
    const { posts } = this.state;
    const postList = posts.length ? (
      posts.map(post => {
        return (
          <span key={post.text} className="navPage">
            <NavLink to={post.route} activeStyle={activeStyle}>
              {post.text}
            </NavLink>
          </span>
        );
      })
    ) : (
      <div className="center">Nav not loaded yet</div>
    );
    return (
      <nav className="menuItems">
        <NavLink to="/page-1">
          <img src={Logo} alt="Bellotero.io logo" />
        </NavLink>
        <NavLink to="/page-1" activeStyle={activeStyle} exact>
          Home
        </NavLink>
        {postList}
      </nav>
    );
  }
}

export default Header;
