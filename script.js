let getAirports = $.get("./hutcho_airport_v2.json");
let airline_routes = $.get("./airline_routes.json");


$.when(getAirports,airline_routes,).done(function(result, result2){
  // console.log(result[0])
  // console.log(result2[0])
  
  
  
  
  // get airport's coordinate data
  let airports = result[0]
  
  // get airline routes
  let airlineRoutes = result2[0]
  
  // google map initial config
  let Initialoptions ={
      // center: {lat: 22.28552, lng: 114.15769},
      center:{lat:22.3089008331,lng:113.915000916},
      zoom: 5,
      disableDefaultUI: true,
      scrollwheel:true,
      draggable:true,
      mapTypeId: 'roadmap',
      maxZoom:7,
      minZoom:3,
      zoomControl:true,
      mapTypeControl:false,
      scaleControl:true,
      streetViewControl:true,
      rotateControl:true,
      fullscreenControl:true,
      styles:[{"featureType": "administrative", "elementType": "labels.text.fill", "stylers": [{"color": "#444444"} ] }, {"featureType": "landscape", "elementType": "all", "stylers": [{"color": "#f2f2f2"} ] }, {"featureType": "poi", "elementType": "all", "stylers": [{"visibility": "off"} ] }, {"featureType": "road", "elementType": "all", "stylers": [{"saturation": -100 }, {"lightness": 45 } ] }, {"featureType": "road.highway", "elementType": "all", "stylers": [{"visibility": "simplified"} ] }, {"featureType": "road.arterial", "elementType": "labels.icon", "stylers": [{"visibility": "off"} ] }, {"featureType": "transit", "elementType": "all", "stylers": [{"visibility": "off"} ] }, {"featureType": "water", "elementType": "all", "stylers": [{"color": "#46bcec"}, {"visibility": "on"} ] } ]
      // styles:[{"featureType": "administrative", "stylers": [{"visibility": "on"} ] }, {"featureType": "poi", "stylers": [{"visibility": "simplified"} ] }, {"featureType": "road", "elementType": "labels", "stylers": [{"visibility": "simplified"} ] }, {"featureType": "water", "stylers": [{"visibility": "simplified"} ] }, {"featureType": "transit", "stylers": [{"visibility": "simplified"} ] }, {"featureType": "landscape", "stylers": [{"visibility": "simplified"} ] }, {"featureType": "road.highway", "stylers": [{"visibility": "off"} ] }, {"featureType": "road.local", "stylers": [{"visibility": "on"} ] }, {"featureType": "road.highway", "elementType": "geometry", "stylers": [{"visibility": "on"} ] }, {"featureType": "water", "stylers": [{"color": "#84afa3"}, {"lightness": 52 } ] }, {"stylers": [{"saturation": -17 }, {"gamma": 0.36 } ] }, {"featureType": "transit.line", "elementType": "geometry", "stylers": [{"color": "#3f518c"} ] } ]
        // styles:[{"featureType": "landscape", "elementType": "all", "stylers": [{"hue": "#FFA800"}, {"gamma": 1 } ] }, {"featureType": "landscape", "elementType": "geometry.fill", "stylers": [{"color": "#f8fae9"} ] }, {"featureType": "poi", "elementType": "all", "stylers": [{"hue": "#679714"}, {"saturation": 33.4 }, {"lightness": -25.4 }, {"gamma": 1 } ] }, {"featureType": "road.highway", "elementType": "all", "stylers": [{"hue": "#53FF00"}, {"saturation": -73 }, {"lightness": 40 }, {"gamma": 1 } ] }, {"featureType": "road.arterial", "elementType": "all", "stylers": [{"hue": "#FBFF00"}, {"gamma": 1 } ] }, {"featureType": "road.local", "elementType": "all", "stylers": [{"hue": "#00FFFD"}, {"lightness": 30 }, {"gamma": 1 } ] }, {"featureType": "water", "elementType": "all", "stylers": [{"hue": "#00BFFF"}, {"saturation": 6 }, {"lightness": 8 }, {"gamma": 1 } ] } ]
        // styles:[{"featureType": "landscape", "elementType": "all", "stylers": [{"hue": "#FFA800"}, {"gamma": 1 } ] }, {"featureType": "landscape", "elementType": "geometry.fill", "stylers": [{"color": "#f8fae9"} ] }, {"featureType": "poi", "elementType": "all", "stylers": [{"hue": "#679714"}, {"saturation": 33.4 }, {"lightness": -25.4 }, {"gamma": 1 } ] }, {"featureType": "road.highway", "elementType": "all", "stylers": [{"hue": "#53FF00"}, {"saturation": -73 }, {"lightness": 40 }, {"gamma": 1 } ] }, {"featureType": "road.arterial", "elementType": "all", "stylers": [{"hue": "#FBFF00"}, {"gamma": 1 } ] }, {"featureType": "road.local", "elementType": "all", "stylers": [{"hue": "#00FFFD"}, {"lightness": 30 }, {"gamma": 1 } ] }, {"featureType": "water", "elementType": "all", "stylers": [{"hue": "#00BFFF"}, {"saturation": 6 }, {"lightness": 8 }, {"gamma": 1 } ] } ]
        // styles: [{"featureType": "administrative", "elementType": "labels.text.fill", "stylers": [{"color": "#444444"} ] }, {"featureType": "landscape", "elementType": "all", "stylers": [{"color": "#f2f2f2"} ] }, {"featureType": "poi", "elementType": "all", "stylers": [{"visibility": "off"} ] }, {"featureType": "road", "elementType": "all", "stylers": [{"saturation": -100 }, {"lightness": 45 } ] }, {"featureType": "road.highway", "elementType": "all", "stylers": [{"visibility": "simplified"} ] }, {"featureType": "road.arterial", "elementType": "labels.icon", "stylers": [{"visibility": "off"} ] }, {"featureType": "transit", "elementType": "all", "stylers": [{"visibility": "off"} ] }, {"featureType": "water", "elementType": "all", "stylers": [{"color": "#003b5d"}, {"visibility": "on"} ] } ]    
        
  }
      
    // get map div element
    let MapElement = document.getElementById("map")
 
    // create map canvas
    var map = new google.maps.Map(MapElement,Initialoptions)
    
  
    
    
    

    
    
    
    
        
    // infoWindow------------------------------------------------------------
    // var contentString = '<div id="content">'+
    //       '<div id="siteNotice">'+
    //       '</div>'+
    //       '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
    //       '<div id="bodyContent">'+
    //       '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
    //       'sandstone rock formation in the southern part of the '+
    //       'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
    //       'south west of the nearest large town, Alice Springs; 450&#160;km '+
    //       '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
    //       'features of the Uluru - Kata Tjuta National Park. Uluru is '+
    //       'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
    //       'Aboriginal people of the area. It has many springs, waterholes, '+
    //       'rock caves and ancient paintings. Uluru is listed as a World '+
    //       'Heritage Site.</p>'+
    //       '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
    //       'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
    //       '(last visited June 22, 2009).</p>'+
    //       '</div>'+
    //       '</div>';
    
    // initialize the infoWindow object
    var contentString = '';
    var infowindow = new google.maps.InfoWindow({
      content: contentString,
      // position:Initialoptions.center
    });
    
    // infoWindow------------------------------------------------------------



    
    // map control panel ----------------------------------------------------
      
      
    // attach event listener to carrier selector
    let carrierSelector = document.getElementById('carrier_selector')

    
    // airline route displayed when another carrier selected
    carrierSelector.addEventListener("change", function() {
        // clear previously displayed route
        deleteBeizeCurves()
        
        // get the selected carrier option tag element
        let chosenCarrier = carrierSelector.options[carrierSelector.selectedIndex].value;
        // alert(chosenCarrier)
        
        // display selected routes on the map
        showRoutesOfSelectedCarrier(chosenCarrier)
        
        // clear shown infoWindow when another carrier is clicked
        infowindow.close()
        
    });
    
    
    // map control panel ----------------------------------------------------



    
    // fail to incorporate Popup object [edited on 23-11-2018]
    // let popup = new Popup(
    //     new google.maps.LatLng(-33.866, 151.196),
    //     document.getElementById('content'));
    // popup.setMap(map);
    
    
    
    // Define the symbol, using one of the predefined paths ('CIRCLE')
    // supplied by the Google Maps JavaScript API.
    // var arrowSymbol = {
    //   // path: google.maps.SymbolPath.CIRCLE,
    //   // path : google.maps.SymbolPath.FORWARD_OPEN_ARROW,
    //   path : google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
    //   // path: icons.parking.icon,
    //   scale: 3,
    //   // strokeColor: '#fbbc05',
    //   // strokeColor: '#0099FF',
    //   // strokeColor:'#192A3D',
    //   strokeColor:'#f1a130',
    //   // strokeColor:'#ff6969'
    //   // strokeColor:'#a68974'

    //   strokeOpacity: 1,
    //   strokeWeight: 3,
    //   // anchor: new google.maps.Point(300, 300)
    // };
    
    // var lineSymbol2 = {
    //   path: google.maps.SymbolPath.CIRCLE,
    //   scale: 8,
    //   strokeColor: '#00ac45'
    // };
    
    
    // var dotIcon = {
    //     path: 'M -1,1 0,0 1,1',
    //     // path:'http://material.io/tools/icons/?icon=local_airport&style=outline',
    //     scale: 10,
    //     strokeWeight: 2,
    //     strokeColor: '#232e40'
    // };
    
    
    
    // plane symbal
    var planeSymbol = {

      path: 'M362.985,430.724l-10.248,51.234l62.332,57.969l-3.293,26.145 l-71.345-23.599l-2.001,13.069l-2.057-13.529l-71.278,22.928l-5.762-23.984l64.097-59.271l-8.913-51.359l0.858-114.43 l-21.945-11.338l-189.358,88.76l-1.18-32.262l213.344-180.08l0.875-107.436l7.973-32.005l7.642-12.054l7.377-3.958l9.238,3.65 l6.367,14.925l7.369,30.363v106.375l211.592,182.082l-1.496,32.247l-188.479-90.61l-21.616,10.087l-0.094,115.684',
      scale: 0.0333,
      strokeOpacity: 0.6,
      // color: '#ff6969',
      strokeColor:'#ff6969',
      // strokeColor: '#ff2222',
      strokeWeight: 3,
      anchor: new google.maps.Point(300, 300)
    };
    
    // var PlaneIcon = new google.maps.MarkerImage(
    //   "http://www.charterjetscompany.com/planeicon.png",
    // );
    
    // var planeIcon = 'https://material.io/tools/icons/?icon=local_airport&style=outline';
    
    
    
    // drawBeizeCurves = [];
    // mouseOverEventDictionary = {}
    
    
    // function to show airline routes
    
    
    
    // loop through all airline routes 
    
    
    // for (let route in airlineRoutes) {
      // console.log(airlineRoutes[route])
    
    
    // an array storing all created airline route
    let airlineRoutesArray = [];
    
    function showRoutesOfSelectedCarrier(carrier){
      // loop through all routes of the selected airline
      for (let i = 0; i < airlineRoutes[carrier].length; i++) {

        let pointFrom = airlineRoutes[carrier][i]['from']
        let pointTo = airlineRoutes[carrier][i]['to']
        
        let targetPath = generatePathCoordinate(
          airports[pointFrom], 
          airports[pointTo]
        )
        
        
        // create BeizeCurve for that path
        let targetBeizeCurve = new createBeizeCurve(targetPath[0],targetPath[1])
        
        
        // midpoint - a point at which infoWindow lies
        // console.log(targetBeizeCurve.infoWindowPoint)

        // -------------------DRAW BeizeCurve PATH ON GOOGLE MAP-----------------------
        
        // var drawBeizeCurves;
        // drawBeizeCurves.setMap(null)
        let drawBeizeCurves = new google.maps.Polyline({
          leasePrice:airlineRoutes[carrier][i]['leasePrice'],
          carrier:carrier,
          path: targetBeizeCurve.beizePath,
          infoWindowPoint:targetBeizeCurve.infoWindowPoint,
          pointFrom:pointFrom,
          pointTo:pointTo,
          fromPlace:airlineRoutes[carrier][i]['fromPlace'],
          toPlace:airlineRoutes[carrier][i]['toPlace'],
          // path: path,
          // path:bezierPath,
          // strokeColor:'#a68974',
          // strokeColor:'#FF4B4B',
          // strokeColor:'#d0dbd7',
          strokeColor:'#b9c1d1',
          // strokeColor: '#0099FF',
          // 	strokeColor:'#f6dda7',
          //strokeColor:'#82a18f',
          
          strokeOpacity: 1,
          // strokeOpacity:0,
          strokeWeight: 3,
          geodesic: true,
          icons: [{
            // icon:icons.parking.icon,
            // icon: arrowSymbol,
            // icon:dotIcon,
            // icon:dotIcon,
            icon:planeSymbol,
            // icon:arrowSymbol,
            // icon:planeSymbol,
            // icon:PlaneIcon,
            offset: '0%',
            repeat: '800px'
          }],
          map: map
        });
        
        // -------------------DRAW PATH ON GOOGLE MAP-----------------------
      
  
        // -------------------APPLY FUNCTIONS & EVENT LISTENER FOR THE Beize LINE----------------------------------
        
     
        // animation applied on symbol along the curve
        animateSymbol(drawBeizeCurves);
        
        // endow the curve with event trigger
        mouseOverEventBeizeCurves(drawBeizeCurves);
        mouseOutEventBeizeCurves(drawBeizeCurves);
        
        
        // // make the line bold when mouseover
        // google.maps.event.addListener(drawBeizeCurves[airlineRoutes[route][i]], 'click', function() {
        // //   new google.maps.Marker({map:map,position:event.latLng});
        // //   path.push(event.latLng);
        // //   myLine.setPath(path);
        //     // console.log(drawBeizeCurves[airlineRoutes[route][i]])
            
        //     drawBeizeCurves[airlineRoutes[route][i]].strokeWeight = 5.5
        //     drawBeizeCurves[airlineRoutes[route][i]].strokeColor = '#37393e'
        //     // console.log(event)
        // });
        // google.maps.event.addListener(drawBeizeCurves[airlineRoutes[route][i]], 'mouseout', function(event) {
        // //   new google.maps.Marker({map:map,position:event.latLng});
        // //   path.push(event.latLng);
        // //   myLine.setPath(path);
        //     console.log(drawBeizeCurves[airlineRoutes[route][i]])
            
        //     drawBeizeCurves[airlineRoutes[route][i]].strokeWeight = 3.5
        //     drawBeizeCurves[airlineRoutes[route][i]].strokeColor = '#b9c1d1'
        //     // console.log(event)
        // });
        
        
        
        // -------------------APPLY FUNCTIONS & EVENT LISTENER FOR THE LINE----------------------------------
  
        // push created airline route curve to the corresponding array
        airlineRoutesArray.push(drawBeizeCurves)
      }
 
      
    }

    // }
    
    

    
    
    
    
    
    
    // beize curve ---------------------------------------------------------------------------------------------
    
    
    
    
    
    
    
    
    // // single coordinate
    // let HKG = airports.HKG;
    // let TSA = airports.TSA;
    // let LCY = airports.LCY;
    // let BKK = airports.BKK;
    // let ITM = airports.ITM;    
    
    // // form route of pair points
    // let HKG_TSA = generatePathCoordinate(HKG,TSA)
    // let HKG_LCY = generatePathCoordinate(HKG,LCY)
    // let HKG_BKK = generatePathCoordinate(HKG,BKK)
    // let HKG_ITM = generatePathCoordinate(HKG,ITM)
     
    
    // // shape the straight route into BeizeCurve
    // let HKG_TSA_BeizeCurve = new createBeizeCurve(HKG_TSA[0],HKG_TSA[1])
    // let HKG_LCY_BeizeCurve = new createBeizeCurve(HKG_LCY[0],HKG_LCY[1])
    // let HKG_BKK_BeizeCurve = new createBeizeCurve(HKG_BKK[0],HKG_BKK[1])
    // let HKG_ITM_BeizeCurve = new createBeizeCurve(HKG_ITM[0],HKG_ITM[1])
    
    // console.log('midpoint :' + HKG_TSA_BeizeCurve.midpoint)
    
    
    // console.log(HKG_TW.beizePath)
    // var bezierPath = getLatLngPath( path[0], path[1] );
    // console.log(bezierPath)
    // beize curve ----------------------------------------------------------------------------------------------
    
    
    // Create the polyline and add the symbol to it via the 'icons' property.
    // var path =  [{lat: 22.324624, lng: 114.172305}, {lat: 23.927836, lng:121.086477}]
    // var HKG_TSA_line = new google.maps.Polyline({
    //   path: HKG_TSA_BeizeCurve.beizePath,
    //   // path: path,
    //   // path:bezierPath,
    //   // strokeColor:'#a68974',
    //   // strokeColor:'#FF4B4B',
    //   // strokeColor:'#d0dbd7',
    //   strokeColor:'#b9c1d1',
    //   // strokeColor: '#0099FF',
    //   // 	strokeColor:'#f6dda7',
    //   	 //strokeColor:'#82a18f',
      	 
    //   strokeOpacity: 1,
    //   // strokeOpacity:0,
    //   strokeWeight: 3.5,
    //   geodesic: true,
    //   icons: [{
    //     // icon:icons.parking.icon,
    //     // icon: arrowSymbol,
    //     icon:dotIcon,
    //     // icon:dotIcon,
    //     // icon:planeIcon,
    //     // icon:arrowSymbol,
    //     // icon:planeSymbol,
    //     // icon:PlaneIcon,
    //     offset: '0%',
    //     repeat: '150px'
    //   }],
    //   map: map
    // });
    
    
 
    
    
    
    // google.maps.event.addListener(HKG_TSA_line, 'mouseover', function(event) {
    // //   new google.maps.Marker({map:map,position:event.latLng});
    // //   path.push(event.latLng);
    // //   myLine.setPath(path);
    //     console.log(HKG_TSA_line)
        
    //     HKG_TSA_line.strokeWeight = 5.5
    //     HKG_TSA_line.strokeColor = '#37393e'
    //     // console.log(event)
    // });
    // google.maps.event.addListener(HKG_TSA_line, 'mouseout', function(event) {
    // //   new google.maps.Marker({map:map,position:event.latLng});
    // //   path.push(event.latLng);
    // //   myLine.setPath(path);
    //     console.log(HKG_TSA_line)
        
    //     HKG_TSA_line.strokeWeight = 3.5
    //     HKG_TSA_line.strokeColor = '#b9c1d1'
    //     // console.log(event)
    // });


    // customised markers----------------------------------------------------
    // var CustomMarker1 = new CustomMarker(
    // 	{lat:22.3089008331,lng:113.915000916},
    // 	map,
    // 	{
    // 		// marker_id: '123',
    // 		// colour: 'Red'
    // 	}
    // );  
    
    
    
    // customised markers----------------------------------------------------
    
    
    // function codeblock --------------------------------------------------------------------------
    
    // function used to link up two places -- simply a line
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
                  由 <b>${line.fromPlace}</b> 飛至 <b>${line.toPlace}</b> 的 ${line.carrier} 最抵機票價格
                </h5>
                <h4 class="leastPrice" style="color:red; text-align: center;">
                  <b>${line.leasePrice}</b>
                  <button type="button" class="btn btn-danger">馬上購票</button>
                </h4>
              </div>
            `
          )
          // open the window
          infowindow.open(map)
          // // close window after 3s
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
    
    
    function deleteBeizeCurves() {
        //Loop through all the markers and remove
        for (var i = 0; i < airlineRoutesArray.length; i++) {
            airlineRoutesArray[i].setMap(null);
        }
        // airlineRoutesArray = [];
    };
    
    // function codeblock --------------------------------------------------------------------------
    
    
    
    // --------------------------- infoWindow -------------------------------------------------
   

    
    // --------------------------- infoWindow -------------------------------------------------
    
    
    
    
    // Markers ------------------------------------------------------------------------
    
    
    
    
    
    
    // var from_point = new google.maps.Marker({
    //   map:map,
    //   position: path[0],
    //   icon:{
    //     // path: "M-20,0a20,20 0 1,0 40,0a20,20 0 1,0 -40,0",
    //     // path:'M0-48c-9.8 0-17.7 7.8-17.7 17.4 0 15.5 17.7 30.6 17.7 30.6s17.7-15.4 17.7-30.6c0-9.6-7.9-17.4-17.7-17.4z',
    //     // path:"M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12zm10 6c3.31 0 6-2.69 6-6s-2.69-6-6-6-6 2.69-6 6 2.69 6 6 6z",
    //     fillColor: '#ff0000',
    //     fillOpacity: .6,
    //     // anchor: new google.maps.Point(0,0),
    //     strokeWeight: 0,
    //     scale: 0.5
    //   }
    // });
    
    // var to_point = new google.maps.Marker({
    //   map:map,
    //   position: path[1],
    //   icon:{
    //     // path: "M-20,0a20,20 0 1,0 40,0a20,20 0 1,0 -40,0",
    //     // path:'M0-48c-9.8 0-17.7 7.8-17.7 17.4 0 15.5 17.7 30.6 17.7 30.6s17.7-15.4 17.7-30.6c0-9.6-7.9-17.4-17.7-17.4z',
    //     // path:"M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12zm10 6c3.31 0 6-2.69 6-6s-2.69-6-6-6-6 2.69-6 6 2.69 6 6 6z",
    //     fillColor: '#ff0000',
    //     fillOpacity: .6,
    //     // anchor: new google.maps.Point(0,0),
    //     strokeWeight: 0,
    //     scale: 0.5
    //   }
    // });
  
  
  // Markers ------------------------------------------------------------------------
  
  
  
  
  
  
  
  
})




// ------------------------------  OLD VERSION --------------------------


// function initMap() {
//     // alert("window onloaded")
//     let Initialoptions ={
//       center: {lat: 22.28552, lng: 114.15769},
//       zoom: 8,
//       disableDefaultUI: true,
//       scrollwheel:true,
//       draggable:true,
//       mapTypeId: 'roadmap',
//       // maxZoom:14,
//     //   minZoom:5,
//       zoomControl:true,
//       mapTypeControl:false,
//       scaleControl:true,
//       streetViewControl:true,
//       rotateControl:true,
//       fullscreenControl:true,
//       styles:[{"featureType": "administrative", "elementType": "labels.text.fill", "stylers": [{"color": "#444444"} ] }, {"featureType": "landscape", "elementType": "all", "stylers": [{"color": "#f2f2f2"} ] }, {"featureType": "poi", "elementType": "all", "stylers": [{"visibility": "off"} ] }, {"featureType": "road", "elementType": "all", "stylers": [{"saturation": -100 }, {"lightness": 45 } ] }, {"featureType": "road.highway", "elementType": "all", "stylers": [{"visibility": "simplified"} ] }, {"featureType": "road.arterial", "elementType": "labels.icon", "stylers": [{"visibility": "off"} ] }, {"featureType": "transit", "elementType": "all", "stylers": [{"visibility": "off"} ] }, {"featureType": "water", "elementType": "all", "stylers": [{"color": "#46bcec"}, {"visibility": "on"} ] } ]
//     //   styles:[{"featureType": "administrative", "stylers": [{"visibility": "on"} ] }, {"featureType": "poi", "stylers": [{"visibility": "simplified"} ] }, {"featureType": "road", "elementType": "labels", "stylers": [{"visibility": "simplified"} ] }, {"featureType": "water", "stylers": [{"visibility": "simplified"} ] }, {"featureType": "transit", "stylers": [{"visibility": "simplified"} ] }, {"featureType": "landscape", "stylers": [{"visibility": "simplified"} ] }, {"featureType": "road.highway", "stylers": [{"visibility": "off"} ] }, {"featureType": "road.local", "stylers": [{"visibility": "on"} ] }, {"featureType": "road.highway", "elementType": "geometry", "stylers": [{"visibility": "on"} ] }, {"featureType": "water", "stylers": [{"color": "#84afa3"}, {"lightness": 52 } ] }, {"stylers": [{"saturation": -17 }, {"gamma": 0.36 } ] }, {"featureType": "transit.line", "elementType": "geometry", "stylers": [{"color": "#3f518c"} ] } ]
//         // styles:[{"featureType": "landscape", "elementType": "all", "stylers": [{"hue": "#FFA800"}, {"gamma": 1 } ] }, {"featureType": "landscape", "elementType": "geometry.fill", "stylers": [{"color": "#f8fae9"} ] }, {"featureType": "poi", "elementType": "all", "stylers": [{"hue": "#679714"}, {"saturation": 33.4 }, {"lightness": -25.4 }, {"gamma": 1 } ] }, {"featureType": "road.highway", "elementType": "all", "stylers": [{"hue": "#53FF00"}, {"saturation": -73 }, {"lightness": 40 }, {"gamma": 1 } ] }, {"featureType": "road.arterial", "elementType": "all", "stylers": [{"hue": "#FBFF00"}, {"gamma": 1 } ] }, {"featureType": "road.local", "elementType": "all", "stylers": [{"hue": "#00FFFD"}, {"lightness": 30 }, {"gamma": 1 } ] }, {"featureType": "water", "elementType": "all", "stylers": [{"hue": "#00BFFF"}, {"saturation": 6 }, {"lightness": 8 }, {"gamma": 1 } ] } ]
//         // style:[{"featureType": "landscape", "elementType": "all", "stylers": [{"hue": "#FFA800"}, {"gamma": 1 } ] }, {"featureType": "landscape", "elementType": "geometry.fill", "stylers": [{"color": "#f8fae9"} ] }, {"featureType": "poi", "elementType": "all", "stylers": [{"hue": "#679714"}, {"saturation": 33.4 }, {"lightness": -25.4 }, {"gamma": 1 } ] }, {"featureType": "road.highway", "elementType": "all", "stylers": [{"hue": "#53FF00"}, {"saturation": -73 }, {"lightness": 40 }, {"gamma": 1 } ] }, {"featureType": "road.arterial", "elementType": "all", "stylers": [{"hue": "#FBFF00"}, {"gamma": 1 } ] }, {"featureType": "road.local", "elementType": "all", "stylers": [{"hue": "#00FFFD"}, {"lightness": 30 }, {"gamma": 1 } ] }, {"featureType": "water", "elementType": "all", "stylers": [{"hue": "#00BFFF"}, {"saturation": 6 }, {"lightness": 8 }, {"gamma": 1 } ] } ]
//         // styles: [{"featureType": "administrative", "elementType": "labels.text.fill", "stylers": [{"color": "#444444"} ] }, {"featureType": "landscape", "elementType": "all", "stylers": [{"color": "#f2f2f2"} ] }, {"featureType": "poi", "elementType": "all", "stylers": [{"visibility": "off"} ] }, {"featureType": "road", "elementType": "all", "stylers": [{"saturation": -100 }, {"lightness": 45 } ] }, {"featureType": "road.highway", "elementType": "all", "stylers": [{"visibility": "simplified"} ] }, {"featureType": "road.arterial", "elementType": "labels.icon", "stylers": [{"visibility": "off"} ] }, {"featureType": "transit", "elementType": "all", "stylers": [{"visibility": "off"} ] }, {"featureType": "water", "elementType": "all", "stylers": [{"color": "#003b5d"}, {"visibility": "on"} ] } ]    
        
//     }
    
//     // get map div element
//     let MapElement = document.getElementById("map")
    
//     var map = new google.maps.Map(MapElement,Initialoptions)
    
    
    
//     // Define the symbol, using one of the predefined paths ('CIRCLE')
//     // supplied by the Google Maps JavaScript API.
//     var arrowSymbol = {
//       // path: google.maps.SymbolPath.CIRCLE,
//       // path : google.maps.SymbolPath.FORWARD_OPEN_ARROW,
//       path : google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
//       // path: icons.parking.icon,
//       scale: 3,
//       // strokeColor: '#fbbc05',
//       // strokeColor: '#0099FF',
//       // strokeColor:'#192A3D',
//       strokeColor:'#f1a130',
//       // strokeColor:'#ff6969'
//       // strokeColor:'#a68974'

//       strokeOpacity: 1,
//       strokeWeight: 3,
//       // anchor: new google.maps.Point(300, 300)
//     };
    
//     // var lineSymbol2 = {
//     //   path: google.maps.SymbolPath.CIRCLE,
//     //   scale: 8,
//     //   strokeColor: '#00ac45'
//     // };
    
    
//     var dotIcon = {
//         path: 'M -1,1 0,0 1,1',
//         // path:'http://material.io/tools/icons/?icon=local_airport&style=outline',
//         scale: 10,
//         strokeWeight: 2,
//         strokeColor: '#232e40'
//     };
    
    
//     // plane symbal
//     // var planeSymbol = {

//     //   path: 'M362.985,430.724l-10.248,51.234l62.332,57.969l-3.293,26.145 l-71.345-23.599l-2.001,13.069l-2.057-13.529l-71.278,22.928l-5.762-23.984l64.097-59.271l-8.913-51.359l0.858-114.43 l-21.945-11.338l-189.358,88.76l-1.18-32.262l213.344-180.08l0.875-107.436l7.973-32.005l7.642-12.054l7.377-3.958l9.238,3.65 l6.367,14.925l7.369,30.363v106.375l211.592,182.082l-1.496,32.247l-188.479-90.61l-21.616,10.087l-0.094,115.684',
//     //   scale: 0.0333,
//     //   strokeOpacity: 0.5,
//     //   color: 'red',
//     //   strokeWeight: 3,
//     //   anchor: new google.maps.Point(300, 300)
//     // };
    
//     // var PlaneIcon = new google.maps.MarkerImage(
//     //   "http://www.charterjetscompany.com/planeicon.png",
//     // );
    
//     // var planeIcon = 'https://material.io/tools/icons/?icon=local_airport&style=outline';
    
    
    
//     // beize curve ---------------------------------------------------------------------------------------------
    
//     var path =  [{lat: 22.324624, lng: 114.172305}, {lat: 23.927836, lng:121.086477}]
//     let HKG_TW = new createBeizeCurve(path[0],path[1])
//     // console.log(HKG_TW.beizePath)
//     // var bezierPath = getLatLngPath( path[0], path[1] );
//     // console.log(bezierPath)
//     // beize curve ----------------------------------------------------------------------------------------------
    
    
//     // Create the polyline and add the symbol to it via the 'icons' property.
//     // var path =  [{lat: 22.324624, lng: 114.172305}, {lat: 23.927836, lng:121.086477}]
//     var line = new google.maps.Polyline({
//       path: HKG_TW.beizePath,
//       // path: path,
//       // path:bezierPath,
//       // strokeColor:'#a68974',
//       // strokeColor:'#FF4B4B',
//       // strokeColor:'#d0dbd7',
//       strokeColor:'#b9c1d1',
//       // strokeColor: '#0099FF',
//       // 	strokeColor:'#f6dda7',
//       	 //strokeColor:'#82a18f',
      	 
//       strokeOpacity: 1,
//       // strokeOpacity:0,
//       strokeWeight: 1.5,
//       geodesic: true,
//       icons: [{
//         // icon:icons.parking.icon,
//         icon: arrowSymbol,
//         // icon:dotIcon,
//         // icon:planeIcon,
//         // icon:arrowSymbol,
//         // icon:planeSymbol,
//         // icon:PlaneIcon,
//         offset: '0%',
//         repeat: '150px'
//       }],
//       map: map
//     });
    
    
//     // line.strokeColor = '#f6dda7'
//     animateCircle(line);
//     // console.log(line)
    
//     // repeated symbols animated on the bezierPath line
//     function animateCircle(line) {
//         var count = 0;
//         window.setInterval(function() {
//             // count = (count + 1) % 200;
//             count = ++count % 80;
        
//             var icons = line.get('icons');
//             // icons[0].offset = (count / 2) + '%';
//             icons[0].offset = (count) + '%';
//             line.set('icons', icons);
//         }, 40);
//         // console.log(line)
        
//     }
    
    
//     // var from_point = new google.maps.Marker({
//     //   map:map,
//     //   position: path[0],
//     //   icon:{
//     //     // path: "M-20,0a20,20 0 1,0 40,0a20,20 0 1,0 -40,0",
//     //     // path:'M0-48c-9.8 0-17.7 7.8-17.7 17.4 0 15.5 17.7 30.6 17.7 30.6s17.7-15.4 17.7-30.6c0-9.6-7.9-17.4-17.7-17.4z',
//     //     // path:"M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12zm10 6c3.31 0 6-2.69 6-6s-2.69-6-6-6-6 2.69-6 6 2.69 6 6 6z",
//     //     fillColor: '#ff0000',
//     //     fillOpacity: .6,
//     //     // anchor: new google.maps.Point(0,0),
//     //     strokeWeight: 0,
//     //     scale: 0.5
//     //   }
//     // });
    
//     // var to_point = new google.maps.Marker({
//     //   map:map,
//     //   position: path[1],
//     //   icon:{
//     //     // path: "M-20,0a20,20 0 1,0 40,0a20,20 0 1,0 -40,0",
//     //     // path:'M0-48c-9.8 0-17.7 7.8-17.7 17.4 0 15.5 17.7 30.6 17.7 30.6s17.7-15.4 17.7-30.6c0-9.6-7.9-17.4-17.7-17.4z',
//     //     // path:"M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12zm10 6c3.31 0 6-2.69 6-6s-2.69-6-6-6-6 2.69-6 6 2.69 6 6 6z",
//     //     fillColor: '#ff0000',
//     //     fillOpacity: .6,
//     //     // anchor: new google.maps.Point(0,0),
//     //     strokeWeight: 0,
//     //     scale: 0.5
//     //   }
//     // });
    
    

    
    
    
// }



// // window.onload = initMap