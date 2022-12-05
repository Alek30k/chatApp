import React from "react";

const Message = () => {
  return (
    <div className="message owner">
      <div className="messageInfo">
        <img
          src="https://vivolabs.es/wp-content/uploads/2022/03/perfil-hombre-vivo.png"
          alt=""
        />

        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>hello</p>
        <img
          src="https://vivolabs.es/wp-content/uploads/2022/03/perfil-hombre-vivo.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Message;
