db = db.getSiblingDB('recipesdb')
db.createCollection('recipecatalog')  //earlier it was lists
recipecatalogCollection = db.getCollection("recipecatalog") //earlier it was lists & recipeCatalog was listsCollection
recipecatalogCollection.remove({})   //recipeCatalog was listsCollection
recipecatalogCollection.insert(   //recipeCatalog was listsCollection
{
      name: "Meal Type",
      rcId: 1
      
}
)
recipecatalogCollection.insert(
{
      name: "Cuisine Type",
      rcId: 2
}
)
recipecatalogCollection.insert(
{
      name: "Meal Preference",
      rcId: 3

})



db.createCollection('recipecatalogtype')  //earlier it was tasks
recipecatalogtypeCollection = db.getCollection("recipecatalogtype") //earlier it was tasks & cuisinetypeCollection was taskssCollection
recipecatalogtypeCollection.remove({})  // was taskssCollection
recipecatalogtypeCollection.insert(  // was taskssCollection
{
            rcId:1,
            recipecatalogtype:[
                  {
                        name: "Breakfast",
                        rctypeId: 1
                  },
                  {
                        name: "Lunch",
                        rctypeId: 2
                  },
                  {
                        name: "Dinner",
                        rctypeId: 3
                  },
                  {
                        name: "Midnight Snacks",
                        rctypeId: 4
                  },
                  {
                        name: "Desserts",
                        rctypeId: 5
                  }
      
            ]
            
})
recipecatalogtypeCollection.insert(  
{
      rcId:2,
      recipecatalogtype:[
            {
                  name: "Indian",
                  rctypeId: 1
            },
            {
                  name: "Mexican",
                  rctypeId: 2
            },
            {
                  name: "Italian",
                  rctypeId: 3
            },
            {
                  name: "Chinese",
                  rctypeId: 4
            },
            {
                  name: "Mediterranean",
                  rctypeId: 5
            },
            {
                  name: "American",
                  rctypeId: 6     
            }

      ]
      
}
)
recipecatalogtypeCollection.insert(  // was tasksCollection
 {
                  rcId:3,
                  recipecatalogtype:[
                        {
                              name: "Diabetic",
                              rctypeId: 1
                        },
                        {
                              name: "Vegetarian",
                              rctypeId: 2
                        },
                        {
                              name: "Non Vegeratian",
                              rctypeId: 3
                        },
                        {
                              name: "Gluten Free",
                              rctypeId: 4
                        },
                        {
                              name: "Low Calorie",
                              rctypeId: 5
                        }
            
                  ]
                  
 })

