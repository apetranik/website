// assignment #3 - Jquery
// created nav bar with array and for loop
$(document).ready(function() {

  var navbuttons = ['Home', 'About me', 'Projects', 'Photography'];
  var tag = $('ul.nav navbar-nav');

  $.each(navbuttons, function(i)
  {
    var li = $('<li/>')
    .appendTo(tag);
    var aa = $('<a/>')
    .text(navbuttons[i])
    .appendTo(li);

  });
});


// Assignment #2 - JS functions

  function click0() {
    var arr = [];
    arr.push(document.getElementById('chairs'));
    arr.push(document.getElementById('desks'));
    arr.push(document.getElementById('meatballs'));
    console.log(arr.length);
    for(var i =0;i < 3; i++)
    {
      arr[i].style.border = "none";
    }

  }
  function click1() {
    var elem = document.getElementById('chairs');
    elem.style.border = "1px solid black";


  }

  function click2() {
    var elem = document.getElementById('desks');
    elem.style.border = "1px solid red";


  }

  function click3() {
    var elem = document.getElementById('meatballs');
    elem.style.border = "1px solid steelblue";

  }


  function flashcolor() {
    setTimeout(function() {
      document.body.style.backgroundColor = "#AA0000";
    }, 0);

    setTimeout(function() {
      document.body.style.backgroundColor = "#b84dff";
    }, 500);

    setTimeout(function() {
      document.body.style.backgroundColor = '#6666cc';
    }, 1000);
    setTimeout(function() {
      document.body.style.backgroundColor = '#ffff80';
    }, 1500);
    setTimeout(function() {
      document.body.style.backgroundColor = '#33ffcc';
    }, 2000);
    setTimeout(function() {
      document.body.style.backgroundColor = '#d279a6';
    }, 2500);
    setTimeout(function() {
      document.body.style.backgroundColor = '#ffb366';
    }, 3000);
    setTimeout(function() {
      document.body.style.backgroundColor = '#3939ac';
    }, 3500);
    setTimeout(function() {
      document.body.style.backgroundColor = '#f0f0f5';
    }, 4000);
  }
