function initialize() {
      var options = {
  types: ['(regions)'],
  componentRestrictions: {country: "us"}
 };
      var input = document.getElementById('city');
      var autocomplete = new google.maps.places.Autocomplete(input,options);
   }

   google.maps.event.addDomListener(window, 'load', initialize);
