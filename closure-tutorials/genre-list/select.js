goog.provide('select.start');

goog.require('goog.ui.Button');
goog.require('thrones.ui.GenreList');

select.start = function() {

  var genreList1 = new thrones.ui.GenreList();
  genreList1.render(goog.dom.getElement('parent'));

  var button = new goog.ui.Button('Hello');
  button.render(goog.dom.getElement('parent'));
  goog.events.listen(button, goog.ui.Component.EventType.ACTION,
      function(e) {
        console.log("Need to add");
      });

  var genreList2 = new thrones.ui.GenreList();
  genreList2.render(goog.dom.getElement('parent'));

  
}
