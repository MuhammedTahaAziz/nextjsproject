import CalculatedWeather from "../images/CalculatedWeather.svg";
import BestFlights from "../images/BestFlights.svg";
import LocalEvents from "../images/LocalEvents.svg";
import Customization from "../images/Customization.svg";
import RomaItaly from "../images/RomaItaly.jpg";
import LondonUk from "../images/LondonUk.jpg";
import FullEurope from "../images/FullEurope.jpg";

import FirstStep from "../images/FirstStep.png";
import SecondStep from "../images/SecondStep.png";
import ThirdStep from "../images/ThirdStep.png";

//Services of service section
export let services = [
  {
    src: CalculatedWeather,
    title: "Calculated Weather",
    text: "Built Wicket longer admire do barton vanity itself do in it.",
  },
  {
    src: BestFlights,
    title: "Best Flights",
    text: "Engrossed listening. Park gate sell they west hard for the.",
  },
  {
    src: LocalEvents,
    title: "Local Events",
    text: "Barton vanity itself do in it. Prefer to men it engrossed listening.",
  },
  {
    src: Customization,
    title: "Customization",
    text: "We deliver outsourced aviation services for military customers.",
  },
];

//Pages of Navigation Bar
export let navigationPages = [
  {
    title: "Destinations",
    path: `/`,
  },
  {
    title: "Hotels",
    path: `/`,
  },
  {
    title: "Flights",
    path: `/`,
  },
  {
    title: "Bookings",
    path: `/`,
  },
];

export let Destinations = [
  { tripName: "Rome, Italty", price: "$5,42k", duration: "10 Days Trip", src: RomaItaly },
  { tripName: "London, UK", price: "$4.2k", duration: "12 Days Trip", src: LondonUk },
  { tripName: "Rome, Italty", price: "$15k", duration: "28 Days Trip", src: FullEurope },
];

export let bookingSteps = [
  {
    src: FirstStep,
    title: "Choose Destination",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. ",
  },
  {
    src: SecondStep,
    title: "Make Payment",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. ",
  },
  {
    src: ThirdStep,
    title: "Reach Airport on Selected Date",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. ",
  },
];