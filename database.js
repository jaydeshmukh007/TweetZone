const mongoose = require('mongoose');
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useUnifiedTopology', true);

class Database {

    constructor() {
        this.connect();
    }

    connect() {
        mongoose.connect("mongodb+srv://admin:admin123@cluster0.z9fv8.mongodb.net/TweetCloneDB?authSource=admin&replicaSet=atlas-x4e5as-shard-0&w=majority&readPreference=primary&retryWrites=true&ssl=true")
        .then(() => {
            console.log("database connection successful");
        })
        .catch((err) => {
            console.log("database connection error " + err);
        })
    }
}

module.exports = new Database();
