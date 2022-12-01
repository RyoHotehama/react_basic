import { Link } from "react-router-dom";
import React from 'react';

export default class Navigation extends React.Component {
  render() {
    return (
      <div>
        <li>
          <Link to = "/">HelloReact</Link>
        </li>
        <li>
          <Link to = "/count-up-down">CountUpdown</Link>
        </li>
        <li>
          <Link to = "/sign-up">SignUp</Link>
        </li>
      </div>      
    );
  }
}