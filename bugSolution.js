```javascript
// Correct aggregation pipeline handling empty arrays gracefully
aggregate([
  {
    $lookup: {
      from: "collectionB",
      localField: "_id",
      foreignField: "foreignKey",
      as: "relatedDocs"
    }
  },
  {
    $addFields: {
      relatedDocs: {
        $ifNull: [ "$relatedDocs", [] ]
      }
    }
  },
  {
    $unwind: "$relatedDocs"
  },
  {
    $group: {
      _id: "$_id",
      total: {
        $sum: {
          $ifNull: [ "$relatedDocs.value", 0 ]
        }
      }
    }
  }
])
```