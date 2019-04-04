function AccordionMenu(testId){
	this.testElement = document.getElementById(testId);
	this.getHeights();
}

AccordionMenu.prototype.getHeights = function() {
	this.testElement.addEventListener("click",function(e){
		this.arrowClicked(e)
	}.bind(this));
};

AccordionMenu.prototype.arrowClicked = function(event){
	event.preventDefault();
	console.log("clicked thing ",event.currentTarget);
}

function initAccordion(){
	console.log("test");
	var accordion1 = new AccordionMenu("testId");
}

window.onload = initAccordion;