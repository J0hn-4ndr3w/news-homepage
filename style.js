const image = document.querySelector(".menu");
const navlist = document.querySelector('.navlist');


image.onclick = () => {
  if (image.src.match("images/icon-menu.svg")) {
    image.src = "images/icon-menu-close.svg";
  } else {
    image.src = "images/icon-menu.svg";
  };

  navlist.classList.toggle('active');
}

window.onscroll = () => {
  	image.src = "images/icon-menu.svg";
  	navlist.classList.remove('active');
  };
