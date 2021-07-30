import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { Context as ProjectsContext } from "../../context/projectsContext";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import "./ProjectsDetails.css";

const ProjectDetails = () => {
  const { id } = useParams();
  const { state } = useContext(ProjectsContext);
  const [item, setItem] = useState();
  const [tempId, setTempId] = useState(0);
  // const item = state.find((item) => item.id == id) ;
  // setItem(result);

  useEffect(() => {
    const result = state.find((item) => item.id == id);
    setItem(result);
    setTempId(parseInt(id));
  }, []);

  useEffect(() => {
    const result = state.find((item) => item.id == tempId);
    setItem(result);
  }, [tempId]);

  const onNavigateClick = (id) => {
    if (id == 2) {
      const id2 = id - 1;
      setTempId(id2);
    } else {
      const id2 = id + 1;
      console.log(id2);
      setTempId(id2);
    }
  };

  if (item) {
    return (
      <div className="projectsdetails-container">
        <h1>{item.name}</h1>
        <div className="firstRow">
          <div className="img-container">
            <img src={item.image.default} alt="Project Image" />
          </div>
          <div className="p-container">
            <p>{item.title}</p>
          </div>
        </div>
        <div className="desc-container">
          <p>{item.desc}</p>
        </div>
        <div className="next-container">
          <NavigateNextIcon
            className="next-icon"
            onClick={() => onNavigateClick(tempId)}
          />
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default ProjectDetails;
