import React from "react";

function About(props) {
  const { image, about } = props;
  const defaultImage = "";

  return (
    <aside>
      <img src={image || defaultImage} alt="blog logo" />
      <p>{about}</p>
    </aside>
  );
}


export default About;
