// WATCH NOW starts---------------------------

const watchNow = [
  {
    id: 0,
    title: "Watch: HYBE/ADOR's New Girl Group NewJeans Drops MV For “Hurt”",
    img: "./images/news/dummy_1.jpeg",
    author: "",
    date: "Jul 24, 2022",
    category: "mv/teaser",
    body: "NewJeans is back with another music video for their ambitious debut!\nOn July 22, ADOR—HYBE’s sub-label headed by Min Hee Jin—surprised everyone by releasing their new girl group NewJeans’ debut music video for “Attention” without advance warning. NewJeans went on to introduce each of the group’s five members through the interactive music video for their second title track “Hype Boy,” which dropped on July 23.\nAs the group gears up for the release of their first EP in August, they have now unveiled a third music video: this time for their B-side “Hurt.”\nNewJeans will release the music video for their third title track “Cookie” on August 1, and their self-titled debut EP will drop that same day. The physical version of the EP will be released a week later, on August 8.",
  },
  {
    id: 1,
    title: "CIX released an intriguing animated teaser for the upcoming EP",
    img: "./images/news/dummy_4.jpeg",
    author: "E.Cha",
    date: "Jul 24, 2022",
    category: "mv/teaser",
    body: "After nearly a year, the wait is finally over!\nOn July 25 at midnight KST, CIX wrapped up their 2022 FIX Week (their yearly celebration of the anniversary of their debut) with an exciting announcement: the group is gearing up for their long-awaited comeback with their fifth EP “‘OK’ Episode 1 : OK Not.”\nAlong with the announcement, CIX released an intriguing animated teaser for the upcoming EP, which ends with a fiery new group logo signaling the start of a brand-new era.\nCIX’s last comeback was in August of last year, when they released their first studio album “‘OK’ Prologue : Be OK” and its title track “WAVE.”\nCheck out CIX’s new teaser below, and stay tuned for more information on the group’s comeback date!",
  },
  {
    id: 2,
    title: "THE BOYZ kicked off the countdown to their August comeback",
    img: "./images/news/dummy_11.jpeg",
    author: "E.Cha",
    date: "Jul 24, 2022",
    category: "mv/teaser",
    body: "THE BOYZ has unveiled an intriguing first glimpse of their upcoming comeback concept!\nOn July 25 at midnight KST, THE BOYZ kicked off the countdown to their August comeback with the first teaser for their 2022 trailer “Wings of Desire.”\nThe newly released video features members Hyunjae, New, and Ju Haknyeon, and it seems to hint at a concept that is entirely different from their previous Korean comeback with the powerful “MAVERICK.”\nTHE BOYZ will make their return with their seventh mini album on August 16.\nIn the meantime, check out their first teaser below, and stay tuned for updates!",
  },
];

const watchNowList = document.querySelector(".watch-now-container");

watchNowList.innerHTML = watchNow
  .map(
    (item) =>
      `<div class="watch-now-thumbnail">
      <a href="post.html"><img class="thumbnail-pic" src="${item.img}" alt=""></a>
      <div class="list-category">${item.category}</div>
      <div class="list-post-time">${item.date}</div>
      <div class="list-post-title white-color"><a href="post.html">${item.title}</a></div>
    </div>`
  )
  .join("");

// WATCH NOW ends---------------------------


