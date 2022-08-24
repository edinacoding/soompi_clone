const musicChart = [
  {
    id: 0,
    songtitle: "POP!",
    albumName: "1st Mini Album “IM NAYEON”",
    artistName: "Nayeon",
    groupImg: "./images/music_chart/music_chart_001.jpeg",
    chartNumber: "1",
    chartChange: "16",
    changeArrow: "&#8593;",
  },

  {
    id: 1,
    songtitle: "Yet To Come",
    albumName: "Anthology Album “Proof”",
    artistName: "BTS",
    groupImg: "./images/music_chart/music_chart_003.jpeg",
    chartNumber: "2",
    chartChange: "1",
    changeArrow: "&#8595;",
  },

  {
    id: 2,
    songtitle: "TOMBOY",
    albumName: "Vol. 1 “I NEVER DIE”",
    artistName: "(G)I-DLE",
    groupImg: "./images/music_chart/music_chart_008.jpeg",
    chartNumber: "3",
    chartChange: "-",
    changeArrow: "",
  },

  {
    id: 3,
    songtitle: "LOVE DIVE",
    albumName: "2nd Single Album “LOVE DIVE”",
    artistName: "IVE",
    groupImg: "./images/music_chart/music_chart_009.jpeg",
    chartNumber: "4",
    chartChange: "2",
    changeArrow: "&#8595;",
  },

  {
    id: 4,
    songtitle: "Stay This Way",
    albumName: "5th Mini Album “from our Memento Box”",
    artistName: "fromis_9",
    groupImg: "./images/music_chart/music_chart_004.jpeg",
    chartNumber: "5",
    chartChange: "new",
    changeArrow: "",
  },

  {
    id: 5,
    songtitle: "If we ever meet again",
    albumName: " Vol. 1 “IM HERO”",
    artistName: "Lim Young Woong",
    groupImg: "./images/music_chart/music_chart_007.jpeg",
    chartNumber: "6",
    chartChange: "2",
    changeArrow: "&#8595;",
  },

  {
    id: 6,
    songtitle: "FEARLESS",
    albumName: "Debut Album “FEARLESS”",
    artistName: " LE SSERAFIM",
    groupImg: "./images/music_chart/music_chart_006.jpeg",
    chartNumber: "7",
    chartChange: "1",
    changeArrow: "&#8593;",
  },

  {
    id: 7,
    songtitle: "HOT",
    albumName: "Vol. 4 “Face the Sun”",
    artistName: "SEVENTEEN",
    groupImg: "./images/music_chart/music_chart_010.jpeg",
    chartNumber: "8",
    chartChange: "3",
    changeArrow: "&#8595;",
  },

  {
    id: 8,
    songtitle: "That That (feat. Suga)",
    albumName: "Vol. 9 “PSY 9th”",
    artistName: "PSY",
    groupImg: "./images/music_chart/music_chart_005.jpeg",
    chartNumber: "9",
    chartChange: "2",
    changeArrow: "&#8595;",
  },

  {
    id: 9,
    songtitle: "Feel My Rhythm",
    albumName: "The ReVe Festival 2022 – Feel My Rhythm",
    artistName: "Red Velvet",
    groupImg: "./images/music_chart/music_chart_002.jpeg",
    chartNumber: "10",
    chartChange: "1",
    changeArrow: "&#8595;",
  },
];

const musicChartList1 = document.querySelector(".number1");

musicChartList1.innerHTML = musicChart
  .map((item) => {
    if (item.id === 0) {
      return `<div class="chart_item_1_2">
      <a href="#">
       <div class="number1_left">
          <div class="chart_circle1_2">
            <div class="chart_number_1_2">${item.chartNumber}</div>
          </div>
            <img src="${item.groupImg}">
       </div>
       <div class="number1_right">
         <div class="song_title_1_2">${item.songtitle}</div>
         <div class="song_infos_1_2">${item.artistName} <br> ${item.albumName}</div>
       </div>
     </a>
     </div>
            `;
    }
  })
  .join("");

const musicChartList2 = document.querySelector(".number2");

musicChartList2.innerHTML = musicChart
  .map((item) => {
    if (item.id === 1) {
      return `<div class="chart_item_1_2">
      <a href="#">
       <div class="number2_left">
        <div class="song_title_1_2">${item.songtitle}</div>
         <div class="song_infos_1_2">${item.artistName} <br> ${item.albumName}</div>
         
       </div>
       <div class="number2_right">
          <div class="chart_circle1_2">
            <div class="chart_number_1_2">${item.chartNumber}</div>
            <div class="change_arrow">${item.changeArrow}</div>
            <div class="chart_change">${item.chartChange}</div>
          </div>
        <img src="${item.groupImg}">
       </div>
     </a>
   </div>
  </div>
            `;
    }
  })
  .join("");

const musicChartList3_4 = document.querySelector(".chart_items3_4");

musicChartList3_4.innerHTML = musicChart
  .map((item) => {
    if (item.id === 2 || item.id === 3) {
      return `<div class="chart_item">
            <a href="#">
            <div class="chart_circle">
                <div class="chart_number">${item.chartNumber}</div>
                <div class="change_arrow">${item.changeArrow}</div>
                <div class="chart_change">${item.chartChange}</div>
            </div>
            <div >
              <img src="${item.groupImg}">
            </div>
            <div class="song_title">${item.songtitle}</div>
            <div class="song_infos">${item.artistName} ${item.albumName}</div>
          </a>
            </div>
            `;
    }
  })
  .join("");

const musicChartList5_6 = document.querySelector(".chart_items5_6");

musicChartList5_6.innerHTML = musicChart
  .map((item) => {
    if (item.id === 4 || item.id === 5) {
      return `<div class="chart_item">
            <a href="#">
            <div class="chart_circle">
                <div class="chart_number">${item.chartNumber}</div>
                <div class="change_arrow">${item.changeArrow}</div>
                <div class="chart_change">${item.chartChange}</div>
            </div>
            <img src="${item.groupImg}">
            <div class="song_title">${item.songtitle}</div>
            <div class="song_infos">${item.artistName} ${item.albumName}</div>
          </a>
            </div>
            `;
    }
  })
  .join("");

const musicChartList7_8 = document.querySelector(".chart_items7_8");

musicChartList7_8.innerHTML = musicChart
  .map((item) => {
    if (item.id === 6 || item.id === 7) {
      return `<div class="chart_item">
              <a href="#">
              <div class="chart_circle">
                  <div class="chart_number">${item.chartNumber}</div>
                  <div class="change_arrow">${item.changeArrow}</div>
                  <div class="chart_change">${item.chartChange}</div>
              </div>
              <img src="${item.groupImg}">
              <div class="song_title">${item.songtitle}</div>
              <div class="song_infos">${item.artistName} ${item.albumName}</div>
            </a>
              </div>
              `;
    }
  })
  .join("");

const musicChartList9_10 = document.querySelector(".chart_items9_10");

musicChartList9_10.innerHTML = musicChart
  .map((item) => {
    if (item.id === 8 || item.id === 9 ) {
      return `<div class="chart_item">
                <a href="#">
                <div class="chart_circle">
                    <div class="chart_number">${item.chartNumber}</div>
                    <div class="change_arrow">${item.changeArrow}</div>
                    <div class="chart_change">${item.chartChange}</div>
                </div>
                <img src="${item.groupImg}">
                <div class="song_title">${item.songtitle}</div>
                <div class="song_infos">${item.artistName} ${item.albumName}</div>
              </a>
                </div>
                `;
    }
  })
  .join("");

// const musicChartList7_10 = document.querySelector(".chart_items");

// musicChartList7_10.innerHTML = musicChart
//   .map((item) => {
//     if (item.id === 6 || item.id === 7 || item.id === 8 || item.id === 9) {
//       return `<div class="chart_item">
//             <a href="#">
//             <div class="chart_circle">
//                 <div class="chart_number">${item.chartNumber}</div>
//                 <div class="change_arrow">${item.changeArrow}</div>
//                 <div class="chart_change">${item.chartChange}</div>
//             </div>
//             <img src="${item.groupImg}">
//             <div class="song_title">${item.songtitle}</div>
//             <div class="song_infos">${item.artistName} ${item.albumName}</div>
//           </a>
//             </div>
//             `;
//     }
//   })
//   .join("");
