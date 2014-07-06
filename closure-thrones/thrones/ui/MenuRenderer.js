goog.provide('thrones.ui.MenuRenderer');

goog.require('goog.ui.MenuRenderer');

thrones.ui.MenuRenderer = function() {
    goog.ui.MenuRenderer.call(this);
};
goog.inherits(thrones.ui.MenuRenderer, goog.ui.MenuRenderer);
goog.addSingletonGetter(thrones.ui.MenuRenderer);

/**
 * Returns the DOM element into which child components are to be rendered,
 * or null if the container hasn't been rendered yet.
 * @param {Element} element Root element of the container whose content element
 *     is to be returned.
 * @return {Element} Element to contain child elements (null if none).
 */
thrones.ui.MenuRenderer.prototype.getContentElement = function(element) {
  var x = thrones.ui.MenuRenderer.superClass_.getContentElement.call(this,
      /** @type {Element} */ element);
  console.log("MenuRenderer", x, goog.typeOf(x));
  return x;
};
