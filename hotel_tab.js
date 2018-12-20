$( "li>a[href='#hotel']" ).click(function(e) {

    let $hotel_parent = $(this).parent()
        deleteBeizeCurves();
    if (!$hotel_parent.hasClass("active")) {
        
        // alert('hotel tab to be turned on')
    }else{
        // alert('hotel tab to be opened')
        // alert('hotel tab to be turned off')
    }

});

