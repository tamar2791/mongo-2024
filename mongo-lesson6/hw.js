db.books.find({})
//6
db.books.find({"categories":{$size:0}})
//8
db.books.find({authors:{$all:["Robi Sen"]}},{title:true,longDescription:true})
//9
db.books.find({authors:{$all:[/a/i]}},{title:true,longDescription:true})
//10
db.books.find({categories:['XML','Internet']})
//11
db.books.find({categories:{$all:['XML','Internet']}})
//12
db.books.find({authors:{$all:[""]}})
//13
db.books.find({"authors.2":""})
//14
db.books.find({_id:{$type:'ObjectId'}})