goog.provide('thrones.ui.GenreList');

goog.require('goog.dom.classlist');
goog.require('goog.ui.Component');
goog.require('goog.ui.Option');
goog.require('goog.ui.Select');

/**
 * @param {goog.dom.DomHelper=} opt_domHelper
 * @constructor
 * @extends goog.ui.Component
 */
thrones.ui.GenreList = function(opt_domHelper) {
  goog.base(this, opt_domHelper);
};
goog.inherits(thrones.ui.GenreList, goog.ui.Component);

/**
 * The DOM element for the component.
 * @type {Element}
 * @private
 */
thrones.ui.GenreList.prototype.addNewButton_ = null;

/**
 * The DOM element that contains the list of selects.
 * @type {Element}
 * @private
 */
thrones.ui.GenreList.prototype.selectListContainer_ = null;

/**
 * Create the DOM.
 * @override
 */
thrones.ui.GenreList.prototype.createDom = function() {
  var container = this.dom_.createElement('div');
  goog.dom.classlist.add(container, 'thrones-genrelist-container');

  container.appendChild(this.dom_.createTextNode('Add up to 3 genres:'));

  var selectListContainer = this.dom_.createElement('div');
  goog.dom.classlist.add(selectListContainer,
      'thrones-genrelist-select-list-container');
  container.appendChild(selectListContainer);
  this.selectListContainer_ = selectListContainer;

  var addNewButton = new goog.ui.Button('Add Another');
  addNewButton.render(container);
  this.addNewButton_ = addNewButton;

  this.setElementInternal(container);

  this.getHandler().listen(addNewButton, goog.ui.Component.EventType.ACTION,
      function(e) {
        this.addSelect();
      });
};

/**
 * Decorates an existing HTML DIV element as a GenreList.
 *
 * @param {Element} element The DIV element to decorate. The element's
 *    text, if any will be used as the component's label.
 * @override
 */
thrones.ui.GenreList.prototype.decorateInternal = function(element) {
  this.setElementInternal(element);
};

/**
 * TODO(mccreavy): Disable the Add button when 3 Genres are set.
 */
thrones.ui.GenreList.prototype.updateAddButton = function() {
  //console.log("hey", this.addNewButton_);
  //this.addNewButton_.setEnabled(false);
};

/**
 * Add a select button on user request.
 */
thrones.ui.GenreList.prototype.addSelect = function() {
  var container = this.dom_.createElement('div');
  this.selectListContainer_.appendChild(container);
  goog.dom.classlist.add(container, 'thrones-genrelist-select-container');

  var button = new goog.ui.Button('Remove');
  button.myContainer = container;
  button.render(container);

  this.getHandler().listen(button, goog.ui.Component.EventType.ACTION,
    function(e) {
      this.dom_.removeNode(button.myContainer);
      this.updateAddButton();
    });

  var select = new goog.ui.Select('This is my caption');
  select.addItem(new goog.ui.MenuItem('Alice'));
  select.addItem(new goog.ui.MenuItem('Betty'));
  select.addItem(new goog.ui.MenuItem('Cindy'));
  select.addItem(new goog.ui.MenuItem('Debbie'));
  select.render(container);
  this.updateAddButton();
};

/**
 * Called when component's element is known to be in the document.
 * @override
 */
thrones.ui.GenreList.prototype.enterDocument = function() {
  console.log('EnterDocument');
  goog.base(this, 'enterDocument');
};


/**
 * Called when component's element is known to have been removed from the
 * document.
 * @override
 */
thrones.ui.GenreList.prototype.exitDocument = function() {
  console.log('ExitDocument');
  goog.base(this, 'exitDocument');
};
