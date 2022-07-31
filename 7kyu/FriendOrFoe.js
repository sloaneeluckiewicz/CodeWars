/*
Make a program that filters a list of strings and returns a list with only your friends name in it.

If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

*/

function friend(friends){
    return friends.filter(myFriends => myFriends.length === 4); 
  }

// filtering an array of elements that pass the function myFriends
// myFriends() finds the length of each of the FRIENDS in myFriends that have 4 letters (length of 4)