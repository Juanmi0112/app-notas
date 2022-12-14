const mongooseClient = require("mongoose");

mongooseClient.connect(
  "mongodb+srv://juanmi7:juanmi7@cluster0.ua5c32d.mongodb.net/test",
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) console.log(err);
  }
);

const NotesSchema = mongooseClient.Schema({
  title: String,
  description: String,
});

const Notes = mongooseClient.model("Notes", NotesSchema);

module.exports = Notes;
