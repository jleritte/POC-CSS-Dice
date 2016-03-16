//TODO: Turn into js objects to build the dice
var sizes = [4,6,8,10,12,20];

function init(nums) {
	nums.forEach(function(v) {
		var die = document.getElementsByClassName('D' + v)[0].parentNode,
			button = die.nextElementSibling;
		die.addEventListener('click',roll);
		button.addEventListener('click',clear);
	});
	document.getElementsByClassName('clearAll')[0].addEventListener('click',clearAll);
}

function roll() {
	var die = this.firstElementChild,
		num = parseInt(die.className.replace('D','').replace(' spin','')),
		side = Math.floor(Math.random() * num + 1);
	die.className = 'D' + num + ' roll';
	setTimeout(function() {
		die.className = 'D' + num + ' side' + side;
	},1000);
}

function clear() {
	var die = this.previousElementSibling.firstElementChild;
	die.className = die.className.replace(/ side\d\d?/,'').replace(' spin','') + ' spin';
}

function clearAll() {
	var sizes = document.querySelectorAll('[class^=D]');
	Array.prototype.forEach.call(sizes,function(v) {
		var button = v.parentNode.nextElementSibling;
		button.click();
	});
}