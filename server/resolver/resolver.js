const {UserList} = require('../data/static')
const resolvers = {
    Query: {
        users: () => {
            return UserList;
        }
    }
}

module.exports ={ resolvers}