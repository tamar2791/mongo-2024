use bookShopDB;
db;
show dbs;

db.createCollection('sites');
db.sites.insert({name:'sdfg',url:'fhjg',arrKodes:[]});
db.sites.insert({name:'sdfg',url:'fhjg',arrKodes:[]});
db.sites.insert({name:'sdfg',url:'fhjg',arrKodes:[]});

db.createCollection('books');
db.books.insert({name:'aaa',shortDesc:'dfg',imgUrl:'asd',bookUrl:'uyrk',ISBN:'123456',price:35.58,categories:['gh','cj','fyi'], website:0x67053e0887ec5d146d072f8a});
db.books.insert({name:'aaa',shortDesc:'dfg',imgUrl:'asd',bookUrl:'uyrk',ISBN:'123456',price:35.58,categories:['gh','cj','fyi'], website:0x67053e0887ec5d146d072f8a});
db.books.insert({name:'aaa',shortDesc:'dfg',imgUrl:'asd',bookUrl:'uyrk',ISBN:'123456',price:35.58,categories:['gh','cj','fyi'], website:0x67053e0887ec5d146d072f8a});

show collections;

db.sites.drop();
