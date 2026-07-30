const { Router } = require("express");
const db = require("../db/queries");
const indexRouter = Router();

const messages = db.getAllMessages();

indexRouter.get("/", (req, res) => res.render("../views/index.ejs", {messages: messages}));

indexRouter.post("/messages/:messageID", (req, res) => {
    const targetMessage = messages.filter(msg => msg.id === req.params.messageID)[0];
    res.render("../views/message.ejs", {message: targetMessage});
})

indexRouter.get("/new", (req, res) => res.render("../views/form.ejs"))
indexRouter.post("/new", (req, res) => {
    messages.push({ 
        text: req.body.messageInput, 
        user: req.body.authorInput, 
        added: new Date(),
        id: crypto.randomUUID(),
    });
    res.redirect("/");
});

module.exports = indexRouter;