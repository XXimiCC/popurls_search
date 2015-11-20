(function( $ ){

  var methods = {
    init: function (options) {
      return this.each(function(){
        var $this = $(this),
          data = $this.data('tooltip'),
          tooltip = $('<div />', {
            text : $this.attr('title')
          });

        // Если плагин ещё не проинициализирован
        if ( ! data ) {

          /*
           * Тут выполняем инициализацию
           */

          $(this).data('tooltip', {
            target : $this,
            tooltip : tooltip
          });

        }
      });
    },
  };

  $.fn.populsAutocomplete = function( method ) {
    
    if ( methods[method] ) {
      return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
    } else if ( typeof method === 'object' || ! method ) {
      return methods.init.apply( this, arguments );
    } else {
      $.error( 'Method with name ' +  method + ' does not exists in jQuery.populsAutocomplete' );
    }

  };

})( jQuery );