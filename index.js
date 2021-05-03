var DEBUG_MODE = false;
if (DEBUG_MODE) {
    var debugLog = console.log;
    var debugDir = console.dir;
} else {
    var debugLog = function () {
    };
    var debugDir = function () {
    };
}

getCountry = {
    list: {
        AF: 'Afghanistan',
        AX: 'Aland Islands',
        AL: 'Albania',
        DZ: 'Algeria',
        AS: 'American Samoa',
        AD: 'Andorra',
        AO: 'Angola',
        AI: 'Anguilla',
        AQ: 'Antarctica',
        AG: 'Antigua And Barbuda',
        AR: 'Argentina',
        AM: 'Armenia',
        AW: 'Aruba',
        AU: 'Australia',
        AT: 'Austria',
        AZ: 'Azerbaijan',
        BS: 'Bahamas',
        BH: 'Bahrain',
        BD: 'Bangladesh',
        BB: 'Barbados',
        BY: 'Belarus',
        BE: 'Belgium',
        BZ: 'Belize',
        BJ: 'Benin',
        BM: 'Bermuda',
        BT: 'Bhutan',
        BO: 'Bolivia',
        BA: 'Bosnia And Herzegovina',
        BW: 'Botswana',
        BV: 'Bouvet Island',
        BR: 'Brazil',
        IO: 'British Indian Ocean Territory',
        BN: 'Brunei Darussalam',
        BG: 'Bulgaria',
        BF: 'Burkina Faso',
        BI: 'Burundi',
        KH: 'Cambodia',
        CM: 'Cameroon',
        CA: 'Canada',
        CV: 'Cape Verde',
        KY: 'Cayman Islands',
        CF: 'Central African Republic',
        TD: 'Chad',
        CL: 'Chile',
        CN: 'China',
        CX: 'Christmas Island',
        CC: 'Cocos (Keeling) Islands',
        CO: 'Colombia',
        KM: 'Comoros',
        CG: 'Congo',
        CD: 'Congo, Democratic Republic',
        CK: 'Cook Islands',
        CR: 'Costa Rica',
        CI: 'Cote D\'Ivoire',
        HR: 'Croatia',
        CU: 'Cuba',
        CY: 'Cyprus',
        CZ: 'Czech Republic',
        DK: 'Denmark',
        DJ: 'Djibouti',
        DM: 'Dominica',
        DO: 'Dominican Republic',
        EC: 'Ecuador',
        EG: 'Egypt',
        SV: 'El Salvador',
        GQ: 'Equatorial Guinea',
        ER: 'Eritrea',
        EE: 'Estonia',
        ET: 'Ethiopia',
        FK: 'Falkland Islands (Malvinas)',
        FO: 'Faroe Islands',
        FJ: 'Fiji',
        FI: 'Finland',
        FR: 'France',
        GF: 'French Guiana',
        PF: 'French Polynesia',
        TF: 'French Southern Territories',
        GA: 'Gabon',
        GM: 'Gambia',
        GE: 'Georgia',
        DE: 'Germany',
        GH: 'Ghana',
        GI: 'Gibraltar',
        GR: 'Greece',
        GL: 'Greenland',
        GD: 'Grenada',
        GP: 'Guadeloupe',
        GU: 'Guam',
        GT: 'Guatemala',
        GG: 'Guernsey',
        GN: 'Guinea',
        GW: 'Guinea-Bissau',
        GY: 'Guyana',
        HT: 'Haiti',
        HM: 'Heard Island & Mcdonald Islands',
        VA: 'Holy See (Vatican City State)',
        HN: 'Honduras',
        HK: 'Hong Kong',
        HU: 'Hungary',
        IS: 'Iceland',
        IN: 'India',
        ID: 'Indonesia',
        IR: 'Iran, Islamic Republic Of',
        IQ: 'Iraq',
        IE: 'Ireland',
        IM: 'Isle Of Man',
        IL: 'Israel',
        IT: 'Italy',
        JM: 'Jamaica',
        JP: 'Japan',
        JE: 'Jersey',
        JO: 'Jordan',
        KZ: 'Kazakhstan',
        KE: 'Kenya',
        KI: 'Kiribati',
        KR: 'Korea',
        KW: 'Kuwait',
        KG: 'Kyrgyzstan',
        LA: 'Lao People\'s Democratic Republic',
        LV: 'Latvia',
        LB: 'Lebanon',
        LS: 'Lesotho',
        LR: 'Liberia',
        LY: 'Libyan Arab Jamahiriya',
        LI: 'Liechtenstein',
        LT: 'Lithuania',
        LU: 'Luxembourg',
        MO: 'Macao',
        MK: 'Macedonia',
        MG: 'Madagascar',
        MW: 'Malawi',
        MY: 'Malaysia',
        MV: 'Maldives',
        ML: 'Mali',
        MT: 'Malta',
        MH: 'Marshall Islands',
        MQ: 'Martinique',
        MR: 'Mauritania',
        MU: 'Mauritius',
        YT: 'Mayotte',
        MX: 'Mexico',
        FM: 'Micronesia, Federated States Of',
        MD: 'Moldova',
        MC: 'Monaco',
        MN: 'Mongolia',
        ME: 'Montenegro',
        MS: 'Montserrat',
        MA: 'Morocco',
        MZ: 'Mozambique',
        MM: 'Myanmar',
        NA: 'Namibia',
        NR: 'Nauru',
        NP: 'Nepal',
        NL: 'Netherlands',
        AN: 'Netherlands Antilles',
        NC: 'New Caledonia',
        NZ: 'New Zealand',
        NI: 'Nicaragua',
        NE: 'Niger',
        NG: 'Nigeria',
        NU: 'Niue',
        NF: 'Norfolk Island',
        MP: 'Northern Mariana Islands',
        NO: 'Norway',
        OM: 'Oman',
        PK: 'Pakistan',
        PW: 'Palau',
        PS: 'Palestinian Territory, Occupied',
        PA: 'Panama',
        PG: 'Papua New Guinea',
        PY: 'Paraguay',
        PE: 'Peru',
        PH: 'Philippines',
        PN: 'Pitcairn',
        PL: 'Poland',
        PT: 'Portugal',
        PR: 'Puerto Rico',
        QA: 'Qatar',
        RE: 'Reunion',
        RO: 'Romania',
        RU: 'Russian Federation',
        RW: 'Rwanda',
        BL: 'Saint Barthelemy',
        SH: 'Saint Helena',
        KN: 'Saint Kitts And Nevis',
        LC: 'Saint Lucia',
        MF: 'Saint Martin',
        PM: 'Saint Pierre And Miquelon',
        VC: 'Saint Vincent And Grenadines',
        WS: 'Samoa',
        SM: 'San Marino',
        ST: 'Sao Tome And Principe',
        SA: 'Saudi Arabia',
        SN: 'Senegal',
        RS: 'Serbia',
        SC: 'Seychelles',
        SL: 'Sierra Leone',
        SG: 'Singapore',
        SK: 'Slovakia',
        SI: 'Slovenia',
        SB: 'Solomon Islands',
        SO: 'Somalia',
        ZA: 'South Africa',
        GS: 'South Georgia And Sandwich Isl.',
        ES: 'Spain',
        LK: 'Sri Lanka',
        SD: 'Sudan',
        SR: 'Suriname',
        SJ: 'Svalbard And Jan Mayen',
        SZ: 'Swaziland',
        SE: 'Sweden',
        CH: 'Switzerland',
        SY: 'Syrian Arab Republic',
        TW: 'Taiwan',
        TJ: 'Tajikistan',
        TZ: 'Tanzania',
        TH: 'Thailand',
        TL: 'Timor-Leste',
        TG: 'Togo',
        TK: 'Tokelau',
        TO: 'Tonga',
        TT: 'Trinidad And Tobago',
        TN: 'Tunisia',
        TR: 'Turkey',
        TM: 'Turkmenistan',
        TC: 'Turks And Caicos Islands',
        TV: 'Tuvalu',
        UG: 'Uganda',
        UA: 'Ukraine',
        AE: 'United Arab Emirates',
        GB: 'United Kingdom',
        US: 'United States',
        UM: 'United States Outlying Islands',
        UY: 'Uruguay',
        UZ: 'Uzbekistan',
        VU: 'Vanuatu',
        VE: 'Venezuela',
        VN: 'Viet Nam',
        VG: 'Virgin Islands, British',
        VI: 'Virgin Islands, U.S.',
        WF: 'Wallis And Futuna',
        EH: 'Western Sahara',
        YE: 'Yemen',
        ZM: 'Zambia',
        ZW: 'Zimbabwe'
    },
    code: function (cName) {
        for (var key in getCountry.list) {
            if (getCountry.list.hasOwnProperty(key)) {
                //debugLog(key + " -> " + getCountry.list[key]);
                if (getCountry.list[key].includes(cName) || cName.includes(getCountry.list[key])) {
                    return key
                }

            }
        }
    },
    name: function (cCode) {
        return getCountry.list[cCode];
    },
    fromLatLng: function (lat, lng) {
        if (typeof lat == "number" && typeof lng == "number") {
            var jqxhr = $.getJSON('https://maps.googleapis.com/maps/api/geocode/json?latlng=40.456918,-74.458063&key=AIzaSyD5WnxYAwjTSXFtLFW9r0Vl38jTdITHHjo', function (data) {
                debugLog("success");
                debugLog(data)

            });
            return jqxhr
        } else {
            debugLog("Args were not numbers.")
        }
    }
};


function inIframe() {
    try {
        return window.self !== window.top;
    } catch (e) {
        return true;
    }
}

var mapTheme = [
    {
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#87b0cf"
            }
        ]
    },
    {
        "featureType": "administrative.country",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative.country",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "administrative.country",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#fdffff"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "administrative.country",
        "elementType": "labels",
        "stylers": [
            {
                "color": "#f0fffa"
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "administrative.land_parcel",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#64779e"
            }
        ]
    },
    {
        "featureType": "administrative.neighborhood",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#42506c"
            }
        ]
    },
    {
        "featureType": "administrative.province",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#abfdcd"
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative.province",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#fafff9"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "administrative.province",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#f6fffb"
            }
        ]
    },
    {
        "featureType": "administrative.province",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#f6fffb"
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#7ba3c6"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#6f9ba5"
            }
        ]
    },
    {
        "featureType": "poi.attraction",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "poi.attraction",
        "elementType": "labels.icon",
        "stylers": [
            {
                "color": "#b9d1d8"
            }
        ]
    },
    {
        "featureType": "poi.business",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.government",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.medical",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#75a49b"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#525f6a"
            }
        ]
    },
    {
        "featureType": "poi.place_of_worship",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.place_of_worship",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.sports_complex",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#d6e5fe"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#a6bed2"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#686a68"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#b8d2e8"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "weight": 2
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "labels.icon",
        "stylers": [
            {
                "weight": 1.5
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#fefff8"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#f0f4f4"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "visibility": "off"
            }
        ]
    }
];

function initMap() {
    var tptmap;
    var WORLD_BOUNDS = {
        north: 70,
        south: -60,
        west: -166,
        east: 180,
    };
//     function getTheme(themeName) {
//         return $.getJSON(`../json/officeLocationsMap/mapThemes/${themeName}.json`, function(data){
// debugLog("get theme success: ", data)
//         }).fail(function(err){
//             debugLog("map theme error:", err);
//         });
//     }

    //start map
    var minZoomDesktop = 2.1;
    var minZoomMobile = 1.2;
    google.maps.Map.prototype.clearOverlays =
        tptmap = new google.maps.Map(document.getElementById('map'), {
            backgroundColor: "white",
            center: new google.maps.LatLng(0, 0),
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            zoom: 2.4,
            gestureHandling: 'greedy', //allow scoll wheel zoom without holder Ctrl key
            streetViewControl: false,
            mapTypeControl: false,
            mapTypeControlOptions: {
                style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
                position: google.maps.ControlPosition.BOTTOM_LEFT,
                mapTypeIds: ['roadmap', 'terrain']
            },
            restriction: {
                latLngBounds: WORLD_BOUNDS,
                strictBounds: false,
            },
            minZoom: minZoomDesktop,
            maxZoom: 18


        });

    //add style
    //uncomment when CORS is enabled
    //getTheme("blue").done(function(data){
    //debugLog("THE THEME IS", data);
    //var styledMap = new google.maps.StyledMapType(data);
    var styledMap = new google.maps.StyledMapType(mapTheme);
    tptmap.mapTypes.set('map', styledMap);
    tptmap.setMapTypeId('map');


    //});


    //Mobile edits
    // tptmap.addListener('bounds_changed', function() {
    //     var newBounds = this.getBounds();
    //     debugLog("newBounds are:", newBounds);
    // });


    //add location button using third party plugin
    debugLog("tptmap ", tptmap);


    initData(tptmap);


}

function adjustMobileView(map) {
    var minZoomDesktop = 2.1;
    var minZoomMobile = 1.2;
    var screenWidth = jQuery(window).width();
    var desktopAtMinZoom = (map.getZoom() <= minZoomDesktop && map.getZoom() > minZoomMobile);
    var mobileAtMinZoom = map.getZoom() <= minZoomMobile;
    if (screenWidth <= 730) { // PHONE
        map.setOptions({minZoom: minZoomMobile});
        debugLog("CURRENT ZOOM IS: ", map.getZoom());
        if (desktopAtMinZoom) {
            map.setZoom(minZoomMobile)
        }
    } else if (screenWidth > 730 && screenWidth <= 1020) { // TABLET
        map.setOptions({minZoom: minZoomDesktop});
        if (desktopAtMinZoom && map.getCenter().lat() != 35) {
            debugLog('LAT IS: ', map.getCenter().lat());
            map.setCenter({lat: 35, lng: map.getCenter().lng()});

        }
    } else { //DESKTOP
        map.setOptions({minZoom: minZoomDesktop});
    }
}


function initData(tptmap) {
    function closeAllInfoWindows(themarkers) {
        for (var i = 0; i < themarkers.length; i++) { //assuming infoboxes are in some array
            themarkers[i].infoWindow.close();
            themarkers[i].setIcon(themarkers[i].state.icon);
            themarkers[i].active = false;
        }
    }

    google.maps.event.addListener(tptmap, 'click', function (e) {
        debugLog("GENERAL MAP CLICK")
        var m = tptmap.allmarkers;
        debugLog(tptmap.allmarkers)
        debugLog("e", e)
        if (e.hasOwnProperty("placeId")) {
            debugLog("placeId MAP CLICK")
            for (var i = 0; i < m.length; i++) {
                m[i].setIcon(m[i].state.icon);
            }
        }
    });


    const dataSource = "./sample-data/offices.json";
    const fileExtension = dataSource.split('.').pop();
    const dataType = fileExtension
    const isXML = fileExtension === 'xml';
    var gettingLocations = $.ajax({
        cache: false,
        url:dataSource,
        dataType: dataType
    });

    gettingLocations.done(function (data) {
        /* check if data needs to be converted from XML to JSON */
        let json;
        if (isXML) {
            json = xmlToJson(data).webform_submissions.webform_submission;
        } else {
            json = data;
        }

        
        console.log("ALL DATA IS: ", json);

        /* store actual google maps markers AND with original data */
        tptmap.allmarkers = createMarkers(json);
        tptmap.allLocations = json;

        /* create a filter based on only the options (countries, languages, etc.) available in the data */
        initFilterMenu(tptmap.allLocations);
        filterResults();

    });
    gettingLocations.fail(function () {
        console.log('Failed to get locations from server.');
    });


    initLocationSeachBar(tptmap);

    var updateURL = {
        deleteParams: function () {
            if (inIframe()) {
                var msg = {subject: "urlUpdate", body: {"params": "", action: "delete"}}
                parent.postMessage(msg, "*");
            } else { // not in iframe
                window.history.pushState('', '', "");
            }
        },
        setParams: function (marker) {
            var url = new URL(window.location);
            var params = new URLSearchParams(url.search);
            debugLog("MARKER CLICKED!!!!");
            params.set('postId', marker.postId);
            params.set('title', marker.title);
            var pageUrl = '?' + params.toString();
            if (inIframe()) {
                var msg = {subject: "urlUpdate", body: {"params": pageUrl, action: "set"}}
                parent.postMessage(msg, "*");
            } else { // not in iframe
                window.history.pushState('', '', pageUrl);
            }
        },
        recievePopstateListener: function(callback){
            // Create IE + others compatible event handler
            var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
            var eventer = window[eventMethod];
            var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";
            var previousActiveId = "";

// Listen to message from child window
            var mActive = "";
            eventer(messageEvent,function(e) {
                debugLog('child received message!:  ',e.data);

                if(e.data == ""){
                    debugLog("no params send. zoom out.");
                    debugLog("previousActiveId: ", previousActiveId);
                    previousActiveM = tptmap.allmarkers.find(function(obj){
                        return previousActiveId.postId == id;
                    });
                    previousActiveM.infoWindow.closeInfoWindow();
                    closeAllInfoWindows(tptmap.allmarkers);

                    //google.maps.event.trigger(m.infoWindow, 'closeclick', closeInfoWindow);
                } else{
                    var params = new URLSearchParams(e.data);
                    var id = params.get("postId");
                    debugLog("id is: ", id);
                    mActive = tptmap.allmarkers.find(function(obj){
                        return obj.postId == id;
                    });
                    debugLog("marker for this id is: ", mActive);
                    mActive.displayMarkerInfo();
                    previousActiveId = mActive.postId;
                }

            },false);
        }
    };
    updateURL.recievePopstateListener();

    function filterResults(countries = "") { //runs ones after gettingLocations promise done

        if (typeof countries === 'undefined' || countries == "") {
            countries = [];
        }
        //if (typeof category === 'undefined') {
        //    category = [];
        //}
        // if (typeof languages === 'undefined') {
        //     languages = [];
        // }
        //if (typeof coverage === 'undefined') {
        //    coverage = [];
        //}
        //if (typeof subcategories === 'undefined') {
        //    subcategories = [];
        //}

        var allFilters = arguments;
        var filteredLocations = [];
        var _slicedToArray = function () {
            function sliceIterator(arr, i) {
                var _arr = [];
                var _n = true;
                var _d = false;
                var _e = undefined;
                try {
                    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                        _arr.push(_s.value);
                        if (i && _arr.length === i) break;
                    }
                } catch (err) {
                    _d = true;
                    _e = err;
                } finally {
                    try {
                        if (!_n && _i["return"]) _i["return"]();
                    } finally {
                        if (_d) throw _e;
                    }
                }
                return _arr;
            }

            return function (arr, i) {
                if (Array.isArray(arr)) {
                    return arr;
                } else if (Symbol.iterator in Object(arr)) {
                    return sliceIterator(arr, i);
                } else {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance");
                }
            };
        }();

       
        var allLocationsFormated = stringToArray(tptmap.allLocations);
        debugLog(countries);

        //provide filter
        var filters = {
            country: countries
        };
        //--- pick locations that match this filter
        var filteredLocations = allLocationsFormated.filter(function (loc) {
            var filterKey = Object.entries(filters);

            return filterKey.every(function (_ref) {
                var _ref2 = _slicedToArray(_ref, 2);

                var key = _ref2[0];
                var value = _ref2[1];


                if (value.length) {
                    return value.some(function (e) {

                        if (loc[key].length) {
                            if (loc[key].includes(e)) {
                            } else {
                            }
                            return loc[key].includes(e);
                        } else {
                            debugLog("ERROR: Locations was missing attribute: " + key);
                            return false;
                        }
                    });
                } else {
                    return true;
                }
            });
        });

        debugLog("filters that match array are ", filteredLocations);

        //---  change markers on maps based on filtered location
        filterMarkers(tptmap.allmarkers, filteredLocations);

        function filterMarkers(allMarkers, locationsToShow) {
            debugLog("")
            /*var markersToShow = [];*/
            closeAllInfoWindows(allMarkers);

            //get postIds of filtered markers in the form of an array that can be passed into the filter method

            //when no locations match the filter, show all locations
            //This shouldn't really happens, since the filters should be set up so that at least on location is return  at least one result
            if (allMarkers.length < 1 || allMarkers.length == locationsToShow.length) {
                filteredOutMarkers = tptmap.allLocations;
                markersToDisplay = [];
            }

            debugLog("filteredOutMarkers are ", organizeMarkers(allMarkers, locationsToShow).filteredOutMarkers);
            debugLog("markersToDisplay are ", organizeMarkers(allMarkers, locationsToShow).markersToDisplay);

            hideMarkers(organizeMarkers(allMarkers, locationsToShow).filteredOutMarkers);
            showMarkers(organizeMarkers(allMarkers, locationsToShow).markersToDisplay);


            function hideMarkers(somemarkers) {

                debugLog("deleting filtered out markers")
                //Loop through all the markers and remove
                for (var i = 0; i < somemarkers.length; i++) {
                    //debugLog(somemarkers[i].map)
                    somemarkers[i].visible = false;


                }
                somemarkers = [];
                debugLog("done hiding markers")
            } // hideMarkers

            function showMarkers(markers) {
                debugLog("showMarkers markers", markers);

                adjustMapBounds(markers, tptmap)
                debugLog("showing all out markers")
                //Loop through all the markers and remove
                for (var i = 0; i < markers.length; i++) {
                    //debugLog(markers[i].map)
                    if (markers[i].sensitive != true) {
                        markers[i].visible = true;
                    } else {
                        debugLog(`showMarkers() - markers[i] is a sensitive marker`, markers[i])
                        markers[i].visible = false;
                    }


                }
                markers = [];
                debugLog("done showing markers")
            }

            function adjustMapBounds(markers, map) {
                //debugLog("adjustMapBounds!!!!")
                var latlngbounds = new google.maps.LatLngBounds();

                debugLog("latlngbounds, ", latlngbounds);

                debugLog("adjustMapBounds markers",markers )

                for (var i = 0; i < markers.length; i++) {
                    var data = markers[i];
                    // debugLog("data", data);
                    // debugLog("data.position.lat()", data.position.lat());
                    var myLatlng = new google.maps.LatLng(data.position.lat(), data.position.lng());


                    //Extend the new bounds to fit all markers
                    latlngbounds.extend(myLatlng);
                }
                debugLog("NEW BOUNDS SHOULD BE:", latlngbounds);

                //NOTE: latlngbounds property names change. Instead on relaying on property names, use prop locations
                var NS = latlngbounds[Object.keys(latlngbounds)[0]];
                var EW = latlngbounds[Object.keys(latlngbounds)[1]];

                debugLog("NS", NS);
                debugLog("EW", EW);

                var north = NS[Object.keys(NS)[0]];
                var south = NS[Object.keys(NS)[1]];
                var east = EW[Object.keys(EW)[0]];
                var west = EW[Object.keys(EW)[1]];

                debugLog('north', 'south', 'east', 'west');
                debugLog(north, south, east, west);


                var restriction = {
                    east: east,
                    west: west
                };
                // var restriction = {
                //     east: map.restriction.latLngBounds.Ta.g,
                //     west: map.restriction.latLngBounds.Ta.i
                // }


                var newVertical = {
                    center: latlngbounds.getCenter().lng(),
                    west: restriction.west,
                    east: restriction.east
                };


                debugLog("restriction.east ", restriction.east);
                debugLog("restriction.west ", restriction.west);
                debugLog("newVertical ", newVertical);

                //Making sure that the map does not try to pan over the pacific ocean (Ex. for a view of the United States and Japan), stays without map bounds
                if (newVertical.center < restriction.east && newVertical.center > restriction.west && (newVertical.west < newVertical.east)) {
                    //Center map and adjust Zoom based on the position of all markers.
                    map.fitBounds(latlngbounds);
                    map.setCenter(latlngbounds.getCenter());


                    if (map.getZoom() > 15) {
                        map.setZoom(15);
                    }
                } else {
                    debugLog("PREVENTED PAN OVER Pacific");
                    //just show full map
                    // map.setCenter(new google.maps.LatLng(0, 0));
                    // map.fitBounds(map.restriction.latLngBounds)

                    map.fitBounds(latlngbounds);
                    map.setCenter(latlngbounds.getCenter());

                    if (map.getZoom() > 15) {
                        map.setZoom(15);
                    }
                }


            }


        } //filterMarkers() END
        function getFilterObj(locationsToShow) {
            var filters = {
                postId: []
            }
            //place all postIds for locationsToShow in array
            for (var i = 0; i < locationsToShow.length; i++) {
                filters.postId.push(locationsToShow[i].postId)
            }
            return filters
        }

        function organizeMarkers(allmarks, locationsToShow) {
            var filters = getFilterObj(locationsToShow);
            // debugLog("ACTUAL FILTER IS ", filters);
            var markersToDisplay = [];
            var filteredOutMarkers = [];

            filters.postId.forEach(function (filteredPostID, i) {
                // debugLog("filteredPostID is: ", filteredPostID);
                // debugLog("filter post index is: ", i);
                // debugLog("allmarks", allmarks);
                allmarks.forEach(function (marker, ii) {
                    if (marker.postId == filteredPostID) {
                        markersToDisplay.push(marker);
                    } else {
                        filteredOutMarkers.push(marker);
                    }
                })
            });

            return {
                markersToDisplay: markersToDisplay,
                filteredOutMarkers: filteredOutMarkers
            }
        }

        postToDash(filteredLocations, tptmap.allmarkers);


        tptmap.addListener('idle', function () {
            debugLog("IDLEEEEEEEEE");
            //reposting after every idle since this function currently has a sort built in. (markers don't need to be sorted)
            debugLog("filteredLocations: ", filteredLocations, "allmarkers", tptmap.allmarkers);
            postToDash(filteredLocations, tptmap.allmarkers);
        });

        //requestLocation();


        function stringToArray(locations) {
            var allLocationsFormated = [];
            for (var i = 0; i < locations.length; i++) {
                var alocation = locations[i];
                //debugLog(alocation)

                if (alocation.languages.constructor.name === 'String') {
                    var languagesArr = alocation.languages.split('<br />');

                    alocation.languages = languagesArr;
                }
                if (alocation.languages.constructor.name === 'String') {
                    var categoryArr = alocation.category.split('<br />');

                    alocation.category = categoryArr;
                }

                if (alocation.languages.constructor.name === 'String') {ß
                    var coverageArr = alocation.coverage.split('<br />');

                    alocation.coverage = coverageArr;
                }

                
                allLocationsFormated.push(alocation);
            }
            console.log("allLocationsFormated: ", allLocationsFormated)
            return allLocationsFormated;

        }


        return filteredLocations;

    } //filterResults

    //check if data provided is valid (is a string, not an empty string)
    //if valid data, attaches provided label
    function checkData(dataNode, label) {

        if (!label) {
            label = "";
        }

        if (typeof dataNode == 'string' && dataNode.length > 5) {
            return label + dataNode;
        } else {
            return "";
        }
    }

    var markers = [];


    function createMarkers(locations) {

        debugLog("all current markers are", markers)

        if (markers == null) {
            var markers = [];
        }


        const icon = {
            path: "M-20,0a20,20 0 1,0 40,0a20,20 0 1,0 -40,0",
            strokeColor: 'white',
            strokeWeight: 1.5,
            fillColor: '#e15301',
            fillOpacity: .7,
            anchor: new google.maps.Point(0, 0),
            scale: 0.25
        }
        const iconHover = {

            path: "M-20,0a20,20 0 1,0 40,0a20,20 0 1,0 -40,0",
            strokeColor: 'white',
            strokeWeight: 1.5,
            fillColor: '#fc5f05',
            fillOpacity: .8,
            anchor: new google.maps.Point(0, 0),
            scale: 0.37
        };
        const iconActive = "https://basecamp.transperfect.com/images/selectMarkerDark.png";
        //OR Add image instead
        var markerActive = new google.maps.Marker({
            position: this.position,
            map: tptmap,
            visibility: false,
            clickable: false,
            icon: {
                url: iconActive
            }
        });

        debugLog("ALL LOCATIONS ARE", locations);


        for (var i = 0; i < locations.length; i++) {


            var location = locations[i];

            //EXPLANATION
            //We don't know the users location as the page is loading,
            //and we don't wont to hide all locations until the users responds to the geolocation prompt,
            //THUS, all marks will be created and displayed, and sensitive locations will only be hidden we are sure of the users location.

            //See explanation above
            // if (countryLimiter.currentCountry.isLimited()) {
            //
            //     debugLog("CURRENT COUNTRY IS LIMITED. HIDDING:", countryLimiter.limitedCountries.sensitiveLoctions);
            // } else {
            //     debugLog("CURRENT COUNTRY NOT LIMITED:");
            // }

            debugLog(location);

            var LatLng = {
                lat: parseFloat(location.latitude),
                lng: parseFloat(location.longitude)
            };

            //initial creation of all markers

            markers[i] = new google.maps.Marker({
                position: LatLng,
                icon: icon,
                map: tptmap,
                title: location.title,
                postId: location.postId,
                state: {
                    icon: icon,
                    iconHover: iconHover,
                    markerActive: markerActive,
                    imgActive: iconActive
                },
                labelContent: "3",
                labelClass: "label", // the CSS class for the label
                labelInBackground: false,

                country: location.country
            });
            //don't show ANY sensitiveLoctions/sensitive locations user location is resolved

            if (countryLimiter.isSensitive(markers[i]) == true) {
                debugLog(markers[i], "is sensitive");
                markers[i].sensitive = true;
                markers[i].visible = false;
            } else {
                markers[i].sensitive = false;
                markers[i].visible = false;
            }

            function formatMulti(brands) {
                if (brands.includes(", ")) {
                    brands = brands.replace(/\, /g, ",\r\n<br>");
                }
                return brands
            }

            //info window template
            var contentString = '<div id="bg_map">' +
                '<div class="allText" style="display:flex;">' +
                '<div id="loc_addy">' +
                '<h2 id="loc_title" class="firstHeading">' + formatMulti(checkData(locations[i].branding)) + '</h2>' +
                '<div id="idbody">' +
                '<img alt="' + checkData(locations[i].title) + '" src="' + checkData(locations[i].image) + '">' +
                '<div class="locinfo" style="margin-bottom:10px;font-size: 17px;font-family: \'Arial\';">' +
                '<div id="addy">' +
                checkData(locations[i].address) + '<br>' +
                checkData(locations[i].country) +
                '</div>' +// addy end
                '<div id="contactDetails">' +
                '<p><a href="tel:' + checkData(locations[i].phone) + '" style="font-size: 17px;font-family: \'Arial\';">' + checkData(locations[i].phone, "<i class=\"fa fa-phone\" aria-hidden=\"true\"></i>") + '</a></p>' +
                '<p><a href="mailto:' + checkData(locations[i].email) + '" style="font-size: 17px;font-family: \'Arial\';">' + checkData(locations[i].email, "<i class=\"fa fa-envelope\" aria-hidden=\"true\"></i>") + '</a></p>' +
                '</div>' + // contactDetails
                '</div>' + // locinfo end
                '</div>' +// idbody end
                '</div>' + // loc_addy
                '<div>' + // allText
                '<div id="directions"><a target="_blank" href="' + checkData(locations[i]['google-map-link']) + '" style="font-size: 17px;font-family: \'Arial\';">Directions<i style="" class="fa fa-chevron-right" aria-hidden=\"true\"></i></a></div>' +
                '</div>'; // bg_map

            // <span class="heading">Tel: </span>


            //attachSecretMessage(marker[i], mapdata[i].Address + "<br>" + mapdata[i]["Google-Map-Link"]);

            attachSecretMessage(markers[i], contentString);


        }


        function attachSecretMessage(marker, secretMessage) { //Also adding event listeners

            //set infowindow properties for this marker
            var infowindow = new google.maps.InfoWindow({
                content: secretMessage,
                maxWidth: "500px",
                pixelOffset: google.maps.Size(10, 10),
                disableAutoPan: true
                //disableAutoPan: true

            });

            marker.infoWindow = infowindow;

            //set click event for this marker


            //Does nothing since location items are removed and reappened after every 'idle' event
            //instead, function definitions for marker events will be added as properties of each marker, so when all markers are passed to postToDash()
            //they will not have to me rewritten
            //$('[data-postid="' + marker.postId + '"]').on("click", displayMarker)




            marker.__proto__.displayMarkerInfo = function () {
                debugLog("METHOD!!!!")

                $('[data-postid="' + this.postId + '"]').addClass("hoverActive");
                debugLog("this is", this)


                //unselect all other markers
                closeAllInfoWindows(markers)
                this.active = true;

                //save current map bounds and zoom
                var bounds = tptmap.getBounds();
                var center = tptmap.getCenter();
                var zoom = tptmap.getZoom();
                tptmap.prevPosition = {
                    bounds: bounds,
                    center: center,
                    zoom: zoom
                }


                debugLog("tptmap in displayMarkerInfo is", tptmap);


                debugLog("marker.getPosition() is ", this.getPosition());
                tptmap.setZoom(15);

                //zoom to point
                //tptmap.setCenter(this.getPosition());
                /*CENTER INFO WINDOW ON MOBILE FOR */
                tptmap.setCenter(this.position.lat(), this.position.lng());
                debugLog("marker is ", this);

                //change image
                this.setIcon(marker.state.imgActive);

                //open infowindow
                this.infoWindow.open(this.get('map'), this);


                debugLog("closeclick for displayMarkerInfo");
                debugLog(this.infoWindow);
                debugLog(this);
                //pan settings check
                if (this.infoWindow.disableAutoPan == true) {
                    //custom autoPan
                    debugLog("custom autopan for mobile");
                    var divHeightOfTheMap = document.getElementById('map').clientHeight;
                    var offSetFromBottom = 10;
                    tptmap.setCenter(this.getPosition());
                    var calcdistance = -(divHeightOfTheMap / 2 - offSetFromBottom);
                    debugLog("calcdistance is: ", calcdistance);

                    //tptmap.panBy(0, -(divHeightOfTheMap / 2 - offSetFromBottom));
                    debugLog("go to MOBILE: ", this.position.lat(), 100);
                    tptmap.panTo({lat: this.position.lat(), lng: this.position.lng()});

                    if (window.innerWidth > 450) {
                        tptmap.panBy(0, calcdistance);
                    } else {
                        tptmap.panBy(0, calcdistance + 15);
                    }
                    //tptmap.panBy(0, 120);
                } else {
                    tptmap.panTo(this.getPosition());
                    debugLog("go to: ", this.getPosition())
                }


            }; // displayMarkerInfo // END

            marker.addListener('click', marker.displayMarkerInfo);

            marker.addListener('click', function(){
                updateURL.setParams(marker)
            });

            //secret message attached

            marker.__proto__.hideMarkerInfo = function () {
                debugLog("hideMarkerInfo for infowindow");
                debugLog("marker is", marker);
                debugLog("infowindow is ", marker.infoWindow);
                marker.setIcon(marker.state.icon);
                marker.active = false;

                //simple zoom out
                /*if (m.map.getZoom() > 13) {
                    m.map.setZoom(13);
                }*/

                //Return to provious map view before marker was clicked
                debugLog("tptmap in hideMarkerInfo is", tptmap);
                //tptmap.fitBounds(tptmap.prevPosition.bounds);

                //if previous mpa position was on another marker, just zoom out of the current markers position
                if (tptmap.prevPosition.zoom > 5) {
                    tptmap.setZoom(7);

                } else { //go to previous position and zoom
                    tptmap.setCenter(tptmap.prevPosition.center);
                    tptmap.setZoom(tptmap.prevPosition.zoom);
                }
                // then, remove the infowindows name from the array
            }; // hideMarkerInfo() END
            marker.infoWindow.__proto__.closeInfoWindow = function() {
                debugLog("CLOSING ALL FOR: ", marker);
                debugLog("marker.infoWindow.__proto__.closeInfoWindow: ", marker.infoWindow.__proto__.closeInfoWindow);
                marker.hideMarkerInfo();
                marker.infoWindow.close();
                marker.active = false;
                marker.state.markerActive.setVisible(false);
            };
            google.maps.event.addListener(marker.infoWindow, 'closeclick', marker.infoWindow.closeInfoWindow);
            google.maps.event.addListener(marker.infoWindow, 'closeclick', updateURL.deleteParams);

            //close infowindow on click elsewhere (not just on another marker)



            marker.__proto__.showMouseOver = function () {
                if (this.active != true) {
                    debugLog("hovered");
                    debugLog(this);
                    //change icon
                    this.setIcon(iconHover);

                    marker.state.markerActive.setVisible(true);
                    marker.state.markerActive.bindTo("position", this);

                    debugLog(this.postId);
                    $('[data-postid="' + this.postId + '"]').addClass("hoverActive");
                    debugLog("HOVER ITEM is: ", $('[data-postid="' + this.postId + '"]'));
                }
            };
            marker.__proto__.showMouseOut = function () {
                if (this.active != true) {
                    debugLog("out");
                    //change marker
                    this.setIcon(icon);

                    //OR remove added image instead
                    marker.state.markerActive.setVisible(false);
                }
                $('[data-postid="' + this.postId + '"]').removeClass("hoverActive");
                debugLog("HOVER ITEM is: ", $('[data-postid="' + this.postId + '"]'));
            };
            marker.__proto__.highlightDash = function () {
                if (this.active == true) {
                    var relatedDashItem = $('[data-postid="' + this.postId + '"]');
                    var relatedDashItemJS = document.querySelector('[data-postid="' + this.postId + '"]')
                    debugLog("relatedDashItem is: ", relatedDashItem);
                    debugLog("relatedDashItemJS is: ", relatedDashItemJS);
                    relatedDashItem.addClass("hoverActiveStrong");
                }
            };
            marker.addListener('mouseout', marker.showMouseOut);
            marker.addListener('mouseover', marker.showMouseOver);
            marker.addListener('click', marker.highlightDash);

        } //attachSecretMessage END

        debugLog("ALL MARKERS", markers);
        return markers;
    } //createMarkers END

    function postToDash(data, allmarkers = tptmap.allmarkers, maxNumOfItems) {

        //debugLog("data is ", data);

        if (!data.length) {
            $("#sideDash .items").empty();
            var noResultsMsg = "<div id='noResultsMsg'><span>No locations match your filter. :(</span></div>";
            $("#sideDash .items").append(noResultsMsg);
            return false;
        }
        var zoomlvl = tptmap.getZoom();

        debugLog("zooomlvl is", zoomlvl);
        if (zoomlvl < 4 && $("#filterBadge").html() == "") {
            //when map is very zoomed our AND when no filter is applied, just show 3 main HQs
            var hqLocations = filterHqs(data);
            debugLog("hqLocations FAR", hqLocations)
            var dashItems = createDashItems(hqLocations); // creates obj {distance, htmlOut, marker}
            debugLog("dashItems FAR", dashItems);
            publishDashItems(dashItems, maxNumOfItems);
        } else {
            //show markers by distance
            var dashItems = createDashItems(data); // creates obj {distance, htmlOut, marker}
            debugLog("dashItems", dashItems);
            var sortedDashItems = sortDashItemsByDistance(dashItems); //by distance from center of map
            publishDashItems(sortedDashItems, maxNumOfItems);
        }

        /** adjust marker sizes depending on zoom **/

        if (zoomlvl >= 18) {
            for (var i = 0; i < allmarkers.length; i++) { //assuming infoboxes are in some array
                var m = allmarkers[i];
                // debugLog("M is:",m);
                if (m.hasOwnProperty("state")) {
                    debugLog("small close")
                    allmarkers[i].state.icon.scale = 0.42;
                    allmarkers[i].state.iconHover.scale = 0.54
                    if (allmarkers[i].active == false) {
                        allmarkers[i].setIcon(allmarkers[i].state.icon);
                    }

                }
            }
        } else if (zoomlvl > 5 && zoomlvl < 18) {
            //bigger
            for (var i = 0; i < allmarkers.length; i++) { //assuming infoboxes are in some array
                var m = allmarkers[i];
                // debugLog("M is:",m);
                if (m.hasOwnProperty("state")) {

                    debugLog("BIGGER mid")
                    allmarkers[i].state.icon.scale = 0.38;
                    allmarkers[i].state.iconHover.scale = 0.50
                    //refresh icon
                    // var state = m.state;
                    if (allmarkers[i].active == false) {
                        allmarkers[i].setIcon(allmarkers[i].state.icon);
                    }

                }
            }
        } else if (zoomlvl <= 5) {
            //original
            for (var i = 0; i < allmarkers.length; i++) { //assuming infoboxes are in some array
                var m = allmarkers[i];
                // debugLog("M is:",m);
                if (m.hasOwnProperty("state")) {
                    debugLog("small far")
                    allmarkers[i].state.icon.scale = 0.25;
                    allmarkers[i].state.iconHover.scale = 0.37
                    if (allmarkers[i].active == false) {
                        allmarkers[i].setIcon(allmarkers[i].state.icon);
                    }
                }
            }
        }
        debugLog("ICON SIZES ARE:", allmarkers[0].state.icon.scale,
            m.state.iconHover.scale)

        function createDashItems(flData) { // also add hover and click event listeners with markers with corresponding postid

            var hq = {
                list: [
                    {postId: 161, city: 'New York', zone: "Global"},
                    {postId: 86, city: 'London', zone: "Europe"},
                    {postId: 71, city: 'Hong Kong', zone: "Asia"}
                ],
                isHQ: function (postId) {
                    var isHQ = false;
                    hqItem = "";
                    this.list.forEach(function (prop) {
                        if (prop.postId == postId) {
                            isHQ = true;
                            hqItem = prop;
                        }
                    });
                    return {q: isHQ, hqItem: hqItem};
                }
            };

            var allNumOfItems = flData.length;
            debugLog("flDataaaaaa", flData);
            var dashItems = [];
            for (var i = 0; i < allNumOfItems; i++) {


                var alocation = flData[i];

                // check of the provided location was purposfully  hidden before creating a dash item for it
                var markerLocationMatch = tptmap.allmarkers.find(mar => {
                    return mar.postId === alocation.postId
                });
                if (markerLocationMatch !== undefined) {
                    if (markerLocationMatch.visible == false && markerLocationMatch.sensitive == true) {
                        debugLog(alocation, " matched hidden marker and should be hidden...")
                    } else {
                        //location not hidden
                        //debugLog("Call one: ", alocation, alocation.country);

                        var htmlOut = "<button data-postId='" + alocation.postId + "' class='locationItem'>" +
                            "<span class='locTitle'>" + alocation.title + "<!--<img class=\"flag-icon\" src=\"https://lipis.github.io/flag-icon-css/flags/4x3/sz.svg\">--></span>";
                        var hqCheck = hq.isHQ(alocation.postId)
                        if (hqCheck.q == true) {
                            htmlOut += "<span class='hqFlag'>" + hqCheck.hqItem.zone + " Headquarters </span>";
                        }


                        htmlOut += "<span class='flag-icon flag-icon-" + getCountry.code(alocation.country).toLowerCase() + "'></span>" +
                            "<span>" + checkData(alocation.phone, "") + "</span>";


                        /* UNCOMMENT TO INCLUDE FORMATED STREET ADDRESS

                        var streetAddress = alocation.address.replace('<div class="webform-long-answer">', '');
                        var streetOnly = /^.*(?=(\<))/i;
                        streetAddress = streetAddress.match(streetOnly);
                        streetAddress = streetAddress.toString().replace(",<", "");
                        if (streetAddress != null) {
                            streetAddress = streetAddress.toString().replace("<", "");
                            htmlOut += streetAddress + "<br>";
                        } else {
                            debugLog("Could not parse street address from full address provided:", alocation.address)
                        }

                        UNCOMMENT TO INCLUDE FORMATED STREET ADDRESS*/

                        function checkProvince(prov) {
                            if (prov != null && prov != " ") {
                                return prov + ", "
                            } else {
                                debugLog("No province included.");
                                return ""
                            }
                        }

                        htmlOut += "<span class='' style='font-family: \"Gotham\", sans-serif;font-weight: 300;'>" + checkProvince(alocation.province) + alocation.country + "</span>";

                        var distance = getDistance(alocation.latitude, alocation.longitude, tptmap.getCenter().lat(), tptmap.getCenter().lng());
                        if (zoomlvl > 3) {
                            if (distance < 3) {//3 miles
                                //htmlOut += 0 + " miles away" + "";
                                htmlOut += "Less than a mile away" + "";
                            } else {
                                htmlOut += distance + " miles away" + "";
                            }
                        } else {
                            //don't add distance
                        }


                        htmlOut += "</button>";


                        //Attach to respective marker


                        /*var dashItemMarker = allmarkers.filter(function(e) {

                            return e.postId == alocation.postId
                        })
                        dashItemMarker = dashItemMarker[0];
                        debugLog("dashItemMarker is for", alocation, " is ", dashItemMarker)*/
                        var $htmlOut = $(htmlOut);
                        for (var x = 0; x < allmarkers.length; x++) {

                            //debugLog("allmarkers[x] ", allmarkers[x])

                            if (allmarkers[x].postId == alocation.postId) {

                                //attachToMarker($htmlOut, allmarkers[x]);
                                (function (index) {

                                    //debugLog("index is!!!!!!!!!!!!!!!!!!", index)
                                    // do your stuff here
                                    // use the index variable - it is assigned to the value of 'i'
                                    // that was passed in during the loop iteration.
                                    $htmlOut.on("click", function () {

                                        //debugLog("el, marker", allmarkers[index])
                                        //debugLog(dashItemMarker.displayMarkerInfo())
                                        updateURL.setParams(allmarkers[index]);
                                        allmarkers[index].displayMarkerInfo()
                                    });
                                    $htmlOut.on("mouseover", function () {
                                        //debugLog("MOUSEOVER connected to marker", allmarkers[index]);
                                        allmarkers[index].showMouseOver();
                                    });
                                    $htmlOut.on("mouseout", function () {
                                        //debugLog("MOUSECOUT connected to marker", allmarkers[index]);
                                        allmarkers[index].showMouseOut();
                                    })
                                })(x);
                            } else {

                            }
                        }

                        function attachToMarker(el, marker) {
                            // -- Attaching event listeners
                            debugLog("el, marker", el, marker);
                            el.on("click", function () {

                                debugLog("el, marker", el, marker);

                                //debugLog(dashItemMarker.displayMarkerInfo())
                                marker.displayMarkerInfo();
                                updateURL.setParams(marker);
                            });
                            el.mouseover(function () {
                                debugLog("MOUSEOVER connected to marker", marker);
                                marker.showMouseOver();
                            });
                            el.mouseout(function () {
                                debugLog("MOUSECOUT connected to marker", marker);
                                marker.showMouseOut();
                            });
                            return el
                        }

                        //debugLog(htmlOut);
                        //debugLog(location.city + " is " + distance + " miles away from the center of the map.")
                        dashItems.push({
                            distance: distance,
                            $htmlOut: $htmlOut
                        });

                        //$("#sideDash").append(htmlOut);









                    }
                }


            } // for loop end
            //debugLog(dashItems);
            return dashItems;
        }

    } // postToDash() END
    function sortDashItemsByDistance(dashItems) {
        var sortedDashItems = dashItems.sort(compare);
        //debugLog(sortedDashItems);

        return sortedDashItems


        function compare(a, b) {
            // Use toUpperCase() to ignore character casing
            const distanceA = a.distance;
            const distanceB = b.distance;

            let comparison = 0;
            if (distanceA < distanceB) {
                comparison = 1;
            } else if (distanceA > distanceB) {
                comparison = -1;
            }
            //descending
            //return comparison;
            //asc
            return comparison * -1;
        }
    }

    //https://www.geodatasource.com/developers/javascript
    function getDistance(lat1, lon1, lat2, lon2, unit) {
        if ((lat1 == lat2) && (lon1 == lon2)) {
            return 0;
        } else {
            var radlat1 = Math.PI * lat1 / 180;
            var radlat2 = Math.PI * lat2 / 180;
            var theta = lon1 - lon2;
            var radtheta = Math.PI * theta / 180;
            var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
            if (dist > 1) {
                dist = 1;
            }
            dist = Math.acos(dist);
            dist = dist * 180 / Math.PI;
            dist = dist * 60 * 1.1515;
            if (unit == "K") {
                dist = dist * 1.609344
            }
            if (unit == "N") {
                dist = dist * 0.8684
            }

            var rounded = Math.round(dist * 10) / 10;
            return rounded;
        }
    }

    function getNearestMarker(latlang1, allMarkers) {
        var mbyd = [];
        allMarkers.forEach(function (marker, i) {
            //debugLog("latlang1.lat, latlang1.lng, marker.position.lat(), marker.position.lng():    ", latlang1.lat(), latlang1.lng(), marker.position.lat(), marker.position.lng());
            //only get closest VISIBLE markers
            if (marker.visible == true) {
                mbyd.push({
                    marker: marker,
                    distance: getDistance(latlang1.lat(), latlang1.lng(), marker.position.lat(), marker.position.lng())
                });
            }

        });
        mbyd = sortDashItemsByDistance(mbyd);
        debugLog(mbyd);


        var latlang2 = mbyd[0].marker;

        return latlang2
    }

    var nOfUpdates = 0;

    function publishDashItems(sortedDashItems, maxNumOfItems) {
        debugLog("POST TO DASH!!!!!!!!")

        //debugLog("publishing dash items")
        $("#sideDash .items").empty();
        if (!maxNumOfItems) {
            maxNumOfItems = 6;
        }

        if (maxNumOfItems > sortedDashItems.length) {
            maxNumOfItems = sortedDashItems.length;
        }
        debugLog("sortedDashItems inside publishDashItems", sortedDashItems);
        for (var i = 0; i < maxNumOfItems; i++) {

            var htmlout = sortedDashItems[i].$htmlOut;

            $("#sideDash .items").append(htmlout);
        }
        nOfUpdates++;
        if (nOfUpdates == 1) {
            mapFullyLoaded();
        }
    }

    function mapFullyLoaded() {
        clientLocationManager.geolocation();
        loadQpDetails(tptmap);
        adjustMobileView(tptmap);
        window.addEventListener('resize', function () {
            adjustMobileView(tptmap)
        });
        removeOverlay();
        debugLog("DONE.")
        debugLog("clientLocationManager.position: ", clientLocationManager.position)

    }

    function loadQpDetails() {

        var params = new URLSearchParams(window.location.search);
        var postId = params.get('postId');
        var title = params.get('title');
        tptmap.allmarkers.forEach(function (m, i) {
            if (m.postId == postId || m.title == title) {
                google.maps.event.trigger(m, 'click');
            }
        })
    }

    var countryLimiter = {
        sensitiveMarkers: [],
        isSensitive: function (marker) {
            var markerCountry = marker.country;
            var markercc = getCountry.code(markerCountry);
            var markerIsSensitive = false;
            countryLimiter.limitedCountries.forEach(function (val, i) {
                // debugLog("val", val);
                val.sensitiveLoctions.forEach(function (sens, ii) {
                    // debugLog("inv", sens);
                    // debugLog("if inv:", sens, " == markercc:", markercc);
                    if (sens == markercc) {
                        countryLimiter.sensitiveMarkers.push(marker);
                        markerIsSensitive = true;
                    }
                });
            });
            return markerIsSensitive
        },
        currentCountry: {
            isLimited: function (cc = "") {
                if (cc == "") {
                    cc = clientLocationManager.position;
                }
                debugLog("isLimited()? cc is:", cc);
                var limited = false;
                for (let i = 0; i < countryLimiter.limitedCountries.length; i++) {
                    //check if current country is included in limited countries list
                    debugLog("cc ", cc, "limitedCountries[i].name: ", countryLimiter.limitedCountries[i].name);
                    if (cc == countryLimiter.limitedCountries[i].name) {
                        limited = true;
                    }
                }
                return limited
            }
        },
        limitedCountries: [
            {
                name: "IR", //Iran
                sensitiveLoctions: ["IL"]
            },
            //debugging
            // {
            //     name: "US",
            //     sensitiveLoctions: ["CN", "RU"]
            // },
            // {
            //     name: "FR",
            //     sensitiveLoctions: ["UK", "JP"]
            // }
        ],
        showNonMatchSensitives: function (cc = "") {
            //var cc = "IR"; //debugging
            var toShow = countryLimiter.limitedCountries.filter(function (a) {
                return a.name !== cc
            });
            var sensitiveLocReleased = [];
            debugLog("toShow", toShow);
            toShow.forEach(function (prop, i) {
                debugLog("prop: ", prop);
                sensitiveLocReleased = sensitiveLocReleased.concat(prop.sensitiveLoctions);
                debugLog("sensitiveLocReleased: ", sensitiveLocReleased);
            });
            debugLog("sensitiveLocReleased: ", sensitiveLocReleased);
            //loop through all markers, if marker country code matches invisible's ccs, hide it
            debugLog("INIT() showing sensitiveLoctions exepct for", cc)
            for (let ii = 0; ii < tptmap.allmarkers.length; ii++) {
                //debugLog("tptmap.allmarkers[ii]: ", tptmap.allmarkers[ii])
                var mcc = getCountry.code(tptmap.allmarkers[ii].country);
                if (sensitiveLocReleased.includes(mcc)) {
                    debugLog("Releasing marker: ", tptmap.allmarkers[ii]);
                    tptmap.allmarkers[ii].visible = true;
                    //repaint
                    postToDash(tptmap.allLocations, tptmap.allmarkers);
                }
            }


        },
        init: function (cc = "") {
            if (countryLimiter.currentCountry.isLimited(cc)) {
                debugLog("client's current position ");
                countryLimiter.showNonMatchSensitives(cc);
            } else {
                countryLimiter.showNonMatchSensitives();
            }
        }
    };


    var clientLocationManager = {

        position: "No location found",
        locSuccess: function (position) {
            var geoloccontrol = new klokantech.GeolocationControl(tptmap, 10);
            clientLocationManager.position = position;
            let lat = position.coords.latitude;
            let lng = position.coords.longitude;
            getCountry.fromLatLng(lat, lng).done(function (data) {
                debugLog(data);
                var ads = data.results[0].address_components;
                ads.forEach(function (prop, i) {
                    if (prop.types.includes("country")) {
                        debugLog('CC from GEO', prop.short_name)
                        clientLocationManager.position = prop.short_name;
                        countryLimiter.init(prop.short_name);
                    }
                    //debugLog(prop, i)
                });

            });

        },
        locErr: function (x = "previously denied") {
            debugLog("ERR: location prompt refused");

            debugLog("navigator.geolocation.getCurrentPosition error: ", x);
            clientLocationManager.getiplocation().done(function (data) {
                debugLog("ALL iplocation data: ", data);
                clientLocationManager.position = data.country_code;
                debugLog('CC from IP', data.country_code)
                //countryLimiter.currentCountry.name = data.country_code;
                countryLimiter.init(data.country_code);
            });

        },
        geolocation: function () {
            var result;
            if (navigator.geolocation) {
                if (navigator.permissions) {
                    navigator.permissions.query({name: 'geolocation'})
                        .then(function (permissionStatus) {
                            if (permissionStatus.state == 'denied') {
                                //don't show location button

                                result = "Location previously denied, or location services are off";
                                clientLocationManager.locErr();
                                debugLog(result);

                            } else if (permissionStatus.state == 'prompt') {
                                debugLog("prompting client");
                                setTimeout(function () {
                                    navigator.geolocation.getCurrentPosition(clientLocationManager.locSuccess, clientLocationManager.locErr, {enableHighAccuracy: true});

                                }, 5000);
                            } else if (permissionStatus.state == 'granted') {
                                //show location button
                                debugLog("location granted");
                                //plugin will trigger idle event every 5 seconds in order to keep client's location updated

                                navigator.geolocation.getCurrentPosition(clientLocationManager.locSuccess);
                            }
                            permissionStatus.onchange = function () {
                                debugLog('geolocation permission state has changed to ', clientLocationManager.state);
                                if (this.state == 'prompt' || this.state == 'denied') {
                                    //hide client's location button if client turns off location services while using application
                                    debugLog("Location status has been changed to: ", this.state);
                                }
                            };
                        });
                } else { //Oops! navigator.permissions API currently not supported in Safari or IE
                    setTimeout(function () {
                        navigator.geolocation.getCurrentPosition(clientLocationManager.locSuccess, clientLocationManager.locErr, {enableHighAccuracy: true});
                    }, 5000);
                }
            } else {
                debugLog("Geolocation is not supported by this browser.");
            }
            //return result;
        },
        getiplocation: function () { // returns promise that can be accessed with .success()
            debugLog("Getting location of IP address");
            var jqxhr = $.getJSON('https://json.geoiplookup.io/api?callback=?', function (data) {
                debugLog("success");
            });
            return jqxhr
        }

    };

    function filterHqs(locations) {
        //get NYC-Broadway, London, Hong Kong
        var hqIds = [161, 86, 71];
        var hqlocations = [];

        locations.forEach(function (v, i) {
            var hq = hqIds.some(function (loc) {
                return v.postId == loc
            });
            if (hq == true) {
                hqlocations.push(v);
            }
        });
        debugLog("hqlocations", hqlocations);
        //temp
        return hqlocations.reverse()
    }

    function removeOverlay() {
        $("#sideDash .loaderOverlay").hide();
        $("#mapContainer .loaderOverlay").fadeOut(300);


    }

    function requestLocation() {
        $("#map > div > div > div:nth-child(9)").click();
    }

    function initLocationSeachBar(map) {
        var pac_input = document.getElementById('pac-input');
        var options = {
            //types: ['(cities)']
        };
        var autocomplete = new google.maps.places.Autocomplete(pac_input, options);

        autocomplete.addListener('place_changed', function () {
            map.searchedLocationMarker = zoomToAddress();
        });

        $("#submitBtn").on("click", function () {
            if ($(this).hasClass("close")) {
                debugLog("#submitBtn.close!!!!!!!!!!!!!!")
                if (map.hasOwnProperty("searchedLocationMarker")) {
                    removeSearchedMarker(true, map.searchedLocationMarker);
                }
                //map.setZoom(map.getZoom()-1);
            }
        });

        function zoomToAddress() {
            closeAllInfoWindows(map.allmarkers)

            if (map.hasOwnProperty("searchedLocationMarker")) {
                removeSearchedMarker(false, map.searchedLocationMarker);
            }
            // Get the place details from the autocomplete object.
            var place = autocomplete.getPlace();
            debugLog("place ", place);
            if (place.hasOwnProperty('geometry')) {
                $("#pac-input").removeClass("err");
                var myLatLng = {
                    lat: place.geometry.location.lat(),
                    lng: place.geometry.location.lng()
                };
                debugLog("myLatLng", myLatLng);
                var marker = new google.maps.Marker({
                    position: myLatLng,
                    map: map,
                    title: place.formatted_address
                });
                debugLog("map is ", map);
                debugLog("marker is ", marker);
                debugLog("marker.getPosition() is ", marker.getPosition());
                /** show to searched marker AND nearest marker **/
                var latlngbounds = new google.maps.LatLngBounds();
                var searchedLatlng = new google.maps.LatLng(marker.position.lat(), marker.position.lng());

                debugLog("searchedLatlng: ", searchedLatlng)

                latlngbounds.extend(searchedLatlng);
                var nearestMarker = getNearestMarker(searchedLatlng, map.allmarkers);
                var nearestMarkerLatLng = new google.maps.LatLng(nearestMarker.position.lat(), nearestMarker.position.lng());
                latlngbounds.extend(nearestMarkerLatLng);
                map.fitBounds(latlngbounds);
                map.setCenter(latlngbounds.getCenter());


                if (window.innerWidth > 1020) {
                    map.setZoom(map.getZoom() - 1);
                }
                /** zoom to searched marker  **/
                //map.setCenter(myLatLng);
                //map.setZoom(15);
                //map.panTo(marker.getPosition());


                //change image
                //marker.setIcon("https://launchpad.transperfect.com/images/selectMarker.png");
                debugLog(marker);

                //when user moves away from searched location, marker is removed and search is cleared

                var removeSearchOnDrag = map.addListener('drag', function () {
                    if (map.hasOwnProperty("searchedLocationMarker")) {
                        debugLog("MAP DRAG REMOVE MARKER")
                        removeSearchedMarker(true, map.searchedLocationMarker);
                    }
                });

                return marker
            } else {
                $("#pac-input").addClass("err");
                debugLog("Could not get location based on user search.")
                return false
            }

        }

    }

    //input for macbook pro touch bar
    $("#pac-input").on("keyup change blur input", function (e) {
        debugLog("KEY UP!!!!!!: ", e)
        if ($("#pac-input").val() == "") {
            $("#submitBtn").removeClass("close");
            //debugLog("SHOW SEARCH!!!!!!")
        } else {
            $("#submitBtn").addClass("close");
            //debugLog("SHOW CLOSE!!!!!!")
        }
    });

    function removeSearchedMarker(deleteField, m) {
        if (m != "") {
            m.setMap(null);
        }
        if (deleteField == true) {
            $("#submitBtn").removeClass("close");
            jQuery("#pac-input").val("");
        }

        m = "";
    }

    function initFilterMenu(allLocations) {
        // var numOfFiltersOrig defined already
        function arraysEqual(_arr1, _arr2) {
            debugLog("_arr1", _arr1);
            debugLog("_arr2", _arr2);
            if (!Array.isArray(_arr1) || !Array.isArray(_arr2) || _arr1.length !== _arr2.length) {
                return false;
            }
            var arr1 = _arr1.concat().sort();
            var arr2 = _arr2.concat().sort();
            for (var i = 0; i < arr1.length; i++) {
                if (arr1[i] !== arr2[i]) {
                    return false;
                }
            }
            return true;
        }

        function getSelected($originalFilters) {
            var selectedOptions = [];

            $originalFilters.each(function (i, el) {
                //debugLog(el)
                selectedOptions.push(el.value)
            });

            return selectedOptions
        }

        if (window.innerWidth <= 1020) {
            var lockScroll = true;
        } else {
            var lockScroll = false;
        }

        var filterMenu = $("#filterBtn").animatedModal({

            animatedIn: 'zoomIn',
            animatedOut: 'zoomOut',
            animationDuration: '0.30s',
            lockScroll: lockScroll,
            beforeOpen: function () {
                if (!$("#filterSubmit").hasClass("enabled")) {
                    $originalFilters = $("#filterContiner select option:selected");
                    originalFilters = getSelected($originalFilters);
                }


                //debugLog("originalFilters are: ", originalFilters)

                //just because modal is closed doesn't mean filter has been submitted
                //$("#filterSubmit").removeClass("enabled");
            },
            beforeClose: function (e) {
                var s = $(".SumoSelect.open")
                //editLabel(s)
            },
            afterClose: function () {

            }
        });

        function adjustFilterMenuMobile() {
            if (window.innerWidth <= 1020) {
                filterMenu.setLockScroll(false);
                debugLog("filterMenu.setLockScroll(false);", filterMenu.setLockScroll(false))
            } else {
                filterMenu.setLockScroll(true);
            }
        }

        function adjustAutoPan(markers = tptmap.allmarkers) {
            var disableAutoPan = false;
            if (window.innerWidth >= 451 && window.innerWidth < 1020) { //PC
                disableAutoPan = true;
            } else if (window.innerWidth < 451) { // tablet
                disableAutoPan = true;
            } else { // phone
                disableAutoPan = false;
            }
            debugLog("adjustAutoPan markers", markers);
            markers.forEach(function (el, i) {
                el.infoWindow.disableAutoPan = disableAutoPan;
                //el.infoWindow.setOptions({disableAutoPan: disableAutoPan})
            })
        }

        //Call these functions once on app start and once every resize
        adjustFilterMenuMobile();
        adjustAutoPan(tptmap.allmarkers);
        window.addEventListener('resize', function () {
            adjustFilterMenuMobile();
            adjustAutoPan(tptmap.allmarkers);
        });
        //$(window).resize();
        debugLog("filterMenu!!!!!!!!!!!", filterMenu);

        function updateFilterBadge(numoffilters) {
            if (arguments.length == 0) {
                debugLog("ARGUMENTS PASTED TO updateFilterBadge()", arguments);

                var numoffilters = $('#countries option:selected').length;

            } else if (arguments.length > 1) {
                debugLog("ERROR: updateFilterBadge() was called with too many arguments.")
            }

            if (Number.isInteger(numoffilters)) {
                debugLog("NUMBER OF FILTERS: ", numoffilters);
                if (numoffilters != 0) {
                    $("#filterBadge").html(numoffilters);
                    $("#filterBadge").css('display', 'flex');
                    $("#filterIcon").css('display', 'none');
                } else {
                    $("#filterBadge").html("");
                    $("#filterBadge").css('display', 'none');
                    $("#filterIcon").css('display', 'inline');
                }
            } else {
                debugLog("ERROR: Could not get number of filters for badge update.")
            }


        }

        $("#removeFiltersBtn").click(function () {
            //countriesSelect.unSelectAll();

            updateURL.deleteParams()

            if ($('.opt').length) {
                /** DESKTOP **/
                $('select#countries')[0].sumo.unSelectAll();
            } else {
                /** MOBILE **/
                var elements = document.getElementById("countries").options;
                for (var i = 0; i < elements.length; i++) {
                    if (elements[i].selected)
                        elements[i].selected = false;
                }
                $(".SelectBox").attr("tiitle", "");
                $(".SelectBox > span").addClass("placeholder");
                $(".SelectBox > span").html("");
            }
            // $('select#languages')[0].sumo.unSelectAll();
            // $('select#coverage')[0].sumo.unSelectAll();
            // $('select#category')[0].sumo.unSelectAll();
            // $('.subcategories.active select.subcategory')[0].sumo.unSelectAll();
            filterResults([], [], [], [], []);
            originalFilters = [];
            updateFilterBadge(0);
            $("#filterSubmit").removeClass("enabled");
            filterMenu.closeModal();
        });

        //track if tilers changed/ filter submit button
        //filter carrot, checkmark, and submit controls

        // close modal menu if esc key is used
        $(document).keyup(function (ev) {
            if (ev.keyCode == 27) {
                filterMenu.closeModal();
            }
        });
        //close modal on close btn click
        $(".close-animatedModal").click(function () {
            //debugLog("modal closed");
            //filterMenu.close();
        });
        createCountryFilterList(allLocations);

        function createCountryFilterList(locArr) {
            //generate countries filter list
            var uniqueCountries = [];
            $.each(locArr, function (i, el) {
                if ($.inArray(el.country, uniqueCountries) === -1) {
                    uniqueCountries.push(el.country);
                    //debugLog("Call two: ", el, el.country);
                }
            });
            var uniqueCountriesSorted = uniqueCountries.sort(function (a, b) {
                if (a < b) return -1;
                else if (a > b) return 1;
                return 0;
            });
            debugLog("uniqueCountriesSorted:", uniqueCountriesSorted);
            $.each(uniqueCountriesSorted, function (i, el) {
                var option = "<option value='" + getCountry.code(el) + "'>" + el + "</option>";
                $("select#countries").append(option);

            });
            initSumo();
        }

        function initSumo() {
            /** modal filter content **/
                //https://github.com/HemantNegi/jquery.sumoselect
            var countriesSelect = $('select#countries').SumoSelect({
                    //placeholder: '<span class="placeHolderTitle">Countries</span>',  //"Select Here" is default
                    placeholder: '',
                    csvDispCount: 3,
                    captionFormat: '{0} Selected',
                    captionFormatAllSelected: 'All {0} selected ðŸ¤”',
                    floatWidth: 400,
                    forceCustomRendering: false,
                    nativeOnDevice: ['Android', 'BlackBerry', 'iPhone', 'iPad', 'iPod', 'Opera Mini', 'IEMobile', 'Silk'],
                    outputAsCSV: false,
                    csvSepChar: ',',
                    okCancelInMulti: true, // custom
                    isClickAwayOk: true,
                    triggerChangeCombined: true,
                    selectAll: true, // custom
                    search: false,
                    searchText: 'Search...',
                    noMatch: 'No matches for "{0}"',
                    prefix: '',
                    locale: ['OK', 'Cancel', 'Select All'],
                    up: false,
                    showTitle: true
                });
            var categorySelect = $('select#category').SumoSelect({
                //placeholder: '<span class="placeHolderTitle">Primary Category</span>',  //"Select Here" is default
                placeholder: '',
                csvDispCount: 3,
                captionFormat: '{0} Selected',
                captionFormatAllSelected: '{0} all selected!',
                floatWidth: 400,
                forceCustomRendering: false,
                nativeOnDevice: ['Android', 'BlackBerry', 'iPhone', 'iPad', 'iPod', 'Opera Mini', 'IEMobile', 'Silk'],
                outputAsCSV: false,
                csvSepChar: ',',
                okCancelInMulti: true, // custom
                isClickAwayOk: true,
                triggerChangeCombined: true,
                selectAll: true, // custom
                search: false,
                searchText: 'Search...',
                noMatch: 'No matches for "{0}"',
                prefix: '',
                locale: ['OK', 'Cancel', 'Select All'],
                up: false,
                showTitle: false
            });

            var languagesSelect = $('select#languages').SumoSelect({
                //placeholder: '<span class="placeHolderTitle">Languages</span>', //"Select Here" is default
                placeholder: '',
                csvDispCount: 3,
                captionFormat: '{0} Selected',
                captionFormatAllSelected: '{0} all selected!',
                floatWidth: 400,
                forceCustomRendering: false,
                nativeOnDevice: ['Android', 'BlackBerry', 'iPhone', 'iPad', 'iPod', 'Opera Mini', 'IEMobile', 'Silk'],
                outputAsCSV: false,
                csvSepChar: ',',
                okCancelInMulti: true, // custom
                isClickAwayOk: true,
                triggerChangeCombined: true,
                selectAll: true, // custom
                search: false,
                searchText: 'Search...',
                noMatch: 'No matches for "{0}"',
                prefix: '',
                locale: ['OK', 'Cancel', 'Select All'],
                up: false,
                showTitle: false
            });
            var coverageSelect = $('select#coverage').SumoSelect({
                //placeholder: '<span class="placeHolderTitle">Coverage</span>', //"Select Here" is default
                placeholder: '',
                csvDispCount: 3,
                captionFormat: '{0} Selected',
                captionFormatAllSelected: '{0} all selected!',
                floatWidth: 400,
                forceCustomRendering: false,
                nativeOnDevice: ['Android', 'BlackBerry', 'iPhone', 'iPad', 'iPod', 'Opera Mini', 'IEMobile', 'Silk'],
                outputAsCSV: false,
                csvSepChar: ',',
                okCancelInMulti: true, // custom
                isClickAwayOk: true,
                triggerChangeCombined: true,
                selectAll: true, // custom
                search: false,
                searchText: 'Search...',
                noMatch: 'No matches for "{0}"',
                prefix: '',
                locale: ['OK', 'Cancel', 'Select All'],
                up: false,
                showTitle: false
            });
            $('#filterContiner > div.selectContain.subcategories > div:nth-child(2) select').SumoSelect({
                //placeholder: '<span class="placeHolderTitle">Primary Category</span>',  //"Select Here" is default
                placeholder: '',
                csvDispCount: 3,
                captionFormat: '{0} Selected',
                captionFormatAllSelected: '{0} all selected!',
                floatWidth: 400,
                forceCustomRendering: false,
                nativeOnDevice: ['Android', 'BlackBerry', 'iPhone', 'iPad', 'iPod', 'Opera Mini', 'IEMobile', 'Silk'],
                outputAsCSV: false,
                csvSepChar: ',',
                okCancelInMulti: true, // custom
                isClickAwayOk: true,
                triggerChangeCombined: true,
                selectAll: true, // custom
                search: false,
                searchText: 'Search...',
                noMatch: 'No matches for "{0}"',
                prefix: '',
                locale: ['OK', 'Cancel', 'Select All'],
                up: false,
                showTitle: false
            });
            $('#filterContiner select').on('sumo:opening', function (sumo) {
                debugLog("SUMO OPEN");
                setWidth();
            });

            //set dropdown list equal to list
            function setWidth() {
                var dropWidth = $(".subcategories .SumoSelect > .optWrapper").parent().parent().parent().width();
                debugLog("dropWidth is: ", dropWidth);
                $(".subcategories .SumoSelect > .optWrapper").width(dropWidth);
            }

            $("#filterContiner > div > p > label > i").replaceWith("<i class='la la-angle-down'></i>");
            //conditional filters tested after dropdown close
            $('#filterContiner select').on('sumo:closed change', function (evt) {
                debugLog("sumo:closed");

                debugLog("dropdown closed is: ", $(evt.currentTarget));

                //change sumo to evt for change event for mobile
                // if($(sumo.currentTarget)[0].id == "category"){
                //     checkSubCat(sumo);
                // }
                addColon(evt);


            });

            function addColon(e) {


                debugLog("sumoinst inside AddColon: ", e);
                var $label = $(e.target).parent().parent().find(".filterLabel");
                if (!$label.hasClass(".selectContain")) {
                    //$label = $(sumoinst.target).parent().parent().parent().find(".filterLabel");
                }


                if (e.currentTarget.selectedOptions.length) {
                    $label.addClass("full");
                } else {
                    $label.removeClass("full");
                }
            }

            //$('select#countries, select#category, select#languages, select#coverage').on('sumo:closed', function(sumo) {})
            function checkSubCat(sumoinst) {
                // Add custom label
                debugLog("sumo ", sumoinst);
                debugLog("this ", this);

                var filterId = sumoinst.currentTarget.id;


                var selectedOptions = $('option:selected', $("#" + filterId));
                var subCatClass = selectedOptions[0].value;
                debugLog("subCatClass is: ", subCatClass);

                if (subCatClass.length) {
                    $(".subcategories").addClass("active");
                    $(".selectContain.subcategories .SumoSelect .subcategory:not(#" + subCatClass + ")").parent().removeClass("active");
                    $(".selectContain.subcategories .SumoSelect #" + subCatClass + ".subcategory").parent().addClass("active");
                } else {
                    $(".subcategories").removeClass("active");
                }

                debugLog("selectedOptions is: ", selectedOptions[0].value)

            }

            if ($('.select-all, .opt, .btnCancel').length) {
                /**DESKTOP ONLY (mobile browsers only have built-in dropdown menus that will bypass sumo dropdown, thus click event on sumo elements will not be registered)**/
                $('.select-all, .opt, .btnCancel').on('click', function (sumo) {
                    if ($(this).hasClass("selected") || $(this).hasClass("partial")) {
                        //currentNumOfFilters++;
                        debugLog("you selected something");
                    } else {
                        //currentNumOfFilters--;
                        debugLog("you've unselected something");
                    }
                    var $currentFilters = $("#filterContiner select option:selected");
                    var currentFilters = getSelected($currentFilters);
                    determineFilterSubmit(currentFilters);
                    //debugLog("originalFilters are :", originalFilters)
                    //debugLog("currentFilters are: ", currentFilters);
                });
            } else {
                /** MOBLIE **/
                $('select#countries').change(function () {
                    debugLog(this);
                    debugLog($(this)[0]);
                    var selected1 = [];
                    $('#countries').find('option').each(function (i, el) {
                        if ($('#countries')[0].options[i].selected) {
                            selected1.push($('#countries')[0].options[i].value);
                        }
                    });
                    debugLog(selected1);
                    determineFilterSubmit(selected1);

                });
            }


            function determineFilterSubmit(currentFilters) {
                var filterIsTheSame = arraysEqual(originalFilters, currentFilters);

                //debugLog("filterIsTheSame is", filterIsTheSame)
                debugLog("CURRENT FILTERS ARE:", currentFilters);


                //currentFilters.length == 0
                //Allowing user to apply filter on 0 selections if different from previous filter set

                if (filterIsTheSame) {
                    if ($("#filterSubmit").hasClass("enabled")) {
                        $("#filterSubmit").removeClass("enabled");
                    }
                } else {
                    if (!$("#filterSubmit").hasClass("enabled")) {
                        $("#filterSubmit").addClass("enabled");
                    }
                    var numOfFiltersNew = currentFilters.length;

                    //only updating filter menu after filter submit
                    //updateFilterBadge(numOfFiltersNew);
                }
            }


            function capitalizeFirstLetter(string) {
                return string.charAt(0).toUpperCase() + string.slice(1);
            }


            $("#filterSubmit").click(function () {

                var fCountries = getValueText($("select#countries option:selected"));
                // var fCoverage = getValueText($("select#coverage option:selected"));
                // var fLanguages = getValueText($("select#languages option:selected"));
                // var fCategory = getValueText($("select#category option:selected"));
                // var fSubCategories = getValueText($('.subcategories.active select.subcategory option:selected'));


                // filterResults(fCountries, fLanguages, fCoverage, fCategory, fSubCategories);
                debugLog("fCountries is: ", fCountries)
                filterResults(fCountries);

                updateFilterBadge();
                $("#filterSubmit").removeClass("enabled");
                filterMenu.closeModal();
            });


            // NOT USED: since Drupal doesn't provide the option to display the machine name/value of the selected options in Views, just the text that is displayed for each option
            function getValues(options) {
                var values = [];
                options.each(function (index, option) {
                    values.push(option.value);
                });
                return values
            }

            //using this instead
            function getValueText(options) {
                var valuesText = [];
                options.each(function (index, option) {
                    valuesText.push(option.text);
                });
                return valuesText
            }

        }
    }

} //initData