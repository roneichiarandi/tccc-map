function initialize() {
  var map;
  var myOptions = {
      zoom: 13,
      center: new google.maps.LatLng(-23.42100,-51.93306),
      mapTypeId: 'terrain'
  };
  var image = 'https://raw.githubusercontent.com/renanmpimentel/tccc-map/gh-pages/assets/images/bus.png';
  var imageGeolocation = 'https://raw.githubusercontent.com/renanmpimentel/tccc-map/gh-pages/assets/images/geolocation.png';

  // Try HTML5 geolocation
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = new google.maps.LatLng(position.coords.latitude,
                                       position.coords.longitude);

      var geolocationWindow = new google.maps.InfoWindow({
        map: map,
        position: pos,
        content: 'Você está aqui!'
      });

      var geolocationMarker = new google.maps.Marker({
          position: pos,
          map: map,
          icon: imageGeolocation
      });

      map.setCenter(pos);
    }, function() {
      handleNoGeolocation(true);
    });
  } else {
    // Browser doesn't support Geolocation
    handleNoGeolocation(false);
  }

  map = new google.maps.Map(document.getElementById('map-canvas'), myOptions);

  var addresses = ['Av. Vereador Antônio Bortolotto, 535    -   Centro  -   Iguatemi    -   Parana',
'Av. Tamandaré, 630  -   Centro  -   Maringa -   Parana',
'Av, Tamandaré, 655  -   Centro  -   Maringa -   Parana',
'Av. Brasil, 4044    -   Centro  -   Maringa -   Parana',
'Praça Rocha Pombo, 205  -   Centro  -   Maringa -   Parana',
'Av. Carlos Correia Borges, 1715 Sala 04 -   Cj. Borba Gato  -   Maringa -   Parana',
'Rua das Tipuanas, 369   -   Cj. Borba Gato  -   Maringa -   Parana',
'Rua Pion. João Moreno, 181  -   Cj. Céu Azul    -   Maringa -   Parana',
'Rua Carmen Miranda, 1496    -   Cj. Cidade Alta -   Maringa -   Parana',
'Rua Carmen Miranda, 686 -   Cj. Cidade Alta -   Maringa -   Parana',
'Av. Tuiuti, 4333    -   Cj. Itaparica   -   Maringa -   Parana',
'Av. Guaiapó, 737    -   Cj. Karina  -   Maringa -   Parana',
'Rua Carmem Miranda, 2015    -   Cj. Madrid  -   Maringa -   Parana',
'Av. Alziro Zarur, 1660  -   Cj. Ney Braga   -   Maringa -   Parana',
'Av. Dona Sophia Rasgulaeff, 4914    -   Cj. Parigot de Souza    -   Maringa -   Parana',
'Av. Guaiapó, 1067   -   Cj. Requião -   Maringa -   Parana',
'Av. Franklin D. Rosevelt, 4337  -   Cj. Requião I   -   Maringa -   Parana',
'Av. Alexandre Rasgulaeff, 298   -   Jd. Alvorada    -   Maringa -   Parana',
'Av. Pedro Taques, 2497  -   Jd. Alvorada    -   Maringa -   Parana',
'Av. Dona Sophia Rasgulaeff, 06  -   Jd. Alvorada II -   Maringa -   Parana',
'Av. Pedro Taques, 4407  -   Jd. Alvorada III    -   Maringa -   Parana',
'Av. Morangueira, 3520   -   Jd. Alvorada III    -   Maringa -   Parana',
'Rua Pion. Guarino Augusto Basseto, 705  -   Jd. Alvorada III    -   Maringa -   Parana',
'Av. Prefeito Sincler Sambati, 7268  -   Jd. Bertioga    -   Maringa -   Parana',
'Av. Mandacaru, 1180 -   Jd. Canadá  -   Maringa -   Parana',
'Av. Sabiá, 20085    -   Jd. dos Pássaros    -   Maringa -   Parana',
'Av. Dr. Alexandre Rasgulaeff, 523   -   Jd. Dourados    -   Maringa -   Parana',
'Rua Chile, 1975 -   Jd. Ebenezer    -   Maringa -   Parana',
'Rua chile, 2001 -   Jd. Ebenezer    -   Maringa -   Parana',
'Av. Sabiá, 19648    -   Jd. Hortência II    -   Maringa -   Parana',
'Av. Americo Belay, 1462 -   Jd. Imperial    -   Maringa -   Parana',
'Av. dos Palmares, 138   -   Jd. Liberdade   -   Maringa -   Parana',
'Av. dos Palmares, 20    -   Jd. Liberdade   -   Maringa -   Parana',
'Av. dos Palmares, 237   -   Jd. Liberdade   -   Maringa -   Parana',
'Av. dos Palmares, 238   -   Jd. Liberdade   -   Maringa -   Parana',
'Av. dos Palmares, 300   -   Jd. Liberdade   -   Maringa -   Parana',
'Av. dos Palmares, 332   -   Jd. Liberdade   -   Maringa -   Parana',
'Av. dos Palmares, 514   -   Jd. Liberdade   -   Maringa -   Parana',
'Av. dos Palmares, 86    -   Jd. Liberdade   -   Maringa -   Parana',
'Av. dos Palmares, 99    -   Jd. Liberdade   -   Maringa -   Parana',
'Av. 7 de Setembro, 579  -   Jd. Liberdade III   -   Maringa -   Parana',
'Av. Mandacaru, 935  -   Jd. Lucianópolis    -   Maringa -   Parana',
'Rua Farmaceutico Luiz Andrade, 140  -   Jd. Mandacaru   -   Maringa -   Parana',
'Av. Mandacarú, 449  -   Jd. Maravilha   -   Maringa -   Parana',
'Av. Dona Sophia Rasgulaeff, 3185    -   Jd. Novo Oasis  -   Maringa -   Parana',
'Av. Dona Sophia Rasgulaeff, 3210    -   Jd. Novo Oasis  -   Maringa -   Parana',
'Av. Tuiuti, 3295    -   Jd. Novo Oásis  -   Maringa -   Parana',
'Av. Tuiuti, 3328    -   Jd. Novo Oásis  -   Maringa -   Parana',
'Av. Guaiapó, 3015   -   Jd. Oasis   -   Maringa -   Parana',
'Rua Pion. João Nunes, 761   -   Jd. Paulista    -   Maringa -   Parana',
'Rua Kiri, 351   -   Jd. Quebec  -   Maringa -   Parana',
'Rua Pion José Raimundo de Oliveira, 361 -   Jd. São Silvestre   -   Maringa -   Parana',
'Rua Tabaete, 164    -   Jd. Tabaete -   Maringa -   Parana',
'Av. Morangueira, 2709   -   Jd. Tóquio  -   Maringa -   Parana',
'Rua Universo, 804   -   Jd. Universo    -   Maringa -   Parana',
'Rua Universo, 888   -   Jd. Universo    -   Maringa -   Parana',
'Rua Allan Kardec, 1174  -   Pq. Avenida -   Maringa -   Parana',
'Av. São Judas Tadeu, 1327   -   Pq. das Bandeiras   -   Maringa -   Parana',
'Av. Kakogawa, 610   -   Pq. das Grevileas   -   Maringa -   Parana',
'Av. Pion. João Pereira, 3565    -   Pq. das Laranjeiras -   Maringa -   Parana',
'Av. das Palmeiras, 245  -   Pq. das Palmeiras   -   Maringa -   Parana',
'Av. das Torres, 1616    -   Pq. Hortência II    -   Maringa -   Parana',
'Rodovia PR 317, Shopping de calçados    -   Pq. Industrial  -   Maringa -   Parana',
'Rodovia PR 317, 298 sala 73 - Mercosul  -   Pq. Industrial Bandeirantes -   Maringa -   Parana',
'Av. Mauricio Mariani, 560   -   Pq. Itaipu  -   Maringa -   Parana',
'Av. Pion. Mauricio Mariani, 499 -   Pq. Itaipu  -   Maringa -   Parana',
'Av. Pion. Mauricio Mariani, 527 -   Pq. Itaipu  -   Maringa -   Parana',
'Av. Mandacaru, 2675 -   Pq. Laranjeiras -   Maringa -   Parana',
'Av. Dr. Alexandre Rasgulaeff, 3656  -   Pq. Res Cidade Nova -   Maringa -   Parana',
'Av. Pref. Sincler Sambatti, 2757    -   Pq. Res. Aeroporto  -   Maringa -   Parana',
'Av. Tuiuti, 3472    -   Pq. res. Tuiuti -   Maringa -   Parana',
'Av. Tuiuti, 3666 Loja 02    -   Pq. res. Tuiuti -   Maringa -   Parana',
'Rua Pion. João Custodio Pereira, 735    -   Pq. Taruma  -   Maringa -   Parana',
'Av. São Domingos, 1132  -   Vila Morangueira    -   Maringa -   Parana',
'Rua Vitória, 265    -   Vl. Esperança   -   Maringa -   Parana',
'Rua Vitória, 619    -   Vl. Esperança   -   Maringa -   Parana',
'Av. São Domingos, 1214  -   Vl. Morangueira -   Maringa -   Parana',
'Av. São Domingos, 1653  -   Vl. Morangueira -   Maringa -   Parana',
'Av. Tuiuti, 1588    -   Vl. Morangueira -   Maringa -   Parana',
'Av. Brasil, 2037    -   Vl. Operária    -   Maringa -   Parana',
'Av. Brasil, 1691    -   Vl. Operária    -   Maringa -   Parana',
'Av. Mandacaru, 1275 -   Vl. Santa Izabel    -   Maringa -   Parana',
'Av. Morangueira, 410    -   Vl. Santo Antônio   -   Maringa -   Parana',
'Av. Cerro Azul, 1225    -   Zona 02 -   Maringa -   Parana',
'Av. Brasil, 1887 Loja 03    -   Zona 03 -   Maringa -   Parana',
'Av. Brasil, 2622    -   Zona 03 -   Maringa -   Parana',
'Av. Laguna, 1588    -   Zona 03 -   Maringa -   Parana',
'Av. Independência, 36   -   Zona 04 -   Maringa -   Parana',
'Praça dos Sertões, 249  -   Zona 04 -   Maringa -   Parana',
'Praça Ivaí, 126 -   Zona 05 -   Maringa -   Parana',
'Av. Brasil, 6331    -   Zona 06 -   Maringa -   Parana',
'Av. Colombo, 7681   -   Zona 07 -   Maringa -   Parana',
'Av. Maringá, 988 sala 03    -   Centro  -   Sarandi -   Parana',
'Rua Pedro Galindo Garcia, 526   -   Centro  -   Sarandi -   Parana',
'Rua Cesario Mancini, 683    -   Cj. Sarandi I   -   Sarandi -   Parana',
'Av. Rio De Janeiro, 542 -   Jd. Independência   -   Sarandi -   Parana',
'Av. Londrina, 980   -   Jd. Independência I -   Sarandi -   Parana',
'Av. Rio Branco, 304 -   Jd. Ouro Verde  -   Sarandi -   Parana',
'Av. Montreal, 1066  -   Jd. Panorama    -   Sarandi -   Parana',
'Av. Montreal, 219   -   Jd. Panorama    -   Sarandi -   Parana',
'Av. Montreal, 687 A -   Jd. Panorama    -   Sarandi -   Parana',
'Rua Angelo Perine, 540  -   Pq. São Pedro   -   Sarandi -   Parana'];

addresses.forEach(function(each) {
        XHR.get({
            url:'http://maps.googleapis.com/maps/api/geocode/json?address='+each+'&sensor=false'
        }, function(data) {
          var p = data.results[0].geometry.location
          var latlng = new google.maps.LatLng(p.lat, p.lng);

          var infowindow = new google.maps.InfoWindow({
            content: each,
            title: "Text"
          });

          var marker = new google.maps.Marker({
              position: latlng,
              map: map,
              icon: image
          });

          google.maps.event.addListener(marker, 'click', function() {
            infowindow.open(map,marker);
          });
    });
  });

}


function handleNoGeolocation(errorFlag) {
  if (errorFlag) {
    var content = 'Error: The Geolocation service failed.';
  } else {
    var content = 'Error: Your browser doesn\'t support geolocation.';
  }

  var options = {
    map: map,
    position: new google.maps.LatLng(60, 105),
    content: content
  };

  var geolocationWindow = new google.maps.InfoWindow(options);
  map.setCenter(options.position);
}

google.maps.event.addDomListener(window, 'load', initialize);

