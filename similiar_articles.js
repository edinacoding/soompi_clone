const similiarArticles = [
  {
    id: 0,
    title: "THE BOYZ kicked off the countdown to their August comeback",
    img: "./images/news/dummy_11.jpeg",
    author: "E.Cha",
    date: "Jul 24, 2022",
    category: "mv/teaser",
    body: "THE BOYZ has unveiled an intriguing first glimpse of their upcoming comeback concept!\nOn July 25 at midnight KST, THE BOYZ kicked off the countdown to their August comeback with the first teaser for their 2022 trailer “Wings of Desire.”\nThe newly released video features members Hyunjae, New, and Ju Haknyeon, and it seems to hint at a concept that is entirely different from their previous Korean comeback with the powerful “MAVERICK.”\nTHE BOYZ will make their return with their seventh mini album on August 16.\nIn the meantime, check out their first teaser below, and stay tuned for updates!",
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
    title:
      "Nayeon's 'POP!' Remains No. 1; Soompi's K-Pop Music Chart 2022, July Week 3",
    img: "./images/spotlight/spotlight_001.png",
    author: "",
    date: "2 days ago",
    category: "soompi music chart",
    body: "",
  },

];

const similiarArticlesList = document.querySelector(".similiar-articles-container");

similiarArticlesList.innerHTML = similiarArticles.map(
    (item) =>
      `<div class="similiar-articles-thumbnail">
      <a href="post.html"><img class="thumbnail-pic" src="${item.img}" alt=""></a>
      <div class="list-category">${item.category}</div>
      <div class="list-post-time">${item.date}</div>
      <div class="list-post-title"><a href="post.html">${item.title}</a></div>
    </div>`
  )
  .join("");

