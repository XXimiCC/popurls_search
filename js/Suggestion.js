CJ.Suggestion = new Class().extend(CJ.BaseClass).extend({
  id: null,
  queryFragment: null,
  suggestion: null,
  suggRank: null,
  cards: null,
  limit: 10,

  initialize: function (params) {
    $.extend(this, params);
  },

  tpl: _.template([
    "<div class='suggestion'>",
      "<h2><%=title%></h2>",
      "<div class='swiper-wrapper'>",
        "<%= cards %>",
      "</div>",
    "</div>"
  ].join("")),

  tplItem: _.template([
    "<div class='swiper-slide'>",
      "<%=card%>",
    "</div>"
  ].join("")),


  render: function () {
    var cardsHtml = "";

    return this.loadCards().then(function (cards ) {

      for(var i = 0; i < cards.length; i++) {
        cardsHtml += this.tplItem({
          card: cards[i].render()
        });
      }

      return this.tpl({
        cards: cardsHtml,
        title: this.suggestion
      });
    }.bind(this));
  },

  loadCards: function () {
    return CJ.Card.getCards(this.suggestion, this.limit);
  }
});

CJ.Suggestion.getSuggestions = function (query, limit) {
  limit = limit | this.limit;

  return $.ajax({
      url: CJ.baseUrl + "suggestion",
      data: {
        q: query,
        limit: limit
      },
      crossDomain: true
    })
    .then(function (data) {
      var suggestions = [];

      data.records.forEach(function (suggestion) {
        suggestions.push(new CJ.Suggestion(suggestion));
      });

      return suggestions;
    });
};