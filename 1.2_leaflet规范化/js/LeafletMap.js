function init(){
   var mymap = L.map('mapid').setView([30.56486, 114.353622], 13);
        L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox.streets',
        accessToken: 'pk.eyJ1IjoiYWRtaW5lciIsImEiOiJjanZ1djV1cXcxZHNuM3ptc2J1ZnN4ejR1In0.ZmBnMj6Op2TVkLKPT_iQmA'
    }).addTo(mymap);
}