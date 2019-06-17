$(document).ready(function () {
   //hamburger menu open/close
   $('.navIcon').click(function () {
      $(this).toggleClass('open');
      

      const element = document.getElementById('menuId'),
      style = window.getComputedStyle(element),
      left = style.getPropertyValue('left');

      if (left == "0px"){
         element.style.left = "-320px";
      }
      else {
         element.style.left = "0px";
      }
   });
});