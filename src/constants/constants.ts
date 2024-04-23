type dataProps = {
  name: "Donuts" | 'Burger' | 'Smothie' | 'PanCake' | 'Pizza',
  image: any,
  imageSelected: any
}

export const data: dataProps[] = [
  {
    name: "Donuts",
    image: require("../../assets/icons/donuts/donut_BW.png"),
    imageSelected: require("../../assets/icons/donuts/donut.png"),
  },
  {
    name: "Burger",
    image: require("../../assets/icons/burger/burger_BW.png"),
    imageSelected: require("../../assets/icons/burger/burger.png"),
  },
  {
    name: "Smothie",
    image: require("../../assets/icons/smothie/drink_BW.png"),
    imageSelected: require("../../assets/icons/smothie/drink.png"),
  },
  {
    name: "PanCake",
    image: require("../../assets/icons/pancake/pancakes_BW.png"),
    imageSelected: require("../../assets/icons/pancake/pancakes.png"),
  },
  {
    name: "Pizza",
    image: require("../../assets/icons/pizza/pizza_BW.png"),
    imageSelected: require("../../assets/icons/pizza/pizza.png"),
  },
];

// Donuts
export const cardItem = {
  Donuts: [
    {
      name: "Nuts carmel",
      title: "Dunkin's",
      type: "Donuts",
      color: "#FFD59A",
      amount: 36,
      count: 1,
      image: require("../../assets/icons/donuts/nutsCaramelDonuts.jpeg"),
    },
    {
      name: "Red Velvet",
      title: "Dunkin's",
      type: "Donuts",
      amount: 45,
      count: 1,
      image: require("../../assets/icons/donuts/redVelvetDonuts.jpeg"),
    },
    {
      name: "Strawberry",
      title: "Dunkin's",
      type: "Donuts",
      amount: 84,
      count: 1,
      image: require("../../assets/icons/donuts/strawberryDonuts.jpeg"),
    },
    {
      name: "Choco Tap",
      title: "Dunkin's",
      type: "Donuts",
      amount: 95,
      count: 1,
      image: require("../../assets/icons/donuts/chocolateDonuts.webp"),
    },
  ],

  Pizza: [
    {
      name: "Cheese",
      title: "Pizza Hut",
      type: "Pizza",
      amount: 36,
      count: 1,
      image: require("../../assets/icons/pizza/CheesePizza.webp"),
    },
    {
      name: "Pepperoni",
      title: "Pizza Hut",
      type: "Pizza",
      amount: 45,
      count: 1,
      image: require("../../assets/icons/pizza/PepperoniPizza.webp"),
    },
    {
      name: "Veggie",
      title: "Pizza Hut",
      type: "Pizza",
      amount: 84,
      count: 1,
      image: require("../../assets/icons/pizza/VeggiePizza.jpeg"),
    },
    {
      name: "Meat",
      title: "Pizza Hut",
      type: "Pizza",
      amount: 95,
      count: 1,
      image: require("../../assets/icons/pizza/MeetPizza.jpeg"),
    },
  ],

  Burger: [
    {
      name: "Cheese",
      title: "McDonald's",
      type: "Burger",
      amount: 36,
      count: 1,
      image: require("../../assets/icons/burger/burgerCheese.jpeg"),
    },
    {
      name: "Veggie",
      title: "McDonald's",
      type: "Burger",
      amount: 45,
      count: 1,
      image: require("../../assets/icons/burger/burgerVeegie.jpeg"),
    },
    {
      name: "Meat",
      title: "McDonald's",
      type: "Burger",
      amount: 84,
      count: 1,
      image: require("../../assets/icons/burger/burgerMeet.jpeg"),
    },
    {
      name: "Chicken",
      title: "McDonald's",
      type: "Burger",
      amount: 95,
      count: 1,
      image: require("../../assets/icons/burger/burgerCicken.jpeg"),
    },
  ],

  Smothie: [
    {
      name: "Strawberry",
      title: "Jamba Juice",
      type: "Smothie",
      amount: 36,
      count: 1,
      image: require("../../assets/icons/smothie/StrawberrySmoothie.jpeg"),
    },
    {
      name: "Mango",
      title: "Jamba Juice",
      type: "Smothie",
      amount: 45,
      count: 1,
      image: require("../../assets/icons/smothie/MangoSmoothie.webp"),
    },
    {
      name: "Banana",
      title: "Jamba Juice",
      type: "Smothie",
      amount: 84,
      count: 1,
      image: require("../../assets/icons/smothie/bananaSmothie.webp"),
    },
    {
      name: "Pineapple",
      title: "Jamba Juice",
      type: "Smothie",
      amount: 95,
      count: 1,
      image: require("../../assets/icons/smothie/pineappleSmoothie.jpeg"),
    },
  ],

  PanCake: [
    {
      name: "Blueberry",
      title: "IHOP",
      type: "PanCake",
      amount: 36,
      count: 1,
      image: require("../../assets/icons/pancake/BlueberryPancakes.webp"),
    },
    {
      name: "Chocolate",
      title: "IHOP",
      type: "PanCake",
      amount: 45,
      count: 1,
      image: require("../../assets/icons/pancake/chocolatPancakes.jpeg"),
    },
    {
      name: "Strawberry",
      title: "IHOP",
      type: "PanCake",
      amount: 84,
      count: 1,
      image: require("../../assets/icons/pancake/StrawberryPancakes.jpeg"),
    },
    {
      name: "Classic",
      title: "IHOP",
      type: "PanCake",
      amount: 95,
      count: 1,
      image: require("../../assets/icons/pancake/ClassicPancake.jpeg"),
    },
  ],
};

type ingredientsProps = {
  name: string;
      gram: number;
      percent: number;
}

interface Item {
  name: string;
  ingredients: ingredientsProps[];
  details: string;
}

type CardInfo = {
  [key: string]: Item[];
};

export const cardInfo: CardInfo = {
  Donuts: [
    {
      name: "strawberry",
      ingredients: [
        {
          name: "sugar",
          gram: 8,
          percent: 20,
        },
        {
          name: "fat",
          gram: 5,
          percent: 10,
        },
        {
          name: "salt",
          gram: 2,
          percent: 5,
        },
        {
          name: "energy",
          gram: 100,
          percent: 25,
        },
      ],
      details:
        "The sweet and subtle salty combo of chocolate meets caramel. Introduce the caramel duo to you mouth!",
    },
    {
      name: "Choco Tap",
      ingredients: [
        {
          name: "sugar",
          gram: 8,
          percent: 20,
        },
        {
          name: "fat",
          gram: 5,
          percent: 10,
        },
        {
          name: "salt",
          gram: 2,
          percent: 5,
        },
        {
          name: "energy",
          gram: 100,
          percent: 25,
        },
      ],
      details:
        "The sweet and subtle salty combo of chocolate meets caramel. Introduce the caramel duo to you mouth!",
    },
    {
      name: "Red Velvet",
      ingredients: [
        {
          name: "sugar",
          gram: 8,
          percent: 20,
        },
        {
          name: "fat",
          gram: 5,
          percent: 10,
        },
        {
          name: "salt",
          gram: 2,
          percent: 5,
        },
        {
          name: "energy",
          gram: 100,
          percent: 25,
        },
      ],
      details:
        "The sweet and subtle salty combo of chocolate meets caramel. Introduce the caramel duo to you mouth!",
    },
    {
      name: "Nuts carmel",
      ingredients: [
        {
          name: "sugar",
          gram: 8,
          percent: 20,
        },
        {
          name: "fat",
          gram: 5,
          percent: 10,
        },
        {
          name: "salt",
          gram: 2,
          percent: 5,
        },
        {
          name: "energy",
          gram: 100,
          percent: 25,
        },
      ],
      details:
        "The sweet and subtle salty combo of chocolate meets caramel. Introduce the caramel duo to you mouth!",
    },
  ],
  Pizza: [
    {
      name: "Cheese",
      ingredients: [
        {
          name: "sugar",
          gram: 8,
          percent: 20,
        },
        {
          name: "fat",
          gram: 5,
          percent: 10,
        },
        {
          name: "salt",
          gram: 2,
          percent: 5,
        },
        {
          name: "energy",
          gram: 100,
          percent: 25,
        },
      ],
      details:
        "The sweet and subtle salty combo of chocolate meets caramel. Introduce the caramel duo to you mouth!",
    },
    {
      name: "Pepperoni",
      ingredients: [
        {
          name: "sugar",
          gram: 8,
          percent: 20,
        },
        {
          name: "fat",
          gram: 5,
          percent: 10,
        },
        {
          name: "salt",
          gram: 2,
          percent: 5,
        },
        {
          name: "energy",
          gram: 100,
          percent: 25,
        },
      ],
      details:
        "The sweet and subtle salty combo of chocolate meets caramel. Introduce the caramel duo to you mouth!",
    },
    {
      name: "Veggie",
      ingredients: [
        {
          name: "sugar",
          gram: 8,
          percent: 20,
        },
        {
          name: "fat",
          gram: 5,
          percent: 10,
        },
        {
          name: "salt",
          gram: 2,
          percent: 5,
        },
        {
          name: "energy",
          gram: 100,
          percent: 25,
        },
      ],
      details:
        "The sweet and subtle salty combo of chocolate meets caramel. Introduce the caramel duo to you mouth!",
    },
    {
      name: "Meat",
      ingredients: [
        {
          name: "sugar",
          gram: 8,
          percent: 20,
        },
        {
          name: "fat",
          gram: 5,
          percent: 10,
        },
        {
          name: "salt",
          gram: 2,
          percent: 5,
        },
        {
          name: "energy",
          gram: 100,
          percent: 25,
        },
      ],
      details:
        "The sweet and subtle salty combo of chocolate meets caramel. Introduce the caramel duo to you mouth!",
    },
  ],
  Burger: [
    {
      name: "Cheese",
      ingredients: [
        {
          name: "sugar",
          gram: 8,
          percent: 20,
        },
        {
          name: "fat",
          gram: 5,
          percent: 10,
        },
        {
          name: "salt",
          gram: 2,
          percent: 5,
        },
        {
          name: "energy",
          gram: 100,
          percent: 25,
        },
      ],
      details:
        "The sweet and subtle salty combo of chocolate meets caramel. Introduce the caramel duo to you mouth!",
    },
    {
      name: "Veggie",
      ingredients: [
        {
          name: "sugar",
          gram: 8,
          percent: 20,
        },
        {
          name: "fat",
          gram: 5,
          percent: 10,
        },
        {
          name: "salt",
          gram: 2,
          percent: 5,
        },
        {
          name: "energy",
          gram: 100,
          percent: 25,
        },
      ],
      details:
        "The sweet and subtle salty combo of chocolate meets caramel. Introduce the caramel duo to you mouth!",
    },
    {
      name: "Meat",
      ingredients: [
        {
          name: "sugar",
          gram: 8,
          percent: 20,
        },
        {
          name: "fat",
          gram: 5,
          percent: 10,
        },
        {
          name: "salt",
          gram: 2,
          percent: 5,
        },
        {
          name: "energy",
          gram: 100,
          percent: 25,
        },
      ],
      details:
        "The sweet and subtle salty combo of chocolate meets caramel. Introduce the caramel duo to you mouth!",
    },
    {
      name: "Chicken",
      ingredients: [
        {
          name: "sugar",
          gram: 8,
          percent: 20,
        },
        {
          name: "fat",
          gram: 5,
          percent: 10,
        },
        {
          name: "salt",
          gram: 2,
          percent: 5,
        },
        {
          name: "energy",
          gram: 100,
          percent: 25,
        },
      ],
      details:
        "The sweet and subtle salty combo of chocolate meets caramel. Introduce the caramel duo to you mouth!",
    },
  ],
  Smothie: [
    {
      name: "Strawberry",
      ingredients: [
        {
          name: "sugar",
          gram: 8,
          percent: 20,
        },
        {
          name: "fat",
          gram: 5,
          percent: 10,
        },
        {
          name: "salt",
          gram: 2,
          percent: 5,
        },
        {
          name: "energy",
          gram: 100,
          percent: 25,
        },
      ],
      details:
        "The sweet and subtle salty combo of chocolate meets caramel. Introduce the caramel duo to you mouth!",
    },
    {
      name: "Mango",
      ingredients: [
        {
          name: "sugar",
          gram: 8,
          percent: 20,
        },
        {
          name: "fat",
          gram: 5,
          percent: 10,
        },
        {
          name: "salt",
          gram: 2,
          percent: 5,
        },
        {
          name: "energy",
          gram: 100,
          percent: 25,
        },
      ],
      details:
        "The sweet and subtle salty combo of chocolate meets caramel. Introduce the caramel duo to you mouth!",
    },
    {
      name: "Banana",
      ingredients: [
        {
          name: "sugar",
          gram: 8,
          percent: 20,
        },
        {
          name: "fat",
          gram: 5,
          percent: 10,
        },
        {
          name: "salt",
          gram: 2,
          percent: 5,
        },
        {
          name: "energy",
          gram: 100,
          percent: 25,
        },
      ],
      details:
        "The sweet and subtle salty combo of chocolate meets caramel. Introduce the caramel duo to you mouth!",
    },
    {
      name: "Pineapple",
      ingredients: [
        {
          name: "sugar",
          gram: 8,
          percent: 20,
        },
        {
          name: "fat",
          gram: 5,
          percent: 10,
        },
        {
          name: "salt",
          gram: 2,
          percent: 5,
        },
        {
          name: "energy",
          gram: 100,
          percent: 25,
        },
      ],
      details:
        "The sweet and subtle salty combo of chocolate meets caramel. Introduce the caramel duo to you mouth!",
    },
  ],
  PanCake: [
    {
      name: "Blueberry",
      ingredients: [
        {
          name: "sugar",
          gram: 8,
          percent: 20,
        },
        {
          name: "fat",
          gram: 5,
          percent: 10,
        },
        {
          name: "salt",
          gram: 2,
          percent: 5,
        },
        {
          name: "energy",
          gram: 100,
          percent: 25,
        },
      ],
      details:
        "The sweet and subtle salty combo of chocolate meets caramel. Introduce the caramel duo to you mouth!",
    },
    {
      name: "Chocolate",
      ingredients: [
        {
          name: "sugar",
          gram: 8,
          percent: 20,
        },
        {
          name: "fat",
          gram: 5,
          percent: 10,
        },
        {
          name: "salt",
          gram: 2,
          percent: 5,
        },
        {
          name: "energy",
          gram: 100,
          percent: 25,
        },
      ],
      details:
        "The sweet and subtle salty combo of chocolate meets caramel. Introduce the caramel duo to you mouth!",
    },
    {
      name: "Strawberry",
      ingredients: [
        {
          name: "sugar",
          gram: 8,
          percent: 20,
        },
        {
          name: "fat",
          gram: 5,
          percent: 10,
        },
        {
          name: "salt",
          gram: 2,
          percent: 5,
        },
        {
          name: "energy",
          gram: 100,
          percent: 25,
        },
      ],
      details:
        "The sweet and subtle salty combo of chocolate meets caramel. Introduce the caramel duo to you mouth!",
    },
    {
      name: "Classic",
      ingredients: [
        {
          name: "sugar",
          gram: 8,
          percent: 20,
        },
        {
          name: "fat",
          gram: 5,
          percent: 10,
        },
        {
          name: "salt",
          gram: 2,
          percent: 5,
        },
        {
          name: "energy",
          gram: 100,
          percent: 25,
        },
      ],
      details:
        "The sweet and subtle salty combo of chocolate meets caramel. Introduce the caramel duo to you mouth!",
    },
  ],
};

