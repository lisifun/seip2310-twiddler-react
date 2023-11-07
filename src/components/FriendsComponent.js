/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import { streams } from "../utils/dataGenerator";
import { useState } from "react";

function List(props) {
  return (
    <div className="friend-profile">
      <img className="friend-photo" src={props.picture} alt="User photo" />
      <div className="friends">
        <a
          className="user-profile"
          href="#"
          onClick={(e) => {
            props.onFriend(e.target.textContent);
          }}
        >
          {props.username}
        </a>
      </div>
    </div>
  );
}

function FriendsComponent(props) {
  return (
    <section id="section4">
      <button className="friends">Friends</button>
      <div className="my-list">
        {Object.keys(streams.users).map((x, index) => {
          if (streams.users[x][0]) {
            return (
              <List
                key={index}
                picture={streams.users[x][0].profilePhotoURL}
                username={streams.users[x][0].user}
                onFriend={props.onFriend}
              />
            );
          }
        })}
      </div>
    </section>
  );
}

export default FriendsComponent;
