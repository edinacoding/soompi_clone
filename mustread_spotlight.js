const mustRead = [
  {
    id: 0,
    title: "Kim Garam' Contract With HYBE Terminated + Leaves LE SSERAFIM",
    img: "./images/must_read/must_read_009.png",
    author: "",
    date: "4 days ago",
    category: "celeb",
    body: "",
  },
  {
    id: 1,
    title: "Winners Of The 1st Blue Dragon Serires Awards",
    img: "./images/must_read/must_read_001.png",
    author: "",
    date: "5 days ago",
    category: "tv/film",
    body: "",
  },
  {
    id: 2,
    title:
      "Update: HBO Shares Confirmation of Blackpink's Jennie's Appearance In The Weeknd's New Series 'The Idol'",
    img: "./images/must_read/must_read_002.png",
    author: "",
    date: "6 days ago",
    category: "tv/film",
    body: "",
  },
  {
    id: 3,
    title:
      "Watch: HYBE/ADOR's New Girl Group NewJeans Makes Suprise Devut with 'Attention' + Drops Schedule For 1st EP",
    img: "./images/must_read/must_read_003.png",
    author: "",
    date: "3 days ago",
    category: "mv/teaser",
    body: "",
  },
  {
    id: 4,
    title:
      "Song Hye Kyo And Lee Do Hyun's New Drama By 'Descendants of The Sun' Writer Kim Eun Sook Confirms Final Cast",
    img: "./images/must_read/must_read_004.png",
    author: "",
    date: "2 days ago",
    category: "soompi",
    body: "",
  },
  {
    id: 5,
    title:
      "Kang Daniel Issues Apology For His Comment Related To 'Street Woman Fighter'",
    img: "./images/must_read/must_read_006.png",
    author: "",
    date: "4 days ago",
    category: "celeb",
    body: "",
  },
  {
    id: 6,
    title:
      "Update: More Idols Confirmed For '2022 Idol Star Athletics Championships' Lineup",
    img: "./images/must_read/must_read_005.png",
    author: "",
    date: "19 hours ago",
    category: "tv/film",
    body: "",
  },
  {
    id: 7,
    title:
      "Kang Ha Neul Doesn't Fight Back When The Police Arrive to Arrest Him in 'Insider'",
    img: "./images/must_read/must_read_007.png",
    author: "",
    date: "4 days ago",
    category: "drama preview",
    body: "",
  },
  {
    id: 8,
    title:
      "'Alchemy Of Souls' And 'It's Beautiful Now' Both Soar To Their Highest Rating Yet",
    img: "./images/must_read/must_read_008.png",
    author: "",
    date: "6 days ago",
    category: "tv/film",
    body: "",
  },
];

const mustReadList = document.querySelector(".must-read-list");

mustReadList.innerHTML = mustRead.map(
    (item) =>
      `<div class="list-item must-read-item">
        <div class="list-item_img">
          <a href="post.html"><img src="${item.img}" alt="" ></a>
        </div>
        <div class="list-text">
          <div class="list-type">
            <div class="list-category">${item.category}</div>
            <div class="list-post-time">${item.date}</div>
          </div>
          <div class="list-post-title">
            <a href="post.html">${item.title}</a>
          </div>
        </div>
      </div>`
  )
  .join("");

// MUST READ ends---------------------------


// SPOTLIGHT starts---------------------------

const spotlight = [
  {
    id: 0,
    title: "A Breath Of Fresh Air: 5 Reasons To Love K-Drama 'Jinxed at First'",
    img: "./images/spotlight/spotlight_005.png",
    author: "",
    date: "14 hours ago",
    category: "features",
    body: "",
  },
  {
    id: 1,
    title: "7 Older K-Dramas To Watch If You’re Going Through A Drama Drought",
    img: "./images/spotlight/spotlight_006.png",
    author: "binahearts",
    date: "Yesterday",
    category: "features",
    body: "One of the best things to do when you can’t find any K-dramas that really suck you in is to go back and watch some oldies. Although a lot of older K-dramas might seem dated, it often just takes an episode or two to really suck you in. The emotional depth and character development of a lot of older K-dramas have really stood the test of time. Here are seven of those K-dramas that are worth watching.",
  },
  {
    id: 2,
    title:
      "Nayeon's 'POP!' Remains No. 1; Soompi's K-Pop Music Chart 2022, July Week 3",
    img: "./images/spotlight/spotlight_001.png",
    author: "",
    date: "2 days ago",
    category: "soompi music chart",
    body: "",
  },
  {
    id: 3,
    title:
      "5 Moments Where Seo Hyun Jun's World Collapses In Eisodes 13-14 Of 'Why Her'?",
    img: "./images/spotlight/spotlight_002.png",
    author: "",
    date: "2 days ago",
    category: "features",
    body: "",
  },
  {
    id: 4,
    title: "5 Times Our Hearts Broke In Episode 11-12 Of 'Yumi's Cells 2'",
    img: "./images/spotlight/spotlight_003.png",
    author: "",
    date: "4 days ago",
    category: "features",
    body: "",
  },
  {
    id: 5,
    title:
      "8 Lyrics From J-Hope's 'Jack In The Box' That Embody His Core Message",
    img: "./images/spotlight/spotlight_004.png",
    author: "",
    date: "5 days ago",
    category: "features",
    body: "",
  },
];

const spotlightList = document.querySelector(".spotlight-block");

spotlightList.innerHTML = spotlight
  .map(
    (item) =>
      `<div class="spotlight-thumbnail">
      <a href="post.html"><img class="thumbnail-pic" src="${item.img}"" alt=""></a>
           <div class="list-category">${item.category}</div>
           <div class="list-post-time">${item.date}</div>
           <div class="list-post-title"><a href="post.html">${item.title}</a></div>
      </div>`
  )
  .join("");