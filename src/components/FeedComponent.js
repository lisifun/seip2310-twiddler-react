/* eslint-disable jsx-a11y/img-redundant-alt */
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSearch,
  faHeart,
  faComment,
  faRetweet,
  faShare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { streams } from "../utils/dataGenerator";
import { useEffect, useState } from "react";

library.add(faSearch, faHeart, faComment, faRetweet, faShare); // Add the icons you want to use

// Function to set the time
function legibleTime(time) {
  var now = new Date();
  var timeTest = now - time;
  var seconds = Math.floor(timeTest / 1000);
  var minutes = Math.floor(seconds / 60);
  var hours = Math.floor(minutes / 60);
  var days = Math.floor(hours / 24);

  var timePosted;
  if (days > 0) {
    if (days === 1) {
      timePosted = "1 day ago";
    } else {
      timePosted = `${days} days ago`;
    }
  } else if (hours > 0) {
    if (hours === 1) {
      timePosted = "1 hour ago";
    } else {
      timePosted = `${hours} hours ago`;
    }
  } else if (minutes > 0) {
    if (minutes === 1) {
      timePosted = "1 minute ago";
    } else {
      timePosted = `${minutes} minutes ago`;
    }
  } else {
    timePosted = "Just now";
  }
  return timePosted;
}

// Component to display one tweet
function Tweet(props) {
  var [likes, setLikes] = useState(0);
  // var [comments, setComments] = useState(0);
  var [retweets, setRetweets] = useState(0);
  var [shares, setShares] = useState(0);
  var [selectedTweet, setSelectedTweet] = useState();

  console.log(selectedTweet);

  var likeCount = () => {
    setLikes(likes + 1);
  };

  // var commentCount = () => {
  //   setComment(comments + 1);
  // };

  var retweetCount = () => {
    setRetweets(retweets + 1);
  };

  var shareCount = () => {
    setShares(shares + 1);
  };

  return (
    <div className="user-tweet">
      <img className="profile-photo" src={props.picture} alt="User photo" />
      <div className="user">
        <div>
          <strong>@{props.username}</strong>
        </div>
        <div>{props.time}</div>
      </div>
      <div className="tweet">
        <p className="tweet-text">{props.text}</p>
      </div>
      <div className="icons">
        <div className="counter">
          <button className="reaction" onClick={likeCount}>
            <FontAwesomeIcon icon="heart" />
          </button>
          <p>{likes}</p>
        </div>
        <div className="counter">
          <button
            className="reaction"
            onClick={() => {
              setSelectedTweet({
                user: props.username,
                message: props.text,
                createdAt: props.time,
                profilePhotoURL: props.picture,
              });
              props.onCommentClick();
            }}
          >
            <FontAwesomeIcon icon="comment" />
          </button>
          {/* <p>{comments}</p> */}
        </div>
        <div className="counter">
          <button className="reaction" onClick={retweetCount}>
            <FontAwesomeIcon icon="retweet" />
          </button>
          <p>{retweets}</p>
        </div>

        <div className="counter">
          <button className="reaction">
            <FontAwesomeIcon icon="share" onClick={shareCount} />
          </button>
          <p>{shares}</p>
        </div>
      </div>
    </div>
  );
}

// Component to add comments
function AddComment(props) {
  var [newComment, setNewComment] = useState("");

  return (
    <div className="commentbox">
      <div className="commentbox-content">
        <div className="userinfo">
          <img
            className="profile-photo-comment"
            src={props.picture}
            alt="User photo"
          />
          <div className="username">
            <div>
              <strong>@{props.username}</strong>
            </div>
            <div>{props.time}</div>
          </div>
        </div>

        <div className="tweet">
          <p className="tweet-text">{props.text}</p>
        </div>
        <div>
          <div className="meinfo">
            <img
              className="profile-photo-comment"
              src="images/user-me.jpeg"
              alt="Lisandra Fundora"
            />
            <form>
              <input
                className="mood"
                type="text"
                placeholder="Add a comment"
                onChange={(text) => {
                  setNewComment(text.target.value);
                }}
              />
              <button
                className="tweet-button"
                type="submit"
                onClick={() => {
                  setNewComment(newComment);
                  props.postNewComment(newComment);
                }}
              >
                Post
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

// Feed Component
function FeedComponent(props) {
  var [newTweet, setNewTweet] = useState("");
  var [tweets, setTweets] = useState([...streams.home]);
  var [showCommentBox, setShowCommentBox] = useState(false);
  var [selectedUser, setSelectedUser] = useState(null);
  var [newComment, setNewComment] = useState("");

  var displayCommentBox = (user) => {
    setSelectedUser(user);
    setShowCommentBox(true);
  };

  var saveNewComment = (comment) => {
    if (selectedUser) {
      tweets.map((tweet) => {
        if (tweet === selectedUser) {
          tweet.comment = comment;
        }
      });
      setShowCommentBox(false);
    }
    console.log(tweets);
  };

  useEffect(() => {
    var profileName = props.searchUsername;
    if (profileName) {
      setTweets(streams.users[profileName]);
    }
  }, [props.searchUsername]);

  var filteredTweets = tweets
    .filter(
      (x) =>
        x.user.includes(props.searchText) ||
        x.message.includes(props.searchText)
    )
    .reverse();

  var postTweet = () => {
    var myObject = {
      user: "me",
      message: newTweet,
      createdAt: new Date(),
      profilePhotoURL: "images/user-me.jpeg",
    };

    setTweets([...tweets, myObject]);
  };

  return (
    <section id="section3">
      <div className="new-tweet">
        <img
          className="profile-photo"
          src="images/user-me.jpeg"
          alt="Lisandra Fundora"
        />
        <form className="form" action="index.html" method="post">
          <input
            className="mood"
            type="text"
            placeholder="Where is my mind?"
            onChange={(text) => {
              setNewTweet(text.target.value);
            }}
          />
          <button
            className="tweet-button"
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              postTweet();
            }}
          >
            Post
          </button>
        </form>
      </div>
      {showCommentBox && selectedUser && (
        <AddComment
          picture={selectedUser.profilePhotoURL}
          username={selectedUser.user}
          time={legibleTime(selectedUser.createdAt)}
          text={selectedUser.message}
          postNewComment={saveNewComment}
        />
      )}
      <div className="feed">
        {filteredTweets.map((x, index) => {
          return (
            <Tweet
              key={index}
              picture={x.profilePhotoURL}
              username={x.user}
              text={x.message}
              time={legibleTime(x.createdAt)}
              onCommentClick={() => displayCommentBox(x)}
            />
          );
        })}
      </div>
    </section>
  );
}

export default FeedComponent;
