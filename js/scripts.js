$(document).ready(function () {
   //hamburger menu open/close
   $('.navIcon').click(function () {
      // toggles class for hamburger menu turning into an X
      $(this).toggleClass('hamburgerOpen');

      // toggles class for menu to extend
      $('.menu').toggleClass('menuExtended');
      
      // toggles class for sidebarNav to extend
      $('.navSidebar').toggleClass('navSidebarExtended');
   });

   // remove all classes when any a tag is clicked
   $('.menu ul li a').click(function () {
      $('.navIcon').removeClass('hamburgerOpen');
      $('.menu').removeClass('menuExtended');
      $('.navSidebar').removeClass('navSidebarExtended');
   });

   // controls animation on scroll (disabled for most mobiles)
   AOS.init({ disable: window.innerWidth < 500});
});