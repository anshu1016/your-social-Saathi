import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

export const posts = [
  {
    _id: uuid(),
    content: "किताबों में दुनिया की सबसे बड़ी दौलत होती है।",
    likes: {
      likeCount: 3,
      likedBy: ["arunshukla98710@gmail.com", "prakashverma@gmail.com", "priyakapoor@gmail.com"],
      dislikedBy: [],
    },
    comments: [{
      _id: uuid(),
      username: "priyakapoor@gmail.com",
      text: "मैं पूरी तरह सहमत हूं!"
    }],
    username: "arunshukla98710@gmail.com",
    profilePic: "https://www.pngmart.com/files/22/Charizard-Pokemon-Download-PNG-Image.png",
    userHandler: "arunshukla20",
    file: "https://images.pexels.com/photos/590493/pexels-photo-590493.jpeg",
    createdAt: new Date(2023, 1, 10, 10, 10, 18),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "भारतीय खाना मेरी पसंदीदा है।",
    likes: {
      likeCount: 5,
      likedBy: ["arunshukla98710@gmail.com", "prakashverma@gmail.com", "priyakapoor@gmail.com", "rameshgupta@gmail.com", "sunitapandey@gmail.com"],
      dislikedBy: [],
    },
    comments: [{
      _id: uuid(),
      username: "sunitapandey@gmail.com",
      text: "मेरी भी!"
    }],
    username: "prakashverma@gmail.com",
    profilePic: "https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80",
    userHandler: "prakashverma123",
    file: "https://images.pexels.com/photos/2232/vegetables-italian-pizza-restaurant.jpg",
    createdAt: new Date(2023, 2, 11, 11, 10, 18),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "नई वेबसाइट डिजाइन पर काम कर रहा हूं।",
    likes: {
      likeCount: 1,
      likedBy: ["arunshukla98710@gmail.com"],
      dislikedBy: [],
    },
    comments: [{
      _id: uuid(),
      username: "arunshukla98710@gmail.com",
      text: "उत्कृष्ट काम!"
    }],
    username: "priyakapoor@gmail.com",
    profilePic: "https://economictimes.indiatimes.com/thumb/height-450,width-600,imgsize-182458,msid-58980271/some-fun-facts-about-disneys-most-popular-character-donald-duck.jpg?from=mdr",
    userHandler: "priyaKapoor123",
    file: "https://images.pexels.com/photos/373076/pexels-photo-373076.jpeg",
    createdAt: new Date(2023, 3, 12, 12, 10, 18),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "यहां एक शानदार दिन है।",
    likes: {
      likeCount: 2,
      likedBy: ["arunshukla98710@gmail.com", "priyakapoor@gmail.com"],
      dislikedBy: [],
    },
    comments: [{
      _id: uuid(),
      username: "arunshukla98710@gmail.com",
      text: "मेरे यहां भी!"
    }],
    username: "rameshgupta@gmail.com",
    profilePic: "https://www.giantbomb.com/a/uploads/scale_small/0/6087/2437349-pikachu.png",
    userHandler: "rameshGupta123",
    file: "https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg",
    createdAt: new Date(2023, 4, 13, 13, 10, 18),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "यह मेरी पसंदीदा जगह है।",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [{
      _id: uuid(),
      username: "priyakapoor@gmail.com",
      text: "यह खूबसूरत लगता है!"
    }],
    username: "sunitapandey@gmail.com",
    profilePic: "https://i0.wp.com/yumetwinsblog.wpcomstaging.com/wp-content/uploads/2021/12/be02b003-df4b-4fda-b6d7-0f6ad6c111f4_900px-363Spheal.png?fit=640%2C640&ssl=1",
    userHandler: "sunitaPandey123",
    file: "https://images.pexels.com/photos/337599/pexels-photo-337599.jpeg",
    createdAt: new Date(2023, 5, 14, 14, 10, 18),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "New painting on the way 🎨",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "rahulmishra@gmail.com",
    profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY-wvAgEJiLLvKRlUi57WGY-gabfWao8R4E0_gKmezpb8Lu_ptwXwNlZSeXkgcNAkW9tA&usqp=CAU",
    userHandler: "rahulMishra123",
    file: "https://images.pexels.com/photos/1194358/pexels-photo-1194358.jpeg",
    createdAt: new Date(2023, 6, 15, 15, 10, 18),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Loving the vibe at the new coffee shop ☕",
    likes: {
      likeCount: 2,
      likedBy: ["rahulmishra@gmail.com", "arunshukla98710@gmail.com"],
      dislikedBy: [],
    },
    comments: [{
      _id: uuid(),
      username: "arunshukla98710@gmail.com",
      text: "Looks cozy!"
    }],
    username: "poojaverma@gmail.com",
    profilePic: "https://cdn.pixabay.com/photo/2020/05/11/15/38/tom-5158824_1280.png",
    userHandler: "poojaVerma123",
    file: "https://images.pexels.com/photos/4050313/pexels-photo-4050313.jpeg",
    createdAt: new Date(2023, 7, 16, 16, 10, 18),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Just finished a great workout 💪",
    likes: {
      likeCount: 1,
      likedBy: ["arunshukla98710@gmail.com"],
      dislikedBy: [],
    },
    comments: [{
      _id: uuid(),
      username: "arunshukla98710@gmail.com",
      text: "Keep it up!"
    }],
    username: "rahulmishra@gmail.com",
    profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY-wvAgEJiLLvKRlUi57WGY-gabfWao8R4E0_gKmezpb8Lu_ptwXwNlZSeXkgcNAkW9tA&usqp=CAU",
    userHandler: "rahulMishra123",
    file: "data:image/png;base64,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",
    createdAt: new Date(2023, 8, 17, 17, 10, 18),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Exploring new hiking trails 🌲",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "prakashverma@gmail.com",
    profilePic: "https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80",
    userHandler: "prakashverma123",
    file: "",
    createdAt: new Date(2023, 9, 18, 18, 10, 18),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Watching the sunset from the beach 🌅",
    likes: {
      likeCount: 2,
      likedBy: ["sunitapandey@gmail.com", "rahulmishra@gmail.com"],
      dislikedBy: [],
    },
    comments: [{
      _id: uuid(),
      username: "sunitapandey@gmail.com",
      text: "Looks amazing!"
    }],
    username: "arunshukla98710@gmail.com",
    profilePic: "https://www.pngmart.com/files/22/Charizard-Pokemon-Download-PNG-Image.png",
    userHandler: "arunshukla20",
    file: "https://images.pexels.com/photos/635747/pexels-photo-635747.jpeg",
    createdAt: new Date(2023, 6, 25, 20, 30, 18),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Trying out a new recipe 🍲",
    likes: {
      likeCount: 3,
      likedBy: ["prakashverma@gmail.com", "rahulmishra@gmail.com", "arunshukla98710@gmail.com"],
      dislikedBy: [],
    },
    comments: [{
      _id: uuid(),
      username: "prakashverma@gmail.com",
      text: "That looks delicious!"
    }],
    username: "sunitapandey@gmail.com",
    profilePic: "https://i0.wp.com/yumetwinsblog.wpcomstaging.com/wp-content/uploads/2021/12/be02b003-df4b-4fda-b6d7-0f6ad6c111f4_900px-363Spheal.png?fit=640%2C640&ssl=1",
    userHandler: "sunitaPandey123",
    file: "https://images.pexels.com/photos/1640771/pexels-photo-1640771.jpeg",
    createdAt: new Date(2023, 6, 27, 15, 30, 18),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Spent the day exploring the city 🏙️",
    likes: {
      likeCount: 1,
      likedBy: ["sunitapandey@gmail.com"],
      dislikedBy: [],
    },
    comments: [],
    username: "prakashverma@gmail.com",
    profilePic: "https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80",
    userHandler: "prakashverma123",
    file: "https://images.pexels.com/photos/209097/pexels-photo-209097.jpeg",
    createdAt: new Date(2023, 6, 28, 10, 30, 18),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Enjoying a good book 📖",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "rahulmishra@gmail.com",
    profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY-wvAgEJiLLvKRlUi57WGY-gabfWao8R4E0_gKmezpb8Lu_ptwXwNlZSeXkgcNAkW9tA&usqp=CAU",
    userHandler: "rahulMishra123",
    file: "https://images.pexels.com/photos/265702/pexels-photo-265702.jpeg",
    createdAt: new Date(2023, 6, 29, 17, 30, 18),
    updatedAt: formatDate(),
  }
  // Continue adding more posts as required

  // Continue adding more posts as required


  
  // Add more posts as per your requirement
];
