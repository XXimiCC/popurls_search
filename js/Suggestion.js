CJ.Suggestion = new Class(CJ.BaseClass);
CJ.Suggestion.extend({
  id: null,
  queryFragment: null,
  suggestion: null,
  suggRank: null,
  cards: null,
  limit: 10,

  initialize: function (params) {
    $.extend(this, params);

    this.loadCards();
  },

  tpl: _.template([
    "<div class='swiper-wrapper'>",
      "<%= cards %>",
    "</div>"
  ].join("")),

  tplItem: _.template([
    "<div class='swiper-slide'>",
      "<%=card%>",
    "</div>"
  ].join("")),


  render: function () {
    var cardsHtml = "";


    for(var i = 0; i < this.cards.length; i++) {
      cardsHtml += this.tplItem({
        card: this.cards[i].render()
      });
    }

    return this.tpl({cards: cardsHtml});

  },

  loadCards: function () {
    return CJ.Card.getCards(this.suggestion, this.limit)
      .then(function (cards) {
        this.cards = cards;
      }.bind(this));
  }
});

CJ.Suggestion.getSuggestions = function (query, limit) {
  limit = limit | 10;

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