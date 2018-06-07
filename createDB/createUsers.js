db = db.getSiblingDB('recipesdb')
db.createCollection('users')
usersCollection = db.getCollection("users")
usersCollection.remove({})
usersCollection.insert(
{
	firstName: "Kanika",
    lastName: "Mishra",
    userId: 1,
    password: hex_md5('KanikaPassword'),
    isChef: false
 }
 )
usersCollection.insert(
{
	firstName: "Rutu",
    lastName: "Bhatt",
    userId: 2,
    password: hex_md5('RutuPassword'),
    isChef: true
 }
 )
usersCollection.insert(
{
	firstName: "Divyanshi",
    lastName: "Yadav",
    userId: 3,
    password: hex_md5('DivyanshiPassword'),
    isChef: false
 }
 )