
  	
  	var menuList = document.getElementById("menuList");
  	menuList.style.maxHeight = "0px";

  	function openMenu(){
  		if(menuList.style.maxHeight === "0px"){

  			menuList.style.maxHeight = "100%";
  			document.getElementById("menuIcon").src = "images/times.png";
  			

  		}

  		else{
  			menuList.style.maxHeight = "0px";
  			document.getElementById("menuIcon").src = "images/menu.png";

  		}
  	}




//theme toggler 

function themeToggler(){

	document.body.classList.toggle("dark");

}



var myModal = document.getElementById("myModal");


 function openFunction(imgs){

 	myModal.style.display = "block";
 	var fullImg = document.getElementById("fullImg");

 	fullImg.src = imgs.src;


	}


	var closeModal = document.getElementById("closeModal");

	closeModal.onclick = function(){
		myModal.style.display = "none";
	}



	var moreStyle = document.getElementById("moreStyle");
	moreStyle.style.display = "none";
	var smBtn = document.getElementById("smBtn");


	function smFunction(){
	
	if(	moreStyle.style.display == "none"){
			moreStyle.style.display = "flex";
			smBtn.innerHTML = "See Less";

	}

	else{
			moreStyle.style.display = "none";
				smBtn.innerHTML = "See More";

	}


	}


