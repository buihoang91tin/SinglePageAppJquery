
// how to define class in javascript
var apple = new function() {
    this.type = "macintosh";
    this.color = "red";
    this.getInfo = function () {
        return this.color + ' ' + this.type + ' apple';
    };

}

function _request(href, triggerer, addToHistory){
	var addToHistory = typeof addToHistory !== 'undefined' ? addToHistory : true;
	//animation loading here
	//end animation loading

	$.ajax({
		url: href
	}).done( (res) => {
		document.title = $(res).filter('title').text();
		window.history.pushState(res.html, document.title, href);
		$('.ajax-container').html($(res).filter('.ajax-container'));
	})
}

function _onLinkClick(evt){
	var $this  = $(evt.currentTarget);
	var target = $this.attr('target');

	if(target != '_blank'){
		$('.main-nav .list a').filter("[href='"+$this.attr('href')+"']").trigger('customNavClick');
		_request($this.attr('href'), $this);
		evt.preventDefault();
		
	}
}

$(document).on('click', 'a', function(evt){
	_onLinkClick(evt);
});

window.onpopstate = function() {
	// $('title').load(location.href);
 //  	$('.ajax-container').load(location.href);
  	$.ajax({
		url: location.href
	}).done( (res) => {
		document.title = $(res).filter('title').text();
		//window.history.pushState(res.html, document.title, href);
		$('.ajax-container').html($(res).filter('.ajax-container'));
	})
};
