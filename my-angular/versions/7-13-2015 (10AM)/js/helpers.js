//
//	Helpers
//
Storage.prototype.setObject = function(key, value) {
    this.setItem(key, JSON.stringify(value));
}
Storage.prototype.getObject = function(key) {
    var value = this.getItem(key);
    return value && JSON.parse(value);
}
function reset(){
	localStorage.clear();
	return "Storage Clear";
}


//
//	JQuery
//
$(document).ready(function(){


	$(document).on('click', '[role=tab]', function (e) {
		e.preventDefault();
		window.location.hash = $(this).attr('href');
	})

	$('.grid').isotope({
		itemSelector: '.box',
		layoutMode: 'fitRows'
	}); 

	$(".datepicker").datepicker('update', new Date());
	
	$(".month-year").datepicker( {
		format: "mm-yyyy",
		startView: "months", 
		minViewMode: "months"
	}).datepicker('update', new Date());
	
});

$(window).load(function(){
	if(window.location.hash)
		$('a[href="'+window.location.hash+'"]').tab('show');
	else
		$('a[href=#home]').tab('show');
});

/* $('.tab-pane#home [role=tab]').on("click",function(){
	$('body .nav.nav-tabs').hide();
});

$('.tab-content .nav .back').on("click",function(){
	$('body .nav.nav-tabs').show();
});
 */