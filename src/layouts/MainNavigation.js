import React from "react";
import { Link } from "react-router-dom";
import classes from './MainNavigation.module.css'

export default function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
            </li>
            <li>
              <Link to="/Favorites">Favorites</Link>
            </li>
            <li>
              <Link to="/new-meet">New Meetups</Link>
            </li>
          
        </ul>
      </nav>
    </header>
  );
}
