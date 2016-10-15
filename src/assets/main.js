$(function() {

  // your code will go here
  $.ajax({
    url: 'https://www.codeschool.com/users/414067.json',
    dataType: 'jsonp',
    success: function(response) {
      var elements = [];
      for (x = 0; x < response.courses.completed.length; x++) {
        var arrayElement = response.courses.completed[x];
        var element = $('<div>' + '</div>')
        .addClass('course')
        .append('<h3>' + arrayElement.title + '</h3>')
        .append($('<img>', {src:arrayElement.badge, title:arrayElement.title}))
        .append($('<a href="' + arrayElement.url + '" target=_blank class="btn btn-primary">See sourse</a>'));
        elements.push(element);
      };
      $('#badges').append(elements);
    }
  });

});
