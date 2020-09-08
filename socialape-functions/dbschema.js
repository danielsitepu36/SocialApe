let db = {
  users: [
    {
      userId: "dh23ggj5h32g543j5gf43",
      email: "user@email.com",
      handle: "user",
      createdAt: "2020-08-24T10:00:01.899Z",
      imageUrl: "image/dsgdasdasdfdsf/sdsdfsdfsdfs",
      bio: "Hello, my name is user, nice to meet you",
      website: "https://user.com",
      location: "London, UK",
    },
  ],
  screams: [
    {
      userHandle: "user",
      body: "this is the scream body",
      createdAt: "2020-08-24T10:00:01.899Z",
      likeCount: 5,
      commentCount: 2,
    },
  ],
  comments: [
    {
      userHandle: "user",
      screamId: "adwjndowandoaw",
      body: "Nice one",
      createdAt: "2020-08-24T10:00:01.899Z",
    },
  ],
  notifications: [
    {
      recipient: "new2",
      sender: "new",
      read: "true | false",
      screamId: "awdonadnsansdas",
      type: "like | comment",
      createdAt: "2020-08-24T10:00:01.899Z",
    },
  ],
};

const userDetails = {
  //Redux data
  credentials: {
    userId: "dh23ggj5h32g543j5gf43",
    email: "user@email.com",
    handle: "user",
    createdAt: "2020-08-24T10:00:01.899Z",
    imageUrl: "image/dsgdasdasdfdsf/sdsdfsdfsdfs",
    bio: "Hello, my name is user, nice to meet you",
    website: "https://user.com",
    location: "London, UK",
  },
  likes: [
    {
      userHandle: "user",
      screamId: "hh1dn21bdiwdaduaod",
    },
    {
      userHandle: "user",
      screamId: "adwadcaasdijdwkm",
    },
  ],
};
