To execute:

1) start mongo server in one terminal
mongod -port 3000 -dbpath ./testDB/ -noauth

2) In another terminal go to project directory (CookingCrackers/RecipeExpressServer/CookingCrackers/ )
npm start 
or node AppServer.js


Check browser:
http://localhost:8080/home.html



3) To Create and load scripts

i] start mongo server in one terminal
mongod -port 3000 -dbpath ./testDB/ -noauth


ii] In another terminal go to project directory (CookingCrackers/RecipeExpressServer/CookingCrackers/)
mkdir testDB for MAC
MD testDB for Windows


iii] mongo --port 3000 --authenticationDatabase admin   (starting client)
load ('createDB/createToDoSampleData.js');  (Loading script)
bye


//Mlab deployment steps
1) Edit connection string in DataAccess.ts :
static DB_CONNECTION_STRING:string = 'mongodb://groupGCC:Cooking123@ds016718.mlab.com:16718/recipesdb';

2) Compile DataAccess.ts
3) Connect to mlab using mongo shell - 
mongo ds016718.mlab.com:16718/recipesdb -u groupGCC -p Cooking123

4) load scripts - 
createallrecipes.js and createallrecipescatalog.js (make sure db name in all these files is 'recipesdb')

5) Run express server - 
npm start

6) Run angular - 
ng serve

//Node server deployment on azure
1) Create web app and app service plan
2) select github in deployment options
3) 
