// Data module for room information
const roomsData = [
    {
        id: 1,
        name: "Cottages with terrace",
        image: "assets/images/rooms/ocean-view-suite.jpg",
        amenities: [
         "King Bed", "Private Terrace", "Cable TV", "WiFi", "Air Conditioning", "Clothes Dry Stand" , "Hot Water" 
        ],
        category: "suite",
        size: "65 sqm",
        maxGuests: "2+1"
    },
    {
        id: 2,
        name: "Cottages",
        image: "assets/images/rooms/beach-villa.jpg",
        amenities: [
             "King Bed", "Cable TV", "WiFi", "Air Conditioning", "Clothes Dry Stand" , "Hot Water"
        ],
        category: "villa",
        size: "120 sqm",
        maxGuests: "2+1"
    },
    {
        id: 3,
        name: "Building Rooms",
        image: "assets/images/rooms/garden-room.jpg",
        amenities: [
           "King Bed", "Cable TV", "WiFi", "Air Conditioning", "Clothes Dry Stand" , "Hot Water"
        ],
        category: "standard",
        size: "35 sqm",
        maxGuests: "2+1"
    },
    {
        id: 4,
        name: "Family Room",
        image: "assets/images/rooms/Family.jpg",
        amenities: [
            "King Bed", "Family Friendly", "Cable TV", "WiFi", "Air Conditioning", "Clothes Dry Stand" , "Hot Water"
        ],
        category: "family",
        size: "85 sqm",
        maxGuests: 8
    }
];

// Gallery image data
const galleryData = [
    {
        id: 1,
        category: 'beach',
        image: 'assets/images/gallery/beach1.jpeg',
        alt: 'Beach View'
    },
    {
        id: 2,
        category: 'white',
        image: 'assets/images/gallery/beach3.jpeg',
        alt: 'Beach View'
    },
    {
        id: 3,
        category: 'mountain',
        image: 'assets/images/gallery/beach4.jpeg',
        alt: 'Beach'
    },
    {
        id: 4,
        category: 'cart',
        image: 'assets/images/gallery/cart.jpg',
        alt: 'Cart'
    },
    {
        id: 5,
        category: 'sunset',
        image: 'assets/images/gallery/suns.jpeg',
        alt: 'Luxury Room'
    },
    {
        id: 6,
        category: 'garden',
        image: 'assets/images/gallery/garden.jpeg',
        alt: 'Water Sports'
    },
    {
        id: 7,
        category: 'parking',
        image: 'assets/images/gallery/parking.jpeg',
        alt: 'Beach front'
    },
    {
        id: 8,
        category: 'fish',
        image: 'assets/images/gallery/fish.jpg',
        alt: 'fish'
    },
    {
        id: 9,
        category: 'cottages',
        image: 'assets/images/gallery/cottages.jpg',
        alt: 'fish'
    }
];

// Fallback images for error handling
const fallbackImages = {
    beach: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop',
    white: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&h=600&fit=crop',
    mountain: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop',
    cart: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&h=600&fit=crop',
    sunset: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop',
    garden: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop',
    hero: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&h=1080&fit=crop'
};

// Resort information data
const resortInfo = {
    name: "Blue Breeze Resort",
    tagline: "Where Paradise Meets Comfort",
    contact: {
        phone: "+1 (555) 123-4567",
        email: "sales@bluebreezeresort.com",
        address: "Paradise Beach, Tropical Island"
    },
    social: {
        facebook: "#",
        instagram: "#",
        twitter: "#"
    }
};

// Food Menu Data
const foodMenuData = {
    categories: [
        {
            id: 'breakfast',
            name: 'Breakfast',
            icon: 'far fa-sun',
            description: 'Start your day with our delicious breakfast options'
        },
        {
            id: 'eggs',
            name: 'Eggs',
            icon: 'fas fa-egg',
            description: 'Start your day with our delicious breakfast egg options'
        },
          {
            id: 'beverages',
            name: 'Beverages',
            icon: 'fas fa-mug-hot',
            description: 'Refreshing sip to the perfect time of the day'
        },
           {
            id: 'vegstarters',
            name: 'Veg Starters',
            icon: 'fas fa-cubes-stacked',
            description: 'Refreshing sip to the perfect time of the day'
        },
         {
            id: 'vegetablebowl',
            name: 'Vegetable Bowl',
            icon: 'fas fa-bowl-food',
            description: 'Refreshing sip to the perfect time of the day'
        },
        {
            id: 'thali',
            name: 'Thali',
            icon: 'fas fa-cookie',
            description: 'Fresh and flavorful lunch dishes'
        },
         {
            id: 'indianbread',
            name: 'Indian Breads',
            icon: 'fas fa-bread-slice',
            description: 'Fresh and flavorful lunch dishes'
        },
         {
            id: 'ricebiryani',
            name: 'Rice/Biryani',
            icon: 'fa-solid fa-bowl-rice',
            description: 'Fresh and flavorful lunch dishes'
        },
        {
            id: 'desserts',
            name: 'Desserts',
            icon: 'fas fa-ice-cream',
            description: 'Authentic Konkan coastal cuisine'
        }
    ],
    items: [
        // Breakfast Items
        {
            id: 1,
            name: 'Kande Pohe',
            category: 'breakfast',
            image: 'assets/images/food/noimage.png'
        },
        {
            id: 2,
            name: 'Dadpe Pohe',
            category: 'breakfast',
            image: 'assets/images/food/noimage.png'
        },
        {
            id: 3,
            name: 'Upma',
            category: 'breakfast',
            image: 'assets/images/food/noimage.png'
        
        },{
            id: 4,
            name: 'Shira',
            category: 'breakfast',
            image: 'assets/images/food/noimage.png'
        },
        {
            id: 5,
            name: 'Thali Pith',
            category: 'breakfast',
            image: 'assets/images/food/noimage.png'
        },
        {
            id: 6,
            name: 'Sabudana Khichadi',
            category: 'breakfast',
            image: 'assets/images/food/noimage.png'
        
        },
        {
            id: 7,
            name: 'Amboli/Ghavan',
            category: 'breakfast',
            image: 'assets/images/food/amboli.jpg'
        },
        {
            id: 8,
            name: 'Idli Wada',
            category: 'breakfast',
            image: 'assets/images/food/noimage.png'
        },
        {
            id: 9,
            name: 'Batata Vada Plate',
            category: 'breakfast',
            image: 'assets/images/food/noimage.png',
        
        },
        {
            id: 10,
            name: 'Mixed Bhaji Plate',
            category: 'breakfast',
            image: 'assets/images/food/noimage.png',
            isVegetarian: true, 
            isSpicy: false
        },
        {
            id: 11,
            name: 'Finger Chips',
            category: 'breakfast',
            image: 'assets/images/food/noimage.png',
            isVegetarian: false,
            isSpicy: false
        },
        {
            id: 12,
            name: 'Aloo Paratha',
            category: 'breakfast',
            image: 'assets/images/food/noimage.png',
            isVegetarian: true,
            isSpicy: false
        
        },
        {
            id: 13,
            name: 'Misal Pav',
            category: 'breakfast',
            image: 'assets/images/food/noimage.png',
            isVegetarian: true,
            isSpicy: false
        },
        {
            id: 14,
            name: 'Veg Sandwich',
            category: 'breakfast',
            image: 'assets/images/food/noimage.png',
            isVegetarian: false,
            isSpicy: false
        },
        {
            id: 15,
            name: 'Bread Slices 2 pieces',
            category: 'breakfast',
            image: 'assets/images/food/noimage.png',
            isVegetarian: true,
            isSpicy: false
        
        },
        {
            id: 16,
            name: 'Bread Butter/Jam',
            category: 'breakfast',
            image: 'assets/images/food/noimage.png',
            isVegetarian: true,
            isSpicy: false
        },
        {
            id: 17,
            name: 'Maggi',
            category: 'breakfast',
            image: 'assets/images/food/noimage.png',
            isVegetarian: false,
            isSpicy: false
        },
        {
            id: 18,
            name: 'Puri Bhaji',
            category: 'breakfast',
            image: 'assets/images/food/noimage.png',
            isVegetarian: true,
            isSpicy: false
        
        },
        {
            id: 19,
            name: 'Biscuit',
            category: 'breakfast',
            image: 'assets/images/food/noimage.png',
            isVegetarian: true,
            isSpicy: false
        
        },
           {
            id: 20,
            name: 'Boiled eggs 2 pcs',
            category: 'eggs',
            image: 'assets/images/food/noimage.png',
            isVegetarian: false,
            isSpicy: false
        },
        {
            id: 21,
            name: 'Masala Omlet',
            category: 'eggs',
            image: 'assets/images/food/MasalaOmlette.jpg',
            isVegetarian: true,
            isSpicy: false
        
        },
        {
            id: 22,
            name: 'Egg Bhurji',
            category: 'eggs',
            image: 'assets/images/food/noimage.png',
            isVegetarian: true,
            isSpicy: false
        },
        {
            id: 23,
            name: 'Egg Curry',
            category: 'eggs',
            image: 'assets/images/food/noimage.png',
            isVegetarian: false,
            isSpicy: false
        },
        {
            id: 24,
            name: 'Egg Masala',
            category: 'eggs',
            image: 'assets/images/food/noimage.png',
            isVegetarian: true,
            isSpicy: false
        
        },
           {
            id: 25,
            name: 'Tea',
            category: 'beverages',
            image: 'assets/images/food/noimage.png',
            isVegetarian: true,
            isSpicy: false
        
        },
        {
            id: 26,
            name: 'Coffee',
            category: 'beverages',
            image: 'assets/images/food/coffee.jpeg',
            isVegetarian: true,
            isSpicy: false
        },
        {
            id: 27,
            name: 'Milk',
            category: 'beverages',
            image: 'assets/images/food/noimage.png',
            isVegetarian: false,
            isSpicy: false
        },
        {
            id: 28,
            name: 'Bournvita',
            category: 'beverages',
            image: 'assets/images/food/noimage.png',
            isVegetarian: true,
            isSpicy: false
        
        },
         {
            id: 29,
            name: 'Chaas',
            category: 'beverages',
            image: 'assets/images/food/noimage.png',
            isVegetarian: true,
            isSpicy: false
        
        },
        {
            id: 30,
            name: 'Lime Juice',
            category: 'beverages',
            image: 'assets/images/food/noimage.png',
            isVegetarian: true,
            isSpicy: false
        },
        {
            id: 31,
            name: 'Fresh Lime Soda',
            category: 'beverages',
            image: 'assets/images/food/noimage.png',
            isVegetarian: false,
            isSpicy: false
        },
        {
            id: 32,
            name: 'Mineral Water',
            category: 'beverages',
            image: 'assets/images/food/noimage.png',
            isVegetarian: true,
            isSpicy: false
        
        },
         {
            id: 33,
            name: 'Any Soft Drink(500 ml)',
            category: 'beverages',
            image: 'assets/images/food/noimage.png',
            isVegetarian: true,
            isSpicy: false
        
        },
        {
            id: 34,
            name: 'Soda',
            category: 'beverages',
            image: 'assets/images/food/noimage.png',
            isVegetarian: true,
            isSpicy: false
        },
        {
            id: 35,
            name: 'Kokam Sarbat',
            category: 'beverages',
            image: 'assets/images/food/noimage.png',
            isVegetarian: false,
            isSpicy: false
        },
        {
            id: 36,
            name: 'Cold Coffee',
            category: 'beverages',
            image: 'assets/images/food/noimage.png',
            isVegetarian: true,
            isSpicy: false
        
        },
         {
            id: 37,
            name: 'Solkadi',
            category: 'beverages',
            image: 'assets/images/food/noimage.png',
            isVegetarian: true,
            isSpicy: false
        
        },

        {
            id: 38,
            name: 'Kothambir Wadi',
            category: 'vegstarters',
            image: 'assets/images/food/kothimbirvadi.jpg',
            isVegetarian: true,
            isSpicy: false
        
        },
          {
            id: 39,
            name: 'Aloo Wadi',
            category: 'vegstarters',
            image: 'assets/images/food/noimage.png',
            isVegetarian: true,
            isSpicy: false
        
        },
          {
            id: 40,
            name: 'Dhokla',
            category: 'vegstarters',
            image: 'assets/images/food/noimage.png',
            isVegetarian: true,
            isSpicy: false
        
        },
         {
            id: 41,
            name: 'Kachori',
            category: 'vegstarters',
            image: 'assets/images/food/noimage.png',
            isVegetarian: true,
            isSpicy: false
        
        },
          {
            id: 42,
            name: 'Sev Puri',
            category: 'vegstarters',
            image: 'assets/images/food/noimage.png',
            isVegetarian: true,
            isSpicy: false
        
        },
          {
            id: 43,
            name: 'Samosa',
            category: 'vegstarters',
            image: 'assets/images/food/noimage.png',
            isVegetarian: true,
            isSpicy: false
        
        },
         {
            id: 44,
            name: 'Fried Papad',
            category: 'vegstarters',
            image: 'assets/images/food/noimage.png',
            isVegetarian: true,
            isSpicy: false
        
        },
          {
            id: 45,
            name: 'Roasted Papad',
            category: 'vegstarters',
            image: 'assets/images/food/noimage.png',
            isVegetarian: true,
            isSpicy: false
        
        },
          {
            id: 46,
            name: 'Masala Papad',
            category: 'vegstarters',
            image: 'assets/images/food/Masalapapad.jpg',
            isVegetarian: true,
            isSpicy: false
        
        },
         {
            id: 47,
            name: 'Green Salad',
            category: 'vegstarters',
            image: 'assets/images/food/noimage.png',
            isVegetarian: true,
            isSpicy: false
        
        },
          {
            id: 48,
            name: 'Fried Shengdana',
            category: 'vegstarters',
            image: 'assets/images/food/noimage.png',
            isVegetarian: true,
            isSpicy: false
        
        },
          {
            id: 49,
            name: 'Fried Cashew Nut',
            category: 'vegstarters',
            image: 'assets/images/food/noimage.png',
            isVegetarian: true,
            isSpicy: false
        
        },
         {
            id: 50,
            name: 'Cheese Balls',
            category: 'vegstarters',
            image: 'assets/images/food/noimage.png',
            isVegetarian: true,
            isSpicy: false
        
        },
          {
            id: 51,
            name: 'Paneer Pakoda',
            category: 'vegstarters',
            image: 'assets/images/food/noimage.png',
            isVegetarian: true,
            isSpicy: false
        
        },
          {
            id: 40,
            name: 'Dhokla',
            category: 'vegstarters',
            image: 'assets/images/food/noimage.png',
            isVegetarian: true,
            isSpicy: false
        
        },
        {
            id: 50,
            name: 'Cheese Balls',
            category: 'vegstarters',
            image: 'assets/images/food/noimage.png',
            isVegetarian: true,
            isSpicy: false
        
        },
          {
            id: 51,
            name: 'Paneer Pakoda',
            category: 'vegstarters',
            image: 'assets/images/food/noimage.png',
            isVegetarian: true,
            isSpicy: false
        
        },
          {
            id: 52,
            name: 'Dal Fry',
            category: 'vegetablebowl',
            image: 'assets/images/food/noimage.png',
            isVegetarian: true,
            isSpicy: false
        
        },
          {
            id: 53,
            name: 'Dal Tadka',
            category: 'vegetablebowl',
            image: 'assets/images/food/noimage.png',
            isVegetarian: true,
            isSpicy: false
        
        },

  {
            id: 54,
            name: 'God Varan',
            category: 'vegetablebowl',
            image: 'assets/images/food/noimage.png',
            isVegetarian: true,
            isSpicy: false
        
        },
        {
            id: 55,
            name: 'Paneer Butter Masala',
            category: 'vegetablebowl',
            image: 'assets/images/food/noimage.png',
            isVegetarian: true,
            isSpicy: false
        
        },
          {
            id: 56,
            name: 'Paneer Tikka Masala',
            category: 'vegetablebowl',
            image: 'assets/images/food/noimage.png',
            isVegetarian: true,
            isSpicy: false
        
        },

  {
            id: 57,
            name: 'Paneer Masala',
            category: 'vegetablebowl',
            image: 'assets/images/food/noimage.png',
            isVegetarian: true,
            isSpicy: false
        
        },
        {
            id: 58,
            name: 'Paneer Bhurji',
            category: 'vegetablebowl',
            image: 'assets/images/food/noimage.png',
            isVegetarian: true,
            isSpicy: false
        
        },
          {
            id: 59,
            name: 'Mix Veg',
            category: 'vegetablebowl',
            image: 'assets/images/food/noimage.png',
            isVegetarian: true,
            isSpicy: false
        
        },

  {
            id: 60,
            name: 'Veg Kurma',
            category: 'vegetablebowl',
            image: 'assets/images/food/noimage.png',
            isVegetarian: true,
            isSpicy: false
        
        },
        {
            id: 61,
            name: 'Chana Koliwada',
            category: 'vegetablebowl',
            image: 'assets/images/food/noimage.png',
            isVegetarian: true,
            isSpicy: false
        
        },
          {
            id: 62,
            name: 'Pithla / Zunka',
            category: 'vegetablebowl',
            image: 'assets/images/food/noimage.png',
            isVegetarian: true,
            isSpicy: false
        
        },

  {
            id: 63,
            name: 'Aloo Matar',
            category: 'vegetablebowl',
            image: 'assets/images/food/noimage.png',
            isVegetarian: true,
            isSpicy: false
        
        },
        {
            id: 64,
            name: 'Bhindi Fry',
            category: 'vegetablebowl',
            image: 'assets/images/food/noimage.png',
            isVegetarian: true,
            isSpicy: false
        
        },
          {
            id: 65,
            name: 'Bhindi Masala',
            category: 'vegetablebowl',
            image: 'assets/images/food/noimage.png',
            isVegetarian: true,
            isSpicy: false
        
        },

  {
            id: 66,
            name: 'Flower Batata Rassa',
            category: 'vegetablebowl',
            image: 'assets/images/food/noimage.png',
            isVegetarian: true,
            isSpicy: false
        
        },
        {
            id: 67,
            name: 'Kala Watana Usal',
            category: 'vegetablebowl',
            image: 'assets/images/food/noimage.png',
            isVegetarian: true,
            isSpicy: false
        
        },
          {
            id: 68,
            name: 'Moong Usal',
            category: 'vegetablebowl',
            image: 'assets/images/food/noimage.png',
            isVegetarian: true,
            isSpicy: false
        
        },

  {
            id: 69,
            name: 'Mataki Usal',
            category: 'vegetablebowl',
            image: 'assets/images/food/noimage.png',
            isVegetarian: true,
            isSpicy: false
        
        },
        {
            id: 70,
            name: 'Pale Bhaji(Seasonal)',
            category: 'vegetablebowl',
            image: 'assets/images/food/noimage.png',
            isVegetarian: true,
            isSpicy: false
        
        },
          {
            id: 71,
            name: 'Sev Tomato Bhaji',
            category: 'vegetablebowl',
            image: 'assets/images/food/noimage.png',
            isVegetarian: true,
            isSpicy: false
        
        },

  {
            id: 72,
            name: 'Simla Batata Bhaji',
            category: 'vegetablebowl',
            image: 'assets/images/food/noimage.png',
            isVegetarian: true,
            isSpicy: false
        
        },
        {
            id: 73,
            name: 'Shimla Batata Bhaji',
            category: 'vegetablebowl',
            image: 'assets/images/food/noimage.png',
            isVegetarian: true,
            isSpicy: false
        
        },
        {
            id: 74,
            name: 'Suka Batata Bhaji',
            category: 'vegetablebowl',
            image: 'assets/images/food/noimage.png',
            isVegetarian: true,
            isSpicy: false
        
        },
        {
            id: 75,
            name: 'Wal Ussal (Dalimbi)',
            category: 'vegetablebowl',
            image: 'assets/images/food/noimage.png',
            isVegetarian: true,
            isSpicy: false
        
        },
        {
            id: 76,
            name: 'Wanga Ussal',
            category: 'vegetablebowl',
            image: 'assets/images/food/noimage.png',
            isVegetarian: true,
            isSpicy: false
        
        },

          {
            id: 77,
            name: 'Wanga Bharit',
            category: 'vegetablebowl',
            image: 'assets/images/food/noimage.png',
            isVegetarian: true,
            isSpicy: false
        
        },

  {
            id: 78,
            name: 'Fanas Bhaji',
            category: 'vegetablebowl',
            image: 'assets/images/food/noimage.png',
            isVegetarian: true,
            isSpicy: false
        
        },
        {
            id: 79,
            name: 'Kaju Masala Usal(Seasonal)',
            category: 'vegetablebowl',
            image: 'assets/images/food/noimage.png',
            isVegetarian: true,
            isSpicy: false
        
        },
        {
            id: 80,
            name: 'Paneer Chilly',
            category: 'vegetablebowl',
            image: 'assets/images/food/noimage.png',
            isVegetarian: true,
            isSpicy: false
        
        },
        {
            id: 81,
            name: 'Chole',
            category: 'vegetablebowl',
            image: 'assets/images/food/noimage.png',
            isVegetarian: true,
            isSpicy: false
        
        },
        {
            id: 82,
            name: 'Veg Thali',
            category: 'thali',
            image: 'assets/images/food/veg_thali.jpg',
            isVegetarian: false,
            isSpicy: true
        },
         {
            id: 83,
            name: 'Mini Veg Thali',
            category: 'thali',
            image: 'assets/images/food/noimage.png',
            isVegetarian: false,
            isSpicy: true
        },
        {
            id: 84,
            name: 'Egg Thali',
            category: 'thali',
            image: 'assets/images/food/noimage.png',
            isVegetarian: false,
            isSpicy: true
        },
         {
            id: 85,
            name: 'Chicken Thali',
            category: 'thali',
            image: 'assets/images/food/noimage.png',
            isVegetarian: false,
            isSpicy: true
        },
         {
            id: 86,
            name: 'Mutton Thali',
            category: 'thali',
            image: 'assets/images/food/noimage.png',
            isVegetarian: false,
            isSpicy: true
        },
         {
            id: 87,
            name: 'Surmai Thali',
            category: 'thali',
            image: 'assets/images/food/noimage.png',
            isVegetarian: false,
            isSpicy: true
        },
         {
            id: 88,
            name: 'Paplet Thali',
            category: 'thali',
            image: 'assets/images/food/noimage.png',
            isVegetarian: false,
            isSpicy: true
        },
         {
            id: 89,
            name: 'Prawns Thali',
            category: 'thali',
            image: 'assets/images/food/noimage.png',
            isVegetarian: false,
            isSpicy: true
        },
         {
            id: 90,
            name: 'Bangda Thali',
            category: 'thali',
            image: 'assets/images/food/noimage.png',
            isVegetarian: false,
            isSpicy: true
        },
         {
            id: 91,
            name: 'Crab Thali',
            category: 'thali',
            image: 'assets/images/food/noimage.png',
            isVegetarian: false,
            isSpicy: true
        },
         {
            id: 92,
            name: 'Chapati',
            category: 'indianbread',
            image: 'assets/images/food/noimage.png',
            isVegetarian: false,
            isSpicy: true
        },
         {
            id: 93,
            name: 'Bhakri',
            category: 'indianbread',
            image: 'assets/images/food/noimage.png',
            isVegetarian: false,
            isSpicy: true
        },
         {
            id: 94,
            name: 'Wade 2 pcs',
            category: 'indianbread',
            image: 'assets/images/food/noimage.png',
            isVegetarian: false,
            isSpicy: true
        },
         {
            id: 95,
            name: 'Puri 5 pcs',
            category: 'indianbread',
            image: 'assets/images/food/noimage.png',
            isVegetarian: false,
            isSpicy: true
        },
         {
            id: 89,
            name: 'Prawns Fry',
            category: 'thali',
            image: 'assets/images/food/prawn.jpeg',
            isVegetarian: false,
            isSpicy: true
        },
         {
            id: 90,
            name: 'Bangda Thali',
            category: 'thali',
            image: 'assets/images/food/noimage.png',
            isVegetarian: false,
            isSpicy: true
        },
         {
            id: 91,
            name: 'Crab Thali',
            category: 'thali',
            image: 'assets/images/food/noimage.png',
            isVegetarian: false,
            isSpicy: true
        },
         {
            id: 92,
            name: 'Plain Rice',
            category: 'ricebiryani',
            image: 'assets/images/food/noimage.png',
            isVegetarian: false,
            isSpicy: true
        },
          {
            id: 93,
            name: 'Jeera Rice',
            category: 'ricebiryani',
            image: 'assets/images/food/Jirarice.jpg',
            isVegetarian: false,
            isSpicy: true
        },
         {
            id: 94,
            name: 'Curd Rice',
            category: 'ricebiryani',
            image: 'assets/images/food/noimage.png',
            isVegetarian: false,
            isSpicy: true
        },
         {
            id: 95,
            name: 'Dal Rice',
            category: 'ricebiryani',
            image: 'assets/images/food/noimage.png',
            isVegetarian: false,
            isSpicy: true
        },
         {
            id: 96,
            name: 'Dal/Kadi/Khichadi',
            category: 'ricebiryani',
            image: 'assets/images/food/noimage.png',
            isVegetarian: false,
            isSpicy: true
        },
         {
            id: 97,
            name: 'Pulao',
            category: 'ricebiryani',
            image: 'assets/images/food/noimage.png',
            isVegetarian: false,
            isSpicy: true
        },
         {
            id: 98,
            name: 'Masala Bhaat',
            category: 'ricebiryani',
            image: 'assets/images/food/noimage.png',
            isVegetarian: false,
            isSpicy: true
        },
         {
            id: 99,
            name: 'Veg Biryani',
            category: 'ricebiryani',
            image: 'assets/images/food/noimage.png',
            isVegetarian: false,
            isSpicy: true
        },
        {
            id: 100,
            name: 'Modak',
            category: 'desserts',
            image: 'assets/images/food/noimage.png',
            isVegetarian: true
        },
    ]
};

// Amenities data
const amenitiesData = [
    {
        icon: "fas fa-swimming-pool",
        title: "Infinity Pool",
        description: "Ocean-view swimming pool with poolside service"
    },
    {
        icon: "fas fa-spa",
        title: "Spa & Wellness",
        description: "Full-service spa with massage and beauty treatments"
    },
    {
        icon: "fas fa-utensils",
        title: "Restaurants",
        description: "Multiple dining options with international cuisine"
    },
    {
        icon: "fas fa-dumbbell",
        title: "Fitness Center",
        description: "State-of-the-art gym with personal training"
    },
    {
        icon: "fas fa-water",
        title: "Water Sports",
        description: "Snorkeling, diving, kayaking, and more"
    },
    {
        icon: "fas fa-wifi",
        title: "Free WiFi",
        description: "High-speed internet throughout the resort"
    }
];