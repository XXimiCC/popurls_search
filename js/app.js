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
    }
  });

  searchInput.data("ui-autocomplete")._renderItem = function (ul, item) {
    console.log(item);
      return $("<li>")
        .data("item.autocomplete", item)
        .append(item.render)
        .appendTo(ul);
  };
    /*.change(function (e) {
      console.log(e.target.value);
      var slides = "";

      CJ.Suggestion.getSuggestions(e.target.value).then(function (suggestions) {
        suggestions[0].render().then(function (html) {
          console.log(html);
          $(".slider").html(html);

          var swiper = new Swiper(".slider", {
            slidesPerView: "auto",
            centeredSlides: true,
            paginationClickable: true,
            spaceBetween: 30
          });
        });


      });
    });*/

});