export const user = {
  _id: "64dvs83ydwi229ndn",
  firstName: "Meshack",
  lastName: "Kirwa",
  email: "meshkirwade@gmail.com",
  profileUrl:
    "https://marketplace.canva.com/EAFWqgieqss/1/0/1600w/canva-blue-and-peach-gradient-facebook-profile-picture-oBy0jAd4JFY.jpg",
  friends: [
    {
      _id: "76633hhe7392dn",
      firstName: "John",
      lastName: "Doe",
      email: "johndoe@gmailcom",
      friends: ["93n3j3de3u", "djd0ij3iki2"],
      views: [],
      verified: true,
      createdAt: "2023-01-01T00:00:00.000Z",
      updatedAt: "2023-01-01T00:00:00.000Z",
      __v: 0,
      profileUrl: "",
    },
    {
      _id: "76633hhe733492dn",
      firstName: "Jack",
      lastName: "Man",
      email: "jackman@gmailcom",
      friends: ["93n3j3de3u", "djd0ij3iki2"],
      views: [],
      verified: true,
      createdAt: "2023-01-01T00:00:00.000Z",
      updatedAt: "2023-01-01T00:00:00.000Z",
      __v: 0,
      profileUrl: "",
    },
  ],
  views: [],
  verified: true,
  createdAt: "2023-01-01T00:00:00.000Z",
  updatedAt: "2023-01-01T00:00:00.000Z",
  token: "hndflfr74203u47447r28r83",
  profession: "Software Developer",
};

export const friends = [
  {
    _id: "38838373jw2ijw",
    firstName: "John",
    lastName: "Bruce",
    email: "johnbruce@gmailcom",
    profileUrl: "",
  },
  {
    _id: "38838373jw2ijw",
    firstName: "James",
    lastName: "Bond",
    email: "jamesbond@gmailcom",
    location: "London",
    profession: "Software Developer",
  },
  {
    _id: "38838373jw2ijw",
    firstName: "Jane",
    lastName: "Blake",
    email: "janeblake@gmailcom",
    profileUrl: "",
  },
];

export const requests = [
  {
    _id: "38838373jw2ijw",
    requestFrom: friends[0],
  },
  {
    _id: "38838373jw2ijw",
    requestFrom: friends[1],
  },
];
export const suggest = [
  {
    _id: "38838373jw2ijw",
    ...friends[0],
  },
  {
    _id: "38838373jw2ijw",
    ...friends[1],
  },
];