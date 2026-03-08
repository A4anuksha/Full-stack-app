import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from "fs";
// var qr = require('qr-image');


inquirer
  .prompt([
    {
    message:"Type in your URL:",
    name:"URL",
    },
  ])
  .then((answers) => {
    const url = answers.URL;

     let fileNamePart = url
      .replace(/^https?:\/\//, "")  // remove http:// or https://
      .replace(/^www\./, "")        // remove www.
      .replace(/\..+$/, "")          // remove everything after first dot
      .replace(/[^a-zA-Z0-9]/g, "_"); // replace illegal characters with _

    const fileName = `qr_${fileNamePart}.png`;

    const qr_png = qr.image(url, { type: "png" });
    qr_png.pipe(fs.createWriteStream(fileName));

    console.log(`✅ QR generated: ${fileName}`);


    
    fs.appendFileSync("URL.text", url+ "\n");

    console.log("✅ QR code generated successffully!");

  })
  .catch((error) => {
    console.error(error);
  });
/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/





