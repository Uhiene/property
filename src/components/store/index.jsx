import { createGlobalState } from "react-hooks-global-state";
import room1 from "../../assets/img_1.jpg";
import room2 from "../../assets/img_2.jpg";
import room3 from "../../assets/img_3.jpg";
import room4 from "../../assets/img_4.jpg";
import room5 from "../../assets/img_5.jpg";
import room6 from "../../assets/img_6.jpg";
import room7 from "../../assets/img_7.jpg";
import room8 from "../../assets/img_8.jpg";
import property1 from "../../assets/new.png";
import property2 from "../../assets/building.png";
import property3 from "../../assets/broker.png";
import property4 from "../../assets/buildings.png";
import customer1 from "../../assets/person_1-min.jpg";
import customer2 from "../../assets/person_2-min.jpg";
import customer3 from "../../assets/person_3-min.jpg";
import customer4 from "../../assets/person_4-min.jpg";
import customer5 from "../../assets/person_5-min.jpg";
import customer6 from "../../assets/person_6-min.jpg";
import aside1 from "../../assets/home.png";
import aside2 from "../../assets/profile.png";
import aside3 from "../../assets/security.png";

const { setGlobalState, useGlobalState, getGlobalState } = createGlobalState({
  rooms: [
    {
      id: 1,
      img: room1,
      price: " $1,291,000",
      location: "5232 California Fake, Ave. 21BC",
      title: "California, USA",
    },
    {
      id: 2,
      img: room2,
      price: " $1,291,000",
      location: "5232 California Fake, Ave. 21BC",
      title: "California, USA",
    },
    {
      id: 3,
      img: room3,
      price: " $1,291,000",
      location: "5232 California Fake, Ave. 21BC",
      title: "California, USA",
    },
    {
      id: 4,
      img: room4,
      price: " $1,291,000",
      location: "5232 California Fake, Ave. 21BC",
      title: "California, USA",
    },
    {
      id: 5,
      img: room5,
      price: " $1,291,000",
      location: "5232 California Fake, Ave. 21BC",
      title: "California, USA",
    },
    {
      id: 6,
      img: room6,
      price: " $1,291,000",
      location: "5232 California Fake, Ave. 21BC",
      title: "California, USA",
    },
    {
      id: 7,
      img: room7,
      price: " $1,291,000",
      location: "5232 California Fake, Ave. 21BC",
      title: "California, USA",
    },
    {
      id: 8,
      img: room8,
      price: " $1,291,000",
      location: "5232 California Fake, Ave. 21BC",
      title: "California, USA",
    },
  ],
  property: [
    {
      id: 1,
      img: property1,
      heading: "Our Properties",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, accusamus.",
    },
    {
      id: 2,
      img: property2,
      heading: "Property for Sale",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, accusamus.",
    },
    {
      id: 3,
      img: property3,
      heading: "Real Estate Agent",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, accusamus.",
    },
    {
      id: 4,
      img: property4,
      heading: "House for Sale",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, accusamus.",
    },
  ],
  customers: [
    {
      id: 1,
      img: customer1,
      name: "Mike Houston ",
      review:
        "“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”",
      position: "Designer, Co-founder",
    },
    {
      id: 2,
      img: customer2,
      name: "Cameron Webster",
      review:
        "“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”",
      position: "Designer, Co-founder",
    },
    {
      id: 3,
      img: customer3,
      name: "Dave Smith",
      review:
        "“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”",
      position: "Designer, Co-founder",
    },
    {
      id: 4,
      img: customer4,
      name: "James Smith",
      review:
        "“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”",
      position: "Designer, Co-founder",
    },
    {
      id: 5,
      img: customer5,
      name: "Mike Hudson",
      review:
        "“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”",
      position: "Designer, Co-founder",
    },
    {
      id: 6,
      img: customer6,
      name: "James Smith",
      review:
        "“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”",
      position: "Designer, Co-founder",
    },
  ],
  aside: [
    {
      id: 1,
      img: aside1,
      heading: "2M Properties",
      text: "Lorem ipsum dolor sit amet, consectetur, accusamus.",
    },
    {
      id: 2,
      img: aside2,
      heading: "Top Rated Agents",
      text: "Lorem ipsum dolor sit amet, consectetur .",
    },
    {
      id: 3,
      img: aside3,
      heading: "Legit Properties",
      text: "Lorem ipsum dolor sit amet, consectetur .",
    },
  ],
  stats: [
    {
      id: 1,
      numbers: "3,298",
      text: "# of Buy Properties",
    },
    {
      id: 2,
      numbers: "2,181",
      text: "# of Sell Properties",
    },
    {
      id: 3,
      numbers: "9,316",
      text: "# of All Properties",
    },
    {
      id: 4,
      numbers: "7,191",
      text: "# of Agents",
    },
  ],
  agents: [
    {
      id: 1,
      img: customer1,
      name: "Mike Houston ",
      review:
        "“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”",
      position: "Designer, Co-founder",
    },
    {
      id: 2,
      img: customer2,
      name: "Cameron Webster",
      review:
        "“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”",
      position: "Designer, Co-founder",
    },
    {
      id: 3,
      img: customer3,
      name: "Dave Smith",
      review:
        "“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”",
      position: "Designer, Co-founder",
    },
  ],
});
export { setGlobalState, useGlobalState, getGlobalState };
