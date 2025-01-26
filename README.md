# MongoDB Aggregation: Handling Empty Arrays in $unwind

This repository demonstrates a common error encountered when using the `$unwind` operator in MongoDB aggregation pipelines after a `$lookup` operation that might return an empty array.  The issue occurs when `$unwind` tries to process an empty array, resulting in an error.  The solution involves using the `$ifNull` operator to gracefully handle such scenarios.

## Problem
The provided `bug.js` file showcases an aggregation pipeline that uses `$lookup` to join two collections. If a document in the primary collection doesn't have any matching documents in the secondary collection, `$lookup` returns an empty array.  When this empty array is passed to `$unwind`, the aggregation fails.

## Solution
The `bugSolution.js` file demonstrates a solution using `$ifNull` to replace the empty array with a default value before the `$unwind` operation. This prevents the error and allows the aggregation to proceed smoothly, even when there are no matches from the `$lookup`.

## Setup
1. Clone this repository.
2. Make sure you have MongoDB installed and running.
3. Create the collections described in the files and populate them with some sample data.
4. Run the `bug.js` and `bugSolution.js` to see the difference.