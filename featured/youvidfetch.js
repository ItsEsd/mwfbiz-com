 //var public_spreadsheet_url = '1v42djCVhGVN9Ie5WT1_LWy4GHVUy4_fzzYYxv_RtyKg'; function init() { document.getElementById("GURUTwo").style.background = "url('../image/bandwgif_globe.gif')"; Tabletop.init({ key: public_spreadsheet_url, callback: showInfo, simpleSheet: true }); document.getElementById("myProgress").style.display = "block"; } function showInfo(data) { var y = Math.floor((Math.random() * data.length) + 0); for (prop in data[y]) { document.getElementById("GURUTwo").innerHTML = '<iframe src="' + data[y].YvidPlayList + '" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen ></iframe>'; } } init(); var i = 0; function move() { if (i == 0) { i = 1; var elem = document.getElementById("myBar"); var width = 2; var id = setInterval(frame, 40); function frame() { if (width >= 100) { clearInterval(id); i = 0; } else { width++; elem.style.width = width + "%"; } } } } if (jQuery('iframe[src*="https://www.youtube.com/embed/"],iframe[src*="https://player.vimeo.com/"],iframe[src*="https://player.vimeo.com/"]').length > 0) { jQuery('iframe[src*="https://www.youtube.com/embed/"],iframe[src*="https://player.vimeo.com/"]').wrap("<div class='iframe-parent-class'></div>"); jQuery('iframe[src*="https://www.youtube.com/embed/"],iframe[src*="https://player.vimeo.com/"]').each(function(index) { var windows = jQuery(window); var iframeWrap = jQuery(this).parent(); var iframe = jQuery(this); var iframeHeight = iframe.outerHeight(); var iframeElement = iframe.get(0); windows.on('scroll', function() { var windowScrollTop = windows.scrollTop(); var iframeBottom = iframeWrap.offset().top - iframeHeight; if ((windowScrollTop > iframeBottom)) { iframeWrap.height(iframeHeight); iframe.addClass('stuck'); jQuery(".scrolldown").css({ "display": "none" }); } else { iframeWrap.height('auto'); iframe.removeClass('stuck'); } }); }); } function openNav() { document.getElementById("myNav").style.width = "100%"; } function closeNav() { document.getElementById("myNav").style.width = "0%"; }
 $(document).ready( function(){
    document.getElementById("myProgress").style.display = "block";
    var url1 = "https://script.google.com/macros/s/";
    var url2 = "AKfycby-4wgYlabbP6rh-itYVubNoFuWdLEcMBVAEHwDTj34cby78capT7zIB3edV7DAmKof8A";
    var url = url1+url2+"/exec"+ "?action=readac";
    $.getJSON(url, function(json) {
        var y = Math.floor((Math.random() * json.records.length) + 0);

        document.getElementById("GURUTwo").innerHTML = '<iframe src="' + json.records[y].YvidPlayList +
         '" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen ></iframe>'; 
           
        
    });

  
    if (jQuery('iframe[src*="https://www.youtube.com/embed/"],iframe[src*="https://player.vimeo.com/"],iframe[src*="https://player.vimeo.com/"]').length > 0) {
      jQuery('iframe[src*="https://www.youtube.com/embed/"],iframe[src*="https://player.vimeo.com/"]').wrap("<div class='iframe-parent-class'></div>");
      jQuery('iframe[src*="https://www.youtube.com/embed/"],iframe[src*="https://player.vimeo.com/"]').each(function(index) {
        var windows = jQuery(window);
        var iframeWrap = jQuery(this).parent();
        var iframe = jQuery(this);
        var iframeHeight = iframe.outerHeight();
        var iframeElement = iframe.get(0);
        windows.on('scroll', function() {
          var windowScrollTop = windows.scrollTop();
          var iframeBottom = iframeWrap.offset().top - iframeHeight;
          if ((windowScrollTop > iframeBottom)) {
            iframeWrap.height(iframeHeight);
            iframe.addClass('stuck');
            jQuery(".scrolldown").css({
              "display": "none"
            });
          } else {
            iframeWrap.height('auto');
            iframe.removeClass('stuck');
          }
        });
      });
    }
    
   

    });

    function init(){
        document.getElementById("myProgress").style.display = "block";
        var url1 = "https://script.google.com/macros/s/";
        var url2 = "AKfycby-4wgYlabbP6rh-itYVubNoFuWdLEcMBVAEHwDTj34cby78capT7zIB3edV7DAmKof8A";
        var url = url1+url2+"/exec"+ "?action=readac";
        $.getJSON(url, function(json) {
            var y = Math.floor((Math.random() * json.records.length) + 0);
    
            document.getElementById("GURUTwo").innerHTML = '<iframe src="' + json.records[y].YvidPlayList +
             '" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen ></iframe>'; 
               
            
        });
    }

    

    function move() {
      var i = 0;
      if (i == 0) {
        i = 1;
        var elem = document.getElementById("myBar");
        var width = 2;
        var id = setInterval(frame, 40);
    
        function frame() {
          if (width >= 100) {
            clearInterval(id);
            i = 0;
          } else {
            width++;
            elem.style.width = width + "%";
          }
        }
      }
    }
    function openNav() {
        document.getElementById("myNav").style.width = "100%";
      }
      
      function closeNav() {
        document.getElementById("myNav").style.width = "0%";
      }