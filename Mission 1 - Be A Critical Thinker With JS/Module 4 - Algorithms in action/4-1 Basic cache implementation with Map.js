// Problem Statement
// Implement a simple in-memory cache for an "expensive" function (like a database query or API call).
// The goal is to store the results of a function catt so that if the same call is made again,
// the result is returned from the cache instead of running the expensive function.

const dataCache = new Map() //! we'll use this map to get data from cache instead of server side get method

const expensiveTask = (id) => { //! We'll use this function when we have to get data from server
    // console.log('Ran the expensiveTask for:' + id)
    return {
        id: id,
        data: `some data for id: ${id}`,
        timeStamp: new Date().getTime()
    }
}

const getData = (id) => {
    if (dataCache.has(id)) {
        console.log('Cache HIT for id:', id)
        return dataCache.get(id)
    }
    console.log('Cache Miss for id:', id)
    const data = expensiveTask(id)
    dataCache.set(id, data) //! dataCache doesnt have value so we adding key and value to it

    return data
}

console.log('Before any data added in map->', dataCache)
// console.log('Getting data from expensiveTask->' + getData(123)) //! Cant use '+' between string and object
console.log('Getting data from expensiveTask->', getData(123))
console.log('Getting data from cache->', getData(123))
console.log('After data added to map->', dataCache)