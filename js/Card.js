CJ.Card = new Class().extend(CJ.BaseClass).extend({
  id: null,
  x1: null,
  x1_h: null,
  x1_w: null,
  x2: null,
  x2_h: null,
  x2_w: null,
  x3: null,
  x3_h: null,
  x3_w: null,
  x4: null,
  x4_h: null,
  x4_w: null,
  url: null,
  index: null,
  cardRank: null,

  tpl: _.template([
    "<a href='<%=url%>' target='_blank'><img src='http://<%= image %>'> </a>"
  ].join("")),

  render: function (x) {
    return this.tpl({
      image: this.x2,
      url: this.url
    });
  }
});

CJ.Card.getCards = function (suggestion, limit) {
  limit = limit | 10;

  return $.ajax({
    url: CJ.baseUrl + "card",
    data: {
      q: suggestion,
      limit: limit
    },
    crossDomain: true
  })
    .then(function (data) {
      var cards = [];
      
      data.records.forEach(function (card) {
        cards.push(new CJ.Card(card));
      });

      return cards;
    });
};