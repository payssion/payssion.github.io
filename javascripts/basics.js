// Generated by CoffeeScript 1.4.0

$(function() {
  return $("body").keyup(function(event) {
    if (event.which === 37 && $(".paging .left > a").length) {
      return location.replace($(".paging .left >a").attr("href"));
    } else if (event.which === 39 && $(".paging .right > a").length) {
      return location.replace($(".paging .right >a").attr("href"));
    }
  });
});

function addBlankTargetForLinks() {
	$('a[href^="http"]').each(function() {
		$(this).attr('target', '_blank');
	});
}

$(document).bind('DOMNodeInserted', function(event) {
	addBlankTargetForLinks();
});

