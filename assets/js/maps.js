function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: {
            lat: 53.342464,
            lng: -6.237322
        }
    });

    var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var locations = [
        {lat: 53.342899, lng:-6.237089}
    ];

    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
}