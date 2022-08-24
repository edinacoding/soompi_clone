const latestNews = [
  {
    id: 0,
    title: "Mark your calendars for Girls’ Generation’s long-awaited return!",
    img: "./images/news/dummy_5.jpeg",
    author: "E.Cha",
    date: "Jul 24, 2022",
    category: "mv/teaser",
    body: "Mark your calendars for Girls’ Generation’s long-awaited return!\nOn July 25, the iconic girl group officially announced the date and details for their highly-anticipated August comeback. In celebration of the 15th anniversary of their debut, Girls’ Generation will be making their first full-group comeback in five years with their seventh studio album “FOREVER 1.”\nGirls’ Generation also released their very first teaser for their new studio album, which will drop on August 8.\nGirls’ Generation’s last comeback with all eight members of the group was in August 2017, when they released their sixth album “Holiday Night.”\nAre you excited for Girls’ Generation’s return?",
  },
  {
    id: 1,
    title: "IVE Announces Agust Comeback Date With 1st Teaser For 'After Like'",
    img: "./images/news/dummy_13.jpeg",
    author: "E.Cha",
    date: "Jul 24, 2022",
    category: "mv/teaser",
    body: "Get ready for the follow-up to IVE’s smash hit “LOVE DIVE“!\nOn July 24, IVE officially announced the date and details for their upcoming comeback scheduled for next month.\nIVE will be returning with their third single album “After Like” on August 22 at 6 p.m. KST, and you can check out their first teaser for the release below!\nIVE’s last comeback was in April with the hit single “LOVE DIVE,” which is still going strong on the Korean music charts nearly four months after its release.\nAre you excited to see what IVE has in store for their comeback?",
  },
  {
    id: 2,
    title: "CIX released an intriguing animated teaser for the upcoming EP",
    img: "./images/news/dummy_4.jpeg",
    author: "E.Cha",
    date: "Jul 24, 2022",
    category: "mv/teaser",
    body: "After nearly a year, the wait is finally over!\nOn July 25 at midnight KST, CIX wrapped up their 2022 FIX Week (their yearly celebration of the anniversary of their debut) with an exciting announcement: the group is gearing up for their long-awaited comeback with their fifth EP “‘OK’ Episode 1 : OK Not.”\nAlong with the announcement, CIX released an intriguing animated teaser for the upcoming EP, which ends with a fiery new group logo signaling the start of a brand-new era.\nCIX’s last comeback was in August of last year, when they released their first studio album “‘OK’ Prologue : Be OK” and its title track “WAVE.”\nCheck out CIX’s new teaser below, and stay tuned for more information on the group’s comeback date!",
  },
  {
    id: 3,
    title: "THE BOYZ kicked off the countdown to their August comeback",
    img: "./images/news/dummy_11.jpeg",
    author: "E.Cha",
    date: "Jul 24, 2022",
    category: "mv/teaser",
    body: "THE BOYZ has unveiled an intriguing first glimpse of their upcoming comeback concept!\nOn July 25 at midnight KST, THE BOYZ kicked off the countdown to their August comeback with the first teaser for their 2022 trailer “Wings of Desire.”\nThe newly released video features members Hyunjae, New, and Ju Haknyeon, and it seems to hint at a concept that is entirely different from their previous Korean comeback with the powerful “MAVERICK.”\nTHE BOYZ will make their return with their seventh mini album on August 16.\nIn the meantime, check out their first teaser below, and stay tuned for updates!",
  },
];

const latestNewsList = document.querySelector(".carousel");

const sliderLatest = latestNewsList.innerHTML = latestNews
  .map(
    (item) =>
      `<div class="slide-thumbnail">
        <a href="post.html"><img class="thumbnail-pic" src="${item.img}" alt=""></a>
         <div class="list-category">${item.category}</div>
         <div class="list-post-time">${item.date}</div>
         <div class="list-post-title"><a href="post.html">${item.title}</a></div>
     </div>`
  )
  .join("");
