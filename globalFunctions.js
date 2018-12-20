function generatePathCoordinate(fromPlace, toPlace){
  let path = [];
  let point1 = {};
  let point2 = {};
  point1['lat'] = fromPlace.lat;
  point1['lng'] = fromPlace.lon;
  point2['lat'] = toPlace.lat;
  point2['lng'] = toPlace.lon;
  path.push(point1,point2)
  return path
}

// generate animated repeated symbols along the bezierPath line
function animateSymbol(line) {
    var count = 0;
    window.setInterval(function() {
        count = (count + 0.25) % 20000;
        // count = ++count % 800000;
    
        var icons = line.get('icons');
        // icons[0].offset = (count / 2) + '%';
        icons[0].offset = (count) + '%';
        line.set('icons', icons);
    }, 40);
    // console.log(line)
    
}

// BeizeCurves mouseover event
function mouseOverEventBeizeCurves(line){

  // make the line bold when mouseover
  google.maps.event.addListener(line, 'mouseover', function() {
  //   new google.maps.Marker({map:map,position:event.latLng});
  //   path.push(event.latLng);
  //   myLine.setPath(path);
      // console.log(drawBeizeCurves[airlineRoutes[route][i]])

      line.strokeWeight = 5.5
      line.strokeColor = '#37393e'
      // a point where the infoWindow lies
      infowindow.setPosition(line.infoWindowPoint)
      // contetn inside the infoWindow
      infowindow.setContent(
        `
          <div class="infoContent" style="text-align: center;">
            <h5>
              由 <b>${line.fromPlace}</b> 飛至 <b>${line.toPlace}</b> <font size="1" style="color:blue;">(不連稅)</font> 的 ${line.carrier} 最抵機票價格
            </h5>
            <h4 class="leastPrice" style="color:red; text-align: center;">
              <b>${line.leasePrice}</b>
              <button type="button" class="btn btn-success">馬上購票</button>
            </h4>
          </div>
        `
      )
      // open the window
      infowindow.open(map)
      // close window after 6.5s
      // setTimeout(() => {
      //   infowindow.close()
      // },6500)
      
  });
  return;

}

// BeizeCurves mouseout event
function mouseOutEventBeizeCurves(line){
  google.maps.event.addListener(line, 'mouseout', function(event) {
    //   new google.maps.Marker({map:map,position:event.latLng});
    //   path.push(event.latLng);
    //   myLine.setPath(path);
    // console.log(line)
    
    line.strokeWeight = 3
    line.strokeColor = '#b9c1d1'
    // console.log(event)
    
    // close infoWindow
    // infowindow.close()
  });
}


// clear BeizeCurves array and BeizeCurves on the map
function deleteBeizeCurves() {
    //Loop through all the markers and remove
    for (var i = 0; i < airlineRoutesArray.length; i++) {
        airlineRoutesArray[i].setMap(null);
    }
    airlineRoutesArray = [];
};

// clear airportMarker array and airlin eAirport Markers on the map
function deleteAirportMarkers() {
    //Loop through all the markers and remove
    for (var i = 0; i < airlineAirportMarkers.length; i++) {
        airlineAirportMarkers[i].setMap(null);
    }
    airlineAirportMarkers = [];
};


// function used to create Flight list item in the home tab of nav bar
function createFightTicketListItemInTheNavBarHomeTab(route, airlineName, googlePolylineIndex){
  // console.log(route)
  let fromPlace = route.fromPlace;
  let toPlace = route.toPlace;
  // console.log(airlineName)
  let listGroup = $(".flight-ticket-list-group")
  let flightTicketListItem = $('<li>', {'class': 'list-group-item flight-ticket-list-item', 'id':'flightTicketListItem_' + airlineName + '_' + fromPlace + '_' + toPlace,'text': airlineName + '_' + fromPlace + '_' + toPlace });
  
  // flightTicketListItem.on('click', function () {
  //     // console.log(airports[airport].name);
  //     // map.setCenter(new google.maps.LatLng(airports[airport].lat, airports[airport].lon));
  //     // map.setZoom(9);
  //     console.log("hi")
  // })
  // append the created list item to the group list element
  listGroup.append(flightTicketListItem)
  
  // retrieve the newly created list item [DOM]
  let thisFlightTicketListItem = $('#flightTicketListItem_' + airlineName + '_' + fromPlace + '_' + toPlace)
  thisFlightTicketListItem.on('mouseover', function () {
    // console.log(airlineRoutesArray[0])
    // airlineRoutesArray[0].mouseover()
    
    // google.maps.event.trigger(polygon, "click", {});
    // console.log("mouseover: " + airlineName + '_' + fromPlace + '_' + toPlace)
    // google.maps.event.addDomListener(window, 'load', initMap)
    
    google.maps.event.trigger(airlineRoutesArray[googlePolylineIndex], 'mouseover', {});
  })
  
  thisFlightTicketListItem.on('mouseout', function () {
    // console.log("mouseout: " + airlineName + '_' + fromPlace + '_' + toPlace)
    // console.log(airlineRoutesArray[0])
    // airlineRoutesArray[0].mouseover()
    google.maps.event.trigger(airlineRoutesArray[googlePolylineIndex], 'mouseout', {});
  })
  
  // console.log(thisFlightTicketListItem)
  
  
}