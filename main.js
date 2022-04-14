$(document).ready(function () {
  $.getJSON("./data.json", function (data) {
    for (let i = 0; i < data.length; i++) {
      $("#table-data").before(
        `<tr><td>${data[i].name}</td><td>${data[i].description}</td><td><button onclick = "location.href= 'https://www.google.com/maps?q=${data[i].location[0]},${data[i].location[1]}'" type="button">View in Google Maps</button></td></tr>`
      );
    }
    console.log(data);
  });
});

const soothe = new Audio(
  "https://docs.google.com/uc?export=download&id=1L6d0xtsOvnKTMnLSa1KidM09jcbXgQp-"
);

chaChing.volume = 0.7;

const player = new Audio();

document.getElementById("myVideo").defaultPlaybackRate = 0.25;
