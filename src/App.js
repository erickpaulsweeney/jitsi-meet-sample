import React, { useState, useEffect, useRef } from "react";

export default function App() {
  const [API, setAPI] = useState({});
  const nodeRef = useRef(null);

  const startMeet = () => {
    const domain = "meet.jit.si";
    const room = "sample-jitsi-call-101";
    const options = {
      roomName: room,
      width: "100%",
      height: 875,
      parentNode: nodeRef.current,
      configOverwrite: {
        startWithAudioMuted: true,
        startWithVideoMuted: true,
      },
    };

    setAPI(new window.JitsiMeetExternalAPI(domain, options));
  };

  useEffect(() => {
    if (window.JitsiMeetExternalAPI) {
      startMeet();
    } else {
      alert("JitsiMeetExternalAPI not loaded");
    }
  }, []);

  const header = {
    padding: "0.1em",
    fontSize: "1.2em",
    backgroundColor: "#246FE5",
    color: "white",
    fontWeight: "600",
    fontFamily: "Segoe UI, sans serif",
    textTransform: "uppercase",
    textAlign: "center",
  };

  return (
    <>
      <header style={header}>
        <p>Jitsi React Sample</p>
      </header>
      <div ref={nodeRef} id="jitsi-iframe"></div>
    </>
  );
}
