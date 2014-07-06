goog.provide('thrones.ui.MenuButtonRenderer');

goog.require('goog.ui.MenuButtonRenderer');

thrones.ui.MenuButtonRenderer = function() {
    goog.ui.MenuButtonRenderer.call(this);
};
goog.inherits(thrones.ui.MenuButtonRenderer, goog.ui.MenuButtonRenderer);
goog.addSingletonGetter(thrones.ui.MenuButtonRenderer);

/**
 * Takes the button's root element and returns the parent element of the
 * button's contents.  Overrides the superclass implementation by taking
 * the nested DIV structure of menu buttons into account.
 * @param {Element} element Root element of the button whose content element
 *     is to be returned.
 * @return {Element} The button's content element.
 * @override
 */
thrones.ui.MenuButtonRenderer.prototype.getContentElement = function(element) {
  var x = thrones.ui.MenuButtonRenderer.superClass_.getContentElement.call(this,
      /** @type {Element} */ (element && element.firstChild));
  
  console.log("x is ", x , goog.typeOf(x));
  if (null == x) return x;
  var x = document.createElement('div');
  x.appendChild(document.createTextNode('Hey Monkey'));
  x = document.createTextNode("BOOO");
  console.log("returning monkey ", x, goog.typeOf(x));
  return x;
  
};
