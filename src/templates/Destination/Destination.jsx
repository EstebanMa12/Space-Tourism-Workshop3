
import { useState, useEffect } from "react";
import "./Destination.scss";
const data = [
  {
    title: "MOON",
    text: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    image:
      "https://res.cloudinary.com/ddsed1j6u/image/upload/v1696817078/Space-Tourism-Workshop/ddvp0bzl60uw2cyl8ypq.png",
    distance: "384,400 km",
    time: "3 DAYS",
  },
  {
    title: "MARS",
    text: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    image:
      "https://res.cloudinary.com/ddsed1j6u/image/upload/v1696817078/Space-Tourism-Workshop/byfqdhn2izekomgzzbbh.png",
    distance: "225 MIL. km",
    time: "9 MONTHS",
  },
  {
    title: "EUROPA",
    text: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    image:
      "https://res.cloudinary.com/ddsed1j6u/image/upload/v1696816906/Space-Tourism-Workshop/rhbnolboeqqwk483qqsm.png",
    distance: "628 MIL. km",
    time: "3 YEARS",
  },
  {
    title: "TITAN",
    text: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    image:
      "https://res.cloudinary.com/ddsed1j6u/image/upload/v1696815940/Space-Tourism-Workshop/dn4l1xdzfnqhlszifuq0.png",
    distance: "1.6 BIL. km",
    time: "7 YEARS",
  },
];

export default function Destination() {
  const [ID, setID] = useState(0);

  useEffect(() => {
    const list = document.querySelectorAll('.destination-container__dest__text--names span');
    for (let i = 0; i < list.length; i++) {
      list[i].classList.remove('active');
    }
        list[ID].classList.add("active");
    }, [ID]);

  const { title, image, text, distance, time } = data[ID];

  return (
    <div className="destination-container">
      <div className="destination-container__main-title">
        <p className="destination-container__main-title--num">01</p>
        <p>
          PICK YOUR DESTINATION
        </p>
      </div>

      <div className="destination-container__dest">
        <div className="destination-container__dest--img">
          <img src={image} alt={title} />
        </div>

        <div className="destination-container__dest__text">
          <div className="destination-container__dest__text--names">
            <span onClick={() => setID(0)}>Moon</span>
            <span onClick={() => setID(1)}>Mars</span>
            <span onClick={() => setID(2)}>Europa</span>
            <span onClick={() => setID(3)}>Titan</span>
          </div>

          <h3>{title}</h3>
          <p>{text}</p>

          <hr />

          <div className="destination-container__dest__text--info">
            <div className="avg-distance">
              <h4>Avg. distance</h4>
              <span>{distance}</span>
            </div>

            <div className="travel-time">
              <h4>est. travel time</h4>
              <span>{time}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
