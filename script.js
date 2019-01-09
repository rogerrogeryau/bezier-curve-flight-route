let getAirports = $.get("./hutcho_airport_v2.json");
let getAirlineRoutes = $.get("./airline_routes.json");
let getHotels = $.get('./1000_hotel_JSON.json');
let getItineraries = $.get('./itineraries_content.json');
//   
//   var sidebar = $('#sidebar').sidebar();
// }



$.when(getAirports,getAirlineRoutes, getHotels, getItineraries).done(function(result, result2, result3, result4){

  // get airport's coordinate data
  let airports = result[0];
  
  // get airline routes
  let airlineRoutes = result2[0];
  
  // get hotels
  let hotels = result3[0];
  
  let itineraries = result4[0];
  // console.log(hotels)
  
  // google map initial config
  let Initialoptions ={
      // center: {lat: 22.28552, lng: 114.15769},
      center:{lat:22.3089008331,lng:113.915000916},
      zoom: 5,
      disableDefaultUI: true,
      scrollwheel:true,
      draggable:true,
      mapTypeId: 'roadmap',
      // maxZoom:7,
      minZoom:3,
      zoomControl:false,
      mapTypeControl:false,
      scaleControl:true,
      streetViewControl:false,
      rotateControl:true,
      fullscreenControl:false,
      styles:[{"featureType": "administrative", "elementType": "labels.text.fill", "stylers": [{"color": "#444444"} ] }, {"featureType": "landscape", "elementType": "all", "stylers": [{"color": "#f2f2f2"} ] }, {"featureType": "poi", "elementType": "all", "stylers": [{"visibility": "off"} ] }, {"featureType": "road", "elementType": "all", "stylers": [{"saturation": -100 }, {"lightness": 45 } ] }, {"featureType": "road.highway", "elementType": "all", "stylers": [{"visibility": "simplified"} ] }, {"featureType": "road.arterial", "elementType": "labels.icon", "stylers": [{"visibility": "off"} ] }, {"featureType": "transit", "elementType": "all", "stylers": [{"visibility": "off"} ] }, {"featureType": "water", "elementType": "all", "stylers": [{"color": "#46bcec"}, {"visibility": "on"} ] } ]
      // styles:[{"featureType": "administrative", "stylers": [{"visibility": "on"} ] }, {"featureType": "poi", "stylers": [{"visibility": "simplified"} ] }, {"featureType": "road", "elementType": "labels", "stylers": [{"visibility": "simplified"} ] }, {"featureType": "water", "stylers": [{"visibility": "simplified"} ] }, {"featureType": "transit", "stylers": [{"visibility": "simplified"} ] }, {"featureType": "landscape", "stylers": [{"visibility": "simplified"} ] }, {"featureType": "road.highway", "stylers": [{"visibility": "off"} ] }, {"featureType": "road.local", "stylers": [{"visibility": "on"} ] }, {"featureType": "road.highway", "elementType": "geometry", "stylers": [{"visibility": "on"} ] }, {"featureType": "water", "stylers": [{"color": "#84afa3"}, {"lightness": 52 } ] }, {"stylers": [{"saturation": -17 }, {"gamma": 0.36 } ] }, {"featureType": "transit.line", "elementType": "geometry", "stylers": [{"color": "#3f518c"} ] } ]
        // styles:[{"featureType": "landscape", "elementType": "all", "stylers": [{"hue": "#FFA800"}, {"gamma": 1 } ] }, {"featureType": "landscape", "elementType": "geometry.fill", "stylers": [{"color": "#f8fae9"} ] }, {"featureType": "poi", "elementType": "all", "stylers": [{"hue": "#679714"}, {"saturation": 33.4 }, {"lightness": -25.4 }, {"gamma": 1 } ] }, {"featureType": "road.highway", "elementType": "all", "stylers": [{"hue": "#53FF00"}, {"saturation": -73 }, {"lightness": 40 }, {"gamma": 1 } ] }, {"featureType": "road.arterial", "elementType": "all", "stylers": [{"hue": "#FBFF00"}, {"gamma": 1 } ] }, {"featureType": "road.local", "elementType": "all", "stylers": [{"hue": "#00FFFD"}, {"lightness": 30 }, {"gamma": 1 } ] }, {"featureType": "water", "elementType": "all", "stylers": [{"hue": "#00BFFF"}, {"saturation": 6 }, {"lightness": 8 }, {"gamma": 1 } ] } ]
        // styles:[{"featureType": "landscape", "elementType": "all", "stylers": [{"hue": "#FFA800"}, {"gamma": 1 } ] }, {"featureType": "landscape", "elementType": "geometry.fill", "stylers": [{"color": "#f8fae9"} ] }, {"featureType": "poi", "elementType": "all", "stylers": [{"hue": "#679714"}, {"saturation": 33.4 }, {"lightness": -25.4 }, {"gamma": 1 } ] }, {"featureType": "road.highway", "elementType": "all", "stylers": [{"hue": "#53FF00"}, {"saturation": -73 }, {"lightness": 40 }, {"gamma": 1 } ] }, {"featureType": "road.arterial", "elementType": "all", "stylers": [{"hue": "#FBFF00"}, {"gamma": 1 } ] }, {"featureType": "road.local", "elementType": "all", "stylers": [{"hue": "#00FFFD"}, {"lightness": 30 }, {"gamma": 1 } ] }, {"featureType": "water", "elementType": "all", "stylers": [{"hue": "#00BFFF"}, {"saturation": 6 }, {"lightness": 8 }, {"gamma": 1 } ] } ]
        // styles: [{"featureType": "administrative", "elementType": "labels.text.fill", "stylers": [{"color": "#444444"} ] }, {"featureType": "landscape", "elementType": "all", "stylers": [{"color": "#f2f2f2"} ] }, {"featureType": "poi", "elementType": "all", "stylers": [{"visibility": "off"} ] }, {"featureType": "road", "elementType": "all", "stylers": [{"saturation": -100 }, {"lightness": 45 } ] }, {"featureType": "road.highway", "elementType": "all", "stylers": [{"visibility": "simplified"} ] }, {"featureType": "road.arterial", "elementType": "labels.icon", "stylers": [{"visibility": "off"} ] }, {"featureType": "transit", "elementType": "all", "stylers": [{"visibility": "off"} ] }, {"featureType": "water", "elementType": "all", "stylers": [{"color": "#003b5d"}, {"visibility": "on"} ] } ]    
        
  }
      
    // get map div element
    let MapElement = document.getElementById("map")
 
    // create map canvas
    let map = new google.maps.Map(MapElement,Initialoptions)
    
    // activate navigation bar
    let sidebar = $('#sidebar').sidebar();

    // infoWindow------------------------------------------------------------

    // initialize the infoWindow object
    var contentString = '';
    var infowindow = new google.maps.InfoWindow({
      content: contentString,
      // position:Initialoptions.center
    });
    
    // infoWindow------------------------------------------------------------




    // search box--------------------------------------------------------------
    
    
    // Create the search box and link it to the UI element.
    var input = document.getElementById('pac-input');
    var searchBox = new google.maps.places.SearchBox(input);
    // map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
    
    // Bias the SearchBox results towards current map's viewport.
    map.addListener('bounds_changed', function() {
      searchBox.setBounds(map.getBounds());
    });
    
    
    // var Searchmarkers = [];
    
    // Listen for the event fired when the user selects a prediction and retrieve
    // more details for that place.
    searchBox.addListener('places_changed', function() {
    var places = searchBox.getPlaces();
    
    if (places.length == 0) {
      return;
    }
    
    // Clear out the old markers.
    // Searchmarkers.forEach(function(Searchmarker) {
    //   Searchmarker.setMap(null);
    // });
    // Searchmarkers = [];
    
    // For each place, get the icon, name and location.
    var bounds = new google.maps.LatLngBounds();
      places.forEach(function(place) {
        if (!place.geometry) {
          console.log("Returned place contains no geometry");
          return;
        }

        if (place.geometry.viewport) {
          // Only geocodes have viewport.
          bounds.union(place.geometry.viewport);
        } else {
          bounds.extend(place.geometry.location);
        }
      });
      map.fitBounds(bounds);
      map.setZoom(13);
    });
    
    
    // search box--------------------------------------------------------------
    
    


    // an array storing all created airline route
    let airlineRoutesArray = [];
    
    // array storing all airport markers
    let airlineAirportMarkers = []
    
    // hotel marker array 
    let hotelsMarkersArray = []
    
    // selector in "air" tab
    let carrierSelector = $('#carrier_selector')
    
    
    // tab - air - click event
    $( "li>a[href='#air']" ).click(function() {
      
      // append options of airlines to selector if not present
      if (carrierSelector.children('option').length === 0) {
        for(let airline in airlineRoutes){

          carrierSelector.append(`<option value=${airline}>${airline}</option>`)
        }
      }

      // clear map before loading the folling code block
      deleteBeizeCurves()
      deleteAirportMarkers()
      deleteHotelsMarkersArray()
      infowindow.close()
      
      

      // map control panel -------------------------------------------------------------------------------------

      // default beizeCurve of routings for first airline -----------------
      if (airlineRoutesArray.length === 0) {
        // get the first airline in airlineRoutes array
        // console.log(Object.keys(airlineRoutes)[0])
        let first_airline_code = Object.keys(airlineRoutes)[0];
        
        // clear previously displayed route
        deleteBeizeCurves()
        // clear previously displayed markers
        deleteAirportMarkers()
        
        // display selected routes on the map
        showRoutesOfSelectedCarrier(first_airline_code)

        // mimic change event to have the map refreshed
        carrierSelector.trigger("change")
      }
      // default beizeCurve of routings for first airline -----------------
     
      
      // jquery - add event listener - refresh map when airline is changed
      carrierSelector.on("change", function(e) {
          e.stopPropagation()
          // clear previously displayed route
          deleteBeizeCurves()
          
          // clear previously displayed markers
          deleteAirportMarkers()
          
          // get the selected carrier option tag element
          // let chosenCarrier = carrierSelector.options[carrierSelector.selectedIndex].value;
          let chosenCarrier = carrierSelector.find(":selected").text()
          
          // display selected routes on the map
          showRoutesOfSelectedCarrier(chosenCarrier)
          
          // clear shown infoWindow when another carrier is clicked
          infowindow.close()
          
      });
      
      
      // map control panel -------------------------------------------------------------------------------------
      

      
      // plane symbal
      var planeSymbol = {
  
        path: 'M362.985,430.724l-10.248,51.234l62.332,57.969l-3.293,26.145 l-71.345-23.599l-2.001,13.069l-2.057-13.529l-71.278,22.928l-5.762-23.984l64.097-59.271l-8.913-51.359l0.858-114.43 l-21.945-11.338l-189.358,88.76l-1.18-32.262l213.344-180.08l0.875-107.436l7.973-32.005l7.642-12.054l7.377-3.958l9.238,3.65 l6.367,14.925l7.369,30.363v106.375l211.592,182.082l-1.496,32.247l-188.479-90.61l-21.616,10.087l-0.094,115.684',
        scale: 0.0333,
        strokeOpacity: 0.6,
        // color: '#ff6969',
        // strokeColor:'#ff6969',
        // strokeColor:'#2daaff',
        strokeColor:'	#56514d',
        // strokeColor: '#ff2222',
        strokeWeight: 3,
        anchor: new google.maps.Point(300, 300)
      };
      

      
      function showRoutesOfSelectedCarrier(carrier){
        
        // get the flight ticket list group in the nav bar [air tab]
        let listGroup = $(".flight-ticket-list-group")
        // clear all children list item beforehand
        listGroup.children().remove()
        
        // loop through all routes of the selected airline
        for (let i = 0; i < airlineRoutes[carrier].length; i++) {
  
          let pointFrom = airlineRoutes[carrier][i]['from']
          let pointTo = airlineRoutes[carrier][i]['to']
          
          
          // a pair of coordinates of a route
          let targetPath = generatePathCoordinate(
            airports[pointFrom], 
            airports[pointTo]
          )
          // console.log(targetPath[1])
          
          // markers
          let airportMarker = new google.maps.Marker({
            map:map,
            position:targetPath[1],
            id:pointTo,
            animation: google.maps.Animation.DROP,
            // icon: markerIcon,
            icon: 'http://www.google.com/intl/en_us/mapfiles/ms/micons/' + 'red' + '-dot.png',
            // label: {
            // text: "GO!"
            //   color: "#eb3a44",
            //   fontSize: "16px",
            //   fontWeight: "bold"
            // }
          });
          
          // push current marker to array
          airlineAirportMarkers.push(airportMarker)
          
          
          
          
  
          
          // midpoint - a point at which infoWindow lies
          // console.log(targetBeizeCurve.infoWindowPoint)
  
          // -------------------DRAW BeizeCurve PATH ON GOOGLE MAP-----------------------
          
          // create BeizeCurve for that path
          let targetBeizeCurve = new createBeizeCurve(targetPath[0],targetPath[1])
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
          
          // push created airline route curve to the corresponding array
          airlineRoutesArray.push(drawBeizeCurves)
          
          // -------------------DRAW PATH ON GOOGLE MAP-----------------------
        
    
          // -------------------APPLY FUNCTIONS & EVENT LISTENER FOR THE Beize LINE----------------------------------
          
       
          
          
          // endow the curve with event trigger
          mouseOverEventBeizeCurves(drawBeizeCurves);
          mouseOutEventBeizeCurves(drawBeizeCurves);
          
          // animation applied on symbol along the curve
          animateSymbol(drawBeizeCurves);
         
        
          // -------------------APPLY FUNCTIONS & EVENT LISTENER FOR THE LINE----------------------------------
    

        // create flight ticket items in the list group in home tab of nav bar---------------------------------
         
        createFightTicketListItemInTheNavBarHomeTab(airlineRoutes[carrier][i], carrier, i)
        // create flight ticket items in the list group in home tab of nav bar---------------------------------
        
        }
      }

    })
    
    // jquery event triggers
    // click the air tab on the nav bar when page is loaded
    $( "li>a[href='#air']" ).trigger( "click" );
    carrierSelector.trigger("change")

      
      
    
    
    
    // hotel tab ----------------------------------------
    
    
    $( "li>a[href='#hotel']" ).click(function() {

        if (hotelsMarkersArray.length===0) {
          
          
          
          // let $hotel_parent = $(this).parent()
          //     // deleteBeizeCurves();
          // if (!$hotel_parent.hasClass("active")) {
          
          //     // alert('hotel tab to be turned off')
          // }else{
          //     // alert('hotel tab to be opened')
          //     // alert('hotel tab to be turned on')
          // }
          
          
          // console.log(map)
          
          deleteBeizeCurves()
          deleteAirportMarkers()
          infowindow.close()
          
          // for (let hotel in hotels) {
          //   // console.log(hotel)
            
          //   let latlonObj = {lat: hotels[hotel].HT_LATITUDE, lng: hotels[hotel].HT_LONGITUDE}
            
          //   let hotelMarker = new google.maps.Marker({
          //     map:map,
          //     position: latlonObj,
          //     id:hotel,
          //     animation: google.maps.Animation.DROP,
          //     // icon: markerIcon,
          //     icon: 'http://www.google.com/intl/en_us/mapfiles/ms/micons/' + 'red' + '-dot.png',
          //     // label: {
          //     // text: "GO!"
          //     //   color: "#eb3a44",
          //     //   fontSize: "16px",
          //     //   fontWeight: "bold"
          //     // }
          //     title:hotels[hotel].HOTEL_NAME
          //   });
            
          //   // push current marker to array
          //   hotelsMarkersArray.push(hotelMarker)
            
          //   hotelMarkersMouseOver(hotelMarker)
          //   // hotelMarkersMouseOver()
            
          //   // var infowindow = new google.maps.InfoWindow({
          //   //   content: `${hotel.HOTEL_NAME}`
          //   // });
            
          //   // hotelMarker.addEventListener('click',function(){
              
          //   // })
            
          //   // infowindow.setContent(
          //   //   `
          //   //     ${hotels[hotel].HOTEL_NAME}
          //   //   `
          //   // )
            
          //   // infowindow.setPosition(latlonObj)
            
          //   // hotelMarkersMouseOver(hotelMarker)
            
            
            
            
          //   // infowindow.content=hotels[hotel].HOTEL_NAME
          //   // hotelMarker.addListener('mouseover', function() {
          //   //   infowindow.open(map, hotelMarker);
          //   // });
          
          // console.log(hotels[1024305])
          
          
          for(let hotel in hotels){
          
            let latlonObj = {lat: hotels[hotel].HT_LATITUDE, lng: hotels[hotel].HT_LONGITUDE}
            
            let hotelMarker = new google.maps.Marker({
                map:map,
                position: latlonObj,
                id:hotel,
                animation: google.maps.Animation.DROP,
                // icon: markerIcon,
                icon: 'http://www.google.com/intl/en_us/mapfiles/ms/micons/' + 'red' + '-dot.png',
                // label: {
                // text: "GO!"
                //   color: "#eb3a44",
                //   fontSize: "16px",
                //   fontWeight: "bold"
                // }
                title:hotels[hotel].HOTEL_NAME
              });
            
            // infowindow.setContent(`${hotels[hotel].HOTEL_NAME}`)
            
            // hotelMarker.addListener('mouseover', function() {
            //   infowindow.open(map, hotelMarker);
            // });
            
            
            
            hotelsMarkersArray.push(hotelMarker)
            
            google.maps.event.addListener(hotelMarker, 'mouseover', (function(pin) {
              return function() {
                  // infowindow.setContent(airports[airport].name);
                  
                  // var contentString = '<div id="content" class="card">'+
                  //                     '<div id="siteNotice">'+
                  //                     '</div>'+
                  //                     '<h3 id="firstHeading" class="firstHeading">'+airports[airport].name+'</h3>'+
                  //                     '<div id="bodyContent">'+
                  //                     '<h4>'+airports[airport].state+'</h4>'+
                  //                     '<h5>'+airports[airport].lat+', '+airports[airport].lon+'</h5>'+
                  //                     '(last visited June 22, 2009).</p>'+
                  //                     '</div>'+
                  //                     '</div>';
                  
                  contentString = `${hotelMarker.title}`
                  
                  
                  infowindow.setContent(contentString);
                  infowindow.setPosition(latlonObj)
  
                  // var infowindow = new google.maps.InfoWindow({
                  //   // content: contentString
                  //   content:airports[airport].name
                  // });
                  
                  infowindow.open(map, hotelMarker);
                  
                  // // mouseover event to trigger scrolling effect in the post container on the right-hand side
                  // $("#" + airports[airport].iata)[0].scrollIntoView({
                  //     behavior: "auto", // or "auto" or "instant"
                  //     block: "start" // or "end"
                  // });
              
                  //append css shadow effect to the chosen content post
                  // $("#" + airports[airport].iata).css('box-shadow', '0 0 80px rgba(33,33,33,.2)');
              };
            })(hotelMarker));            
            
            
            
            
            
            
            
            
            
            
            
          
          
          }
          
          
          
            
          
          
          
          // }
          // console.log(hotels)
          
          
          
        }
    
    });
    // hotel tab ----------------------------------------
    
    
    
    
    // itinerary tab-------------------------------------
   
    $( "li>a[href='#itinerary']").click(function() {
      // tab - itinerary
        
        deleteHotelsMarkersArray()
        infowindow.close()
        deleteBeizeCurves()
        deleteAirportMarkers()
        
        
        // trigger carousel slider
        // $('.carousel').carousel({
        //   interval: 2000
        // })
        
        
        // itin item card jQuery Construction---------------------------------------------------

        let itin_content_tab = $('.container-fluid .sidebar-itin-tab-content')
        if (itin_content_tab.children().length === 0) {
          
          for (let itin in itineraries){
            let itin_item_code = itin;
            
            // itineraries[itin_item_code]['itin_by_day']
            
            // console.log(itineraries[itin_item_code]['itin_by_day'])
            let img_links = [];
            
            for(let dayNum in itineraries[itin_item_code]['itin_by_day']){
              // console.log(dayNum)
              // console.log(itineraries[itin_item_code]['itin_by_day'][dayNum]['checkpoints'])
              
              // for (let checkpoint of itineraries[itin_item_code]['itin_by_day'][dayNum]['checkpoints']){
              //   img_links.push(checkpoint.img_urls[0])
              // }
              
              // image urls
              itineraries[itin_item_code]['itin_by_day'][dayNum]['checkpoints'].forEach(checkpoint=>{
                // console.log(checkpoint.img_urls[0])
                img_links.push([checkpoint.img_urls[1], checkpoint.name])
                
              })

            }
            // console.log(img_links)
            
            
            let itim_to_be_parsed = `
              <div class="itin-item-wrapper" id="itin-item-wrapper-${itin_item_code}">
                <div class="my-1 mx-auto p-relative bg-white itin-card">
                  
                  <div id="carouselIndicators-${itin_item_code}" class="carousel slide" data-ride="carousel" data-interval="3000">
                  
                      <ol class="carousel-indicators">

                        ${Object.keys(img_links).map(img_link_index=>`
                          <li data-target="#carouselIndicators-${itin_item_code}" data-slide-to="${img_link_index}"></li>
                        `).join('')}
              
                      </ol>
                      
                      <div class="carousel-inner">
                      
                        ${img_links.map(img_link=>`
                          <div class="carousel-item">
                            <img class="d-block w-100" src="${img_link[0]}" alt="${img_link[0]}">
                            <div class="carousel-caption d-none d-md-block" style="font-weight: 900; text-shadow: 0px 4px 3px rgba(0,0,0,0.4), 0px 8px 13px rgba(0,0,0,0.1), 0px 18px 23px rgba(0,0,0,0.1);">
                              <h5>${img_link[1]}</h5>
                            </div>
                          </div>
                          
                          
                          
                        `).join('')}

                      </div>
                      <a class="carousel-control-prev" href="#carouselIndicators-${itin_item_code}" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                      </a>
                      <a class="carousel-control-next" href="#carouselIndicators-${itin_item_code}" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                      </a>
                    </div>                 
                  

                  <div class="px-2 py-2 itin-item-content-body" id="headingOne" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style="">
                    <p class="mb-0 small font-weight-medium text-uppercase mb-1 text-muted lts-2px">
                      ${itineraries[`${itin_item_code}`].city_code}
                      
                    </p>
                    
                    <h1 class="ff-serif font-weight-normal text-black card-heading mt-0 mb-1">
                      ${itineraries[`${itin_item_code}`].itin_name}
                    </h1>
                    <p class="mb-1 itin-item-desc">
                      ${itineraries[`${itin_item_code}`].itin_by_day.D1.brief_desc} &hellip;
                    </p>
                    <p class="itin-item-paragraph-btn">
                      <a class="btn btn-primary"  data-toggle="collapse" href="#multiCollapse-${itin_item_code}" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">了解更多</a>
                    </p>
                    <div class="row">
                      <div class="collapse multi-collapse" id="multiCollapse-${itin_item_code}">
                        <div class="card card-body itin-collapsable-content">
                          <div class="container">
                            <div class="row">
                              <div id="list-${itin_item_code}" class="list-group col-3">

                                ${Object.keys(itineraries[`${itin_item_code}`].itin_by_day).map(day => `
                                  <a class="list-group-item list-group-item-action" href="#${itin_item_code}-list-item-${day}">Day ${day.substring(1,2)}</a>
                                `).join('')}
                              </div>
                              <div data-spy="scroll" data-target="#list-${itin_item_code}" data-offset="0" class="scrollspy-example col-9" style="height:300px; overflow:scroll;">
                                ${Object.keys(itineraries[`${itin_item_code}`].itin_by_day).map(day =>`
                                  <h4 id="${itin_item_code}-list-item-${day}">Day ${day.substring(1,2)}</h4>
                                  
                                    ${itineraries[`${itin_item_code}`].itin_by_day[day].checkpoints.map(checkpoint=>`
                                      <div class="card itin-checkpoint-card text-black bg-light mb-3" id="itin-checkpoint-${itin_item_code}-${day}-${checkpoint.name}">
                                        <div class="card-header">${checkpoint.name}</div>
                                        <div class="card-body">
                                          ${checkpoint.place_desc}
                                        </div>
                                      </div>
                                    `).join('')}
                                `).join('')}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            `
            
            let itim_wrapper = $('<div/>').html(itim_to_be_parsed);
            itin_content_tab.append(itim_wrapper);
            
            // add 'active' class to the first item of an list item of DOM with class=carouselIndicators
            $('.carousel-indicators li:first-child').addClass("active")
            
            // add 'active' class to the first item of DOM with class of carousel-item
            $('.carousel-item:first-child').addClass("active")
          }

        }
        
        
        
        // itin routing on google map ----------------------------------------------
        
        // console.log(itineraries['itin_001']['itin_by_day']['D1']['checkpoints'][0]['name'])
        // console.log(itineraries['itin_001']['itin_by_day']['D1']['checkpoints'][1]['name'])
        
        let addressToFind0 = itineraries['itin_001']['itin_by_day']['D1']['checkpoints'][0]['name']
        let addressToFind1 = itineraries['itin_001']['itin_by_day']['D1']['checkpoints'][1]['name']
        let addressToFind2 = itineraries['itin_002']['itin_by_day']['D1']['checkpoints'][1]['name']
        // let addressToFind = '香港'
        

        var polylineOptionsActual = new google.maps.Polyline({
          // strokeColor: '#b9c1d1',
          // strokeOpacity: 1.0,
          // strokeWeight: 6
          
          // scale: 4,
          // strokeColor: "#000",
          // strokeOpacity: 0.7,
          // strokeWeight: 4,
          // fillColor: "#ff9715",
          // fillOpacity: 1
          
          
          strokeColor: '#AA4588',
          strokeOpacity: .8,
          strokeWeight: 8,
          // geodesic: true,
          // editable:true,
          // draggable:true
          
          

          
          
          
        });
        
        var directionsDisplay = new google.maps.DirectionsRenderer({ polylineOptions: polylineOptionsActual });
        var directionsService = new google.maps.DirectionsService();
        let geocoder = new google.maps.Geocoder();
        let geo0 = geocodeAddress(geocoder, addressToFind0)
        console.log(geo0)
        
        // let geo1 = geocodeAddress(geocoder, addressToFind1)
        let geoCheckPoints = [addressToFind0, addressToFind1, addressToFind2]
        // console.log(geoCheckPoints)
        
        
        // directionsDisplay.setMap(map);
        // directionsDisplay.setOptions({ suppressMarkers: false });
        // calculateAndDisplayRoute(directionsService,directionsDisplay, geoCheckPoints)
        
        // itin routing on google map ----------------------------------------------
        
        
        
    })
    
    
    
    // itinerary tab-------------------------------------
    
    
  
    
    // functions codeblock -------------------------------------------------------------------------------------------------------------------------------------------------------------------
    
    function geocodeAddress(geocoder, addressSearch) {
      // var address = addressSearch;
      geocoder.geocode({'address': addressSearch}, function(results, status) {
        if (status === 'OK') {
          // console.log(results[0].geometry.location)
          // map.setCenter(results[0].geometry.location)
          // var markerAdd = new google.maps.Marker({
          //     map: map,
          //     position: results[0].geometry.location
          //   });
          // resultsMap.setCenter(results[0].geometry.location);
          // var marker = new google.maps.Marker({
            // map: resultsMap,
            // position: results[0].geometry.location
          // });
        } else {
          alert(`Geocode for [${addressSearch}] was not successful for the following reason: ${status}.`);
        }
      });
    }
    
    
    function calculateAndDisplayRoute(directionsService, directionsDisplay, geoCheckPoints) {
      // extract points except first and last one as waypoints
      // geoCheckPoints.forEach(point=>{
      //   // console.log(point)
        
      // })
      // console.log(geoCheckPoints)
      let wayPoints =[];
      let origin;
      let destination;
      for (let i = 0; i < geoCheckPoints.length; i++) {
        if (i === 0) {
          origin = geoCheckPoints[i];
          console.log(origin);
        }else if (i === geoCheckPoints.length - 1){
          destination = geoCheckPoints[i];
          console.log(destination);
        }
        else{
          wayPoints.push({
            location:geoCheckPoints[i],
            stopover: true
          });
          console.log(wayPoints);
        }
        
        
        // console.log(i)
      }
      
      directionsService.route({
        origin: geoCheckPoints[0],
        destination: geoCheckPoints[1],
        // origin:origin,
        // destination:destination,
        // waypoints:wayPoints,
        // waypoints:[{location: "萬里桐", stopover: true}],
        // optimizeWaypoints: true,
        travelMode: 'DRIVING'
      }, function(response, status) {
        if (status === 'OK') {
          directionsDisplay.setDirections(response);
        } else {
          window.alert('Directions request failed due to ' + status);
        }
      });
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
        // console.log('animated function here')
        
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
    
    
    // clear hotelMarkersArray
    function deleteHotelsMarkersArray() {
        //Loop through all the markers and remove
        for (var i = 0; i < hotelsMarkersArray.length; i++) {
            hotelsMarkersArray[i].setMap(null);
        }
        hotelsMarkersArray = [];
    };
    
    function hotelMarkersMouseOver(hotelMarker){
      google.maps.event.addListener(hotelMarker, 'mouseover', function(event) {
        // infowindow.setContent(
        //   `
        //     ${hotelMarker.title}
        //   `
        // )
      })
      // open the window
      infowindow.open(map)
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
      
    // functions codeblock -------------------------------------------------------------------------------------------------------------------------------------------------------------------
    

  
  
  
  
  
  
  
  
})
// .then(function(){
//   // console.log($( "select" ))
//   // console.log($( "select[id=carrier_selector]" ))
//   // $( "select[id=carrier_selector]" ).val("CI").change()
  
// })


