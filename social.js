// Implement the SocialNetwork class here
class SocialNetwork {

  constructor() {
    this.users = {};
    this.follows = {};
    this.currentID = 0;
  }

  addUser(name) {
    this.currentID++
    let userKey = (this.currentID).toString()
    this.users[userKey] = {id: this.currentID, name: name}
    this.follows[userKey] = new Set()
    return this.currentID
  }

  getUser(userID) {
    if (!Object.hasOwn(this.users, `${userID}`)) return null;
    return this.users[`${userID}`];
  }

  follow(userID1, userID2) {
    // Your code here
  }

  getFollows(userID) {
    // Your code here
  }

  getFollowers(userID) {
    // Your code here
  }

  getRecommendedFollows(userID, degrees) {
    // Your code here
  }
}

module.exports = SocialNetwork;
