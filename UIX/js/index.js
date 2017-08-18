$(document).ready(function() {
	var $moth = $('#moth');

	$(document).on('mousemove', function(e) {

		var mouseX = e.clientX,
		mouseY = e.clientY;
		mothP = $moth.position(),
		mothX = mothP.left,
		mothY = mothP.top,

		$moth.css('left', mouseX+'px');
		$moth.css('top', mouseY+'px');

		var vx = mouseX-mothX,
		vy = mouseY-mothY,
		r = Math.sqrt(vx*vx + vy*vy),
		cos = vx / r,
		angle = Math.acos(cos)*180/Math.PI+90,
		transform = '';

		if (vy<0) angle = -angle+180;
		transform+= 'rotateZ('+angle+'deg)';

		$moth.css('-webkit-transform', transform).
		css('-moz-transform', transform).
		css('transform', transform);
	});

});