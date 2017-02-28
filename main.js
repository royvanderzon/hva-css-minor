
// 'use strict';

(function(){

	var el = {
		inner : document.querySelectorAll('.inner')
	}

	var app = {
		init : function(){
			routes.init()
		}
	};

	var routes = {
		init : function(){
			
			window.onhashchange = function() {
		        sections.toggle(window.location.hash);
				sections.bounceInner()
		    };
		}
	};

	var sections = {
		bounceInner : function(){
	        el.inner[0].classList.remove('bounce_inner')
	        setTimeout(function(){
		        el.inner[0].classList.add('bounce_inner')
	        },50)
		},
		toggle : function(route){
			var sections = document.querySelectorAll('section');
			sections.forEach(function(val, index, arr){
				if('#'+val.id == route){
					val.classList.remove('hidden');
				}else{
					val.classList.add('hidden');
				}
			});
		}
	};

	console.log(el.inner)

	app.init()

}());