
export default function handler(req, res) {
  const data = [
    { id: 1, 
      name: 'Martini Prosecco',
      price: 1000,
      image: 'martini.jpg'
    },
    { id: 2, 
      name: 'Cuvee Speciale Wine',
      price: 1500,
      image: 'spar10252_180x.jpg'
    },
    { id: 3, 
      name: 'vodka-flirt',
      price: 4500,
      image: 'vodka-flirt.jpg'
    },

    { id: 4, 
      name: 'Skirt Blended ',
      price: 3500,
      image: 'Sweet.jpg'
    },

    { id: 5, 
      name: 'Rosa Blended wine',
      price: 3500,
      image: 'rosa.jpg'
    },

    { id: 6, 
      name: 'Blue Nun Wine',
      price: 4500,
      image: 'blue.jpg'
    },
    { id: 7, 
      name: 'Gala Rosa Wine',
      price: 3800,
      image: 'gala.jpg'
    },
    { id: 8, 
      name: 'Whispering Angel Wine',
      price: 9800,
      image: 'pink.jpg'
    },
  ];

 

  res.status(200).json(data)
}
