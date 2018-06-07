var chai = require('chai');
var chaiHttp = require('chai-http');
var async = require('async');

var assert = chai.assert;
var expect = chai.expect;
var should = chai.should();

var http = require('http');
chai.use(chaiHttp);

	describe('Test Cooking Crackers result', function () {
		this.timeout(150000);
		  var requestResult;
		  var response;
			
		  	//   chai.request("http://localhost:8080")
	// 			  .get("/app/recipe/")
	  before(function (done) {
		chai.request("http://cookingcracker.azurewebsites.net")
		.get("/#/allrecipes/")
				  .end(function (err, res) {
					  requestResult = res.body;
					  response = res;
					  expect(err).to.be.null;
					  expect(res).to.have.status(200);
					  done();
				  });
	  });
	  
	  
	//   it('The first entry in the recipe array has known properties', function(){
	// 		  expect(requestResult[0]).to.include.keys('_id');
	// 		  expect(requestResult[0]).to.have.property('rrecipeId');
	// 		  expect(requestResult[0]).to.have.property('rname');
	// 		  expect(requestResult[0]).to.have.property('rmethod');
	// 		  expect(requestResult[0]).to.have.property('rdescription');
	// 		  expect(requestResult[0]).to.have.property('rduration');
	// 		  expect(requestResult[0]).to.have.property('ringredients');
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