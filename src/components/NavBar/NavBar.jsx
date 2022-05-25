import React from "react";
import { Link } from "react-router-dom";
import { Header, Segment, Image, Icon } from "semantic-ui-react";

export default function NavBar({ user, handleLogout }) {
    console.log(user, 'user in header')
  return (
    <Segment clearing>
      <Header as="h2" floated="left">
        <Link to="/">
          WatchedIt
        </Link>
      </Header>
      <Header as="h2" floated="right">
        {user ? 
        <>
         <Link to={`/${user?.username}`}>
          <Image
            src={
              user?.photoUrl
                ? user?.photoUrl
                : "https://react.semantic-ui.com/images/wireframe/square-image.png"
            }
            avatar
          ></Image>&nbsp;&nbsp;&nbsp;
          {user?.username}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </Link>
          <Link to="" onClick={handleLogout}>
            Logout
          </Link>
        </> : 
        <>
        <Link to="/login">Log In&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Link>
        <Link to="/signup">Sign Up&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Link>
        </>}
       
      </Header>
    </Segment>
  );
}