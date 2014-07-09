goog.provide('select.start');

goog.require('goog.ui.Option');
goog.require('goog.ui.Select');
goog.require('goog.ui.MenuItem');
goog.require('goog.ui.SubMenu');
goog.require('thrones.ui.Select');
goog.require('thrones.ui.MenuButtonRenderer');
goog.require('thrones.ui.MenuRenderer');

select.start = function() {
  // This is the button that launches the menu ("This is the caption...")
  var menuButtonRenderer = new thrones.ui.MenuButtonRenderer();

  // This is the actual "menu" (Alice, Barbie, ...)
  var menuRenderer = new thrones.ui.MenuRenderer();

  var select = new thrones.ui.Select("This is the Caption"); //, null,
//    menuButtonRenderer, null, menuRenderer);
  select.addItem(new goog.ui.MenuItem('Alice'));
  select.addItem(new goog.ui.MenuItem('Barbie'));
  select.addItem(new goog.ui.MenuItem('Chrissie'));
  var subMenu = new goog.ui.SubMenu('More');
  subMenu.setSelectable(true);
  // Setting selectable doesn't seem to work with keyboard navigation
  subMenu.addItem(new goog.ui.MenuItem('Deeper'));
  select.addItem(subMenu);
  var subMenu2 = new goog.ui.SubMenu('Even');
  subMenu2.setSelectable(true);
  subMenu2.addItem(new goog.ui.MenuItem('Deepest'));
  subMenu.addItem(subMenu2);

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
