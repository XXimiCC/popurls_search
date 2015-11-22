/** NameSpace **/
var CJ = {
  baseUrl: "https://api.quick1y.com/v3/"
};

$(function () {
  var searchInput = $(".search-input");

  searchInput.autocomplete({
    source: function (query, callback) {
      return CJ.Suggestion.getSuggestions(query.term).then(function (data) {
        return callback(data);
      });
    },
  })
  
  new CJ.SearchDropDown({
    renderTo: ".slider",
    source: CJ.Suggestion.getSuggestions("mis"),
    renderItem: function (suggestion) {
      return suggestion.render();
    },
    afterRenderItem: function (item) {
      var swiper = new Swiper(item, {
        slidesPerView: "auto",
        loop: true,
        //freeMode: true,
        centeredSlides: true,
        spaceBetween: 30
      });
    }
  });

});