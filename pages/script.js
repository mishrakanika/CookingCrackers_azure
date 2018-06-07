function initXHR(x,value) {
	console.log(x);
	if (x == 'home') {
		document.getElementById("home").style.display = "block";
		document.getElementById("recipes").style.display = "none";
		document.getElementById("recipeDetails").style.display = "none";
		document.getElementById("recipesCatalog").style.display = "none";
		document.getElementById("recipesCatalogDetails").style.display = "none";
	}
	else if (x == 'recipes') {
		console.log("going inside recipes ");
		retrieveActiveListsFromServer('/app/recipe', 'recipes');
		document.getElementById("home").style.display = "none";
		document.getElementById("recipes").style.display = "block";
		document.getElementById("recipeDetails").style.display = "none";
		document.getElementById("recipesCatalog").style.display = "none";
		document.getElementById("recipesCatalogDetails").style.display = "none";		
	}
	
	else if (x == 'recipeDetails') {
		retrieveActiveListsFromServer('/app/recipe/' + value, 'recipeDetails');
		document.getElementById("home").style.display = "none";
	    document.getElementById("recipeDetails").style.display = "block";
		document.getElementById("recipes").style.display = "none";
		document.getElementById("recipesCatalog").style.display = "none";
		document.getElementById("recipesCatalogDetails").style.display = "none";
	}
	else if (x == 'recipesCatalog') {
		console.log("going inside recipe catalog");
		retrieveActiveListsFromServer('/app/catalog', 'recipesCatalog');
		document.getElementById("home").style.display = "none";
		document.getElementById("recipes").style.display = "none";
		document.getElementById("recipeDetails").style.display = "none";
		document.getElementById("recipesCatalog").style.display = "block";
		document.getElementById("recipesCatalogDetails").style.display = "none";		
	}

	else if (x == 'recipesCatalogDetails') {
		console.log("going inside catalog Details" + value);
		retrieveActiveListsFromServer('/app/catalog/'+ value, 'recipesCatalogDetails');
		document.getElementById("home").style.display = "none";
		document.getElementById("recipes").style.display = "none";
		document.getElementById("recipeDetails").style.display = "none";
		document.getElementById("recipesCatalog").style.display = "none";
		document.getElementById("recipesCatalogDetails").style.display = "block";		
	}


	else {
		document.getElementById("home").style.display = "block";
		document.getElementById("recipes").style.display = "none";
		document.getElementById("recipeDetails").style.display = "none";
		document.getElementById("recipesCatalog").style.display = "none";
		document.getElementById("recipesCatalogDetails").style.display = "none";
	}
}





function retrieveActiveListsFromServer(url, operation) {
	var xmlhttp = new XMLHttpRequest();
	console.log("going inside  retrieveactivelistsfromserver");
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			var returnValues = JSON.parse(xmlhttp.responseText);

			if (operation == "recipes") {
				console.log("going inside recipes - retrieveactivelistsfromserver");
				populateAllRecipe('recipes', returnValues);
			}
			else if (operation == "recipeDetails") {
				console.log("going inside recipe Details");
				populateRecipeDetails('recipeDetails', returnValues);				
			}
			else if (operation == "recipesCatalog") {
				console.log("going inside recipe Catalog");
				populateRecipeCatalog('recipesCatalog', returnValues);				
			}
			else if (operation == "recipesCatalogDetails") {
				console.log("going inside recipe Catalog Details");
				populateRecipeCatalogDetails('recipesCatalogDetails', returnValues);				
			}
		}
	}
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
}



function populateAllRecipe(elementId, recipes) {
	var element = document.getElementById(elementId);
	var newElement = "";
	console.log("going inside recipes - populateListsView");
	console.log("recipes items "+ recipes.length);
	for (var i = 0; i < recipes.length; i++) {
		
		newElement += "<div>";
		newElement += "<div class=\"bold\">";
		newElement += "<td>";
		newElement += "<a href=\"javascript:initXHR('recipeDetails'," +  recipes[i].rrecipeId+ ")\">" + recipes[i].rname + "</a>";
		newElement += "</td><br/><br/>";
		newElement += "<td class = \"bold\">" + recipes[i].rdescription + "</td><br/><br/>";
		newElement += "</div>";
		newElement += "</div>";

		}
	element.innerHTML = newElement;
}



function populateRecipeDetails(elementId, recipeDetails) {
	console.log(recipeDetails.rname);
	var element = document.getElementById(elementId);
	var newElement = "<div>";
	newElement += "<div class=\"bold\">";
	//newElement += "<h3>Recipe Details</h3>";
	//newElement += "<p>Image: " + recipeDetails.rimage  + "</p>";
	newElement += "<h2><i>" + recipeDetails.rname + "</i></h2>";
	newElement += "<h4>Recipe Description: </h4><p>" + recipeDetails.rdescription  + "</p>";
	newElement += "<img src=" + recipeDetails.rimage  + " height="+ 350 + " width="+ 300 +" >";
	newElement += "<p><h4>Ingredients:</h4> " + recipeDetails.ringredients  + "</p>";
	newElement += "<p><h4>Method:</h4> " + recipeDetails.rmethod  + "</p>";
	newElement += "<p><h4>Cuisine Type:</h4> " + recipeDetails.rcuisinetype  + "</p>";
	newElement += "<p><h4>Meal Type:</h4> " + recipeDetails.rmealtype  + "</p>";
	newElement += "<p><h4>Preference Type:</h4> " + recipeDetails.rmealpreference  + "</p>";
	newElement += "<p><h4>Duration:(Minutes)</h4> " + recipeDetails.rduration  + "</p>";
	newElement += "<p><h4>Chef:</h4> " + recipeDetails.rchefid  + "</p>";
    newElement += "</div>";
	newElement += "</div>";

	element.innerHTML = newElement;
}



function populateRecipeCatalog(elementId, recipesCatalog) {
	console.log("Inside Recipe Catalog")
	var element = document.getElementById(elementId);
	var newElement = "";
	console.log("going inside recipes - populateListsView");
	console.log("recipes items "+ recipesCatalog.length);
	for (var i = 0; i < recipesCatalog.length; i++) {
		
		newElement += "<div>";
		newElement += "<div class=\"bold\">";
		newElement += "<td>";
		newElement += "<a href=\"javascript:initXHR('recipesCatalogDetails'," +  recipesCatalog[i].rcId+ ")\">" + recipesCatalog[i].name + "</a>";
		newElement += "</td><br/><br/>";
		newElement += "</div>";

		}
	element.innerHTML = newElement;
}


function populateRecipeCatalogDetails(elementId, recipesCatalogDetails) {
	console.log("Inside Recipe Catalog Details")
	var element = document.getElementById(elementId);
	var catalogdetails = recipesCatalogDetails.recipecatalogtype;
	var newElement = "";
	console.log("going inside recipes - populateListsView");
	console.log("recipes items "+ catalogdetails.length);
	for (var i = 0; i < catalogdetails.length; i++) {
		
		newElement += "<div>";
		newElement += "<div class=\"bold\">";
		newElement += "<td>";
		newElement += "<p>" + catalogdetails[i].name  + "</p>";
		//newElement += "<a href=\"javascript:initXHR('recipesCatalogDetails'," +  recipesCatalogDetails[i].rcId+ ")\">" + recipesCatalogDetails[i].name + "</a>";
		newElement += "</td><br/><br/>";
		newElement += "</div>";

		}
	element.innerHTML = newElement;
}
