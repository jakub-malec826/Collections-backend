const mongoose = require("mongoose");

const url = `mongodb+srv://${process.env.MONGO_URL_DATA}.4tqbyhs.mongodb.net/?retryWrites=true&w=majority`;

export default function ConnectToDb() {
    try {
        mongoose.connect(url);
        console.log("Connection with db OK");
    } catch (err) {
        console.error(err);
    }
}
