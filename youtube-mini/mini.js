$(document).ready(function() {
var $pagination = $("#pagination"),
  totalRecords = 0,
  records = [],
  recPerPage = 0,
  nextPageToken = "",
  totalPages = 0;
var API_KEY = "";
var search = "";
var duration = "any";
var order = "relevance";
var beforedate = new Date().toISOString();
var afterdate = new Date().toISOString();
var maxResults = 10;
$("#duration").change(function() {
  duration = $(this).children("option:selected").val();
});
$("#order").change(function() {
  order = $(this).children("option:selected").val();
});
$("#myForm").submit(function(e) {
  e.preventDefault();
  search = $("#search").val();
  API_KEY = "AIzaSyDNVZlqUDg_QVsiLqYUYsc1gvRjKfY8zqc";
  var url = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY} &part=snippet&q=${search}&maxResults=${maxResults}&publishedAfter=${afterdate}&publishedBefore=${beforedate}&order=${order}&videoDuration=${duration}&type=video`;
  $.ajax({
    method: "GET",
    url: url,
    beforeSend: function() {
      $("#btn").attr("disabled", true);
      $("#results").empty();
    },
    success: function(data) {
      $("#btn").attr("disabled", false);
      displayVideos(data);
    },
  });
});

function apply_pagination() {
  $pagination.twbsPagination({
    totalPages: totalPages,
    visiblePages: 6,
    onPageClick: function(event, page) {
      displayRecordsIndex = Math.max(page - 1, 0) * recPerPage;
      endRec = displayRecordsIndex + recPerPage;
      displayRecords = records.slice(displayRecordsIndex, endRec);
      generateRecords(recPerPage, nextPageToken);
    },
  });
}
$("#search").change(function() {
  search = $("#search").val();
});

function generateRecords(recPerPage, nextPageToken) {
  var url2 = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&part=snippet&q=${search}&maxResults=${maxResults}&pageToken=${nextPageToken}&publishedBefore=${beforedate}&publishedAfter=${afterdate}&order=${order}&videoDuration=${duration}&type=video`;
  $.ajax({
    method: "GET",
    url: url2,
    beforeSend: function() {
      $("#btn").attr("disabled", true);
      $("#results").empty();
    },
    success: function(data) {
      $("#btn").attr("disabled", false);
      displayVideos(data);
    },
  });
}

function displayVideos(data) {
  recPerPage = data.pageInfo.resultsPerPage;
  nextPageToken = data.nextPageToken;
  totalRecords = data.pageInfo.totalResults;
  totalPages = Math.ceil(totalRecords / recPerPage);
  apply_pagination();
  $("#search").val("");
  var videoData = "";
  $("#pager").show();
  $("#results").show();
  $("#table").show();
  $("#bdy").hide();
  $("#back").show();
  data.items.forEach((item) => {
    videoData = `<div class="yrbrslt embed-responsive embed-responsive-16by9"><iframe class="embed-responsive-item" src="//www.youtube.com/embed/${item.id.videoId}" frameborder="0" allowfullscreen></iframe></div> <p> <a target="_blank" style="text-decoration:none;font-size:16px; color:white;"href="https://www.youtube.com/watch?v=${item.id.videoId}"> ${item.snippet.title}</a> <a target="_blank" href="https://www.youtube.com/channel/${item.snippet.channelId}">${item.snippet.channelTitle}</a></p><hr style="border-width:2px; border-color:#4d4d4d;">`;
    $("#results").append(videoData);
  });
}
});
