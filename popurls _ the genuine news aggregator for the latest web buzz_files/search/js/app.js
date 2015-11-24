/** NameSpace **/
var CJ = {
  baseUrl: "https://api.quick1y.com/v3/"
};

$(function () {
  var searchInput = $(".search");

  $("form.wrap-search").submit(function(event){
    event.preventDefault();
    window.open("http://www.google.com/search?q=" + searchInput.val(), "_blank");
  });

  searchInput.autocomplete({
    source: ["miss", "kiss", "Mister Smith", "Mister Smith5", "Mister Smith6" ,"Mister Smith7" ,"Mister Smith8" ,"Mister Smith9" ],
    delay: 1000,
  })
    /*.data("ui-autocomplete")._renderItem = function (ul, item) {
    return $("<li>")
      .attr("data-value", item.suggestion)
      .append("<a target='_blank' href='http://www.google.com/search?q=" + item.suggestion + "'>" + item.suggestion + "</a>")
      .appendTo(ul);
  };*/
  
  /*new CJ.SearchDropDown({
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
  });*/

  searchInput.on("focus", function (e) {
    $("#sitenav").addClass("moved");
    $(e.target).parent().addClass("focus");
  }).on("blur", function (e) {
    $("#sitenav").removeClass("moved");
    $(e.target).val("")
      .parent().removeClass("focus");
  });

});