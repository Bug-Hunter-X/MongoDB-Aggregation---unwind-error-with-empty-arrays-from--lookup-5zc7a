```javascript
// Incorrect aggregation pipeline causing unexpected results
aggregate([{
  $lookup: {
    from: "collectionB",
    localField: "_id",
    foreignField: "foreignKey",
    as: "relatedDocs"
  }
}, {
  $unwind: "$relatedDocs" //This stage is the source of the error, if relatedDocs is empty it will throw an error.
}, {
  $group: {
    _id: "$_id",
    total: {
      $sum: "$relatedDocs.value"
    }
  }
}])
```