$(function() {

  // your code will go here
  $.ajax({
    url: 'https://www.codeschool.com/users/414067.json',
    dataType: 'jsonp',
    success: function(response) {
      console.log(response);
      var elements = [];

      for (x = 0; x < response.courses.completed.length; x++) {
        var arrayElement = response.courses.completed[x];
        var element = $('<div>', {
          class: "course"
        })
        .append($('<h3>', {
          text: arrayElement.title
        }))
        .append($('<img>', {
          src:arrayElement.badge,
          title:arrayElement.title
        }))
        .append($('<a>', {
          href: arrayElement.url,
          target: '_blank',
          class: 'btn btn-primary',
          text: 'See sourse'
        }));
        elements.push(element);
      };

      $('#badges').append(elements);
    }
  });

});
