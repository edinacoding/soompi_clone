const mixPosts = [
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
    {
      id: 9,
      title: "Mark your calendars for Girls’ Generation’s long-awaited return!",
      img: "./images/news/dummy_5.jpeg",
      author: "E.Cha",
      date: "Jul 24, 2022",
      category: "mv/teaser",
      body: "Mark your calendars for Girls’ Generation’s long-awaited return!\nOn July 25, the iconic girl group officially announced the date and details for their highly-anticipated August comeback. In celebration of the 15th anniversary of their debut, Girls’ Generation will be making their first full-group comeback in five years with their seventh studio album “FOREVER 1.”\nGirls’ Generation also released their very first teaser for their new studio album, which will drop on August 8.\nGirls’ Generation’s last comeback with all eight members of the group was in August 2017, when they released their sixth album “Holiday Night.”\nAre you excited for Girls’ Generation’s return?",
    },
    {
      id: 10,
      title: "IVE Announces Agust Comeback Date With 1st Teaser For 'After Like'",
      img: "./images/news/dummy_13.jpeg",
      author: "E.Cha",
      date: "Jul 24, 2022",
      category: "mv/teaser",
      body: "Get ready for the follow-up to IVE’s smash hit “LOVE DIVE“!\nOn July 24, IVE officially announced the date and details for their upcoming comeback scheduled for next month.\nIVE will be returning with their third single album “After Like” on August 22 at 6 p.m. KST, and you can check out their first teaser for the release below!\nIVE’s last comeback was in April with the hit single “LOVE DIVE,” which is still going strong on the Korean music charts nearly four months after its release.\nAre you excited to see what IVE has in store for their comeback?",
    },
    {
      id: 11,
      title: "CIX released an intriguing animated teaser for the upcoming EP",
      img: "./images/news/dummy_4.jpeg",
      author: "E.Cha",
      date: "Jul 24, 2022",
      category: "mv/teaser",
      body: "After nearly a year, the wait is finally over!\nOn July 25 at midnight KST, CIX wrapped up their 2022 FIX Week (their yearly celebration of the anniversary of their debut) with an exciting announcement: the group is gearing up for their long-awaited comeback with their fifth EP “‘OK’ Episode 1 : OK Not.”\nAlong with the announcement, CIX released an intriguing animated teaser for the upcoming EP, which ends with a fiery new group logo signaling the start of a brand-new era.\nCIX’s last comeback was in August of last year, when they released their first studio album “‘OK’ Prologue : Be OK” and its title track “WAVE.”\nCheck out CIX’s new teaser below, and stay tuned for more information on the group’s comeback date!",
    }
  ];

const mixPostsList = document.querySelector(".mix_posts");

mixPostsList.innerHTML = mixPosts.map(
    (item) =>
      `<div class="mix_posts-thumbnail">
      <a href="post.html"><img class="thumbnail-pic" src="${item.img}" alt=""></a>
      <div class="mix-body">
      <div class="mix-post-title"><a href="post.html">${item.title}</a></div>
      <div class="mix-post-time">${item.date}</div>
      </div>
    </div>`
  )
  .join("");