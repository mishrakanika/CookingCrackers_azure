db = db.getSiblingDB('recipesdb')
db.createCollection('recipes')  
recipesCollection = db.getCollection("recipes") //earlier it was lists
recipesCollection.remove({})  //earlier it was listsCollection
recipesCollection.insert(  //earlier it was listsCollection
{
        rname: "Upma",
        rdescription:"Upma, is a dish from the Indian subcontinent, cooked as a thick porridge from dry roasted semolina or coarse rice flour.",
		rmethod: "1 Place semolina in cast iron pan and cook over medium heat until toasty but not browned, about 2 minutes. Transfer to a bowl.2.Return pan to medium heat and heat ghee or oil until shimmering. Add the mustard seeds and split black gram, stir until they splutter, about 30 seconds. Add the onion, fry until slightly soft, about a minute (take care not to brown). Add the slit chillis, curry leaves and stir until fragrant, about a minute longer. Add the carrots, peas, red chilli powder, and sugar, and stir until fragrant and the mixture is coated with the ghee/oil, about 1 minute.3.Add toasted semolina and stir vigorously until the mixture resembles wet sand—about a minute. Add the salt and gently pour in the water. The semolina will bubble and spurt as it absorbs the water. Reduce heat to low. Allow this mixture to cook for about 2 minutes, stirring constantly. The Upma absorbs water very quickly and tends to dry out too, so turn off the heat when the mixture is slightly runny. Serve immediately.",
		rrecipeId: 1,
		rcuisinetype: "Indian",
		rmealpreference: "Vegetarian",
		rmealtype: "Breakfast",
		rduration: 15,
		ringredients: "1 cup semolina flour, 1 1/2 tablespoons ghee or vegetable oil, 1 teaspoon whole black mustard seeds, 1 teaspoon split black gram (Urad dal), 1 small onion chopped (about 1/2 cup), 2 small green chills split lengthwise, 10 curry leaves, 1/4 cup diced boiled carrots, 1/4 cup boiled green peas, 1 teaspoon red chilli powder, 1 teaspoon sugar, Kosher salt, 2 1/4 cups water",
        rchefid: "Div01",
        rimage:"https://www.archanaskitchen.com/images/archanaskitchen/1-Author/Roop/Traditional_Rava_Upma.jpg"
 })
 recipesCollection.insert(    
{
		rname: "French Toast",
        rdescription:"French toast is a dish made of bread soaked in eggs and milk, then fried.",
		rmethod: "In a small bowl, combine, cinnamon, nutmeg, and sugar and set aside briefly.In a 10-inch or 12-inch skillet, melt butter over medium heat. Whisk together cinnamon mixture, eggs, milk, and vanilla and pour into a shallow container such as a pie plate. Dip bread in egg mixture. Fry slices until golden brown, then flip to cook the other side. Serve with syrup.",
		rrecipeId: 2,
		rcuisinetype: "American",
		rmealpreference: "Non-Vegetarian",
		rmealtype: "Breakfast",
		rduration: 30,
		ringredients: "1 teaspoon ground cinnamon, 1/4 teaspoon ground nutmeg, 2 tablespoons sugar, 4 tablespoons butter, 4 eggs, 1/4 cup milk, 1/2 teaspoon vanilla extract, 8 slices challah, brioche, or white bread, 1/2 cup maple syrup, warmed",
            rchefid: "Div01",
            rimage:"https://d1doqjmisr497k.cloudfront.net/-/media/mccormick-us/recipes/mccormick/q/800/quick-and-easy-french-toast.ashx?vd=20171018T133744Z&hash=7AD28A0C971AAAAF2DEAD18CE67FCC8E36FA9DF2"
 })
 recipesCollection.insert(
       {
		rname: "Creamy Garlic Penne Pasta",
        rdescription:"Italian cylindrical shaped creamy pasta",
		rmethod: "Melt butter in a medium sauce pan, add garlic. Cook for 1 minute over medium heat. Add flour and cook for an additional minute, stirring constantly. Add milk and broth, stirring constantly. Cook until sauce boils and thickens. Add parsley and parmesan cheese. Add desired salt and pepper. Continue stirring until cheese has melted. Serve immediately. Pour sauce over pasta and serve.",
        rrecipeId: 3,
		rcuisinetype: "Italian",
		rmealpreference: "Vegetarian",
		rmealtype: "Lunch",
		rduration: 20,
        ringredients: "1 box (1 lb) penne pasta, 3 TB butter, 2 tsp. minced garlic, 3 TB flour, 1 cup chicken broth, 1 cup milk, 2 tsp dried parsley, ½ cup grated parmesan cheese, salt and pepper to taste.",
        rchefid: "Div01",
        rimage:"https://i.ytimg.com/vi/5_IdJeIapO8/hqdefault.jpg"
  
  
     })
recipesCollection.insert(     
{
		rname: "Brownies",
        rdescription:"A chocolate brownie is a square, baked, chocolate dessert.",
		rmethod: "Preheat the oven to 350°F (175°C) then line a 7x11 inch baking trey with parchment paper and set aside. In a large bowl combine melted butter, oil and both sugars. Add the eggs, vanilla and salt then whisk for about one minute until evenly combined and light in color. Over the same bowl sift in the flour and cocoa powder. Gently fold the dry ingredients into the wet ingredients until JUST combined (do NOT over mix). Fold in half of the chocolate chunks. Pour the batter into the prepared pan, then smooth the top. Generously top with the remaining chocolate chunks. Bake for 35-40 minutes, or until the centre of the brownies no longer jiggles and is JUST set to the touch. Remove from the oven and allow to cool to room temperature before removing from the baking trey and slicing into 16 brownies. Enjoy!",
        rrecipeId: 4,
		rcuisinetype: "American",
		rmealpreference: "Non-Vegetarian",
		rmealtype: "Desserts",
		rduration: 60,
        ringredients: "1 cup (8oz/227g) butter, melted and cooled, 2 tablespoon vegetable oil, 1 cup plus 2 tablespoons (6¼oz/184g) brown sugar, 1 cup plus 2 tablespoons (8¼oz/244g) white sugar, 4 large eggs, room temperature, 4 teaspoons vanilla extract, 1 cup (5oz/150g) all purpose flour, 1 cup (4oz/123g) good quality, unsweetened cocoa powder, 1 teaspoon salt, 1½ cup (9oz/270g) roughly chopped chocolate or large chocolate chips",
        rchefid: "Div01",
        rimage:"https://www.twopeasandtheirpod.com/wp-content/uploads/2011/02/Fudgy-brownies.jpg"
})
recipesCollection.insert(     
{
		rname: "Meatball Nirvana",
        rdescription:"Balls of ground or chopped meat, beef,  with added seasonings",
		rmethod: "Preheat an oven to 400 degrees F (200 degrees C). Place the beef into a mixing bowl, and season with salt, onion, garlic salt, Italian seasoning, oregano, red pepper flakes, hot pepper sauce, and Worcestershire sauce; mix well. Add the milk, Parmesan cheese, and bread crumbs. Mix until evenly blended, then form into 1 1/2-inch meatballs, and place onto a baking sheet. Bake in the preheated oven until no longer pink in the center, 20 to 25 minutes. ",
        rrecipeId: 5,
		rcuisinetype: "American",
		rmealpreference: "NonVegetarian",
		rmealtype: "Dinner",
		rduration: 40,
        ringredients: "1 lb extra lean lean ground beef, 1⁄2 tsp sea salt, 1 small onion, diced, 1⁄2 tsp garlic salt, 1 1⁄2 tsp Italian seasoning, 3⁄4 tsp dried oregano, 3⁄4 tsp crushed red pepper flakes, 1 dash hot sauce, 1 1⁄2 tbsp worchestershire sauce, 1⁄3 cup skim milk, 1⁄4 cup parmesan cheese, grated, 1⁄2 cup seasoned Italian bread crumbs",
        rchefid: "Div01",
        rimage:"https://s3.amazonaws.com/bulkbitesstatic/uploads/uploads/images/3/6/6/0/663_l.jpg" 
})
recipesCollection.insert(    
{
		rname: "Lime Chicken",
        rdescription:"A delightful chicken dish with a little spicy kick. Serve with rice and your favorite vegetable.",
		rmethod: "In a large mixing bowl or large sealable, Ziplock bag, combine the chicken breasts, freshly squeezed lime juice, ground cumin, sea salt, ground black pepper, cayenne, and fresh cilantro. Toss to combine and coat the chicken well. Cover with plastic wrap (or close Ziplock bag tightly) and place in the fridge for at least 30 minutes, preferably 2-3 hours, to allow the marinade to work. Heat a skillet over medium-high heat with the olive oil. Remove the chicken from the fridge and place in the hot oil. Cook the chicken until well-browned on both sides and cooked through, about 4-6 minutes per side, or until the chicken reaches 165 degrees F internal temperature. Allow to rest for 5 minute before slicing and serving.",
        rrecipeId: 6,
		rcuisinetype: "Chinese",
		rmealpreference: "Non-Vegetarian",
		rmealtype: "Lunch",
		rduration: 130,
        ringredients: "4 boneless skinless chicken breasts, 2 limes approx. 4 tbsp. juice, juiced 1 tsp ground cumin, 1/2 tsp sea salt, 1/2 tsp ground black pepper, 1/8 tsp cayenne pepper, 1/2 cup chopped fresh cilantro*, 1 tbsp olive oil",
        rchefid: "Div01",
        rimage:"https://www.simplyrecipes.com/wp-content/uploads/2013/07/grilled-cilantro-lime-chicken-vertical-a-1200.jpg"
})
recipesCollection.insert(
{
		rname: "Butter Pecan Fudge",
        rdescription:"Creamy, buttery flavor that melts in your mouth and finishes with the crunch of pecans",
		rmethod: "Grease an 8 x 8 inch square pan or line with parchment paper. Add butter, cream, white sugar, brown sugar, and salt to a large, heavy saucepan. Bring to a rolling boil over medium heat, stirring frequently. Cook for 5 minutes, stirring constantly, then remove the pan from the heat. It is important to boil the mixture for the full 5 minutes to get a smooth texture, otherwise the fudge might be crumbly and grainy. Stir in pecans and vanilla extract. Whisk in powdered sugar until smooth. Spread in an even layer in the prepared baking dish, then cool to room temperature or until firm. Remove from the pan and cut into small squares.",
        rrecipeId: 7,
		rcuisinetype: "Indian",
		rmealpreference: "Vegetarian",
		rmealtype: "Desserts",
		rduration: 20,
        ringredients: "1⁄2 cup butter, 1⁄2 cup heavy whipping cream, 1⁄2 cup white sugar, 1⁄2 cup light brown sugar, packed, 1⁄8 tsp kosher salt, 1 cup pecans, toasted and roughly chopped, 1 tsp vanilla extract, 2 cup powdered sugar, sifted",
        rchefid: "Div01",
        rimage:"https://s3.amazonaws.com/bulkbitesstatic/uploads/uploads/images/3/6/6/0/663_l.jpg"
})


