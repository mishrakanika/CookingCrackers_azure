db = db.getSiblingDB('recipesdb')
db.createCollection('lists')
listsCollection = db.getCollection("lists")
listsCollection.remove({})
listsCollection.insert(
{
	  name: "Breakfast",
	  listId: 1,
	  
}
)
listsCollection.insert(
{
	  name: "Snacks",
	  listId: 2,
}
)
listsCollection.insert(
{
	  name: "Dinner",
	  listId: 3,

}
)
db.createCollection('tasks')
tasksCollection = db.getCollection("tasks")
tasksCollection.remove({})
tasksCollection.insert(
{
	listId : 1,
	tasks : [
	 {
		rname: "Upma",
		rdescription: "1 Place semolina in cast iron pan and cook over medium heat until toasty but not browned, about 2 minutes. Transfer to a bowl.2.Return pan to medium heat and heat ghee or oil until shimmering. Add the mustard seeds and split black gram, stir until they splutter, about 30 seconds. Add the onion, fry until slightly soft, about a minute (take care not to brown). Add the slit chillis, curry leaves and stir until fragrant, about a minute longer. Add the carrots, peas, red chilli powder, and sugar, and stir until fragrant and the mixture is coated with the ghee/oil, about 1 minute.3.Add toasted semolina and stir vigorously until the mixture resembles wet sand—about a minute. Add the salt and gently pour in the water. The semolina will bubble and spurt as it absorbs the water. Reduce heat to low. Allow this mixture to cook for about 2 minutes, stirring constantly. The Upma absorbs water very quickly and tends to dry out too, so turn off the heat when the mixture is slightly runny. Serve immediately.",
		rtaskId: 1,
		rcuisinetype: "Indian",
		rmealpreference: "Vegetarian",
		rmealtype: "Breakfast",
		rduration: 15,
		ringredients: "1 cup semolina flour, 1 1/2 tablespoons ghee or vegetable oil, 1 teaspoon whole black mustard seeds, 1 teaspoon split black gram (Urad dal), 1 small onion chopped (about 1/2 cup), 2 small green chills split lengthwise, 10 curry leaves, 1/4 cup diced boiled carrots, 1/4 cup boiled green peas, 1 teaspoon red chilli powder, 1 teaspoon sugar, Kosher salt, 2 1/4 cups water",
		rchefid: "Div01"
  
  
	 },
	 {
		rname: "French Toast",
		rdescription: "In a small bowl, combine, cinnamon, nutmeg, and sugar and set aside briefly.In a 10-inch or 12-inch skillet, melt butter over medium heat. Whisk together cinnamon mixture, eggs, milk, and vanilla and pour into a shallow container such as a pie plate. Dip bread in egg mixture. Fry slices until golden brown, then flip to cook the other side. Serve with syrup.",
		rtaskId: 2,
		rcuisinetype: "American",
		rmealpreference: "Non-Vegetarian",
		rmealtype: "Breakfast",
		rduration: 30,
		ringredients: "1 teaspoon ground cinnamon, 1/4 teaspoon ground nutmeg, 2 tablespoons sugar, 4 tablespoons butter, 4 eggs, 1/4 cup milk, 1/2 teaspoon vanilla extract, 8 slices challah, brioche, or white bread, 1/2 cup maple syrup, warmed",
		rchefid: "Div01"
	 }
	 
	]
}
)
tasksCollection.insert(
{
	listId : 2,
	tasks : [
	 {
		rname: "Triangle Puff",
		rdescription: "Allow this mixture to cook for about 2 minutes, stirring constantly. The Upma absorbs water very quickly and tends to dry out too, so turn off the heat when the mixture is slightly runny. Serve immediately…",
		rtaskId: 1,
		rcuisinetype: "Indian",
		rmealpreference: "Vegetarian",
		rmealtype: "Snacks",
		rduration: 30,
		ringredients: "abc,def,ghi",
		rchefid: "Theo01"
		
	 },
	 {
		rname: "Strawberry Quinoa Pancakes",
		rdescription: "Allow this mixture to cook for about 2 minutes, stirring constantly. The Upma absorbs water very quickly and tends to dry out too, so turn off the heat when the mixture is slightly runny. Serve immediately",
		rtaskId: 1,
		rcuisinetype: "American",
		rmealpreference: "Vegetarian",
		rmealtype: "Snacks",
		rduration: 40,
		ringredients: "abc,def,ghi",
		rchefid: "Theo01"
	 }
	]	
}
)
tasksCollection.insert(
{
	listId : 3,
	tasks : [
	 {
		rname: "Tortellini in Brodo",
		rdescription: "cook for about 2 minutes, stirring constantly. The Upma absorbs water very quickly and tends to dry out too, so turn off the heat when the mixture is slightly runny. Serve immediately",
		rtaskId: 1,
		rcuisinetype: "Italian",
		rmealpreference: "Non-Vegetarian",
		rmealtype: "Dinner",
		rduration: 30,
		ringredients: "abc,def,ghi",
		rchefid: "Theo01"
	 },
	 {
		rname: "Escarole and Bean Soup",
		rdescription: " The Upma absorbs water very quickly and tends to dry out too, so turn off the heat when the mixture is slightly runny. Serve immediately",
		rtaskId: 1,
		rcuisinetype: "Italian",
		rmealpreference: "Non-Vegetarian",
		rmealtype: "Dinner",
		rduration: 22,
		ringredients: "abc,def,ghi",
		rchefid: "Theo01"
	 }
	]	
}
)