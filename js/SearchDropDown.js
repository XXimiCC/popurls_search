CJ.SearchDropDown = new Class().extend({

  renderTo: null,

  source: [],

  initialize: function (params) {
    $.extend(this, params);


    this.render();
  },

  render: function () {

    if (typeof(this.source) === "object" && this.source.then) {

      this.source
        .then(function (searchResults) {

          for (var i = 0; i < searchResults.length; i++) {

            this.renderItem(searchResults[i])

              .then(function (itemHtml) {
                var $item = $(itemHtml).appendTo(this.renderTo);

                this.afterRenderItem($item);

              }.bind(this));

          }
        }.bind(this));

    } else if (this.source instanceof Array) {

    }

  },

  renderItem: function (item) {
    return $.Deferred().resolve(item + "<br>").promise();
  },

  afterRenderItem: function (elItem) {

  }
});
