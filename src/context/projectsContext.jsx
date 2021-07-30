import React, { useState } from "react";

export const Context = React.createContext();

const Provider = ({ children }) => {
  const [state, setState] = useState([
    {
      id: 1,
      name: "Fujitsu Indonesia",
      image: require("../assets/fujitsu.png"),
      title:
        "Work as a product design intern, web development trainee and mobile development trainee is my position",
      desc: "While working at PT Fujitsu Indonesia, I was part of the healthcare development team and participated in developing applications into the mobile platform. This project is a large-scale project and has quite a lot of team members. In doing my job, I am tasked with designing designs, research on user experience, making designs and prototypes.",
    },
    {
      id: 2,
      name: "B&M Motor",
      image: require("../assets/bmmotor.png"),
      title:
        "I design and create designs and applications until the application is complete",
      desc: "In the project I worked on for PT B&M Motor Indonesia, I was required to be able to make the best possible application with a display that was easy to see and understand. what I have done is design the application and design and build the application to completion.",
    },
  ]);

  return <Context.Provider value={{ state }}>{children}</Context.Provider>;
};

export default Provider;
