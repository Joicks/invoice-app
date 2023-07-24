export const invoice = {
  id: 10,
  name: "Componenetes Pc",
  Client: {
    firstname: "Jose",
    lastname: "hache",
    address: {
      country: "UK",
      city: "Londres",
      street: 'One London',
      number: '90',
    },
  },
  company: {
    name: "New Egg",
    fiscalNumber: 12345,
  },
  items: [
    {
      id: 1,
      product: "Cpu Ryzen 7",
      price: 499,
      quantity: 1,
    },
    {
      id: 2,
      product: "keyboard",
      price: 150,
      quantity: 2,
    },
    {
      id: 3,
      product: "Monitor Asus",
      price: 350,
      quantity: 1,
    },
  ],
};
