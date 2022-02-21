document.getElementById('fvlbtn').addEventListener('click',showfeatvidlist);
function showfeatvidlist(){
$('#fevidlist').empty();
$('#youvidlist').empty();
$('#vimvidlist').empty();
document.getElementById("rrlist").style.display = "none";
    document.getElementById("falseback").style.display = "block";
    var url1 = "https://script.google.com/macros/s/";
    var url2 = "AKfycby-4wgYlabbP6rh-itYVubNoFuWdLEcMBVAEHwDTj34cby78capT7zIB3edV7DAmKof8A";
    var url = url1+url2+"/exec"+ "?action=readac";
    $.getJSON(url, function(json) {
        
        for (var y=0; y<=json.records.length-2;y++){
        //  console.log((y+1)+". "+json.records[y].YvidPlayList );
      //document.getElementById("fevidlist").innerHTML += '<iframe src="' + json.records[y].YvidPlayList +
     //  '" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen ></iframe><br>'; 
      document.getElementById("fevidlist").innerHTML += "<div class='fvlist'>"+ (y+1)+". <input onclick='showyouvid(this)' value="+json.records[y].YvidPlayList +"></div>"  ;
      document.getElementById("falseback").style.display = "none";
      document.getElementById("fevidlist").style.display = "block";
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;

        }
     
       
    });
}

function showyouvid(label){
  var vid = label.value;
  document.getElementById('showvidfrm').src= vid;
  document.getElementById('frameholder').style.display = "block";
  
}

dragElement(document.getElementById("frameholder"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id)) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id).onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.right =  "10px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

document.getElementById('rrbtn').addEventListener('click',showrrvidlist);

function showrrvidlist(){
  $('#fevidlist').empty();
  $('#youvidlist').empty();
  $('#vimvidlist').empty();
  document.getElementById("fevidlist").style.display = "none";
  document.getElementById("rrlist").style.display = "block";
  document.getElementById("falseback").style.display = "block";
  var url1 = "https://script.google.com/macros/s/";
  var url2 = "AKfycbx4mGl-HnIkYx58Ki_V4IFkBM27n6KU21Ed1iAV5xhZ03TdnzWP6OyxLa1rvZu65GrS";
  var url = url1+url2+"/exec"+ "?action=readac";
  $.getJSON(url, function(json) {
    for (var y=0; y<=json.records.length-2;y++){
     // console.log(json.records[y].Yvid);
      document.getElementById("youvidlist").innerHTML += "<div class='fvlist'>"+ (y+1)+". <input onclick='showyouvid(this)' value="+json.records[y].Yvid +"></div>"  ;
      document.getElementById("falseback").style.display = "none";
    } 
});
    var urlv1 = "https://script.google.com/macros/s/";
    var urlv2 = "AKfycbx4mGl-HnIkYx58Ki_V4IFkBM27n6KU21Ed1iAV5xhZ03TdnzWP6OyxLa1rvZu65GrS";
    var urlv = urlv1+urlv2+"/exec"+ "?action=read";
    $.getJSON(urlv, function(json) {
      for (var v=0; v<=json.records.length-2;v++){
        document.getElementById("vimvidlist").innerHTML += "<div class='fvlist'>"+ (v+1)+". <input onclick='showyouvid(this)' value="+json.records[v].VPList +"></div>"  ;
        document.getElementById("falseback").style.display = "none";
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }  
    });
   
}
$(document).ready( function(){

  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;

});

bizbotfrm.addEventListener('submit',(event)=>{
  document.getElementById("falseback").style.display = "block";
  var btop =  escape($('#bbotpass').val());
  var ur1='https://script.google.com/macros/s/';
  var ur2='AKfycbwsHJqstolIo9zWuXuwKkkkT-DnPdtjtWe4canWhLrzPJjD0dSduhkWaqf-TCx5yarH';
  var url= ur1+ur2+'/exec'+'?callback=ctrlqbtop&bbotpass='+btop+'&action=btpd';
  var request = jQuery.ajax({
    crossDomain: true,
    url: url,
    method: "GET",
    dataType: "jsonp"
  });
});

function ctrlqbtop(e){
  var outp = e.records;
  if(outp =="Pass found!"){
   document.getElementById("falseback").style.display = "none";
   document.getElementById('btncontainer').style.display="block";
   document.getElementById('signbot').style.display="none";
 }
else{
  document.getElementById("falseback").style.display = "none";
}
 }