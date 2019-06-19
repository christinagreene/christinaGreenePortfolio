$(document).ready(function () {
   //hamburger menu open/close
   $('.navIcon').click(function () {
      // toggles class for hamburger menu turning into an X
      $(this).toggleClass('open');
      
      // controls the opening and closing of the menu once hamburger menu is clicked
      const menu = document.getElementById('menuId');
      const style = window.getComputedStyle(menu);
      const left = style.getPropertyValue('left');

      if (left == "0px"){
         menu.style.left = "-240px";
      }
      else {
         menu.style.left = "0px";
      }

      // controls the width of the sidebar when the menu is open
      const nav = document.getElementById('nav');
      const navStyle = window.getComputedStyle(nav);
      const navWidth = navStyle.getPropertyValue('width');

      if (navWidth == '80px'){
         nav.style.width = '240px';
      }
      else {
         nav.style.width = '80px';
      }
   });

      // controls animation on scroll
      AOS.init();
});