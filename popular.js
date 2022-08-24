const popularMusic = [
    {
      id: 0,
      title:
        "Watch: HYBE/ADOR's New Girl Group NewJeans Makes Suprise Devut with 'Attention' + Drops Schedule For 1st EP",
      img: "",
      author: "",
      date: "3 days ago",
      category: "",
      body: "",
    },
    {
      id: 0,
      title:
        "Watch: BLACKPINK Drops Comeback Trailer Announcing Plans For Pre-Release Single, Album, And World Tour",
      img: "",
      author: "",
      date: "1 day ago",
      category: "",
      body: "",
    },
    {
      id: 0,
      title:
        "aespa Becomes 3rd K-Pop Girl Group Ever To Chart An Album On Billboard 200 For 3 Weeks",
      img: "",
      author: "",
      date: "10 hours ago",
      category: "",
      body: "",
    },
    {
      id: 0,
      title: "Underrated K-Pop Acts That Deserve More Hype",
      img: "",
      author: "",
      date: "5 days ago",
      category: "",
      body: "",
    },
  ];
  
  const popularMusicList = document.querySelector(".list-popular-music");
  
  popularMusicList.innerHTML = popularMusic
    .map(
      (item) =>
        `<div class="list-popular">
         <div class="list-post-time-popular">${item.date}</div>
         <div class="list-post-title"><a href="post.html">${item.title}</a></div>
        </div>`
    )
    .join("");
  
  const popularCeleb = [
    {
      id: 0,
      title: "Kim Garam' Contract With HYBE Terminated + Leaves LE SSERAFIM",
      img: "",
      author: "",
      date: "4 days ago",
      category: "",
      body: "",
    },
    {
      id: 0,
      title:
        "Han So Hee Revealed To Have Been Injured While Filming Upcoming Drama Starring Park Seo Joon",
      img: "",
      author: "",
      date: "3 days ago",
      category: "",
      body: "",
    },
    {
      id: 0,
      title: "Park Sung Hoon And Ryu Hyun Kyung Break Up After 6 Years Of Dating",
      img: "",
      author: "",
      date: "Yesterday",
      category: "",
      body: "",
    },
    {
      id: 0,
      title: "10 Things You Should Know About Heartthrob Kang Tae Oh",
      img: "",
      author: "",
      date: "Yesterday",
      category: "",
      body: "",
    },
  ];
  
  const popularCelebList = document.querySelector(".list-popular-celeb");
  
  popularCelebList.innerHTML = popularCeleb.map(
      (item) =>
        `<div class="list-popular">
         <div class="list-post-time-popular">${item.date}</div>
         <div class="list-post-title"><a href="post.html">${item.title}</a></div>
        </div>`
    )
    .join("");
  
  const popularTvFilm = [
    {
      id: 0,
      title: "Winners Of The 1st Blue Dragon Serires Awards",
      img: "",
      author: "",
      date: "5 days ago",
      category: "",
      body: "",
    },
    {
      id: 0,
      title: "“Alchemy Of Souls” To Go On 1-Week Hiatus Next Week",
      img: "",
      author: "",
      date: "3 days ago",
      category: "",
      body: "",
    },
    {
      id: 0,
      title:
        "“Alchemy Of Souls” Achieves Its Highest Saturday Ratings Yet + “Big Mouth” Remains No. 1 In Time Slot For 2nd Episode",
      img: "",
      author: "",
      date: "6 days agoo",
      category: "",
      body: "",
    },
    {
      id: 0,
      title: "7 K-Dramas That Challenge Stigmas In South Korea",
      img: "",
      author: "",
      date: "5 days ago",
      category: "",
      body: "",
    },
  ];
  
  const popularTvFilmList = document.querySelector(".list-popular-tv_film");
  
  popularTvFilmList.innerHTML = popularTvFilm.map(
      (item) =>
        `<div class="list-popular">
         <div class="list-post-time-popular">${item.date}</div>
         <div class="list-post-title"><a href="post.html">${item.title}</a></div>
        </div>`
    )
    .join("");
  
  const popularQuiz = [
    {
      id: 0,
      title:
        "QUIZ: Answer These Random Questions And We’ll Put You In BTS, BLACKPINK, Or BIGBANG",
      img: "",
      author: "",
      date: "1 week ago",
      category: "",
      body: "",
    },
    {
      id: 0,
      title: "QUIZ: Direct A BTS Music Video And We’ll Guess Your Bias",
      img: "",
      author: "",
      date: "2 week ago",
      category: "",
      body: "",
    },
    {
      id: 0,
      title:
        "QUIZ: Play Or Pass On These K-Pop Tracks And We’ll Tell You If You’ve Met Your Soulmate",
      img: "",
      author: "",
      date: "3 week ago",
      category: "",
      body: "",
    },
    {
      id: 0,
      title: "QUIZ: Direct A BLACKPINK MV And We’ll Guess Your Bias",
      img: "",
      author: "",
      date: "3 week ago",
      category: "",
      body: "",
    },
  ];
  
  const popularQuizList = document.querySelector(".list-popular-quiz");
  
  popularQuizList.innerHTML = popularQuiz.map(
      (item) =>
        `<div class="list-popular">
         <div class="list-post-time-popular">${item.date}</div>
         <div class="list-post-title"><a href="post.html">${item.title}</a></div>
        </div>`
    )
    .join("");
  
  // POPULAR ends---------------------------