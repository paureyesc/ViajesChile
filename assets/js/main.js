//smooth scroll
$(document).ready(function () {
  $("a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});


//Selector de etiqueta y método "on" con evento click para cambiar color letra footer
$(document).ready(function () {
  $("#titulofooter").on("click", function () {
    $("#titulofooter").css("color", "black");
  });
});




//Toggle para hacer desaparecer iconos al hacer click
$(document).ready(function () {
$("i").click(function () {
$("i").toggle(1000);
});
});



