/** NameSpace **/
var CJ = {
  baseUrl: "https://api.quick1y.com/v3/"
};

$(function () {
  var searchInput = $(".search-input");

  $("form.search").submit(function(event){
    event.preventDefault();
    window.open("http://www.google.com/search?q=" + searchInput.val(), "_blank");
  });

  searchInput.autocomplete({
    source: function (query, callback) {
      return CJ.Suggestion.getSuggestions(query.term).then(function (data) {
        return callback(data);
      });
    }
  });
  searchInput.data("ui-autocomplete")._renderItem = function (ul, item) {
    return $("<li>")
      .attr("data-value", item.suggestion)
      .append("<a target='_blank' href='http://www.google.com/search?q=" + item.suggestion + "'>" + item.suggestion + "</a>")
      .appendTo(ul);
  };
  
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
        freeMode: true,
        centeredSlides: true,
        spaceBetween: 30
      });
    }
  });

});