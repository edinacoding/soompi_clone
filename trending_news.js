// TRENDING NEWS starts---------------------------

const trendingNews = [
    {
      id: 0,
      title:
        "“Why Her?” Ends On Its Highest Ratings Yet As “Alchemy Of Souls” Drops To All-Time Low",
      img: "./images/news/dummy_9.jpeg",
      author: "E.Cha",
      date: "Jul 24, 2022",
      category: "tv/film",
      body: "SBS’s “Why Her?” went out on a high note!\nOn July 23, the hit mystery romance drama achieved the highest viewership ratings of its entire run for its series finale. According to Nielsen Korea, the final episode of “Why Her?” climbed to an average nationwide rating of 10.7 percent, soaring into the double digits to set a new personal record for the show.\n“Why Her?” also ended at first place in its time slot among the key demographic of viewers ages 20 to 49, with whom it scored an average rating of 3.9 percent for its finale.\nMBC’s “Doctor Lawyer,” which airs in the same time slot as “Why Her?” and also came to an end last night, earned an average nationwide rating of 7.0 percent for its own series finale.\nMeanwhile, after setting a new personal ratings record with its previous episode last Sunday, tvN’s “Alchemy of Souls” fell to an all-time low with its latest episode, which scored an average nationwide rating of 4.989 percent.\nTV Chosun’s “Becoming Witch” also dropped to a new all-time low of 1.7 percent, continuing the downward slide that began with its first episode last month.\nJTBC’s “Cleaning Up,” which has just one episode left in its run, dipped to an average nationwide rating of 1.912 percent ahead of its series finale.\nFinally, KBS 2TV’s “It’s Beautiful Now” continued its reign over Saturday television with an average nationwide rating of 23.7 percent, defending its title as the most-watched program to air on any channel that day.\nAre you sad to see “Why Her?” come to an end? Share your thoughts with us in the comments below!",
    },
  
    {
      id: 1,
      title:
        "Update: More Idols Confirmed For “2022 Idol Star Athletics Championships” Lineup",
      img: "./images/news/dummy_14.jpeg",
      author: "S.P",
      date: "Jul 23, 2022",
      category: "tv/film",
      body: "Updated July 25 KST:\nMore idols have been confirmed for the lineup of MBC’s “2022 Idol Star Athletics Championships” (ISAC)!\nIn addition to the many idols listed below, ITZY, STAYC, CIX, AB6IX, BVNDIT, EPEX, LIGHTSUM, and Lapillus have now also been confirmed to be attending this year’s show.\nStay tuned for further additions to the lineup!",
    },
  
    {
      id: 2,
      title:
        "Ahn Hyo Seop On Working With Kim Sejeong In “A Business Proposal” And How He Decided On His Acting Career",
      img: "./images/news/dummy_7.png",
      author: "S.P",
      date: "Jul 24, 2022",
      category: "teaser",
      body: "Ahn Hyo Seop recently participated in a pictorial and interview for Esquire magazine, where he talked about working with Kim Sejeong in “A Business Proposal,” why “Dr. Romantic 2” is special to him, and more!\nHe kicked off the interview with some thoughts on happiness as he said, “I don’t really have any desire to win awards or earn recognition from others. If I try to find happiness in other people’s acknowledgement, things start to get mixed up. I think true happiness is what I need to find within myself.”\nAhn Hyo Seop admitted that he is quite the simple-minded person in that he doesn’t put much deep thought behind his actions, although this sometimes confuses the people around him. “I’m the type who says my opinion outright,” he explained. “If my opinion clashes with others, I’ll debate with them without getting offended. And of course, I don’t do it with the intention of offending others. However, there are times when people say I’m complaining.”",
    },
    {
      id: 3,
      title: "7 Older K-Dramas To Watch If You’re Going Through A Drama Drought",
      img: "./images/news/dummy_16.jpeg",
      author: "binahearts",
      date: "Jul 23, 2022",
      category: "features",
      body: "One of the best things to do when you can’t find any K-dramas that really suck you in is to go back and watch some oldies. Although a lot of older K-dramas might seem dated, it often just takes an episode or two to really suck you in. The emotional depth and character development of a lot of older K-dramas have really stood the test of time. Here are seven of those K-dramas that are worth watching.",
    },
  ];
  
  const trendingNewsList = document.querySelector(".list");
  
  trendingNewsList.innerHTML = trendingNews
    .map(
      (item) =>
        `<div class="list-item">
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
  
  // TRENDING NEWS ends---------------------------
