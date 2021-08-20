geojson.features.forEach(function(marker) {
    

    var el = document.createElement('div');
    el.className = 'marker';

    new mapboxgl.Marker(el)
    .setLngLat(marker.geometry.coordinates)
    .addTo(map);
});