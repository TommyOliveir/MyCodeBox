const array = [
  {
    id: 1,
    price: 5,
  },
  {
    id: 2,
    price: 2,
  },
  {
    id: 3,
    price: 3,
  },
];

const cartItems = [
  {
    id: 1,
    quantity: 4,
  },
  {
    id: 2,
    quantity: 4,
  },
];

//see cart project on github

cartItems.reduce((acc, curr) => {
const item =  array.find(i => i.id === curr.id)
console.log(acc + item.price * curr.quantity);
return acc + item.price * curr.quantity
}, 0)