//Getting servey responses dataset
const surveyResponses = [
    "A", "C", "B", "D", "A", "B", "C", "D", "A", "C",
    "B", "D", "A", "C", "B", "A", "D", "C", "B", "A"
];
//? Output -> {A:6, B:5 etc.}

const dataSet = surveyResponses.reduce((table, response) => {
    console.log('Table in each iteration->', table, ';response in each iteration->', response)
    
    // if (table[response]) {   //! true, string, valid number -> means boolean true
    //     table[response] += 1
    // }else{
    //     table[response] = 1
    // }
    // return table

    table[response] = (table[response] || 0) + 1   //! Oneliner code instead of if-else block
    return table
}, {})
console.log('dataset with total response count->', dataSet)