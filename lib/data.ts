export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: "hot" | "iced" | "specialty";
  rating: number;
  reviewCount: number;
  isPopular?: boolean;
}

export interface Review {
  id: string;
  productId: string;
  author: string;
  rating: number;
  text: string;
  date: string;
  avatar?: string;
}

export interface Order {
  id: string;
  date: string;
  status: "pending" | "preparing" | "delivered" | "completed";
  items: Array<{
    productId: string;
    name: string;
    quantity: number;
    price: number;
    customizations: string[];
  }>;
  total: number;
  deliveryAddress: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Espresso",
    description: "A concentrated shot of pure coffee, bold and aromatic with a rich crema layer.",
    price: 3.5,
    image: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=400&h=400&fit=crop",
    category: "hot",
    rating: 4.8,
    reviewCount: 245,
    isPopular: true,
  },
  {
    id: "2",
    name: "Americano",
    description: "Espresso diluted with hot water for a smooth, full-bodied coffee experience.",
    price: 4.0,
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400&h=400&fit=crop",
    category: "hot",
    rating: 4.6,
    reviewCount: 189,
  },
  {
    id: "3",
    name: "Latte",
    description: "Silky steamed milk poured over espresso, topped with a light foam layer.",
    price: 5.0,
    image: "https://images.unsplash.com/photo-1561882468-9110e03e0f78?w=400&h=400&fit=crop",
    category: "hot",
    rating: 4.9,
    reviewCount: 412,
    isPopular: true,
  },
  {
    id: "4",
    name: "Cappuccino",
    description: "Equal parts espresso, steamed milk, and velvety foam for the perfect balance.",
    price: 5.0,
    image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&h=400&fit=crop",
    category: "hot",
    rating: 4.7,
    reviewCount: 367,
    isPopular: true,
  },
  {
    id: "5",
    name: "Flat White",
    description: "Velvety microfoam over a double ristretto shot, creamy and intense.",
    price: 5.25,
    image: "https://images.unsplash.com/photo-1577968897966-3d4325b36b61?w=400&h=400&fit=crop",
    category: "hot",
    rating: 4.8,
    reviewCount: 203,
  },
  {
    id: "6",
    name: "Mocha",
    description: "Espresso meets rich chocolate and steamed milk, topped with whipped cream.",
    price: 5.75,
    image: "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?w=400&h=400&fit=crop",
    category: "specialty",
    rating: 4.9,
    reviewCount: 521,
    isPopular: true,
  },
  {
    id: "7",
    name: "Macchiato",
    description: "Bold espresso marked with a dollop of foamed milk for a delicate contrast.",
    price: 4.25,
    image: "https://images.unsplash.com/photo-1485808191679-5f86510681a2?w=400&h=400&fit=crop",
    category: "hot",
    rating: 4.5,
    reviewCount: 156,
  },
  {
    id: "8",
    name: "Cold Brew",
    description: "Slow-steeped for 20 hours, delivering smooth, naturally sweet cold coffee.",
    price: 4.75,
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=400&fit=crop",
    category: "iced",
    rating: 4.8,
    reviewCount: 389,
    isPopular: true,
  },
  {
    id: "9",
    name: "Iced Latte",
    description: "Chilled espresso and cold milk over ice for a refreshing pick-me-up.",
    price: 5.25,
    image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=400&h=400&fit=crop",
    category: "iced",
    rating: 4.7,
    reviewCount: 298,
  },
  {
    id: "10",
    name: "Caramel Latte",
    description: "Buttery caramel swirled into espresso and steamed milk, pure indulgence.",
    price: 5.75,
    image: "https://images.unsplash.com/photo-1485808191679-5f86510681a2?w=400&h=400&fit=crop",
    category: "specialty",
    rating: 4.9,
    reviewCount: 445,
    isPopular: true,
  },
  {
    id: "11",
    name: "Vanilla Latte",
    description: "Sweet vanilla bean infused into creamy latte for a classic favorite.",
    price: 5.5,
    image: "https://images.unsplash.com/photo-1534778101666-5c6a06004cca?w=400&h=400&fit=crop",
    category: "specialty",
    rating: 4.6,
    reviewCount: 312,
  },
  {
    id: "12",
    name: "Hazelnut Latte",
    description: "Nutty hazelnut flavor blended with espresso and velvety steamed milk.",
    price: 5.5,
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=400&fit=crop",
    category: "specialty",
    rating: 4.7,
    reviewCount: 234,
  },
  {
    id: "13",
    name: "Iced Caramel Macchiato",
    description: "Vanilla, milk, and espresso layered with caramel drizzle over ice.",
    price: 6.0,
    image: "https://images.unsplash.com/photo-1553909489-cd47e0907980?w=400&h=400&fit=crop",
    category: "iced",
    rating: 4.8,
    reviewCount: 378,
  },
  {
    id: "14",
    name: "Iced Mocha",
    description: "Chocolate lovers rejoice - espresso and chocolate over ice with cold milk.",
    price: 5.75,
    image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=400&h=400&fit=crop",
    category: "iced",
    rating: 4.6,
    reviewCount: 267,
  },
  {
    id: "15",
    name: "Affogato",
    description: "A scoop of vanilla gelato drowned in hot espresso, dessert meets coffee.",
    price: 6.5,
    image: "https://images.unsplash.com/photo-1579992357154-faf4bde95b3d?w=400&h=400&fit=crop",
    category: "specialty",
    rating: 4.9,
    reviewCount: 189,
  },
  {
    id: "16",
    name: "Irish Coffee",
    description: "Hot coffee with Irish whiskey, brown sugar, and cream floated on top.",
    price: 8.5,
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=400&h=400&fit=crop",
    category: "specialty",
    rating: 4.7,
    reviewCount: 145,
  },
  {
    id: "17",
    name: "Vietnamese Coffee",
    description: "Strong drip coffee mixed with sweetened condensed milk, served iced.",
    price: 5.5,
    image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=400&h=400&fit=crop",
    category: "iced",
    rating: 4.8,
    reviewCount: 234,
  },
  {
    id: "18",
    name: "Turkish Coffee",
    description: "Finely ground coffee simmered in a cezve with cardamom, rich and traditional.",
    price: 4.5,
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400&h=400&fit=crop",
    category: "specialty",
    rating: 4.5,
    reviewCount: 167,
  },
  {
    id: "19",
    name: "Nitro Cold Brew",
    description: "Cold brew infused with nitrogen for a creamy, cascading pour experience.",
    price: 5.5,
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=400&fit=crop",
    category: "iced",
    rating: 4.9,
    reviewCount: 312,
  },
  {
    id: "20",
    name: "Matcha Latte",
    description: "Ceremonial grade matcha whisked with steamed milk for an earthy, creamy treat.",
    price: 5.75,
    image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=400&h=400&fit=crop",
    category: "specialty",
    rating: 4.6,
    reviewCount: 278,
  },
];

export const reviews: Review[] = [
  {
    id: "r1",
    productId: "3",
    author: "Sarah M.",
    rating: 5,
    text: "The best latte I&apos;ve ever had! The foam is always perfect and the espresso has such a smooth finish.",
    date: "2024-01-15",
  },
  {
    id: "r2",
    productId: "6",
    author: "James K.",
    rating: 5,
    text: "Their mocha is absolutely divine. Perfect balance of chocolate and coffee.",
    date: "2024-01-12",
  },
  {
    id: "r3",
    productId: "8",
    author: "Emily R.",
    rating: 5,
    text: "The cold brew is so smooth! I order it every morning now. No bitterness at all.",
    date: "2024-01-10",
  },
  {
    id: "r4",
    productId: "1",
    author: "Michael B.",
    rating: 4,
    text: "Classic espresso, always consistent. The crema is beautiful every time.",
    date: "2024-01-08",
  },
  {
    id: "r5",
    productId: "10",
    author: "Lisa T.",
    rating: 5,
    text: "The caramel latte is my guilty pleasure. Rich, sweet, and absolutely delicious!",
    date: "2024-01-05",
  },
  {
    id: "r6",
    productId: "4",
    author: "David W.",
    rating: 5,
    text: "Perfect cappuccino with that classic foam texture. Reminds me of Italy!",
    date: "2024-01-03",
  },
  {
    id: "r7",
    productId: "15",
    author: "Anna P.",
    rating: 5,
    text: "The affogato is incredible! Hot espresso over cold gelato - perfection in a cup.",
    date: "2023-12-28",
  },
  {
    id: "r8",
    productId: "19",
    author: "Chris L.",
    rating: 5,
    text: "Nitro cold brew has the smoothest texture. It&apos;s like drinking coffee clouds!",
    date: "2023-12-25",
  },
  {
    id: "r9",
    productId: "13",
    author: "Jennifer H.",
    rating: 4,
    text: "Love the layers in the iced caramel macchiato. Always Instagram-worthy!",
    date: "2023-12-22",
  },
  {
    id: "r10",
    productId: "5",
    author: "Robert S.",
    rating: 5,
    text: "The flat white is silky smooth. Perfect milk-to-espresso ratio every time.",
    date: "2023-12-20",
  },
  {
    id: "r11",
    productId: "20",
    author: "Michelle Y.",
    rating: 4,
    text: "Great matcha latte! You can tell they use quality ceremonial grade matcha.",
    date: "2023-12-18",
  },
  {
    id: "r12",
    productId: "17",
    author: "Kevin N.",
    rating: 5,
    text: "Authentic Vietnamese coffee! The condensed milk makes it so indulgent.",
    date: "2023-12-15",
  },
  {
    id: "r13",
    productId: "16",
    author: "Patricia G.",
    rating: 5,
    text: "The Irish coffee is a perfect after-dinner treat. Not too boozy, just right!",
    date: "2023-12-12",
  },
  {
    id: "r14",
    productId: "2",
    author: "Steven A.",
    rating: 4,
    text: "Solid americano. Clean taste and not bitter at all. My daily go-to.",
    date: "2023-12-10",
  },
  {
    id: "r15",
    productId: "11",
    author: "Amanda C.",
    rating: 5,
    text: "The vanilla latte tastes like a warm hug. Real vanilla flavor, not artificial!",
    date: "2023-12-08",
  },
];

export const sampleOrders: Order[] = [
  {
    id: "ORD-2024-001",
    date: "2024-01-15",
    status: "completed",
    items: [
      { productId: "3", name: "Latte", quantity: 2, price: 5.0, customizations: ["Large", "Oat Milk"] },
      { productId: "6", name: "Mocha", quantity: 1, price: 5.75, customizations: ["Medium", "Extra Shot"] },
    ],
    total: 18.75,
    deliveryAddress: "123 Coffee Street, Beanville, CA 90210",
  },
  {
    id: "ORD-2024-002",
    date: "2024-01-12",
    status: "completed",
    items: [
      { productId: "8", name: "Cold Brew", quantity: 1, price: 4.75, customizations: ["Large"] },
    ],
    total: 6.75,
    deliveryAddress: "456 Espresso Ave, Roast City, NY 10001",
  },
  {
    id: "ORD-2024-003",
    date: "2024-01-10",
    status: "delivered",
    items: [
      { productId: "10", name: "Caramel Latte", quantity: 2, price: 5.75, customizations: ["Medium", "Almond Milk", "Whipped Cream"] },
      { productId: "4", name: "Cappuccino", quantity: 1, price: 5.0, customizations: ["Small"] },
    ],
    total: 19.50,
    deliveryAddress: "789 Brew Lane, Caffeine Town, TX 75001",
  },
  {
    id: "ORD-2024-004",
    date: "2024-01-08",
    status: "preparing",
    items: [
      { productId: "15", name: "Affogato", quantity: 1, price: 6.5, customizations: [] },
      { productId: "19", name: "Nitro Cold Brew", quantity: 2, price: 5.5, customizations: ["Large"] },
    ],
    total: 20.50,
    deliveryAddress: "321 Java Street, Mocha Heights, WA 98001",
  },
  {
    id: "ORD-2024-005",
    date: "2024-01-05",
    status: "pending",
    items: [
      { productId: "1", name: "Espresso", quantity: 3, price: 3.5, customizations: ["Double Shot"] },
    ],
    total: 13.50,
    deliveryAddress: "654 Bean Road, Arabica Valley, CO 80001",
  },
  {
    id: "ORD-2024-006",
    date: "2024-01-03",
    status: "completed",
    items: [
      { productId: "13", name: "Iced Caramel Macchiato", quantity: 1, price: 6.0, customizations: ["Large", "Extra Caramel"] },
      { productId: "11", name: "Vanilla Latte", quantity: 1, price: 5.5, customizations: ["Medium", "Oat Milk"] },
      { productId: "7", name: "Macchiato", quantity: 2, price: 4.25, customizations: [] },
    ],
    total: 23.00,
    deliveryAddress: "987 Roast Avenue, Grind City, FL 33001",
  },
  {
    id: "ORD-2024-007",
    date: "2023-12-28",
    status: "completed",
    items: [
      { productId: "16", name: "Irish Coffee", quantity: 2, price: 8.5, customizations: [] },
    ],
    total: 20.00,
    deliveryAddress: "147 Barista Blvd, Latte Landing, AZ 85001",
  },
  {
    id: "ORD-2024-008",
    date: "2023-12-25",
    status: "completed",
    items: [
      { productId: "20", name: "Matcha Latte", quantity: 1, price: 5.75, customizations: ["Large", "Soy Milk"] },
      { productId: "17", name: "Vietnamese Coffee", quantity: 1, price: 5.5, customizations: [] },
    ],
    total: 14.25,
    deliveryAddress: "258 Drip Drive, Filter Falls, OR 97001",
  },
  {
    id: "ORD-2024-009",
    date: "2023-12-22",
    status: "completed",
    items: [
      { productId: "5", name: "Flat White", quantity: 2, price: 5.25, customizations: ["Extra Shot"] },
      { productId: "2", name: "Americano", quantity: 1, price: 4.0, customizations: ["Large"] },
    ],
    total: 17.50,
    deliveryAddress: "369 Pour Over Place, Extraction Estate, GA 30001",
  },
  {
    id: "ORD-2024-010",
    date: "2023-12-20",
    status: "completed",
    items: [
      { productId: "9", name: "Iced Latte", quantity: 3, price: 5.25, customizations: ["Large", "Vanilla Syrup"] },
    ],
    total: 18.75,
    deliveryAddress: "741 Crema Court, Foam Forest, NC 27001",
  },
];

export const coffeeFeatures = [
  {
    title: "Freshly Roasted",
    description: "Our beans are roasted daily to ensure maximum freshness and flavor in every cup.",
    icon: "flame",
  },
  {
    title: "Expert Baristas",
    description: "Our team of certified baristas craft each drink with precision and care.",
    icon: "user",
  },
  {
    title: "Fast Delivery",
    description: "Get your coffee delivered hot and fresh within 30 minutes or less.",
    icon: "truck",
  },
  {
    title: "Sustainable Sourcing",
    description: "We partner with ethical farms that practice sustainable coffee cultivation.",
    icon: "leaf",
  },
];
