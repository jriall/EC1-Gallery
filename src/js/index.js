$(document).ready(function() {
  $(".nav-button").click(function() {
    $(".nav-button").css("background-color", "#DDCECA");
    $(this).css("background-color", "grey");
    const idNumber = $(this).attr("id")[11];
    $(".hero-image").fadeOut(1000, function() {
      $(this)
        .attr("src", `images/main-image-${idNumber}.png`)
        .fadeIn(1000);
    });
  });

  $(".hamburger").click(function(e) {
    e.stopPropagation();
    if ($(window).width() < 768) {
      $("#sidenav").css("width", "100%");
    } else if ($(window).width() >= 768 && $(window).width() < 1224) {
      $("#sidenav").css("width", "500px");
    } else {
      $("#sidenav").css("width", "700px");
    }

  });

  $(".closebtn").click(function() {
    $("#sidenav").css("width", "0px");
  });

  $(".container").click(function() {
    $("#sidenav").css("width", "0px");
  });
  // document.addEventListener("touchstart", function(){}, true);
});
