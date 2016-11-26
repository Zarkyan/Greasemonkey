
// ==UserScript==
// @name        T411 RapidDl
// @namespace   t411
// @description Ajoute un bouton de téléchargement rapide sur le site T411
// @include     http*://*.t411.*/torrents/search/*
// @include		http*://*.t411.*/top/*
// @version     1.10
// @grant       none
// ==/UserScript==


$.fn.addt411_dl = function() {
  return this.each(function() {
    var id = this.href.split('?')[1]; // Should be something like 'id=1234'
    var newTdElement = $("<td></td>");
    if( id != undefined && id.match(/id=[0-9]+/) ) {
      var newLinkHtml = '<a href="/torrents/download/?' + id + '">Télécharger</a>';
      var newLinkElement = $(newLinkHtml);
      newLinkElement.css("float","left");
      newLinkElement.css("padding-left","10px");
      newLinkElement.appendTo(newTdElement);
    }
    newTdElement.insertBefore($(this).parent());
  });
};

// New distinct column header for downloading
var newThElement = $("<th>Télécharger</th>");
newThElement.insertBefore( $('th:contains(NFO)') );

// Insert all the buttons in the new column
$('a.nfo').addt411_dl();