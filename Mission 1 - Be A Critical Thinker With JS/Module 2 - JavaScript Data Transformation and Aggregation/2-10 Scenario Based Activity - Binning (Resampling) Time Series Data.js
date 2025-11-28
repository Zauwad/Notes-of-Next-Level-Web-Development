// Binning > need when doing login or analytics. Suppose we are calculating how many events happening in a particular time range(binning).
                                                // 10:11, 10:05, 10:15 -> 10:00  (3)
                                                // 10:35, 10:38 -> 10:30 (2)

// const now = new Date();
// console.log(now);
// Example output: Fri Nov 28 2025 02:20:00 GMT+0600 (Bangladesh Standard Time)

// new Date(0); // Thu Jan 01 1970 00:00:00 UTC // 0ms time since Jan 1, 1970 (Unix epoch).
// new Date("2025-11-28T01:00:00Z"); // 2025-11-28T01:00:00.000Z   parses a string into a date.
// new Date(2025, 10, 28, 2, 20);   // Nov 28 2025, 02:20

// const d = new Date();
// console.log(d.getTime());      // Epoch in ms
// console.log(d.toISOString());  // 2025-11-28T02:20:00.000Z //!string


const events = [
  { timestamp: "2025-11-28T01:00:00Z", type: "login" },
  { timestamp: "2025-11-28T01:05:30Z", type: "view_page" },
  { timestamp: "2025-11-28T01:07:45Z", type: "click_button" },
  { timestamp: "2025-11-28T01:10:12Z", type: "logout" },
  { timestamp: "2025-11-28T01:15:00Z", type: "login" },
  { timestamp: "2025-11-28T01:20:25Z", type: "purchase" },
  { timestamp: "2025-11-28T01:25:40Z", type: "error" },
  { timestamp: "2025-11-28T01:30:00Z", type: "view_page" }
];
// output ->
// Binned Data: {
//   '2025-11-28T01:00:00.000Z': { total: 7 },
//   '2025-11-28T01:30:00.000Z': { total: 1 }
// }



const interval = 30 * 60 * 1000   //! 30mins interval to ms
// Bining means to get the timestamp set for this work
const getBinningTimeStamp = (timeStamp) => {
    const date = new Date(timeStamp)
    
    // console.log(date.getTime()) //! Will get the EPOCH Time thats been counting from 1970 till this timeStamp. 
                                //! We're using epoc time so we can get our present time after converting things


    console.log('Before bining time->', date)
    // TO get a particular bining(timerange) -> floor(time/interval) * interval
    const flooredEpoch = Math.floor(date.getTime() / interval) * interval  //! Will get value in miliseconds
    const isoFlooredEpoch = new Date(flooredEpoch).toISOString()  //! Converting flooredEpoch miliseconds to date(Thu Jan 01 1970 00:00:00 UTC) format  
                                                                  //! then converting it to ISO format

    console.log('After bining time-> ', isoFlooredEpoch)
    return isoFlooredEpoch
}



const binnedData = events.reduce((accumulator, event) => {
    const biningTimeStamp = getBinningTimeStamp(event.timestamp)

    if(!accumulator[biningTimeStamp]){
        accumulator[biningTimeStamp] = {total: 0}
    }
    accumulator[biningTimeStamp].total += 1
    
    return accumulator
},{})

console.log('Binned Data->', binnedData )