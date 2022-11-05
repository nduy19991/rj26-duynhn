import { useState } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import "./style.css";
import wfy from "./ListMusic/wfy.mp3"
import tp from "./ListMusic/tp.mp3"
import endl from "./ListMusic/endl.mp3";
import vmabct from "./ListMusic/vmabct.mp3";
import actdm from "./ListMusic/actdm.mp3";


export default function ContentMp3() {
  const musicTracks = [ 
    {
      name: "Watting for you",
      src: wfy,
    },
    {
      name: "Tòng Phu",
      src: tp,
    },
    {
      name: "Em nên dừng lại",
      src: endl,
    },
    {
      name: "Vì mẹ anh bắt chia tay",
      src: vmabct,
    },
    {
      name: "Ai chung tình được mãi",
      src: actdm,
    },
   
  ];

  const [trackIndex, setTrackIndex] = useState(0);

  const handleClickPrevious = () => {
    setTrackIndex((currentTrack) =>
      currentTrack === 0 ? musicTracks.length - 1 : currentTrack - 1
    );
  };

  const handleClickNext = () => {
    setTrackIndex((currentTrack) =>
      currentTrack < musicTracks.length - 1 ? currentTrack + 1 : 0
    );
  };

  return (
    <div className="ContentMp3">
      <div className="song">
        <img src="https://cdn.pixabay.com/photo/2022/10/27/17/51/woman-7551415__340.jpg" alt="" />
      </div>
      <AudioPlayer
        style={{ borderRadius: "1rem" }}
        autoPlay
        src={musicTracks[trackIndex].src}
        onPlay={(e) => console.log("onPlay")}
        showSkipControls={true}
        showJumpControls={false}
        header={`Now playing: ${musicTracks[trackIndex].name}`}
        onClickPrevious={handleClickPrevious}
        onClickNext={handleClickNext}
        onEnded={handleClickNext}
      />
    </div>
  );
}