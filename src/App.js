import logo from "./logo.svg";
import "./App.css";
import SearchComponent from "./components/SearchComponent";
import HomeComponent from "./components/HomeComponent";
import FeedComponent from "./components/FeedComponent";
import FriendsComponent from "./components/FriendsComponent";
import { useState } from "react";
//import { streams } from "./utils/dataGenerator";
//import { streams } from "./utils/dataGenerator";

function App() {
  var [search, setSearch] = useState("");
  var [friend, setFriend] = useState("");

  function onSearchChange(searchText) {
    setSearch(searchText);
  }

  function onFriendChange(userName) {
    setFriend(userName);
  }

  return (
    <div className="App">
      {search}
      <SearchComponent onSearch={onSearchChange} />
      <div className="block">
        <HomeComponent />
        <FeedComponent searchText={search} searchUsername={friend} />
        <FriendsComponent onFriend={onFriendChange} />
      </div>
    </div>
  );
}

export default App;
