let navigation = document.getElementById("header");
let logo = document.getElementById("logo");

document.body.onscroll = function () {
  console.log(document.documentElement.scrollTop);
  if (
    document.body.scrollTop > 130 ||
    document.documentElement.scrollTop > 130
  ) {
    navigation.style.height = "70px";
    logo.style.fontSize = "2rem";
  } else {
    navigation.style.height = "130px";
    logo.style.fontSize = "3rem";
  }
};
