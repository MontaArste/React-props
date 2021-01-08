import React from "react";
import ReactDOM from "react-dom";

function Card(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img className="img" src={props.img} alt="avatar_img" />
      <p>{props.tel}</p>
      <p>{props.email}</p>
    </div>
  );
}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Card
      name="Beyonce"
      img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      tel="254 856 852"
      email="beyonce@gmail.com"
    />
    <Card
      name="Nicola Kidmen"
      img="https://m.media-amazon.com/images/M/MV5BMTk1MjM5NDg4MF5BMl5BanBnXkFtZTcwNDg1OTQ4Nw@@._V1_.jpg"
      tel="145 258 369"
      email="nicola@kidman.com"
    />
    <Card
      name="Adele"
      img="https://upload.wikimedia.org/wikipedia/commons/7/7c/Adele_2016.jpg"
      tel="369 369 258"
      email="adele@gmail.com"
    />
  </div>,
  document.getElementById("root")
);
