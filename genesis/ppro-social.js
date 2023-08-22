 //var public_spreadsheet_url = '1YXULwUnKuzWEAz_ap6hmw9pTw4-j1cvMG-l2V778edI'; function init() { Tabletop.init({ key: public_spreadsheet_url, callback: showInfo, simpleSheet: true }); } function showInfo(data) { var x; for (x = 0; x < data.length; x++) { document.getElementById("PProfile").innerHTML += '<a href=' + data[x].PLink + ' target="_parent">' + '<div class="item1">' + '<div align="center" >' + '<img src=' + data[x].ImageLink + '>' + '<b>' + '<div class="Name">' + data[x].Name + '</b>' + '<b>' + '<div class="Bio">' + data[x].Bio + '</b>' + '</div>' + '</div>' + '</div>' + '</div>' + '</a>'; } } init();
 $(document).ready( function(){
    var url1 = "https://script.google.com/macros/s/";
    var url2 = "AKfycbyh_N5MPDhyZGl8AHn1qT-VLC0Urz0sy_S3RA2kkN6shjf0Qky75gVwey9UDai_Njpo";
    var url = url1+url2+"/exec"+ "?action=readso";
    $.getJSON(url, function(json) {
        for (var a=[],i=0;i<json.records.length-1;++i) a[i]=i;
        function shuffle(array) {
          var tmp, current, top = array.length;
          if(top) while(--top) {
            current = Math.floor(Math.random() * (top + 1));
            tmp = array[current];
            array[current] = array[top];
            array[top] = tmp;
          }
          return array;
        }
        a = shuffle(a);
        var i;
        for(var d=0;d<a.length;d++){
          i = a[d];
            document.getElementById("PProfile").innerHTML +='<a href=' +json.records[i].PLink +
             ' target="_blank">' + '<div class="item1">' + '<div align="center" >' + 
             '<img src=' + json.records[i].ImageLink + '>' + '<b>' + '<div class="Name">' + 
             json.records[i].Name + '</b>' + '<b>' + '<div class="Bio">' + 
             json.records[i].Bio + '</b>' + '</div>' + '</div>' + '</div>' + '</div>' + '</a>'; 
            
           
        }
        var element = document.getElementById("divso");
        element.classList.remove("animback");
        element.classList.add("procontain");
    });
    });