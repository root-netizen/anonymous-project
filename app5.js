// Prosjekt - imagegallery
var next = document.getElementById("nextBtn");
var back = document.getElementById("backBtn");
var image = document.getElementById("image3");
var description = document.getElementById("description");
var currentImage = 0;

// Image array
var images = [
  {
    link: "Image3/anon1.jpg",
    text: "multiple Anonymous groups and pages on facebook/twitter and so on.."
  },
  {
    link: "Image3/anon2.jpg",
    text: "You are welcome to join us, change the world for the better of all humankind."
  },
  {
    link: "Image3/anon3.jpg",
    text: "Join us! 2020"
  },
  {
    link: "Image3/anon4.jpg",
    text: "Remember Anonymous isn't just about hacking and its followers aren't all hackers, in fact only 1% are hackers. Anyone who believes in freedom and equality can be anonymous, their is no joining fees or set rules, no leaders either."
  },
  {
    link: "Image3/anon5.jpg",
    text: "You are welcome to join us on facebook or freenet.space"
  },
  {
    link: "Image3/anon6.jpg",
    text: "Wake up,see the truth! Your`e government is lying to you!"
  },
  {
    link: "Image3/anon7.jpg",
    text: "Join us on million mask march 5th.November"
  },
  {
    link: "Image3/anon8.jpg",
    text: "Wan`t an alternative to facebook,but unsensored? Wisit: freenet.space"
  }
];

// Next event handler
next.addEventListener("click", function(){
  currentImage = currentImage + 1;
  if(currentImage === images.length){
    currentImage = 0;
}
image.src = images[currentImage].link;
description.textContent = images[currentImage].text;
});

// Back event handler
back.addEventListener("click", function(){
  currentImage = currentImage - 1;
  if(currentImage === -1){
    currentImage = images.length -1;
  }
  image.src = images[currentImage].link;
  description.textContent = images[currentImage].text;
});
