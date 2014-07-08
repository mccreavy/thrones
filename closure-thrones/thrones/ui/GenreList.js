goog.provide('thrones.ui.GenreList');

goog.require('goog.ui.Component');

/**
 * @param {goog.dom.DomHelper=} opt_domHelper
 * @constructor
 * @extends goog.ui.Component
 */
thrones.ui.GenreList = function(opt_domHelper) {
  goog.base(this, opt_domHelper);
}
goog.inherits(thrones.ui.GenreList, goog.ui.Component);

/**
 * The DOM element for the component.
 * @type {Element}
 * @private
 */
thrones.ui.GenreList.prototype.addNewButton_ = null;

thrones.ui.GenreList.prototype.createDom = function() {
  var root = this.dom_.createElement('div');

  var addNewButton = this.dom_.createElement('button');
  addNewButton.appendChild(this.dom_.createTextNode('Add Another'));
  root.appendChild(addNewButton);

  this.addNewButton_ = addNewButton;
  this.setElementInternal(root);
}

/**
 * Decorates an existing HTML DIV element as a GenreList.
 *
 * @param {Element} element The DIV element to decorate. The element's
 *    text, if any will be used as the component's label.
 * @override
 */
thrones.ui.GenreList.prototype.decorateInternal = function(element) {
  this.setElementInternal(element);
}

/**
 * Called when component's element is known to be in the document.
 * @override
 */
thrones.ui.GenreList.prototype.enterDocument = function() {
  console.log("EnteredDocument");
  goog.base(this, 'enterDocument');
  //this.getHandler().listen(this.getElement(), goog.events.EventType.CLICK,
  //    this.onDivClicked_);
  this.getHandler().listen(this.addNewButton_, goog.events.EventType.CLICK,
      function(e) {
        console.log("FOOO");
      });
  //goog.events.listen(this.addNewButton_, goog.ui.Component.EventType.ACTION,
  //    function(e) {
  //      console.log("FOOO");
  //    });
};


/**
 * Called when component's element is known to have been removed from the
 * document.
 * @override
 */
thrones.ui.GenreList.prototype.exitDocument = function() {
  console.log("ExitDocument");
  goog.base(this, 'exitDocument');
};
