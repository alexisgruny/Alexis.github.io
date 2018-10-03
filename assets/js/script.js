$(document).ready(function(){
  $('div#formation').hide();
  $('div#competence').hide();
  $('div#experience').hide();
  $('div#hobbies').hide();
  $('div#intro').show();

  $('a#navFont').click(function(e) {
    e.preventDefault();
    $('div#formation').hide();
    $('div#competence').hide();
    $('div#experience').hide();
    $('div#hobbies').hide();
    $('div#intro').show();
  });


  $('a#navFormation').click(function(e) {
    e.preventDefault();
    $('div#intro').hide();
    $('div#competence').hide();
    $('div#experience').hide();
    $('div#hobbies').hide();
    $('div#formation').show();
  });

  $('a#navCompetence').click(function(e) {
    e.preventDefault();
    $('div#intro').hide();
    $('div#formation').hide();
    $('div#experience').hide();
    $('div#hobbies').hide();
    $('div#competence').show();
  });

  $('a#navExperience').click(function(e) {
    e.preventDefault();
    $('div#intro').hide();
    $('div#competence').hide();
    $('div#formation').hide();
    $('div#hobbies').hide();
    $('div#experience').show();
  });

  $('a#navHobbies').click(function(e) {
    e.preventDefault();
    $('div#intro').hide();
    $('div#competence').hide();
    $('div#experience').hide();
    $('div#formation').hide();
    $('div#hobbies').show();
  });

});


