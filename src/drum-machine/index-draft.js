import React from "react";
import "./drum-machine.scss";

const soundCollection = [
  {
    keyCode: 81,
    keyTrigger: "Q",
    id: "Heater-1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
  },
  {
    keyCode: 87,
    keyTrigger: "W",
    id: "Heater-2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  },
  {
    keyCode: 69,
    keyTrigger: "E",
    id: "Heater-3",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
  },
  {
    keyCode: 65,
    keyTrigger: "A",
    id: "Heater-4",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
  },
  {
    keyCode: 83,
    keyTrigger: "S",
    id: "Clap",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
  },
  {
    keyCode: 68,
    keyTrigger: "D",
    id: "Open-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
  },
  {
    keyCode: 90,
    keyTrigger: "Z",
    id: "Kick-n'-Hat",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  },
  {
    keyCode: 88,
    keyTrigger: "X",
    id: "Kick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  },
  {
    keyCode: 67,
    keyTrigger: "C",
    id: "Closed-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
  },
];

const activeStyle = {
  backgroundColor: "orange",
  boxShadow: "0 3px orange",
  height: 77,
  marginTop: 13,
};

const inactiveStyle = {
  backgroundColor: "grey",
  marginTop: 10,
  boxShadow: "3px 3px 5px black",
};

class DrumMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      padStyle: inactiveStyle,
    };

    // this.playSound = this.playSound.bind(this);
    // this.handleKeyPress = this.handleKeyPress.bind(this);
    // this.activatePad = this.activatePad.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    // const sound = document.getElementById(soundCollection[0].keyTrigger);
    // console.log(soundCollection[0].keyTrigger);
    // sound.play();
    console.log(e.target.value);
  }
  render() {
    return (
      <>
        <h1>Drum machine</h1>
        <div id="drum-machine">
          <div id="display" className="container">
            {soundCollection.map((item) => (
              <div
                className="drum-pad"
                style={this.state.padStyle}
                onClick={this.handleClick}
                key={item.id}
                id={item.id}
              >
                <audio
                  src={item.url}
                  className="clip"
                  id={item.keyTrigger}
                ></audio>
                {item.keyTrigger}
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default DrumMachine;
