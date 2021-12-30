const { toValueOrError } = require("mocha/lib/runnable");

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
    this.users[userKey] = { id: this.currentID, name: name }
    this.follows[this.currentID] = new Set()
    return this.currentID
  }

  getUser(userID) {
    if (!Object.hasOwn(this.users, `${userID}`)) return null;
    return this.users[`${userID}`];
  }

  follow(userID1, userID2) {
    if (Object.hasOwn(this.follows, userID1) && Object.hasOwn(this.follows, userID2)) {
      this.follows[userID1].add(userID2);
      return true;
    }
    return false;
  }

  getFollows(userID) {
    return this.follows[userID]
  }

  getFollowers(userID) {
    let followers = new Set();
  
    for (const followKey in this.follows) {
      if (this.follows[followKey].has(userID)) followers.add(parseInt(followKey))
    }

  return followers
  }

  getRecommendedFollows(userID, degrees) {
    let recFollows = []
    let visited = new Set().add(userID)
    let queue = [[userID]]

    while (queue.length) {
      let currPath = queue.shift()
      let lastNode = currPath[currPath.length - 1]

      if (currPath.length > degrees + 2) break;
      if (currPath.length > 2) recFollows.push(lastNode)
      for (let follow of this.follows[lastNode]) {
        if (!visited.has(follow)) {
          visited.add(follow)
          queue.push(currPath.concat(follow))
        } 
      }
    }
    return recFollows
  }
}

module.exports = SocialNetwork;
