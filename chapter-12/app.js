// Core Module
const path = require('path');

// External Module
const express = require('express');

//Local Module
const userRouter = require("./routes/userRouter")
const {hostRouter} = require("./routes/hostRouter")
const rootDir = require("./utils/pathUtil");

const app = express();

app.use(express.static(path.join(rootDir, 'public')))

app.set('view engine', 'ejs');  // set file which you want to render extension
app.set('views', path.join(rootDir, 'views'));  // where it gt the file from views 


app.use(express.urlencoded());
app.use(userRouter);
app.use("/host", hostRouter);



app.use((req, res, next) => {
  res.status(404).render('404', {pageTitle: 'Page Not Found'});
})

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});