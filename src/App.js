import React, { useState } from "react";

import "./styles.css";

var songs = {
  All: [
    {
      name: "In the End",
      singer: "Chester Bennigton",
    },
    {
      name: "Dance Monkey",
      singer: "Tones & I",
    },
    {
      name: "Here we are",
      singer: "Bryan Adams",
    },
    {
      name: "Vaaqif",
      singer: "The Local Train",
    },
    {
      name: "Shayaad",
      singer: "Taba Chake"
    },
    {
      name: "Madhubala",
      singer: "Amit Trivedi",
    },
    {
      name: "Insaaf ka Qatil",
      singer: "EPR",
    },
    {
      name: "Saath ya khilaaf",
      singer: "Kr$na, Raaftar",
    },
    {
      name: "Remember the name",
      singer: "Mike Shinoda",
    }
  ],
  English: [
    {
      name: "In the End",
      singer: "Chester Bennigton",
    },
    {
      name: "Dance Monkey",
      singer: "Tones & I",
    },
    {
      name: "Here we are",
      singer: "Bryan Adams",
    }
  ],
  Hindi: [
    {
      name: "Vaaqif",
      singer: "The Local Train",
    },

    {
      name: "Shayaad",
      singer: "Taba Chake",
    },
    {
      name: "Madhubala",
      singer: "Amit Trivedi",
    }
  ],

  Rap: [
    {
      name: "Insaaf ka Qatil",
      singer: "EPR",
    },
    {
      name: "Saath ya khilaaf",
      singer: "Kr$na, Raaftar",
    },
    {
      name: "Remember the name",
      singer: "Mike Shinoda",
    }
  ]
};

var songList = Object.keys(songs);

export default function App() {
  const [music, setMusic] = useState(songs.All);

  function songHandler(songList) {
    var userMusic = songs[songList];

    setMusic(userMusic);
  }

  return (
    <div className="App">
      <h1 className="app__header"> 🎶 Musify </h1>
      <h2 className="app__header">
        Checkout my favourite songs.Select to get started.
      </h2>

      <div className="app__header btn">
        {songList.map((type) => {
          return <button onClick={() => songHandler(type)}>{type}</button>;
        })}
      </div>

      <hr />

      <div>
        {music.map((songList) => {
          return (
            <div className="app__songList">
              <p className="app__songName">Song: {songList.name}</p>
              <p className="app__songName">Singer: {songList.singer}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
