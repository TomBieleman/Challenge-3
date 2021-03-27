mapboxgl.accessToken = 'pk.eyJ1IjoiamVmZmVwc3RhaW4iLCJhIjoiY2tta2xiNGViMHh6eDJwbWtyMWFrM3FkYSJ9.pUYC3snlmK2mILfT59sKEQ'

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [4.322840, 52.067101],
    zoom: 10
});
map.addControl(new mapboxgl.NavigationControl());

// var popup = new mapboxgl.Popup().sethtml('<h1 id="dubbleppega">kekw</h1><p>pepegaaaaa</p>');

// var marker = new mapboxgl.Marker()
//     .setLngLat([4.322840, 52.067101])
//     .setPopup(popup)
//     .adTo(map);

// // Set api token for mapbox
// mapboxgl.accessToken = 'pk.eyJ1IjoiamVmZmVwc3RhaW4iLCJhIjoiY2tta2xiNGViMHh6eDJwbWtyMWFrM3FkYSJ9.pUYC3snlmK2mILfT59sKEQ';

// // api token for openWeatherMap
// var openWeatherMapUrl = 'https://api.openweathermap.org/data/2.5/weather';
// var openWeatherMapUrlApiKey = 'faeb235d2f2383bad6dbddcab48c5304';

// // Determine cities
// var cities = [
//   {
//     name: 'Amsterdam',
//     coordinates: [4.895168, 52.370216]
//   },
//   {
//     name: 'Rotterdam',
//     coordinates: [4.47917, 51.9225]
//   },
//   {
//     name: 'Nijmegen',
//     coordinates: [5.85278, 51.8425]
//   },
//   {
//     name: 'Maastricht',
//     coordinates: [5.68889, 50.84833]
//   },
//   {
//     name: 'Groningen',
//     coordinates: [6.56667, 53.21917]
//   },
//   {
//     name: 'Enschede',
//     coordinates: [6.89583, 52.21833]
//   },
// ];

// // Initiate map
// var map = new mapboxgl.Map({
//   container: 'map',
//   style: 'mapbox://styles/mapbox/outdoors-v11',
//   center: [5.508852, 52.142480],
//   zoom: 7
// });


// // get weather data and plot on map
// map.on('load', function () {
//   cities.forEach(function(city) {
//     // Usually you do not want to call an api multiple times, but in this case we have to
//     // because the openWeatherMap API does not allow multiple lat lon coords in one request.
//     var request = openWeatherMapUrl + '?' + 'appid=' + openWeatherMapUrlApiKey + '&lon=' + city.coordinates[0] + '&lat=' + city.coordinates[1];

//     // Get current weather based on cities' coordinates
//     fetch(request)
//       .then(function(response) {
//         if(!response.ok) throw Error(response.statusText);
//         return response.json();
//       })
//       .then(function(response) {
//         // Then plot the weather response + icon on MapBox
//         plotImageOnMap(response.weather[0].icon, city)
//       })
//       .catch(function (error) {
//         console.log('ERROR:', error);
//       });
//   });
// });

// function plotImageOnMap(icon, city) {
//   map.loadImage(
//     'http://openweathermap.org/img/w/' + icon + '.png',
//     function (error, image) {
//       if (error) throw error;
//       map.addImage("weatherIcon_" + city.name, image);
//       map.addSource("point_" + city.name, {
//         type: "geojson",
//         data: {
//           type: "FeatureCollection",
//           features: [{
//             type: "Feature",
//             geometry: {
//               type: "Point",
//               coordinates: city.coordinates
//             }
//           }]
//         }
//       });
//       map.addLayer({
//         id: "points_" + city.name,
//         type: "symbol",
//         source: "point_" + city.name,
//         layout: {
//           "icon-image": "weatherIcon_" + city.name,
//           "icon-size": 1.3
//         }
//       });
//     }
//   );
// }