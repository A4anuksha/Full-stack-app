import bodyParser from "body-parser";
import express from "express";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended:true}));

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

app.get("/" , (req,res)=> {
  res.send(`
  <html>
    <body>
      <form method = "POST" action = "/submit">
        Enter Pet Name:
        <input type="text" name="pet">

        Enter Street Name:
        <input type="text" name="street">

        <br/>

        <button type="submit">Submit</button>
      </form>
    </body>
  </html>`);
});

app.post("/submit", (req,res,next)=>{
  var petName = req.body.pet;
  var streetName = req.body.street;

  console.log("petName = " +petName);
  console.log("streetName = " +streetName);

  var brandName = petName + streetName;
  res.send(`<h2>Your Brand Name is : <h2>
            <h1> ${brandName} </h1>`);
  next();
});