
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
		//window.history.pushState('page2', 'Title', href);
		document.title = $(res).filter('title').text();
		window.history.pushState({"html":res.html, "pageTitle":document.title}, '', href);
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
