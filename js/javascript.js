let text = document.querySelector(".h2");

text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>"); 
																	

text.addEventListener("mouseover", function(event) { 
	if (event.target.tagName != "SPAN") return; 
	event.target.classList.add("active"); 
});



let text2 = document.querySelector(".p1");

text2.innerHTML = text2.textContent.replace(/\S/g, "<span>$&</span>"); 
																	

text2.addEventListener("click", function(event) { 
	if (event.target.tagName != "SPAN") return; 
	event.target.classList.add("active"); 
});




document.addEventListener("keydown", function(event) { 
	if (event.keyCode == "32") {
		document.querySelector(".p2").classList.add("active");
	} 
});   