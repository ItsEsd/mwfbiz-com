"use strict";$(document).ready(function() { var script1 = document.createElement('script'); var script2 = document.createElement('script'); script1.src = 'https://mwfbiz.com/js/moment.min.js'; script2.src = 'https://mwfbiz.com/js/moment-timezone-with-data-2012-2022.min.js'; document.head.appendChild(script1); document.head.appendChild(script2); $.getJSON("https://api.ipify.org?format=json", function(data) { var usip, usloc, ushrf, usdt; usip = data.ip; usloc = moment.tz.guess(); ushrf = escape(window.location.href); usdt = new Date(); const userAgent = navigator.userAgent; const platform = navigator.platform; const language = navigator.language; const screenWidth = window.screen.width; const screenHeight = window.screen.height; const browserName = navigator.appName; const browserVersion = navigator.appVersion; const deviceDetails = { userAgent, platform, language, screenWidth, screenHeight, browserName, browserVersion }; var dvcinf = JSON.stringify(deviceDetails); console.log(usip, usloc, ushrf, usdt, dvcinf); var ur1 = "https://script.google.com/macros/s/"; var ur2 = "AKfycbxKtMeUdWPe6Mk7qv_hquqziWT8WA3lrNtpCUyqsNzCiWZCnPtaNnDovgC20-KBLYVd"; var urlv = ur1 + ur2 + '/exec'; var url = urlv + "?callback=clntres&usip=" + usip + "&usloc=" + usloc + "&ushrf=" + ushrf + "&dvcinf=" + dvcinf + "&usdt=" + usdt + "&action=upinfo"; var request = jQuery.ajax({ crossDomain: true, url: url, method: "GET", dataType: "jsonp" }); console.log(url); }); function clntres(e) { console.log(e.records); }});