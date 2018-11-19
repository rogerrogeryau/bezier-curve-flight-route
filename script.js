let getAirports = $.get("./hutcho_airport_v2.json");


$.when(getAirports).done(function(result){
  console.log(result)
  
  // airport's coordinate data
  let airports = result
  
  
  
  // console.log(HKG_TSA)
  
  let Initialoptions ={
      center: {lat: 22.28552, lng: 114.15769},
      zoom: 8,
      disableDefaultUI: true,
      scrollwheel:true,
      draggable:true,
      mapTypeId: 'roadmap',
      // maxZoom:14,
    //   minZoom:5,
      zoomControl:true,
      mapTypeControl:false,
      scaleControl:true,
      streetViewControl:true,
      rotateControl:true,
      fullscreenControl:true,
      styles:[{"featureType": "administrative", "elementType": "labels.text.fill", "stylers": [{"color": "#444444"} ] }, {"featureType": "landscape", "elementType": "all", "stylers": [{"color": "#f2f2f2"} ] }, {"featureType": "poi", "elementType": "all", "stylers": [{"visibility": "off"} ] }, {"featureType": "road", "elementType": "all", "stylers": [{"saturation": -100 }, {"lightness": 45 } ] }, {"featureType": "road.highway", "elementType": "all", "stylers": [{"visibility": "simplified"} ] }, {"featureType": "road.arterial", "elementType": "labels.icon", "stylers": [{"visibility": "off"} ] }, {"featureType": "transit", "elementType": "all", "stylers": [{"visibility": "off"} ] }, {"featureType": "water", "elementType": "all", "stylers": [{"color": "#46bcec"}, {"visibility": "on"} ] } ]
    //   styles:[{"featureType": "administrative", "stylers": [{"visibility": "on"} ] }, {"featureType": "poi", "stylers": [{"visibility": "simplified"} ] }, {"featureType": "road", "elementType": "labels", "stylers": [{"visibility": "simplified"} ] }, {"featureType": "water", "stylers": [{"visibility": "simplified"} ] }, {"featureType": "transit", "stylers": [{"visibility": "simplified"} ] }, {"featureType": "landscape", "stylers": [{"visibility": "simplified"} ] }, {"featureType": "road.highway", "stylers": [{"visibility": "off"} ] }, {"featureType": "road.local", "stylers": [{"visibility": "on"} ] }, {"featureType": "road.highway", "elementType": "geometry", "stylers": [{"visibility": "on"} ] }, {"featureType": "water", "stylers": [{"color": "#84afa3"}, {"lightness": 52 } ] }, {"stylers": [{"saturation": -17 }, {"gamma": 0.36 } ] }, {"featureType": "transit.line", "elementType": "geometry", "stylers": [{"color": "#3f518c"} ] } ]
        // styles:[{"featureType": "landscape", "elementType": "all", "stylers": [{"hue": "#FFA800"}, {"gamma": 1 } ] }, {"featureType": "landscape", "elementType": "geometry.fill", "stylers": [{"color": "#f8fae9"} ] }, {"featureType": "poi", "elementType": "all", "stylers": [{"hue": "#679714"}, {"saturation": 33.4 }, {"lightness": -25.4 }, {"gamma": 1 } ] }, {"featureType": "road.highway", "elementType": "all", "stylers": [{"hue": "#53FF00"}, {"saturation": -73 }, {"lightness": 40 }, {"gamma": 1 } ] }, {"featureType": "road.arterial", "elementType": "all", "stylers": [{"hue": "#FBFF00"}, {"gamma": 1 } ] }, {"featureType": "road.local", "elementType": "all", "stylers": [{"hue": "#00FFFD"}, {"lightness": 30 }, {"gamma": 1 } ] }, {"featureType": "water", "elementType": "all", "stylers": [{"hue": "#00BFFF"}, {"saturation": 6 }, {"lightness": 8 }, {"gamma": 1 } ] } ]
        // style:[{"featureType": "landscape", "elementType": "all", "stylers": [{"hue": "#FFA800"}, {"gamma": 1 } ] }, {"featureType": "landscape", "elementType": "geometry.fill", "stylers": [{"color": "#f8fae9"} ] }, {"featureType": "poi", "elementType": "all", "stylers": [{"hue": "#679714"}, {"saturation": 33.4 }, {"lightness": -25.4 }, {"gamma": 1 } ] }, {"featureType": "road.highway", "elementType": "all", "stylers": [{"hue": "#53FF00"}, {"saturation": -73 }, {"lightness": 40 }, {"gamma": 1 } ] }, {"featureType": "road.arterial", "elementType": "all", "stylers": [{"hue": "#FBFF00"}, {"gamma": 1 } ] }, {"featureType": "road.local", "elementType": "all", "stylers": [{"hue": "#00FFFD"}, {"lightness": 30 }, {"gamma": 1 } ] }, {"featureType": "water", "elementType": "all", "stylers": [{"hue": "#00BFFF"}, {"saturation": 6 }, {"lightness": 8 }, {"gamma": 1 } ] } ]
        // styles: [{"featureType": "administrative", "elementType": "labels.text.fill", "stylers": [{"color": "#444444"} ] }, {"featureType": "landscape", "elementType": "all", "stylers": [{"color": "#f2f2f2"} ] }, {"featureType": "poi", "elementType": "all", "stylers": [{"visibility": "off"} ] }, {"featureType": "road", "elementType": "all", "stylers": [{"saturation": -100 }, {"lightness": 45 } ] }, {"featureType": "road.highway", "elementType": "all", "stylers": [{"visibility": "simplified"} ] }, {"featureType": "road.arterial", "elementType": "labels.icon", "stylers": [{"visibility": "off"} ] }, {"featureType": "transit", "elementType": "all", "stylers": [{"visibility": "off"} ] }, {"featureType": "water", "elementType": "all", "stylers": [{"color": "#003b5d"}, {"visibility": "on"} ] } ]    
        
    }
    
    // get map div element
    let MapElement = document.getElementById("map")
    
    var map = new google.maps.Map(MapElement,Initialoptions)
    
    
    
    // Define the symbol, using one of the predefined paths ('CIRCLE')
    // supplied by the Google Maps JavaScript API.
    var arrowSymbol = {
      // path: google.maps.SymbolPath.CIRCLE,
      // path : google.maps.SymbolPath.FORWARD_OPEN_ARROW,
      path : google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
      // path: icons.parking.icon,
      scale: 3,
      // strokeColor: '#fbbc05',
      // strokeColor: '#0099FF',
      // strokeColor:'#192A3D',
      strokeColor:'#f1a130',
      // strokeColor:'#ff6969'
      // strokeColor:'#a68974'

      strokeOpacity: 1,
      strokeWeight: 3,
      // anchor: new google.maps.Point(300, 300)
    };
    
    // var lineSymbol2 = {
    //   path: google.maps.SymbolPath.CIRCLE,
    //   scale: 8,
    //   strokeColor: '#00ac45'
    // };
    
    
    var dotIcon = {
        path: 'M -1,1 0,0 1,1',
        // path:'http://material.io/tools/icons/?icon=local_airport&style=outline',
        scale: 10,
        strokeWeight: 2,
        strokeColor: '#232e40'
    };
    
    
    // plane symbal
    // var planeSymbol = {

    //   path: 'M362.985,430.724l-10.248,51.234l62.332,57.969l-3.293,26.145 l-71.345-23.599l-2.001,13.069l-2.057-13.529l-71.278,22.928l-5.762-23.984l64.097-59.271l-8.913-51.359l0.858-114.43 l-21.945-11.338l-189.358,88.76l-1.18-32.262l213.344-180.08l0.875-107.436l7.973-32.005l7.642-12.054l7.377-3.958l9.238,3.65 l6.367,14.925l7.369,30.363v106.375l211.592,182.082l-1.496,32.247l-188.479-90.61l-21.616,10.087l-0.094,115.684',
    //   scale: 0.0333,
    //   strokeOpacity: 0.5,
    //   color: 'red',
    //   strokeWeight: 3,
    //   anchor: new google.maps.Point(300, 300)
    // };
    
    // var PlaneIcon = new google.maps.MarkerImage(
    //   "http://www.charterjetscompany.com/planeicon.png",
    // );
    
    // var planeIcon = 'https://material.io/tools/icons/?icon=local_airport&style=outline';
    
    
    
    // beize curve ---------------------------------------------------------------------------------------------
    
    
    // single coordinate
    let HKG = airports.HKG;
    let TSA = airports.TSA;
    let LCY = airports.LCY;
    let BKK = airports.BKK;
    let ITM = airports.ITM;    
    
    // form route of pair points
    let HKG_TSA = generatePathCoordinate(HKG,TSA)
    let HKG_LCY = generatePathCoordinate(HKG,LCY)
    let HKG_BKK = generatePathCoordinate(HKG,BKK)
    let HKG_ITM = generatePathCoordinate(HKG,ITM)
    
    // shape the straight route into BeizeCurve
    let HKG_TSA_BeizeCurve = new createBeizeCurve(HKG_TSA[0],HKG_TSA[1])
    let HKG_LCY_BeizeCurve = new createBeizeCurve(HKG_LCY[0],HKG_LCY[1])
    let HKG_BKK_BeizeCurve = new createBeizeCurve(HKG_BKK[0],HKG_BKK[1])
    let HKG_ITM_BeizeCurve = new createBeizeCurve(HKG_ITM[0],HKG_ITM[1])
    // console.log(HKG_TW.beizePath)
    // var bezierPath = getLatLngPath( path[0], path[1] );
    // console.log(bezierPath)
    // beize curve ----------------------------------------------------------------------------------------------
    
    
    // Create the polyline and add the symbol to it via the 'icons' property.
    // var path =  [{lat: 22.324624, lng: 114.172305}, {lat: 23.927836, lng:121.086477}]
    var HKG_TSA_line = new google.maps.Polyline({
      path: HKG_TSA_BeizeCurve.beizePath,
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
      strokeWeight: 1.5,
      geodesic: true,
      icons: [{
        // icon:icons.parking.icon,
        icon: arrowSymbol,
        // icon:dotIcon,
        // icon:planeIcon,
        // icon:arrowSymbol,
        // icon:planeSymbol,
        // icon:PlaneIcon,
        offset: '0%',
        repeat: '150px'
      }],
      map: map
    });
    
    var HKG_LCY_line = new google.maps.Polyline({
      path: HKG_LCY_BeizeCurve.beizePath,
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
      strokeWeight: 1.5,
      geodesic: true,
      icons: [{
        // icon:icons.parking.icon,
        icon: arrowSymbol,
        // icon:dotIcon,
        // icon:planeIcon,
        // icon:arrowSymbol,
        // icon:planeSymbol,
        // icon:PlaneIcon,
        offset: '0%',
        repeat: '500px'
      }],
      map: map
    });
    
    
    var HKG_BKK_line = new google.maps.Polyline({
      path: HKG_BKK_BeizeCurve.beizePath,
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
      strokeWeight: 1.5,
      geodesic: true,
      icons: [{
        // icon:icons.parking.icon,
        icon: arrowSymbol,
        // icon:dotIcon,
        // icon:planeIcon,
        // icon:arrowSymbol,
        // icon:planeSymbol,
        // icon:PlaneIcon,
        offset: '0%',
        repeat: '500px'
      }],
      map: map
    });
    
    var HKG_ITM_line = new google.maps.Polyline({
      path: HKG_ITM_BeizeCurve.beizePath,
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
      strokeWeight: 1.5,
      geodesic: true,
      icons: [{
        // icon:icons.parking.icon,
        icon: arrowSymbol,
        // icon:dotIcon,
        // icon:planeIcon,
        // icon:arrowSymbol,
        // icon:planeSymbol,
        // icon:PlaneIcon,
        offset: '0%',
        repeat: '500px'
      }],
      map: map
    });
    
    // line.strokeColor = '#f6dda7'
    animateSymbol(HKG_TSA_line);
    animateSymbol(HKG_LCY_line);
    animateSymbol(HKG_BKK_line);
    animateSymbol(HKG_ITM_line);
    
    // console.log(line)
    
    // generate animated repeated symbols along the bezierPath line
    function animateSymbol(line) {
        var count = 0;
        window.setInterval(function() {
            // count = (count + 1) % 200;
            count = ++count % 80;
        
            var icons = line.get('icons');
            // icons[0].offset = (count / 2) + '%';
            icons[0].offset = (count) + '%';
            line.set('icons', icons);
        }, 50);
        // console.log(line)
        
    }
    
    
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