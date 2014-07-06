goog.provide('thrones.ui.Select');

goog.require('goog.ui.Select');

/**
 * A selection control.  Extends {@link goog.ui.Select} by composing a
 * menu with a selection model, and automatically updating the button's caption
 * based on the current selection.
 *
 * Select fires the following events:
 *   CHANGE - after selection changes.
 *
 * @param {goog.ui.ControlContent=} opt_caption Default caption or existing DOM
 *     structure to display as the button's caption when nothing is selected.
 *     Defaults to no caption.
 * @param {goog.ui.Menu=} opt_menu Menu containing selection options.
 * @param {goog.ui.ButtonRenderer=} opt_renderer Renderer used to render or
 *     decorate the control; defaults to {@link goog.ui.MenuButtonRenderer}.
 * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM hepler, used for
 *     document interaction.
 * @param {!goog.ui.MenuRenderer=} opt_menuRenderer Renderer used to render or
 *     decorate the menu; defaults to {@link goog.ui.MenuRenderer}.
 * @constructor
 * @extends {goog.ui.MenuButton}
 */
thrones.ui.Select = function(opt_caption, opt_menu, opt_renderer, opt_domHelper,
    opt_menuRenderer) {
  goog.ui.Select.call(this, opt_caption, opt_menu, opt_renderer, opt_domHelper,
    opt_menuRenderer);
}
goog.inherits(thrones.ui.Select, goog.ui.Select);

thrones.ui.Select.prototype.updateCaption = function() {
  var item = this.getSelectedItem();

  var t = [];
  for (var i = item ; null != i ; i = i.getParent()) {
    if (i instanceof goog.ui.MenuItem) {
      t.unshift(i.getCaption());
    }
  }

  if (t.length > 0) {
    this.setContent(t.join(" -> "));
  } else {
    this.setContent(item ? item.getCaption() : this.defaultCaption_);
  }
}
