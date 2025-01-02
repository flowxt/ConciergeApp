import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { missions } from "../data/missions";

const localizer = momentLocalizer(moment);

const DashboardProMenage = () => {
  // Fonction pour appliquer des styles dynamiques aux événements
  const eventStyleGetter = (event) => {
    let backgroundColor = "";

    switch (event.status) {
      case "not_accepted": // Mission non acceptée
        backgroundColor = "#FF4D4D"; // Rouge
        break;
      case "pending": // Mission en attente
        backgroundColor = "#FFD700"; // Jaune
        break;
      case "accepted": // Mission acceptée
        backgroundColor = "#4CAF50"; // Vert
        break;
      default:
        backgroundColor = "#D3D3D3"; // Gris (par défaut)
    }

    return {
      style: {
        backgroundColor,
        color: "white", // Couleur du texte
        borderRadius: "5px",
        border: "none",
        padding: "4px",
      },
    };
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Mon tableau de bord</h2>

      <div className="mb-6">
        <Calendar
          localizer={localizer}
          events={missions}
          defaultView="week"
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
          eventPropGetter={eventStyleGetter} // Appliquer les styles personnalisés
        />
      </div>
    </div>
  );
};

export default DashboardProMenage;

