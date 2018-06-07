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
3) Add the deployment credentials
4) Update the Appserver.ts with adding the command
"server.listen(process.env.PORT || 8080);"
5) Compile the App.ts file and push on git
6) Browse from azure and its working..


//Angular Deployment to Azure
1) In the angular folder in the app routing file update the command with 
"export const routing = RouterModule.forRoot(routes, {useHash:true});"
2) compile the angular project by command "ng serve"
3) Build the project by using command "ng build --prod"
4) copy the files generated in "dist" folder to "recipeAngularDist" folder located in node express folder
5)Update the Express Server (App.ts) to contain a root route pointing to this ng output directory:
this.expressApp.use('/', express.static(__dirname+'/recipeAngularDist'));
6) compile the App.ts file by command "tsc App.ts"
7) Push the changes to git
8) now just change the root of the app in the Azure "Application Settings"
under "Virtual applications and directories"
from site\wwwroot to site\wwwroot\recipeAngularDist and save
8) Browse the site by using https://cookingcracker.azurewebsites.net/#/ 

//Google Oauth deployment to Azure
1) Add GooglePassport.ts and googleOauth.ts and compile them.
2) Run 'npm install passport' and 'npm install passport-google-oauth'
3) Create a new project on google - https://console.developers.google.com/apis/dashboard
4) Add client ID and secret to googleOauth.ts that will be generated on https://console.developers.google.com/apis/dashboard
5) Add callback URL in GooglePassport.ts - http://cookingcracker.azurewebsites.net/auth/google/callback
6) 