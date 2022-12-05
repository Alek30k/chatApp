import React from "react";

const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder="Find a user" />
      </div>
      <div className="userChat">
        <img
          src="https://thumbs.dreamstime.com/b/ci%C3%A9rrese-encima-del-retrato-de-la-muchacha-atractiva-hermosa-joven-sonriendo-alegre-mirando-c%C3%A1mara-sobre-el-fondo-blanco-mujer-109133771.jpg"
          alt=""
        />
        <div className="userChatInfo">
          <span>Jane</span>
        </div>
      </div>
    </div>
  );
};

export default Search;
