
import {useState, useEffect} from "react";
import "./Crew.scss";

const data = [
  {
    title: "COMMANDER",
    secondTitle: "DOUGLAS HURLEY",
    text: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    image:
      "https://res.cloudinary.com/dpc1vrbek/image/upload/v1696798716/Group_5_vpbdk1.png",
  },
  {
    title: "MISSION SPECIALIST",
    secondTitle: "MARK SHUTTLEWORTH",
    text: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    image:
      "https://res.cloudinary.com/dpc1vrbek/image/upload/v1696800415/Group_5_1_jobc9l.png",
  },
  {
    title: "PILOT",
    secondTitle: "VICTOR GLOVER",
    text: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
    image:
      "https://res.cloudinary.com/dpc1vrbek/image/upload/v1696800415/Group_5_2_c6bhdn.png",
  },
  {
    title: "FLIGHT ENGINEER",
    secondTitle:"ANOUSHEH ANSARI",
    text: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
    image: "https://res.cloudinary.com/dpc1vrbek/image/upload/v1696800415/Group_5_3_utcz5p.png",
  }
];


export default function Crew() {

  const [ID, setID] = useState(0);
  
  const { title, image, text, secondTitle } = data[ID];

  useEffect(() => {
    const list = document.querySelectorAll('.dots-stepper span');
    for (let i = 0; i < list.length; i++) {
      list[i].classList.remove('active');
    }
        list[ID].classList.add("active");
    }, [ID]);

  return (
    <div className="container-info">

      <h3 className="mainTitle"><span>02</span>  MEET YOUR CREW</h3>

      <div className="containerImage">

        <div className="characters">
          <img src={image} alt={title} />
        </div>
        <div className="text-and-dots">
          <div>
        <h3>{title}</h3>
          <h2>{secondTitle}</h2>
          <p>{text}</p>
          </div>
          <div className="dots-stepper">
            <span onClick={() => setID(0)}></span>
            <span onClick={() => setID(1)}></span>
            <span onClick={() => setID(2)}></span>
            <span onClick={() => setID(3)}></span>
          </div>
        </div>

      </div>

    </div>
  );
}