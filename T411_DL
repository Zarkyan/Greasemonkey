// ==UserScript==
// @name        T411 Rapid DL :)
// @namespace   t411
// @description Adds a DL button to the T411 result list
// @include     http://www.t411.li/torrents/search/*
// @include		http://www.t411.li/top/*
// @version     1.1
// @grant       none
// ==/UserScript==

$.fn.addT411DownloadColumn = function() {
  return this.each(function() {
    var id = this.href.split('?')[1]; // Should be something like 'id=1234'
    var newTdElement = $("<td></td>");
    if( id != undefined && id.match(/id=[0-9]+/) ) {
      var newLinkHtml = '<a href="/torrents/download/?' + id + '"><center><img src="http://img15.hostingpics.net/pics/151761download512000000.png"/></center></a>';
      var newLinkElement = $(newLinkHtml);
      newLinkElement.css("float","left");
      newLinkElement.css("padding-left","16px");
      newLinkElement.appendTo(newTdElement);
    }
    newTdElement.insertAfter($(this).parent());
  });
};

// New distinct column header for downloading
var newThElement = $("<th><center>DL</center></th>");
newThElement.insertAfter( $('th:contains(NFO)') );

// Insert all the buttons in the new column
$('a.nfo').addT411DownloadColumn();
