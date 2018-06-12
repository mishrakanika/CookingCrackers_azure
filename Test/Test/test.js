var chai = require('chai');
var chaiHttp = require('chai-http');
var async = require('async');

var assert = chai.assert;
var expect = chai.expect;
var should = chai.should();

var http = require('http');
chai.use(chaiHttp);

	describe('Cooking Crackers: Test get recipes', function () {
		this.timeout(150000);
		  var requestResult;
		  var response;
			
		  	//   chai.request("http://localhost:8080")
	// 			  .get("/app/recipe/")
	  before(function (done) {
		chai.request("http://cookingcracker.azurewebsites.net")
		.get("/#/getRecipe/1/")
				  .end(function (err, res) {
					  requestResult = res.body;
					  response = res;
					  expect(err).to.be.null;
					  expect(res).to.have.status(200);
					  done();
				  });
	  });
	  
	  
	//   it('The first entry in the recipe array has known properties', function(){
	// 		  //expect(requestResult).to.include.keys('_id');
	// 		  expect(response.body[0]).to.have.property('rrecipeId');
	// 		//   expect(requestResult[0]).to.have.property('rname');
	// 		//   expect(requestResult[0]).to.have.property('rmethod');
	// 		//   expect(requestResult[0]).to.have.property('rdescription');
	// 		//   expect(requestResult[0]).to.have.property('rduration');
	// 		//   expect(requestResult[0]).to.have.property('ringredients');
	// 		  expect(response.body).to.not.be.a.string;
	// 	  });
	  
	  it('The elements in the recipe array have the expected properties', function(){
			  expect(response.body).to.satisfy(
				  function (body) {
					  for (var i = 0; i < body.length; i++) {
						  expect(body[i]).to.include.keys('_id');
						  expect(body[i]).to.have.property('rrecipeId');
						  expect(body[i]).to.have.property('rname');
						  expect(body[i]).to.have.property('rmethod');
						  expect(body[i]).to.have.property('rdescription');
						  expect(body[i]).to.have.property('rduration');
						  expect(body[i]).to.have.property('ringredients');
					  }
					  return true;
				  });
		  });
	  
	  it('The elements in the recipe array have the expected type of properties', function(){
			  expect(response.body).to.satisfy(
				  function (body) {
					  for (var i = 0; i < body.length; i++) {
					//	expect(body[i]).to.have.property('_id').that.is.a('Number');
						  expect(body[i]).to.have.property('rrecipeId').that.is.a('String');
						  expect(body[i]).to.have.property('rmethod').that.is.a('String');
						  expect(body[i]).to.have.property('rname').that.is.a('String');
						  expect(body[i]).to.have.property('rdescription').that.is.a('String');
						  expect(body[i]).to.have.property('rduration').that.is.a('Number');
						  expect(body[i]).to.have.property('ringredients').that.is.a('String');
					  }
					  return true;
				  });
		  });
		 
	  
	  });	

	  describe('Cooking Crackers: Test post recipes', function () {
		this.timeout(150000);
		  var requestResult;
		  var response;
			   
	  before(function (done) {
	  let recipe={
			rname: "Test Post Recipe1",
			rdescription:"Upma, is a dish from the Indian subcontinent, cooked as a thick porridge from dry roasted semolina or coarse rice flour.",
			rmethod: "1 Place semolina in cast iron pan and cook over medium heat until toasty but not browned, about 2 minutes. Transfer to a bowl.2.Return pan to medium heat and heat ghee or oil until shimmering. Add the mustard seeds and split black gram, stir until they splutter, about 30 seconds. Add the onion, fry until slightly soft, about a minute (take care not to brown). Add the slit chillis, curry leaves and stir until fragrant, about a minute longer. Add the carrots, peas, red chilli powder, and sugar, and stir until fragrant and the mixture is coated with the ghee/oil, about 1 minute.3.Add toasted semolina and stir vigorously until the mixture resembles wet sand—about a minute. Add the salt and gently pour in the water. The semolina will bubble and spurt as it absorbs the water. Reduce heat to low. Allow this mixture to cook for about 2 minutes, stirring constantly. The Upma absorbs water very quickly and tends to dry out too, so turn off the heat when the mixture is slightly runny. Serve immediately.",
			rcuisinetype: "Indian",
			rmealpreference: "Vegetarian",
			rmealtype: "Breakfast",
			rduration: 15,
			ringredients: "1 cup semolina flour, 1 1/2 tablespoons ghee or vegetable oil, 1 teaspoon whole black mustard seeds, 1 teaspoon split black gram (Urad dal), 1 small onion chopped (about 1/2 cup), 2 small green chills split lengthwise, 10 curry leaves, 1/4 cup diced boiled carrots, 1/4 cup boiled green peas, 1 teaspoon red chilli powder, 1 teaspoon sugar, Kosher salt, 2 1/4 cups water",
			
		  }
		  chai.request("http://cookingcracker.azurewebsites.net")
				  .post('/#/app/recipe/')
				  .send(recipe)
				  .end(function(err, res)  {
					  requestResult = res.body;
					  response = res;
					  expect(res).to.have.status(200);
					  done();
				  });
				  });
	  
	  it('It should have the success status response ', function(){  
			  
			  expect(response.body).to.have.property('message');
	  });
	  
	  it('It should have the known property in response body', function(){  
			  
			  expect(response.body).to.have.property('message').to.be.a('string');
	  });
	  
	  it('It should have the expected value in response body', function(){  
			  
			  expect(response.body).to.have.property('message').eql("Recipe created!");
	  });
	  
			  });