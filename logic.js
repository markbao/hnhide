/*
elem = XXXX.nextSibling;
while(elem.innerHTML == null)
{
elem = elem.nextSibling;
}
*/

$(".subtext").each(function(el) {
	hnhide_id = $(this).children(':first').attr('id').replace('score_','')
	$(this).append(' | <a href="#" onclick="hnhide_hide(' + hnhide_id + ')">hide</a>');
})

function hnhide_hide(the_id) {
	// hide
}

function hnhide_whisk(the_id) {
	// find it
}