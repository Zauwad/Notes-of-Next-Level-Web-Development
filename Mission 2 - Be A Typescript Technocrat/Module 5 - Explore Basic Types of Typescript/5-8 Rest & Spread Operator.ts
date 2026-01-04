//* Spread Operator
const friends = ['chintu', 'pintu', 'mintu']
const schoolFriends = ['Rahim', 'Karim']
const collegeFriends = ['James', 'Bond']

// friends.push(schoolFriends) //!Output-> ['chintu', 'pintu', 'mintu', ['Rahim', 'Karim']] -> in plain js
friends.push(...schoolFriends)
console.log(friends)

//* Spread operator in object
const user = {
    name: 'Ridwanul Azim',
    phoneNo: '0191222222'
}
const otherInfo = {
    hobby: '....',
    favouriteColor: 'Brown'
}

const allUserInfo = {
    ...user,
    ...otherInfo
}
console.log(allUserInfo)



//* Rest Operator
const sendInvite = (...friends: string[]) => { //! Turned all the strings into an array of strings
    friends.forEach((friend: string) => console.log(`Send invitation to ${friend}`))
}


sendInvite('Rahim,', 'Karim', 'Shafik', 'Jobbar')