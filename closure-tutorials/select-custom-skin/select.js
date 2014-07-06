goog.provide('select.start');

goog.require('goog.ui.Option');
goog.require('goog.ui.Select');
goog.require('goog.ui.MenuItem');
goog.require('goog.ui.SubMenu');
goog.require('thrones.ui.MenuButtonRenderer');

select.start = function() {
  var menuButtonRenderer = new thrones.ui.MenuButtonRenderer();

  var select = new goog.ui.Select("This is the Caption", null, menuButtonRenderer);
  select.addItem(new goog.ui.MenuItem('Alice'));
  select.addItem(new goog.ui.MenuItem('Barbie'));
  select.addItem(new goog.ui.MenuItem('Chrissie'));
  var subMenu = new goog.ui.SubMenu('More');
  subMenu.addItem(new goog.ui.MenuItem('Deeper'));
  select.addItem(subMenu);
  //select.setSelectedIndex(1);

  // render takes an optional parent element, if not it goes to document body.
  select.render(goog.dom.getElement('parent'));

  var button = new goog.ui.Button('Hello');
  button.render(goog.dom.getElement('parent'));
  goog.events.listen(button, goog.ui.Component.EventType.ACTION,
      function(e) {
        select.addItem(new goog.ui.MenuItem('Debbie'));
      });
}
