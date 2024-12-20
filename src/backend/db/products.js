//seating
import sun3 from "../../assets/sunglasses/seat1.png";
import sun4 from "../../assets/sunglasses/seat2.png";
import sun5 from "../../assets/sunglasses/seat3.png";
import sun7 from "../../assets/sunglasses/seat4.png";
import sun8 from "../../assets/sunglasses/seat5.png";
import sun9 from "../../assets/sunglasses/seat6.png";
import sun10 from "../../assets/sunglasses/seat7.png";
import sun11 from "../../assets/sunglasses/seat8.png";
import sun12 from "../../assets/sunglasses/seat9.png";
import sun13 from "../../assets/sunglasses/seat10.png";
import sun14 from "../../assets/sunglasses/seat11.png";


//tables
import sports1 from "../../assets/sports/table1.png";
import sports2 from "../../assets/sports/table2.png";
import sports3 from "../../assets/sports/table3.png";
import sports4 from "../../assets/sports/table4.png";
import sports6 from "../../assets/sports/table5.png";
import sports7 from "../../assets/sports/table6.png";
import sports8 from "../../assets/sports/table7.png";
import sports9 from "../../assets/sports/table8.png";


//storage
import vision1 from "../../assets/vision/storage1.png";
import vision2 from "../../assets/vision/storage2.png";
import vision3 from "../../assets/vision/storage3.png";
import vision4 from "../../assets/vision/storage4.png";
import vision5 from "../../assets/vision/storage5.png";
import vision6 from "../../assets/vision/storage6.png";
import vision7 from "../../assets/vision/storage7.png";
// import vision8 from "../../assets/vision/vision8.png";
import vision9 from "../../assets/vision/storage9.png";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */
export const products = [
  {
    _id: "3d7e9c33-0080-4bd2-b2bf-56552da31e35",
    qty: 0,
    name: "Sheesham Wood Writing Table",
    description:"Dimensions In Centimeters: H 77 x W 116 x D 55",

    category: "Tables",
    gender: "All",
    weight: "8kgs",
    quantity: 10,
    image: sports1,
    rating: 4.5,
    price: 19999,
    newPrice: 18000,
    trending: true,
  },
  {
    _id: "887cdd99-1503-4527-aef4-88c521126a47",
    qty: 0,
    name: "Wood Trunk ",
    description:"Dimensions (In Centimeters) H 41 x W 86 x D 46",
    category: "Tables",
    gender: "Living Room",
    weight: "10Kg",
    quantity: 5,
    image: sports2,
    rating: 4.8,
    price: 12999,
    newPrice: 11000,
    trending: true,
  },
  {
    _id: "dc2b2495-eb6c-4889-a6f7-3c8853a01ba2",
    qty: 0,
    name: "Wood Coffee Tablet",
    description:"Dimensions (in Inches) H 16 x W 35 x D 23.5",
    category: "Tables",
    gender: "living Room",
    weight: "10Kg",
    quantity: 15,
    image: sports3,
    rating: 4.7,
    price: 20000,
    newPrice: 15000,
    trending: true,
  },
  {
    _id: "fd25068a-9647-45ba-b44d-c8af1523148a",
    qty: 0,
    name: "Corral Round",
    description:
      "Vestibulum eu tellus sed lorem tristique lacinia ut vel urna. Vestibulum eu tellus sed lorem tristique lacinia ut vel urna.",
    category: "Tables",
    gender: "Bed Room",
    weight: "12Kg",
    quantity: 8,
    image: sports4,
    rating: 3.8,
    price: 15000,
    newPrice: 13000,
  },
  {
    _id: "95cd381c-32cf-46e5-8a75-05d30a421d6b",
    qty: 0,
    name: "Hyperclax Active",
    description:
      "Aenean at velit consequat, faucibus mi id, tempor velit. Aenean at velit consequat, faucibus mi id, tempor velit.",
    category: "Tables",
    gender: "Dining Room",
    weight: "15Kg",
    quantity: 3,
    image: sports6,
    rating: 3.5,
    price: 25000,
    newPrice: 20000,
  },
  {
    _id: "6033723f-a8db-4ad8-bfda-d191778141aa",
    qty: 0,
    name: "Rose Gold Chase",
    description:
      "Vivamus mattis quam sed libero pretium ullamcorper. Vivamus mattis quam sed libero pretium ullamcorper.",
    category: "Storage",
    gender: "Kitchen",
    weight: "20Kg",
    quantity: 9,
    image: vision7,
    rating: 4.3,
    price: 21000,
    newPrice: 18000,
  },
  // {
  //   _id: "ac072970-8dac-42fe-8c31-a8fa6fd4b64a",
  //   qty: 0,
  //   name: "Full Rim Airflex",
  //   description:
  //     "Donec interdum felis non justo sollicitudin lobortis. Donec interdum felis non justo sollicitudin lobortis.",
  //   brand: "Carrera",
  //   category: "Vision",
  //   gender: "Unisex",
  //   weight: "550g",
  //   quantity: 7,
  //   image: sports2,
  //   rating: 4.8,
  //   trending: true,
  //   price: 4999,
  //   newPrice: 3999,
  // },
  {
    _id: "8ad38385-1211-4192-8108-db851b4e9434",
    qty: 0,
    name: "Mercury Rounded Red",
    description:
      "Donec interdum felis non justo sollicitudin lobortis. Donec interdum felis non justo sollicitudin lobortis.",
    category: "Storage",
    gender: "Living Room",
    weight: "10Kg",
    quantity: 7,
    image: vision9,
    rating: 4.8,
    price: 16000,
    newPrice: 12000,
  },
  {
    _id: "c6dcde20-2e9f-470c-b76c-38b01ab7e16e",
    qty: 0,
    name: "Candyfloss-302",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    category: "Seating",
    gender: "Bed Room",
    weight: "50Kg",
    quantity: 10,
    image: sun3,
    rating: 4.5,
    price: 30000,
    newPrice: 27000,
  },
  {
    _id: "c76b3840-47d2-4d38-b465-af68e2af9dcd",
    qty: 0,
    name: "Phenomenal Mercury-02",
    description:
      "Pellentesque ac tortor sed ipsum feugiat condimentum. Pellentesque ac tortor sed ipsum feugiat condimentum.",
    category: "Seating",
    gender: "Living Room",
    weight: "5Kg",
    quantity: 5,
    image: sun4,
    rating: 2.8,
    price: 8000,
    newPrice: 7000,
  },
  {
    _id: "61bf1558-94c3-4494-a522-0aad46ed5334",
    qty: 0,
    name: "Single Bed - Planked Walnut Finish ",
    description:"Dimensions (in Inches) H 32 x W 38 x D 80",
    category: "Seating",
    gender: "Bed Room",
    weight: "13Kg",
    quantity: 15,
    image: sun5,
    rating: 4.7,
    price: 12000,
    newPrice: 10000,
    trending: true,
  },
  {
    _id: "9e3419eb-e5f6-4813-8bf4-6d72b6498235",
    qty: 0,
    name: "Blue Ray Wayfarer",
    description:
      "Donec interdum felis non justo sollicitudin lobortis. Donec interdum felis non justo sollicitudin lobortis.",
    category: "Tables",
    gender: "Living Room",
    weight: "9Kg",
    quantity: 7,
    image: sports9,
    rating: 4.8,
    price: 19000,
    newPrice: 17000,
  },
  {
    _id: "c39a126c-783e-4926-bedd-0b2174307d9c",
    qty: 0,
    name: "Pernik",
    description:
      "Vestibulum eu tellus sed lorem tristique lacinia ut vel urna. Vestibulum eu tellus sed lorem tristique lacinia ut vel urna.",
    category: "Seating",
    gender: "Dining Room",
    weight: "15Kg",
    quantity: 8,
    image: sun7,
    rating: 3.8,
    price: 6000,
    newPrice: 5000,
  },
  {
    _id: "2e792ac4-13a7-4d70-a9a5-55294e346404",
    qty: 0,
    name: "Silistra",
    description:
      "Aenean at velit consequat, faucibus mi id, tempor velit. Aenean at velit consequat, faucibus mi id, tempor velit.",
    category: "Seating",
    gender: "Living Room",
    weight: "2.5Kg",
    quantity: 3,
    image: sun8,
    rating: 3.5,
    price: 3999,
    newPrice: 3599,
  },
  {
    _id: "a84d980e-cf9e-4607-b74d-68f7a1c45771",
    qty: 0,
    name: "Full rim acetate black",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    category: "Storage",
    gender: "Bed Room",
    weight: "25Kg",
    quantity: 10,
    image: vision1,
    rating: 4.5,
    price: 1999,
    newPrice: 1900,
  },
  {
    _id: "1c9bd0c1-b300-4358-9eb4-43a70e392859",
    qty: 0,
    name: "Ruse",
    description:
      "Fusce sed est nec ipsum convallis semper nec id ipsum. Fusce sed est nec ipsum convallis semper nec id ipsum.",
    category: "Seating",
    gender: "Bed Room",
    weight: "40Kg",
    quantity: 6,
    image: sun9,
    rating: 4.1,
    price: 1499,
    newPrice: 1350,
  },
  {
    _id: "08617c37-e290-4296-b558-2db509201361",
    qty: 0,
    name: "Yambol",
    description:
      "Vivamus mattis quam sed libero pretium ullamcorper. Vivamus mattis quam sed libero pretium ullamcorper.",
    category: "Seating",
    gender: "Bed Room",
    weight: "20Kg",
    quantity: 9,
    image: sun10,
    rating: 4.3,
    price: 2999,
    newPrice: 1999,
  },
  {
    _id: "5f73b408-aa98-4f54-a15b-7a7425a038d5",
    qty: 0,
    name: "Roadies Rd-202",
    description:
      "Donec interdum felis non justo sollicitudin lobortis. Donec interdum felis non justo sollicitudin lobortis.",
    category: "Seating",
    gender: "Living Room",
    weight: "5Kg",
    quantity: 7,
    image: sun14,
    rating: 4.8,
    price: 4999,
    newPrice: 4799,
  },
  {
    _id: "bb2ad041-b53a-49a8-835d-e84300e6fbd2",
    qty: 0,
    name: "Burgas",
    description:
      "Donec interdum felis non justo sollicitudin lobortis. Donec interdum felis non justo sollicitudin lobortis.",
    category: "Seating",
    gender: "Living Room",
    weight: "2Kg",
    quantity: 7,
    image: sun11,
    rating: 4.8,
    price: 4999,
    newPrice: 4000,
  },
  {
    _id: "6c800171-bea6-4cb2-811d-7c419a59dcb8",
    qty: 0,
    name: "Sheesham Wood 6 Seater Dining Table ",
    description:" Dimensions (In Centimeters) H 76 x W 147 x D 89",
    category: "Tables",
    gender: "Dining Room",
    weight: "20Kg",
    quantity: 6,
    image: sports7,
    rating: 4.1,
    price: 25000,
    newPrice: 20000,
    trending: true,
  },
  {
    _id: "9ca598d9-7cb5-4fb0-8455-b43028f9cb96",
    qty: 0,
    name: "Dresser in Walnut Rigato Woodpore Finish",
    description:"Dimensions (in Inches) H 69 x W 20.5 x D 15.5",

    category: "Storage",
    gender: "Bed Room",
    weight: "10Kg",
    quantity: 9,
    image: sports8,
    rating: 4.3,
    price: 19000,
    newPrice: 17000,
    trending: true,
  },
  {
    _id: "51db0e19-b0e0-4d6e-bce0-739f1bd37ba7",
    qty: 0,
    name: " Shoe Cabinet in Brown Teak ",
    description:"Dimensions (In Centimeters) H 91 x W 76 x D 36",
    category: "Storage",
    gender: "Living Room",
    weight: "13Kg",
    quantity: 5,
    image: vision2,
    rating: 2.8,
    price: 12000,
    newPrice: 10000,
    trending: true,
  },
  {
    _id: "35332c85-f853-407a-80f8-840069381a0d",
    qty: 0,
    name: "Jungle Safari",
    description:
      "Integer et nunc in turpis maximus facilisis ac ac elit. Integer et nunc in turpis maximus facilisis ac ac elit.",
    category: "Storage",
    gender: " living Room",
    weight: "15Kg",
    quantity: 15,
    image: vision3,
    rating: 4.7,
    price: 2999,
    newPrice: 2899,
  },
  // {
  //   _id: "53ca5f50-39f4-4c77-be14-c3246cfc5dc6",
  //   qty: 0,
  //   name: "Burgas",
  //   description:
  //     "Donec interdum felis non justo sollicitudin lobortis. Donec interdum felis non justo sollicitudin lobortis.",
  //   brand: "Carrera",
  //   category: "Sunglasses",
  //   gender: "Women",
  //   weight: "550g",
  //   quantity: 7,
  //   image: sun11,
  //   rating: 4.8,
  //   price: 4999,
  //   newPrice: 4700,
  // },
  {
    _id: "a0a1ca71-d121-48af-a463-4ee790df28de",
    qty: 0,
    name: "Sofia",
    description:
      "Donec interdum felis non justo sollicitudin lobortis. Donec interdum felis non justo sollicitudin lobortis.",
    category: "Seating",
    gender: " living Room",
    weight: "6kg",
    quantity: 7,
    image: sun12,
    rating: 4.8,
    price: 4999,
    newPrice: 4399,
  },
  {
    _id: "2b5f4f03-7ec7-4a5c-b2a7-14dbcc4f2f6b",
    qty: 0,
    name: "Plovediv",
    description:
      "Donec interdum felis non justo sollicitudin lobortis. Donec interdum felis non justo sollicitudin lobortis.",
    category: "Seating",
    gender: "Diing Room",
    weight: "3Kg",
    quantity: 7,
    image: sun13,
    rating: 4.8,
    price: 4999,
    newPrice: 3499,
  },
  {
    _id: "440cec02-21e1-4447-bdd9-d51482b7ce4b",
    qty: 0,
    name: "Airway Black",
    description:
      "Vestibulum eu tellus sed lorem tristique lacinia ut vel urna. Vestibulum eu tellus sed lorem tristique lacinia ut vel urna.",
    category: "Storage",
    gender: "Bed Room",
    weight: "40kg",
    quantity: 8,
    image: vision4,
    rating: 3.8,
    price: 2499,
    newPrice: 1499,
  },
  {
    _id: "77f519a8-a40f-443d-8c9e-5314b24cf06d",
    qty: 0,
    name: "Cat-eyed Gold",
    description:
      "Aenean at velit consequat, faucibus mi id, tempor velit. Aenean at velit consequat, faucibus mi id, tempor velit.",
    category: "Storage",
    gender: "Living Room",
    weight: "7Kg",
    quantity: 3,
    image: vision5,
    rating: 3.5,
    price: 3999,
    newPrice: 3790,
  },
  {
    _id: "11a2bfb4-2acf-40da-a12f-60dfcce8ed95",
    qty: 0,
    name: "Full Rim Steel Gray",
    description:
      "Fusce sed est nec ipsum convallis semper nec id ipsum. Fusce sed est nec ipsum convallis semper nec id ipsum.",
    category: "Storage",
    gender: "Bed Room",
    weight: "20 Kg",
    quantity: 6,
    image: vision6,
    rating: 4.1,
    price: 20000,
    newPrice: 18000,
  },
];
