import { library } from "@fortawesome/fontawesome-svg-core";
import { faCoffee, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

library.add(faCoffee, faSearch); // Add the icons you want to use

function SearchComponent(props) {
  var [search, setSearch] = useState("");
  return (
    <section id="section1">
      <div className="title-web">
        <img
          className="twidder-logo"
          src="images/ISS_15344_395773.webp"
          alt="Twiddler Logo"
        />
        <h1 className="title">Twiddler</h1>
      </div>
      <div className="search-web">
        <img
          className="twidder-logo"
          src="images/ISS_15344_395773.webp"
          alt="Twiddler Logo"
        />
        <form>
          <input
            className="explorer"
            type="text"
            placeholder="Search"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <button
            className="explorer-button"
            type="submit"
            onClick={() => {
              props.onSearch(search);
            }}
          >
            <FontAwesomeIcon icon="search" />
          </button>
        </form>
      </div>
    </section>
  );
}

export default SearchComponent;
