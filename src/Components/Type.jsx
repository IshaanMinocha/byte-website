import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Web Dev",
          "App Dev",
          "AR/VR",
          "IOT",
          "3D Development",
          "Robotics",
          "Open Source",
          "Cybersecurity",
          "Web 3.0",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
      />
  );
}

export default Type;