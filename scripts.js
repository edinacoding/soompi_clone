function darkMode() {
    let element = document.body;
    element.classList.toggle("dark-theme");
    document.querySelector('.filter-logo').src = "./images/white_soompi_logo.svg"
    element.classList.toggle("filter-logo");
    document.querySelector('.filter-logo').src = "./images/black_soompi_logo.svg"
  }

/* ------------- Header -------------*/

function userLogin() {
  document.getElementById("userLogin").classList.toggle("show");
}
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    let dropdowns = document.getElementsByClassName("login");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function searchBar() {
  document.getElementById("search_bar").classList.toggle("show");
}
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    let dropdowns = document.getElementsByClassName("search_bar");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function navExplore() {
  document.getElementById("userLogin2").classList.toggle("show");
}
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    let dropdowns = document.getElementsByClassName("login2");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}



  document.querySelector(".dropbtn_container").addEventListener('click', function(){
    document.getElementById("myDropdown").classList.toggle("show");
  })
  // document.querySelector("header").classList.add(".header_dark_theme_box_shadow");


window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    let dropdowns = document.getElementsByClassName("dropdown-content");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


document.querySelector('.menu_icon').addEventListener('click', function(){
  document.getElementById("hamburger").classList.toggle("show");
});

window.onclick = function(event) {
  if (!event.target.matches('.hambi')) {
    let dropdowns = document.getElementsByClassName("hamburger_menu");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


document.querySelector('.hamburger_item').addEventListener('click', function(){
  document.getElementById("dd_hamburger").classList.toggle("show");
});

window.onclick = function(event) {
  if (!event.target.matches('.dropbtnhamb')) {
    let dropdowns = document.getElementsByClassName("dropdown_hamburger");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}




document.getElementById('loadMoreBtn').addEventListener('click', function(){
  document.querySelector('.no_more').style.display = 'block'
  document.querySelector('.load_more').style.display = 'none' 
})

/* ------------- Slider -------------*/

function left(){
  const content = document.querySelector('#carousel');
  let screenWidth = document.body.clientWidth;
  content.scrollLeft -= screenWidth;
}
function Right(){
  const content = document.querySelector('#carousel');
  let screenWidth = document.body.clientWidth;
  content.scrollLeft += screenWidth;
}



