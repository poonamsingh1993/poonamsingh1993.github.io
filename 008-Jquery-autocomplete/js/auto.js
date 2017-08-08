(
//plugin to autocomplete USA States
function( $ ) {
 $.fn.autoCompleteUSA_State = function(){
   $( this ).autocomplete({
     source: function( request, response ) { 
        $.ajax({
          url: "http://services.groupkt.com/state/search/USA?text=" + request.term,
          dataType: "json",
          success: function (data) {
            response($.map(data.RestResponse.result, function (item) {
              return {
                label: item.name,
                value: item.name
              }
            }));
          }
        });
      },
      minLength: 2,
      select: function( event, ui ) {
        log( ui.item ? "Selected: " + ui.item.label : "Nothing selected, input was " + this.value);
      },
      open: function() {
        $( this ).removeClass( "ui-corner-all" ).addClass( "ui-corner-top" );
      },
      close: function() {
        $( this ).removeClass( "ui-corner-top" ).addClass( "ui-corner-all" );
      }
   });
 }
}
( jQuery )
);
