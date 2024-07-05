import React, { createContext, useContext } from "react";
import style from "./Classess.module.css";

const ClassesContext = createContext();

const ClassesInfo = [
  {
    id: 1,
    title: "Kundalini",
    text: "Fusce ut posuere ex. Mauris hendrerit ultrices enim, sodales porttitor erat duis sed diam in justo iaculis tristique.",
    name: "Sierra Valentine",
  },
  {
    id: 2,
    title: "Hatha",
    text: "Fusce ut posuere ex. Mauris hendrerit ultrices enim, sodales porttitor erat duis sed diam in justo iaculis tristique.",
    name: "Sachin Iaocobus",
  },
  {
    id: 3,
    title: "Bikram",
    text: "Fusce ut posuere ex. Mauris hendrerit ultrices enim, sodales porttitor erat duis sed diam in justo iaculis tristique.",
    name: "Norbu Phoebus",
  },
  {
    id: 4,
    title: "Vinyasa",
    text: "Fusce ut posuere ex. Mauris hendrerit ultrices enim, sodales porttitor erat duis sed diam in justo iaculis tristique.",
    name: "Sierra Valentine",
  },
  {
    id: 5,
    title: "Ashtanga",
    text: "Fusce ut posuere ex. Mauris hendrerit ultrices enim, sodales porttitor erat duis sed diam in justo iaculis tristique.",
    name: "Suzanna Rice",
  },
  {
    id: 6,
    title: "Iyengar",
    text: "Fusce ut posuere ex. Mauris hendrerit ultrices enim, sodales porttitor erat duis sed diam in justo iaculis tristique.",
    name: "Suzanna Rice",
  },
];

const ClassessProvider = ({ children }) => {
  return (
    <ClassesContext.Provider value={ClassesInfo}>
      {children}
    </ClassesContext.Provider>
  );
};

const useClasses = () => useContext(ClassesContext);

function Classes() {
  const classes = useClasses();

  return (
    <div className={style.class}>
      <div className={style.names}>
        {classes.map((item) => (
          <div className={style.cube} key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.text}</p>
            <h3>{item.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
export default function ClassesWithProvider() {
  return (
    <ClassessProvider>
      <Classes />
    </ClassessProvider>
  );
}
