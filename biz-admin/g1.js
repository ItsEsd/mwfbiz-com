        document.getElementById("prequote").addEventListener("click", previewQuote);
        function previewQuote() {
          var Quote, a;
          a = document.getElementById("quoteimi_json").value;
          Quote = JSON.parse(a);
          jQuery('#preview_quote').empty();
          var j = 0;
          var maxQ = Quote.Quoteimi.length;
          for (j; j < maxQ; j++) {
            document.getElementById("preview_quote").innerHTML += '<p>' + Quote.Quoteimi[j] + '</p>';
          }
        }document.getElementById("postgif").addEventListener("click", upgifsimi);
        var obdm_miGifsUp = "https://script.google.com/macros/s/AKfycbwysdXDGl8b-JxE_HGJwHDjyF3C7mSMQ1idz0iVhmxs66hpogLqXmnXLV2sf8857ea-/exec";
        function upgifsimi() {
          jQuery("connectUpGifs").empty();
          var upgifs = jQuery("#gifimi_json").val();
          var idpmv = jQuery("#idop").val();
          if (upgifs != 0) {
            var url = obdm_miGifsUp + "?callback=ctrlq&idop=" + idpmv + "&gifimi_json=" + upgifs + "&action=cdfgjdsfgjdsfyiuewkjrnjkfwe87494798247923rewrlewrf-sdfsdgfnsfdsjfy87wyrieuriwiruoer0wrehrnxhfskdfdsfdfsdfsf-ssnsfdsryw8reysecncnsuysifhcsdirywe8riuhkshfsdkfdsfds-fdcnfdfhdskfhiusdyfifhcsdfhiudsyfis";
            var request = jQuery.ajax({
              crossDomain: true,
              url: url,
              method: "GET",
              dataType: "jsonp"
            });
            document.getElementById("connectUpGifs").style.display = "block";
          } else {
            document.getElementById("connectUpGifs").style.display = "none";
          }
          setTimeout(function() {
            jQuery('#connectUpGifs').fadeOut('fast');
          }, 2000);
        }
        document.getElementById("postq").addEventListener("click", upquotesimi);
        var obdm_miQsUp = "https://script.google.com/macros/s/AKfycbwysdXDGl8b-JxE_HGJwHDjyF3C7mSMQ1idz0iVhmxs66hpogLqXmnXLV2sf8857ea-/exec";
        function upquotesimi() {
          jQuery("connectUpQuotes").empty();
          var upqs = jQuery("#quoteimi_json").val();
          var idpmv = jQuery("#idop").val();
          if (upqs != 0) {
            var url = obdm_miQsUp + "?callback=ctrlq&idop=" + idpmv + "&quoteimi_json=" + upqs + "&action=cdkjhdskfhdksfhfkrmderwuewrewr4468735983465o345243s4ed-sfdsfndsfchjfdsfdsnfgcdsfdsfsdfhsryroeyqwirweorihsfchifu874-ingfgfngduyfdgfngfdgifnygifdgfdgfdgdfgdg-nfshdfnsfhsdkfnhdshfxwryhfxnfhhfosr9wru9w-nscfhisdyfisdf";
            var request = jQuery.ajax({
              crossDomain: true,
              url: url,
              method: "GET",
              dataType: "jsonp"
            });
            document.getElementById("connectUpQuotes").style.display = "block";
          } else {
            document.getElementById("connectUpQuotes").style.display = "none";
          }
          setTimeout(function() {
            jQuery('#connectUpQuotes').fadeOut('fast');
          }, 2000);
        }  var coll = document.getElementsByClassName("collapsible");
        var i;
        for (i = 0; i < coll.length; i++) {
          coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.display === "block") {
              content.style.display = "none";
            } else {
              content.style.display = "block";
            }
          });
        }document.getElementById("postn").addEventListener("click", upnewsimi);
        var obdm_miNewsUp = "https://script.google.com/macros/s/AKfycbwysdXDGl8b-JxE_HGJwHDjyF3C7mSMQ1idz0iVhmxs66hpogLqXmnXLV2sf8857ea-/exec";
        function upnewsimi() {
          document.getElementById("loader_n").style.visibility = "visible";
          var upnews = escape(jQuery("#iminews_json").val());
          var idpm = jQuery("#idop").val();
          if (upnews != 0) {
            var url = obdm_miNewsUp + "?callback=ctrlq&idop=" + idpm + "&iminews_json=" + upnews + "&action=chfjfshgjdsfhgdsjfgdsiwuerhker0weyrywirhefe-wryisudfhisudfnhcdfiushrnifhisdfcsdfsf-sfsdiugfncsddsgfndsniusynifnscydsfsdf-sdfynsifhdskfhiudhnfiudsfhisdfnsdfyhisdfhicsdfdsf-dsfnxsifhsdkfhndshfnsdchwyrwr";
            var request = jQuery.ajax({
              crossDomain: true,
              url: url,
              method: "GET",
              dataType: "jsonp"
            });
            document.getElementById("connectUpNews").style.display = "block";
            document.getElementById("loader_n").style.visibility = "hidden";
          } else {
            document.getElementById("loader_n").style.visibility = "visible";
          }
          setTimeout(function() {
            jQuery('#connectUpNews').fadeOut('fast');
          }, 2000); 
        }
        function ctrlq() {}document.getElementById("postv").addEventListener("click", upvidsimi);
        var obdm_miVidsUp = "https://script.google.com/macros/s/AKfycbwysdXDGl8b-JxE_HGJwHDjyF3C7mSMQ1idz0iVhmxs66hpogLqXmnXLV2sf8857ea-/exec";
        function upvidsimi() {
          jQuery("connectUpVids").empty();
          var upvids = escape(jQuery("#youvid_json").val());
          var idpmv = jQuery("#idop").val();
          document.getElementById("loader_v").style.visibility = "visible";
          if (upvids != 0) {
            var url = obdm_miVidsUp + "?callback=ctrlq&idop=" + idpmv + "&youvid_json=" + upvids + "&action=cihkfkfjdhgfdgfdgfdghrrth4y784y4uwhekrerkeirkkdfdsf-fewry478ryesfhdgfjgdsjfgjsdfguy24yrewiyweryuwheksfsdf-we89rw8rishfjdsfgjsdgfdsgfdsfywrfghdfjjdfgfdhkgdfjgljkjfg-dgfdghjkdfhgjdfhgfdhgcnkfghdhdffdog-fdgcfknhfdgjhdfgcndfkghdfg";
            var request = jQuery.ajax({
              crossDomain: true,
              url: url,
              method: "GET",
              dataType: "jsonp"
            });
            document.getElementById("connectUpVids").style.display = "block";
            document.getElementById("loader_v").style.visibility = "hidden";
          } else {
            document.getElementById("loader_v").style.visibility = "visible";
          }
          setTimeout(function() {
            jQuery('#connectUpVids').fadeOut('fast');
          }, 2000);
        }  function enablePreview() {
          var k = document.getElementsByClassName('secvid').value;
          if (k != 0) {
            document.getElementById("previd").disabled = false;
          } else {
            document.getElementById("previd").disabled = true;
          }
        }

        function enablePreviewNews() {
          var k = document.getElementsByClassName('linknews').value;
          if (k != 0) {
            document.getElementById("newspre").disabled = false;
          } else {
            document.getElementById("newspre").disabled = true;
          }
        }document.getElementById("previd").addEventListener("click", previewVid);
        function getId(url) {
          var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
          var match = url.match(regExp);
          if (match && match[2].length == 11) {
            return match[2];
          } else {
            return 'error';
          }
        }function previewVid() {
          var VID, a;
          a = document.getElementById("youvid_json").value;
          VID = JSON.parse(a);
          jQuery('#preview_youv').empty();
          var j = 0;
          var maxTOD = VID.imiYouVid.length;
          var er = JSON.parse(a);
          var error1 = er.imiYouVid[0];
          var error2 = er.imiYouVid[1];
          if (error1 == 'h' && error2 == 't') {
            document.getElementById("preview_youv").innerHTML = "<br><p style='color:red;'>Update or Add One More Video</p><br>";
          } else {
            for (j; j < maxTOD; j++) {
              var link = VID.imiYouVid[j];
              var vidId = getId(link);
              document.getElementById("preview_youv").innerHTML += '<div class="iteam"><div class="embed-responsive embed-responsive-16by9"><iframe width="100%"class="embed-responsive-item" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; autoplay ;picture-in-picture" allowfullscreen src="//www.youtube.com/embed/' + vidId + '" frameborder="0" allowfullscreen></iframe></div></div>';
            }
          }
        }
        jQuery(document).ready(function() {
          var max_vids = 100;
          var wrapper = jQuery(".vid_wrap");
          var add_button = jQuery(".addVid");
          var x = 1;
          jQuery(add_button).on("click", function(e) {
            e.preventDefault();
            if (x < max_vids) {
              x++;
              jQuery(wrapper).append(`<div class="slide"><hr style="border-color:red;border-width:1px;width:40%;"> <div> <input autocomplete="off" name="imiYouVid" class="form-control" id="youvlink" placeholder="Video Link(YouTube)" class="secvid" oninput="enablePreview()" required/></div><a href="#" class="remove_field">Remove</a><br></div>`);
            }
            if (x == max_vids) {
              jQuery("#addv").hide();
            }
            var json_vid = jQuery("#youvid_json").val();
            var ParVid = JSON.parse(json_vid);
            var maxParVid = ParVid.imiYouVid.length;
            var error1v = ParVid.imiYouVid[0];
            var error2v = ParVid.imiYouVid[1];
            if (x >= 2 && error1v != 'h' && error2v != 't') {
              document.getElementById("postv").disabled = false;
            }
          });
          jQuery(wrapper).on("click", ".remove_field", function(e) {
            e.preventDefault();
            jQuery(this).parent('div').remove();
            jQuery("#addv").show();
            x--;
            if (x == 1) {
              document.getElementById("previd").disabled = true;
              document.getElementById("postv").disabled = true;
            }
          });
        }); jQuery(document).ready(function() {
          var max_fields = 7;
          var wrapper = jQuery(".wrapperNews");
          var add_button = jQuery(".add_field_button");
          var x = 1;
          jQuery(add_button).on("click", function(e) {
            e.preventDefault();
            if (x < max_fields) {
              x++;
              jQuery(wrapper).append(`<div class="slide"><hr style="border-color:red;border-width:2px;"> <div> <h5 style="float:left;color:white;">Featured News</h5> <br><br><textarea rows="4" autocomplete="off" type="text" name="newsTitle" class="form-control" placeholder="News Title" required></textarea> <input autocomplete="off" type="url" name="newsLink" oninput="enablePreviewNews()" class="form-control linknews" placeholder="News Link" required /> <input autocomplete="off" type="url" name="newsThumb" class="form-control" placeholder="News Thumbnail" required /> <hr style="border-color:white;"> <div class="contentN1"> <p style="float:right;color:white;">Content News 1</p><textarea rows="4" autocomplete="off" type="text" name="conTitle1" class="form-control" placeholder="Header Content" required></textarea> <input autocomplete="off" type="url" name="conLink1" class="form-control" placeholder="Content News Link" required /> <textarea rows="4" autocomplete="off" type="text" name="conSiteName1" class="form-control" placeholder="Footer Content" required></textarea> </div> <hr style="border-color:white;"><div class="contentN2"> <p style="float:right;color:white;">Content News 2</p><textarea rows="4" autocomplete="off" type="text" name="conTitle2" class="form-control" placeholder="Header Content" required></textarea> <input autocomplete="off" type="url" name="conLink2" class="form-control" placeholder="Content News Link" required /> <textarea rows="4" autocomplete="off" type="text" name="conSiteName2" class="form-control" placeholder="Footer Content" required></textarea></div> </div><a href="#" class="remove_field" style="background-color:#161616">Remove</a><br></div>`);
            }
            if (x == max_fields) {
              jQuery("#addtod").hide();
              document.getElementById("postn").disabled = false;
            }
            var json_news = jQuery("#iminews_json").val();
            var ParNews = JSON.parse(json_news);
            var maxParNews = ParNews.newsTitle.length;
            var error1 = ParNews.newsLink[0];
            var error2 = ParNews.newsLink[1];
            if (x >= 2 && error1 != 'h' && error2 != 't') {
              document.getElementById("postn").disabled = false;
            }
          });
          jQuery(wrapper).on("click", ".remove_field", function(e) {
            e.preventDefault();
            jQuery(this).parent('div').remove();
            jQuery("#addtod").show();
            x--;
            if (x == 1) {
              document.getElementById("newspre").disabled = true;
              document.getElementById("postn").disabled = true;
            }
          })
        });function PreTOD() {
          var TOD, k;
          k = document.getElementById("iminews_json").value;
          TOD = JSON.parse(k);
          jQuery('#test_newsimi').empty();
          var j = 0;
          var maxTOD = TOD.newsTitle.length;
          var error1 = TOD.newsLink[0];
          var error2 = TOD.newsLink[1];
          if (error1 == 'h' && error2 == 't') {
            document.getElementById("test_newsimi").innerHTML = "<br><p style='color:red;'>Update or Add One More News</p><br>";
          } else {
            for (j; j < maxTOD; j++) {
              document.getElementById("test_newsimi").innerHTML += '<div class="iteam-newsz"><div class="wrapTODPre card"><a target="_blank" href="' + TOD.newsLink[j] + '"> <img class="card-img-top cardImg" src="' + TOD.newsThumb[j] + '"> <div class="card-body bg-light text-dark "> <h4>' + TOD.newsTitle[j] + '</h4> </div> </a> <div class="bg-danger text-white" style="text-align:left;"> <p>' + TOD.conTitle1[j] + '<a target="_blank" class="readmore" href="' + TOD.conLink1[j] + '">' + TOD.conSiteName1[j] + '</a> </p><hr><p>' + TOD.conTitle2[j] + '<a target="_blank" class="readmore" href="' + TOD.conLink2[j] + '">' + TOD.conSiteName2[j] + '</a></p> </div> </div></div>';
            }
          }
        }

        jQuery.fn.serializeObject = function() {
          var o = {};
          var a = this.serializeArray();
          jQuery.each(a, function() {
            if (o[this.name] !== undefined) {
              if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
              }
              o[this.name].push(this.value || '');
            } else {
              o[this.name] = this.value || '';
            }
          });
          return o;
        };
        jQuery(function() {
          jQuery('form[id="imi_news"]').submit(function() {
            document.getElementById("iminews_json").value = JSON.stringify(jQuery('form[id="imi_news"]').serializeObject());
            var k ;
            k= $('#iminews_json').val();
       //     console.log(k.length);
            if(k.length >= 7000){
              document.getElementById('notifycharlimit').style.display = 'block';
            }
            else{
              document.getElementById('notifycharlimit').style.display = 'none';
            }
            return false;
          });
        });
        jQuery(function() {
          jQuery('form[id="imivid"]').submit(function() {
            document.getElementById("youvid_json").value = JSON.stringify(jQuery('form[id="imivid"]').serializeObject());
            var k ;
            k= $('#youvid_json').val();
         //   console.log(k.length);
            if(k.length >= 7000){
              document.getElementById('notifycharlimit').style.display = 'block';
            }
            else{
              document.getElementById('notifycharlimit').style.display = 'none';
            }
            return false;
          });
        });
        jQuery(function() {
          jQuery('form[id="gif_edit"]').submit(function() {
            document.getElementById("gifimi_json").value = JSON.stringify(jQuery('form[id="gif_edit"]').serializeObject());
            document.getElementById("pregif").disabled = false;
            document.getElementById("postgif").disabled = false;
            var k ;
            k= $('#gifimi_json').val();
          //  console.log(k.length);
            if(k.length >= 7000){
              document.getElementById('notifycharlimit').style.display = 'block';
            }
            else{
              document.getElementById('notifycharlimit').style.display = 'none';
            }
            return false;
          });
        });
        jQuery(function() {
          jQuery('form[id="quote_edit"]').submit(function() {
            document.getElementById("quoteimi_json").value = JSON.stringify(jQuery('form[id="quote_edit"]').serializeObject());
            document.getElementById("prequote").disabled = false;
            document.getElementById("postq").disabled = false;
            var k ;
            k= $('#quoteimi_json').val();
           // console.log(k.length);
            if(k.length >= 7000){
              document.getElementById('notifycharlimit').style.display = 'block';
            }
            else{
              document.getElementById('notifycharlimit').style.display = 'none';
            }
            return false;
          });
        });
        
        function show_wall(locksee) {
          var obdm_mi1 = "https://script.google.com/macros/s/";
          var obdm_mi2 ='AKfycbxMB_CVJADYxgJnvRaivKZhzXsG6gUhiPW1qYJqfvSrMS1GYtrmZDaemUzz8AUDoeLV';
          var locksee = $('#hkhdu').val();
          var obdm_mi = obdm_mi1 + obdm_mi2+ "/exec";
          jQuery("#YoutubeOne").empty();
          jQuery("#News1").empty();
          jQuery("#GIF2").empty();
          jQuery("#Bio2").empty();
          
          document.getElementById("adminmoto").style.display = "none";
          document.getElementById("id03").style.display = "none";
          document.getElementById("showhtml").style.display = "block";
          document.getElementById("loader").style.display = "block";
          var url = obdm_mi + "?callback=ctrlqobdm&usid="+locksee+"&action=rdobdm";
          var request = jQuery.ajax({
            crossDomain: true,
            url: url,
            method: "GET",
            dataType: "jsonp"
          });
/*
          var url = obdm_mi + "?action=chkdfhemoeorouiriheuiorr-w66iho87hmfosduofjsmdof94y5-rcinrerciebwr2p4097423newchrwerieirewr-rncwe ewgrieg rcgierwiewrniewriebwrewr-47nicenribeeiryn9eywcrewhrybewyrwerowecr-husdgfyudtfsjfnuhfdsff4343edsfdsf-wekhcnfiuy8y7934hncfiusdyfisncibuyrbunikbgsdifnlnfsdf-4378ihnerbiuergweryw";
          
          jQuery.getJSON(url, function(json) {
           // console.log(json);
            for(var od=0; od<=json.records.length;od++){
              if(obdmid == json.records[od].IDOPM){

            var g = Math.floor((Math.random() * 6) + 1);
            var gifts = JSON.parse(json.records[od].GIFGifts);
            for (prop in json.records[g]) {
              document.getElementById("GIF2").innerHTML = '<img frameborder="0" width="80%" style="max-width:500px;border-radius:4px;" src="' + gifts.GIFimi[g] + '">';
            }
            var k, m;
            var VID = JSON.parse(json.records[od].YouVid);
            var k = VID.imiYouVid.length;
            for (m = 0; m < k; m++) {
              var link = VID.imiYouVid[m];
              var vidid = getId(link);
              document.getElementById("YoutubeOne").innerHTML += '<div class="iteam"><div class="embed-responsive embed-responsive-16by9"><iframe width="100%"class="embed-responsive-item" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; autoplay ;picture-in-picture" allowfullscreen src="//www.youtube.com/embed/' + vidid + '" frameborder="0" allowfullscreen></iframe></div></div>';
            }
            var s, j;
            var news = JSON.parse(json.records[od].imiNews);
            var s = news.newsTitle.length;
            for (var prop in news.newsTitle) {
              //document.getElementById("News1").innerHTML = '<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" data-interval="10000"> <div class="carousel-inner"> <div class="carousel-item active"> <div class="container newz"> <div class="iteam-news"> <div class="wrapTODPre card"><a target="_blank" href="' + news.newsLink[0] + '"> <img class="card-img-top cardImg" src="' + news.newsThumb[0] + '"> <div class="card-body bg-light text-dark "> <h4>' + news.newsTitle[0] + '</h4> </div> </a> <div class=" bg-danger text-white" style="text-align:left;"> <p>' + news.conTitle1[0] + '<a target="_blank" class="readmore" href="' + news.conLink1[0] + '">' + news.conSiteName1[0] + '</a> </p> <hr> <p>' + news.conTitle2[0] + '<a target="_blank" class="readmore" href="' + news.conLink2[0] + '">' + news.conSiteName2[0] + '</a></p> </div> </div> </div> </div> </div> <div class="carousel-item "> <div class="container newz"> <div class="iteam-news"> <div class="wrapTODPre card"><a target="_blank" href="' + news.newsLink[1] + '"> <img class="card-img-top cardImg" src="' + news.newsThumb[1] + '"> <div class="card-body bg-light text-dark "> <h4>' + news.newsTitle[1] + '</h4> </div> </a> <div class=" bg-danger text-white" style="text-align:left;"> <p>' + news.conTitle1[1] + '<a target="_blank" class="readmore" href="' + news.conLink1[1] + '">' + news.conSiteName1[1] + '</a> </p> <hr> <p>' + news.conTitle2[1] + '<a target="_blank" class="readmore" href="' + news.conLink2[1] + '">' + news.conSiteName2[1] + '</a></p> </div> </div> </div> </div> </div> <div class="carousel-item"> <div class="container newz"> <div class="iteam-news"> <div class="wrapTODPre card"><a target="_blank" href="' + news.newsLink[2] + '"> <img class="card-img-top cardImg" src="' + news.newsThumb[2] + '"> <div class="card-body bg-light text-dark "> <h4>' + news.newsTitle[2] + '</h4> </div> </a> <div class=" bg-danger text-white" style="text-align:left;"> <p>' + news.conTitle1[2] + '<a target="_blank" class="readmore" href="' + news.conLink1[2] + '">' + news.conSiteName1[2] + '</a> </p> <hr> <p>' + news.conTitle2[2] + '<a target="_blank" class="readmore" href="' + news.conLink2[2] + '">' + news.conSiteName2[2] + '</a></p> </div> </div> </div> </div> </div> <div class="carousel-item"> <div class="container newz"> <div class="iteam-news"> <div class="wrapTODPre card"><a target="_blank" href="' + news.newsLink[3] + '"> <img class="card-img-top cardImg" src="' + news.newsThumb[3] + '"> <div class="card-body bg-light text-dark "> <h4>' + news.newsTitle[3] + '</h4> </div> </a> <div class=" bg-danger text-white" style="text-align:left;"> <p>' + news.conTitle1[3] + '<a target="_blank" class="readmore" href="' + news.conLink1[3] + '">' + news.conSiteName1[3] + '</a> </p> <hr> <p>' + news.conTitle2[3] + '<a target="_blank" class="readmore" href="' + news.conLink2[3] + '">' + news.conSiteName2[3] + '</a></p> </div> </div> </div> </div> </div> <div class="carousel-item"> <div class="container newz"> <div class="iteam-news"> <div class="wrapTODPre card"><a target="_blank" href="' + news.newsLink[4] + '"> <img class="card-img-top cardImg" src="' + news.newsThumb[4] + '"> <div class="card-body bg-light text-dark "> <h4>' + news.newsTitle[4] + '</h4> </div> </a> <div class=" bg-danger text-white" style="text-align:left;"> <p>' + news.conTitle1[4] + '<a target="_blank" class="readmore" href="' + news.conLink1[4] + '">' + news.conSiteName1[4] + '</a> </p> <hr> <p>' + news.conTitle2[4] + '<a target="_blank" class="readmore" href="' + news.conLink2[4] + '">' + news.conSiteName2[4] + '</a></p> </div> </div> </div> </div> </div> <div class="carousel-item"> <div class="container newz"> <div class="iteam-news"> <div class="wrapTODPre card"><a target="_blank" href="' + news.newsLink[5] + '"> <img class="card-img-top cardImg" src="' + news.newsThumb[5] + '"> <div class="card-body bg-light text-dark "> <h4>' + news.newsTitle[5] + '</h4> </div> </a> <div class=" bg-danger text-white" style="text-align:left;"> <p>' + news.conTitle1[5] + '<a target="_blank" class="readmore" href="' + news.conLink1[5] + '">' + news.conSiteName1[5] + '</a> </p> <hr> <p>' + news.conTitle2[5] + '<a target="_blank" class="readmore" href="' + news.conLink2[5] + '">' + news.conSiteName2[5] + '</a></p> </div> </div> </div> </div> </div> <div class="carousel-item"> <div class="container newz"> <div class="iteam-news"> <div class="wrapTODPre card"><a target="_blank" href="' + news.newsLink[6] + '"> <img class="card-img-top cardImg" src="' + news.newsThumb[6] + '"> <div class="card-body bg-light text-dark "> <h4>' + news.newsTitle[6] + '</h4> </div> </a> <div class=" bg-danger text-white" style="text-align:left;"> <p>' + news.conTitle1[6] + '<a target="_blank" class="readmore" href="' + news.conLink1[6] + '">' + news.conSiteName1[6] + '</a> </p> <hr> <p>' + news.conTitle2[6] + '<a target="_blank" class="readmore" href="' + news.conLink2[6] + '">' + news.conSiteName2[6] + '</a></p> </div> </div> </div> </div> </div> </div><br><br> <ol class="carousel-indicators"> <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li> <li data-target="#carouselExampleIndicators" data-slide-to="1"></li> <li data-target="#carouselExampleIndicators" data-slide-to="2"></li> <li data-target="#carouselExampleIndicators" data-slide-to="3"></li> <li data-target="#carouselExampleIndicators" data-slide-to="4"></li> <li data-target="#carouselExampleIndicators" data-slide-to="5"></li> <li data-target="#carouselExampleIndicators" data-slide-to="6"></li> </ol> <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev"> <span class="carousel-control-prev-icon" aria-hidden="true"></span> <span class="sr-only">Previous</span> </a> <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next"> <span class="carousel-control-next-icon" aria-hidden="true"></span> <span class="sr-only">Next</span> </a></div>';
            }
            var y = Math.floor((Math.random() * 6) + 1);
            var quotes = JSON.parse(json.records[od].HayQuotes);
            for (prop in json.records[y]) {
              document.getElementById("Bio2").innerHTML = '<h5 style="color:#DD1D16;"><b>' + json.records[y].Bio2 + '</b></h5><p>' + quotes.Quoteimi[y] + '</p>';
            }
            document.getElementById("iminews_json").value = json.records[od].imiNews;
            document.getElementById("youvid_json").value = json.records[od].YouVid;
            document.getElementById("gifimi_json").value = json.records[od].GIFGifts;
            document.getElementById("quoteimi_json").value = json.records[od].HayQuotes;
            document.getElementById("loader").style.visibility = "hidden";

            
            break;
          }

          }
          });*/

        }
        function ctrlqobdm(e){
          var res = e.result;
          if(res[0].GIFGifts!=''){
            var g = Math.floor((Math.random() * 6) + 1);
            var gifts = JSON.parse(res[0].GIFGifts);
            for (prop in res[0]) {
              document.getElementById("GIF2").innerHTML = '<img frameborder="0" width="80%" style="max-width:500px;border-radius:4px;" src="' + gifts.GIFimi[g] + '"><hr class="wallhr">';
            }
            var k, m;
            var VID = JSON.parse(res[0].YouVid);
            var k = VID.imiYouVid.length;
            for (m = 0; m < k; m++) {
              var link = VID.imiYouVid[m];
              var vidid = getId(link);
              document.getElementById("YoutubeOne").innerHTML += '<div class="iteam"><div class="embed-responsive embed-responsive-16by9"><iframe width="100%"class="embed-responsive-item" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; autoplay ;picture-in-picture" allowfullscreen src="//www.youtube.com/embed/' + vidid + '" frameborder="0" allowfullscreen></iframe></div></div>';
            }
            var s, j;
            var news = JSON.parse(res[0].imiNews);
            var s = news.newsTitle.length;
            for (var prop in news.newsTitle) {
              var k =0;
              for(k;k<=7;k++){
                if(news.newsTitle[k]==undefined){
                  news.newsTitle[k] = "Edit MONOLOGUE!";
                  news.newsLink[k] = "/#";
                  news.newsThumb[k] = "../image/emptymono.png";
                  news.conSiteName1[k] = "____________________ Empty!";
                  news.conLink1[k] = "/#";
                  news.conTitle1[k] = "";
                  news.conSiteName2[k] = "____________________ Empty!";
                  news.conLink2[k] = "/#";
                  news.conTitle2[k] = "";
              }
            }
              document.getElementById("News1").innerHTML = '<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" data-interval="10000"> <div class="carousel-inner"> <div class="carousel-item active"> <div class="container newz"> <div class="iteam-news"> <div class="wrapTODPre card"><a target="_blank" href="' + news.newsLink[0] + '"> <img class="card-img-top cardImg" src="' + news.newsThumb[0] + '"> <div class="card-body bg-light text-dark "> <h4>' + news.newsTitle[0] + '</h4> </div> </a> <div class=" bg-danger text-white" style="text-align:left;"> <p>' + news.conTitle1[0] + '<a target="_blank" class="readmore" href="' + news.conLink1[0] + '">' + news.conSiteName1[0] + '</a> </p> <hr> <p>' + news.conTitle2[0] + '<a target="_blank" class="readmore" href="' + news.conLink2[0] + '">' + news.conSiteName2[0] + '</a></p> </div> </div> </div> </div> </div> <div class="carousel-item "> <div class="container newz"> <div class="iteam-news"> <div class="wrapTODPre card"><a target="_blank" href="' + news.newsLink[1] + '"> <img class="card-img-top cardImg" src="' + news.newsThumb[1] + '"> <div class="card-body bg-light text-dark "> <h4>' + news.newsTitle[1] + '</h4> </div> </a> <div class=" bg-danger text-white" style="text-align:left;"> <p>' + news.conTitle1[1] + '<a target="_blank" class="readmore" href="' + news.conLink1[1] + '">' + news.conSiteName1[1] + '</a> </p> <hr> <p>' + news.conTitle2[1] + '<a target="_blank" class="readmore" href="' + news.conLink2[1] + '">' + news.conSiteName2[1] + '</a></p> </div> </div> </div> </div> </div> <div class="carousel-item"> <div class="container newz"> <div class="iteam-news"> <div class="wrapTODPre card"><a target="_blank" href="' + news.newsLink[2] + '"> <img class="card-img-top cardImg" src="' + news.newsThumb[2] + '"> <div class="card-body bg-light text-dark "> <h4>' + news.newsTitle[2] + '</h4> </div> </a> <div class=" bg-danger text-white" style="text-align:left;"> <p>' + news.conTitle1[2] + '<a target="_blank" class="readmore" href="' + news.conLink1[2] + '">' + news.conSiteName1[2] + '</a> </p> <hr> <p>' + news.conTitle2[2] + '<a target="_blank" class="readmore" href="' + news.conLink2[2] + '">' + news.conSiteName2[2] + '</a></p> </div> </div> </div> </div> </div> <div class="carousel-item"> <div class="container newz"> <div class="iteam-news"> <div class="wrapTODPre card"><a target="_blank" href="' + news.newsLink[3] + '"> <img class="card-img-top cardImg" src="' + news.newsThumb[3] + '"> <div class="card-body bg-light text-dark "> <h4>' + news.newsTitle[3] + '</h4> </div> </a> <div class=" bg-danger text-white" style="text-align:left;"> <p>' + news.conTitle1[3] + '<a target="_blank" class="readmore" href="' + news.conLink1[3] + '">' + news.conSiteName1[3] + '</a> </p> <hr> <p>' + news.conTitle2[3] + '<a target="_blank" class="readmore" href="' + news.conLink2[3] + '">' + news.conSiteName2[3] + '</a></p> </div> </div> </div> </div> </div> <div class="carousel-item"> <div class="container newz"> <div class="iteam-news"> <div class="wrapTODPre card"><a target="_blank" href="' + news.newsLink[4] + '"> <img class="card-img-top cardImg" src="' + news.newsThumb[4] + '"> <div class="card-body bg-light text-dark "> <h4>' + news.newsTitle[4] + '</h4> </div> </a> <div class=" bg-danger text-white" style="text-align:left;"> <p>' + news.conTitle1[4] + '<a target="_blank" class="readmore" href="' + news.conLink1[4] + '">' + news.conSiteName1[4] + '</a> </p> <hr> <p>' + news.conTitle2[4] + '<a target="_blank" class="readmore" href="' + news.conLink2[4] + '">' + news.conSiteName2[4] + '</a></p> </div> </div> </div> </div> </div> <div class="carousel-item"> <div class="container newz"> <div class="iteam-news"> <div class="wrapTODPre card"><a target="_blank" href="' + news.newsLink[5] + '"> <img class="card-img-top cardImg" src="' + news.newsThumb[5] + '"> <div class="card-body bg-light text-dark "> <h4>' + news.newsTitle[5] + '</h4> </div> </a> <div class=" bg-danger text-white" style="text-align:left;"> <p>' + news.conTitle1[5] + '<a target="_blank" class="readmore" href="' + news.conLink1[5] + '">' + news.conSiteName1[5] + '</a> </p> <hr> <p>' + news.conTitle2[5] + '<a target="_blank" class="readmore" href="' + news.conLink2[5] + '">' + news.conSiteName2[5] + '</a></p> </div> </div> </div> </div> </div> <div class="carousel-item"> <div class="container newz"> <div class="iteam-news"> <div class="wrapTODPre card"><a target="_blank" href="' + news.newsLink[6] + '"> <img class="card-img-top cardImg" src="' + news.newsThumb[6] + '"> <div class="card-body bg-light text-dark "> <h4>' + news.newsTitle[6] + '</h4> </div> </a> <div class=" bg-danger text-white" style="text-align:left;"> <p>' + news.conTitle1[6] + '<a target="_blank" class="readmore" href="' + news.conLink1[6] + '">' + news.conSiteName1[6] + '</a> </p> <hr> <p>' + news.conTitle2[6] + '<a target="_blank" class="readmore" href="' + news.conLink2[6] + '">' + news.conSiteName2[6] + '</a></p> </div> </div> </div> </div> </div> </div><br><br> <ol class="carousel-indicators"> <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li> <li data-target="#carouselExampleIndicators" data-slide-to="1"></li> <li data-target="#carouselExampleIndicators" data-slide-to="2"></li> <li data-target="#carouselExampleIndicators" data-slide-to="3"></li> <li data-target="#carouselExampleIndicators" data-slide-to="4"></li> <li data-target="#carouselExampleIndicators" data-slide-to="5"></li> <li data-target="#carouselExampleIndicators" data-slide-to="6"></li> </ol> <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev"> <span class="carousel-control-prev-icon" aria-hidden="true"></span> <span class="sr-only">Previous</span> </a> <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next"> <span class="carousel-control-next-icon" aria-hidden="true"></span> <span class="sr-only">Next</span> </a></div>';
            }
            var y = Math.floor((Math.random() * 6) + 1);
            var quotes = JSON.parse(res[0].HayQuotes);
            var bio = (res[0].Bio2).split(';');
            var biostrln = bio.length;
            var kl = Math.floor((Math.random() * biostrln));
            if(bio[kl] != ""){
             
              document.getElementById("Bio2").innerHTML = '<div style="max-width:600px;"><h5 style="color:#DD1D16;"><b>' + bio[kl] + '</b></h5><p>' + quotes.Quoteimi[y] + '</p></div>';
            }
            else{
              document.getElementById("Bio2").innerHTML ='<div style="max-width:600px;"><p>' + quotes.Quoteimi[y] + '</p></div>';
            }
            document.getElementById("iminews_json").value = res[0].imiNews;
            document.getElementById("youvid_json").value = res[0].YouVid;
            document.getElementById("gifimi_json").value = res[0].GIFGifts;
            document.getElementById("quoteimi_json").value = res[0].HayQuotes;
            document.getElementById("loader").style.display = "none";
         
            var motostr = res[0].ADMIINMotto;
            var motocon = motostr.split('{biz}');
            document.getElementById('motoincon').style.display = 'block';
            document.getElementById('motoincon').innerHTML = '<div class="motocondone"><img class="mottoconimg" src="'+motocon[0]+'"><div class="motocontit">'+motocon[1]+'</div></div><hr><div class="motocondtwo">'+motocon[2]+'</div>';
          }
          else{
            document.getElementById("GIF2").innerHTML =
            '<h4 class="noobdm">Edit MONOLOGUE!</h4>';
            document.getElementById("loader").style.display = "none";
          }
          
            }     

        function getId(url) {
          var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
          var match = url.match(regExp);
          if (match && match[2].length == 11) {
            return match[2];
          } else {
            return 'error';
          }
        }function date() {
          var today = new Date();
          var date = today.getDate();
          var month = today.getMonth() + 1;
          var year = today.getFullYear();
          document.getElementById("date").innerHTML = (date + "/" + month + "/" + year);
        }
        setInterval('date()', 1000); function clock() {
          var today = new Date();
          var hours = today.getHours();
          var minutes = today.getMinutes();
          var seconds = today.getSeconds();
          if (hours >= 12) {
            meridiem = " PM";
          } else {
            meridiem = " AM";
          }
          if (hours > 12) {
            hours = hours - 12;
          } else if (hours === 0) {
            hours = 12;
          }
          if (minutes < 10) {
            minutes = "0" + minutes;
          } else {
            minutes = minutes;
          }
          if (seconds < 10) {
            seconds = "0" + seconds;
          } else {
            seconds = seconds;
          }
          document.getElementById("clock").innerHTML = (hours + ":" + minutes + ":" + seconds + meridiem);
        }
        setInterval('clock()', 2000);jQuery(".slides").sortable({
        placeholder: 'slide-placeholder',
        axis: "y",
        revert: 150,
        start: function(e, ui) {
          placeholderHeight = ui.item.outerHeight();
          ui.placeholder.height(placeholderHeight + 15);
          jQuery('<div class="slide-placeholder-animator" data-height="' + placeholderHeight + '"></div>').insertAfter(ui.placeholder);
        },
        change: function(event, ui) {
          ui.placeholder.stop().height(0).animate({
            height: ui.item.outerHeight() + 15
          }, 300);
          placeholderAnimatorHeight = parseInt(jQuery(".slide-placeholder-animator").attr("data-height"));
          jQuery(".slide-placeholder-animator").stop().height(placeholderAnimatorHeight + 15).animate({
            height: 0
          }, 300, function() {
            jQuery(this).remove();
            placeholderHeight = ui.item.outerHeight();
            jQuery('<div class="slide-placeholder-animator" data-height="' + placeholderHeight + '"></div>').insertAfter(ui.placeholder);
          });
        },
        stop: function(e, ui) {
          jQuery(".slide-placeholder-animator").remove();
        },
      }); jQuery(function(jQuery) {
        jQuery.fn.hScroll = function(amount) {
          amount = amount || 120;
          jQuery(this).bind("DOMMouseScroll mousewheel", function(event) {
            var oEvent = event.originalEvent,
              direction = oEvent.detail ? oEvent.detail * -amount : oEvent.wheelDelta,
              position = jQuery(this).scrollLeft();
            position += direction > 0 ? -amount : amount;
            jQuery(this).scrollLeft(position);
            event.preventDefault();
          })
        };
      });
      jQuery(document).ready(function() {
        jQuery('.box').hScroll(40);
      }); jQuery(function(jQuery) {
        jQuery.fn.hScroll = function(amount) {
          amount = amount || 120;
          jQuery(this).bind("DOMMouseScroll mousewheel", function(event) {
            var oEvent = event.originalEvent,
              direction = oEvent.detail ? oEvent.detail * -amount : oEvent.wheelDelta,
              position = jQuery(this).scrollLeft();
            position += direction > 0 ? -amount : amount;
            jQuery(this).scrollLeft(position);
            event.preventDefault();
          })
        };
      });
      jQuery(document).ready(function() {
        jQuery('.box-news').hScroll(40);
        $('#crelitepass').click(function(){
          $("#crelitebrd").toggle('fast');
        });
      });
      function checklength(label){
        var k ;
        k= label.value.length;
      //  console.log(k);
        if(k >= 7000){

          document.getElementById('notifycharlimit').style.display = 'block';

        }
        else{
          document.getElementById('notifycharlimit').style.display = 'none';
        }
        }

        document.getElementById("pregif").addEventListener("click", previewGif);

          function previewGif() {
            var GIF, a;
            a = document.getElementById("gifimi_json").value;
            GIF = JSON.parse(a);
            jQuery('#preview_gif').empty();
            var j = 0;
            var maxGIF = GIF.GIFimi.length;
            for (j; j < maxGIF; j++) {
              document.getElementById("preview_gif").innerHTML += '<div class="iteam" style="border:none;box-shadow:none;"><img width="100%" frameborder="0" allowfullscreen src="' + GIF.GIFimi[j] + '" frameborder="0" ></div>';
            }
          }

      $('#mottothumb').on('input',function(){
        var picthumb = $('#mottothumb').val();
if(picthumb !="")
{
document.getElementById('motopicthumbpre').style.display = "none";
document.getElementById('mottothumbpicpost').style.display = "inline-block";
document.getElementById('mottothumbpicpost').src = picthumb;
}
else{
  document.getElementById('motopicthumbpre').style.display = "inline-block";
document.getElementById('mottothumbpicpost').style.display = "none";
}
      });

      function showsvgpic(){
        document.getElementById('motopicthumbpre').style.display = "inline-block";
        document.getElementById('mottothumbpicpost').style.display = "none";
      }