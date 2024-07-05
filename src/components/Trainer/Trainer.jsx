import React, { createContext, useContext } from "react";
import style from "./Trainer.module.css";

const TrainersContext = createContext();

const TrainersInfo = [
  {
    id: 1,
    src: "https://assets.website-files.com/5f36828308ea3b53d650099f/5f36828308ea3bf7955009bd_062f.jpg",
    name: "Suzanna Rice",
    text: "Donec at leo sed est lacinia gravida quis non nisi. Maecenas gravida turpis.",
  },
  {
    id: 2,
    src: "https://assets.website-files.com/5f36828308ea3b53d650099f/5f36828308ea3b6eb85009ba_046m.jpg",
    name: "Norbu Phoebus",
    text: "Donec at leo sed est lacinia gravida quis non nisi. Maecenas gravida turpis.",
  },
  {
    id: 3,
    src: "https://assets.website-files.com/5f36828308ea3b53d650099f/5f36828308ea3b6e1f5009b6_053f.jpg",
    name: "Sierra Valentine",
    text: "Donec at leo sed est lacinia gravida quis non nisi. Maecenas gravida turpis.",
  },
  {
    id: 4,
    src: "https://assets.website-files.com/5f36828308ea3b53d650099f/5f36828308ea3b17555009bb_092m.jpg",
    name: "Sierra Valentine",
    text: "Donec at leo sed est lacinia gravida quis non nisi. Maecenas gravida turpis.",
  },
];

const TrainersProvider = ({ children }) => {
  return (
    <TrainersContext.Provider value={TrainersInfo}>
      {children}
    </TrainersContext.Provider>
  );
};

const useTrainers = () => useContext(TrainersContext);

function Trainers() {
  const trainers = useTrainers();

  return (
    <div className={style.trainer}>
      <div className={style.names}>
        {trainers.map((trainer) => (
          <div className={style.cube} key={trainer.id}>
            <img className={style.image} src={trainer.src} alt={trainer.name} />
            <h3>{trainer.name}</h3>
            <p>{trainer.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default function TrainersWithProvider() {
  return (
    <TrainersProvider>
      <Trainers />
    </TrainersProvider>
  );
}
