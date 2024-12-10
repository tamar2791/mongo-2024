db.getCollection("books").find({})
//1
db.books.distinct('title').map(x => x.toUpperCase())
//2
db.books.distinct('categories').map(c => {
    let count = db.books.countDocuments({ categories: c })
    return c + ' : ' + count
})
//4
db.books.aggregate([
    { $match: { status: 'PUBLISH' } },
    { $project: { status: false } },
    { $set: { is_publish: true } }])