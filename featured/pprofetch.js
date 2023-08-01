//var public_spreadsheet_url = '193yat0JuyLxlhK5l1qwJGh8JbO31LBcG5bnhhpJK48A'; function init() { jQuery("#myBar").empty(); Tabletop.init({ key: public_spreadsheet_url, callback: showInfo, simpleSheet: true }); } function showInfo(data) { var x = Math.floor((Math.random() * data.length) + 0); for (prop in data[x]) { document.getElementById("PProfile").innerHTML = '<div class="Name">' + data[x].Name + '</div>' + '<hr style="width:50%;">' + '<div align="center">' + '<a href=' + data[x].PLink + ' target="_parent">' + '<img src=' + data[x].ImageLink + ' width="70%" class="imgC" >' + '</a>' + '</div>' + '<hr style="width:70%;">' + '<div class="Bio">' + data[x].Guj + '</div>'; } } init();
$(document).ready( function(){
var url1 = "https://script.google.com/macros/s/";
var url2 = "AKfycby-4wgYlabbP6rh-itYVubNoFuWdLEcMBVAEHwDTj34cby78capT7zIB3edV7DAmKof8A";
var url = url1+url2+"/exec"+ "?action=read";
$.getJSON(url, function(json) { 
var x = Math.floor((Math.random() * (json.records.length))); 
if(x===0){x=1;}
document.getElementById("PProfile").innerHTML = '<div class="Name">' + 
json.records[x].Name + '</div>' + '<hr style="width:50%;">' + '<div align="center">' +
'<a href=' + json.records[x].PLink + ' target="_parent">' + '<img src=' + 
json.records[x].ImageLink + ' width="70%" class="imgC" >' + '</a>' + '</div>' + 
'<hr style="width:70%;">' + '<div class="Bio">' + json.records[x].Guj + '</div>';
});
});
window.onscroll = function() {scrollFunctionhead()};
function scrollFunctionhead(){
if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
$('#headtit').slideUp('slow');
} else {
$('#headtit').slideDown('slow');
}
}