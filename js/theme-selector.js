var thisscript = document.currentScript;
var url = (window.location != window.parent.location)
    ? document.referrer.split( '/' )[2]
    : document.location.hostname;
var domainparts = url.split(".");
var sld = (domainparts[0] == "www" ? domainparts[1] : domainparts[0]);

//var theme = "https://basecamp.transperfect.com/css/officeLocationsMap/themes/"+sld+".css";
var theme = `./style/themes/${sld}.css`;
let hhh = "hi"
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        console.log("theme is: ",theme)
        var themeLink = document.getElementById("themeFile");
        console.log("LINK TAG IS:", themeLink)
        themeLink.setAttribute("href",theme);
        console.log("theme",theme)
    } else if(this.readyState == 4 && this.status == 0) {
        console.log("ERROR: CORS is probably blocked. Details: ", this);
        console.log("Get theme anyway.")
        var themeLink = document.getElementById("themeFile");
        themeLink.setAttribute("href",theme);
        console.log("theme",theme)
        console.log("LINK TAG IS:", themeLink)
    } else if(this.readyState == 4){
        console.log("theme is: ",theme);
        console.log("ERROR - Could not get site's map theme (It's likely missing from the themes directory) - original.css remains - details: ", this);
        // This is where you run code if the server returns any errors
    }
};
xhttp.open("GET", theme, true);
xhttp.send();