const mongoose = require("mongoose");

const url =
    "mongodb+srv://jakub-malec826:P6XgOum8RR6siL6a@usersdb.4tqbyhs.mongodb.net/?retryWrites=true&w=majority";

export default function ConnectToDb() {
    try {
        mongoose.connect(url);
        console.log("Connection with db OK");
    } catch (err) {
        console.error(err);
    }
}
