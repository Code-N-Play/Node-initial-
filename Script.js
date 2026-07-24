import express from 'express'

const app = express()

app.set("view engine" , "ejs"); // set up line hai isko add krna must hai 

app.use(express.static('./public')); // static files ki setup line hai must hai (yad ho to aisa hi kuch hum likhte the midle ware banate time ) ""./public" path hai ki static files kaha hai 




app.get("/", (req, res) => {
  res.render("index") // views folder ke ander ki ejs (html) file ko show karne ke liye res.render ka use karo
})

app.get("/profile", (req, res) => {
    res.render("profile" ,{name:"Neeraj"} ) // comma ke baad {name: "neeraj"} aisa syntex likhne pr jaha bhi profile file main <%= name %> likha hoga weha "" iske ander ki value print ho jaegi 
})

app.get("/profile/neeraj", (req, res) => { 
  res.send("Hello from neeraj ")
})

// error page for error handling     iske liye ek naya rout banao error nam se or uski tab ejs file bhi bana lena or res.send ki jagah throw Error ka use karo or error likh do 
app.get("/error", (req, res, next)=>{
  throw Error ("something went wrong ");
})






// dynamic routing ...........

// app.get("/profile/:username", (req, res) => { 
//  res.send(`Hello from ${req.paramps.username} `)
// })



app.get("/profile/:username", (req, res) => { // url ke common part ko same likho or jaha se url change ho reha hai weha  :username likho .................... yeha username variable hai jo url ke next part ko contain krta hai 
  res.send(`Hello from ${req.params.username}`) // response mai template litral ka use karo or ${req.paramps.username} likho "req" ka matlab requst url hai "params" jo variable banaya hai usko kahte hai or "username" veriable name hai jo mai print krwana chahta hu 
})



 // express error handlare ka code online mile jaega google pr search karo "express error handlar" code ko copy karo or main backend file mai "app.use()" ke ander paste kr do 

app.use(function errorHandler(err, req, res, next) {
  if (res.headersSent) {
    return next(err);
  }
  res.status(500);
  res.render('error', { error: err }); // jo error weha likhoge wo is comma ke baad {error: err} aisa syntex likhne pr jaha bhi profile file main <%= err %> likha hoga weha "" iske ander ki value print ho jaegi same as uspr jaisa kiya tha 
})



// for run the code 
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000")
})