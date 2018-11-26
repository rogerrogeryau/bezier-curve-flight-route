function createBeizeCurve(from, to){
    this.from =from;
    this.to = to;
    this.beizePath = getLatLngPath(from, to)
    this.infoWindowPoint = getLatLngPath(from,to)[5]   //the 6th coordinate point along the curve as the point at which infoWindow lies
    
    function getLatLngPath( p0, p1 )
        {
            var handles = getBezierHandles( p0, p1 );
    
            var points = [ p0, handles.a, handles.b, p1 ];
    
            var path = [];
    
            var sections = 40;
    
            for( var t = 0; t <= sections; ++t )
            {
                var b = getBezier( points, t / sections );
    
                path.push( new google.maps.LatLng( b.lat, b.lng ) );
            }
    
            return path;
        }
        
    function getBezierHandles( p0, p1 )
    {
        // a, b points are perpendicular to q1, q3 which are on line connecting p0 and p1.
        // slope between two points : ( y2 - y1 ) / (x2 - x1 ).
        // to get perpendicular slope use, reciprocal slope function: -(x2 - x1 ) / ( y2 - y1 )
        // curvature is distance between q1 and a; q3 and b;
        //
        //        a              b
        //        |              |
        //        |              |
        // p0-----q1-----q2-----q3-----p1
    
        var q2 = { lat: (p0.lat + p1.lat) / 2, lng: (p0.lng + p1.lng) / 2 };
        var q1 = { lat: (p0.lat + q2.lat) / 2, lng: (p0.lng + q2.lng) / 2 };
        var q3 = { lat: (q2.lat + p1.lat) / 2, lng: (q2.lng + p1.lng) / 2 };
    
        var dLat = p1.lat - p0.lat;
        var dLng = p1.lng - p0.lng;
    
        var curvature = 0.15;
    
        if( p0.lng > p1.lng )
        {
            return {
                a: { lat: q1.lat + ( -dLng * curvature ), lng: q1.lng + ( dLat * curvature ) },
                b: { lat: q3.lat + ( -dLng * curvature ), lng: q3.lng + ( dLat * curvature ) },
                midpoint: q2
            };
        }
        else
        {
            return {
                a: { lat: q1.lat - ( -dLng * curvature ), lng: q1.lng + ( dLat * curvature ) },
                b: { lat: q3.lat - ( -dLng * curvature ), lng: q3.lng + ( dLat * curvature ) },
                midpoint: q2
            };
        }
    }
    
    function getBezier( points, t )
    {
        var ab = larp( points[ 0 ], points[ 1 ], t );
        var bc = larp( points[ 1 ], points[ 2 ], t );
        var cd = larp( points[ 2 ], points[ 3 ], t );
        var abbc = larp( ab, bc, t );
        var bccd = larp( bc, cd, t );
    
        return larp( abbc, bccd, t );
    }
    
    
    function larp( a, b, t )
    {
        return { lat: a.lat + ( b.lat - a.lat ) * t, lng: a.lng + ( b.lng - a.lng ) * t };
    }
    

    
    
    
    
}



