import "alpinejs";

var menu = document.getElementById("menu");
    // this function is used to open the menu
    function openMenu() {
        menu.classList.remove("w-0", "h-0", "opacity-0");
        menu.classList.add("w-screen", "h-screen", "opacity-95");
    }

    // this function is used to close the menu
    function closeMenu() {
        menu.classList.remove("w-screen", "h-screen", "opactiy-95");
        menu.classList.add("w-0", "h-0", "opacity-0");
    }


// $(document).ready(function () {
//     $(".nav-toggler").each(function (_, navToggler) {
//       var target = $(navToggler).data("target");
//       $(navToggler).on("click", function () {
//         $(target).animate({
//           height: "toggle",
//         });
//       });
//     });
//   });