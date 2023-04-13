// This is not a generic code only run for pan card
const Tesseract = require("tesseract.js");
// const sharp = require("sharp");
// const image = sharp("Pan_Card.jpg");
// Preprocess the image
// image
//   // .resize(320, 240)
//   .toBuffer()
//   .then((img) => {
Tesseract.recognize(
  // this first argument is for the location of an image it can be a //url like below or you can set a local path in your computer
  "./Pan_Card.jpg",
  // this second argument is for the language
  "eng",
  {
    psm: 6,
    // logger: (m) => console.log(m),
  }
).then(({ data: { text } }) => {
  // split the extracted text into lines
  const lines = text.split("\n");
  // console.log("lines==>", lines);
  // iterate over each line to find the line containing the name
  const result = {
    idType: "panCard",
    idNumber: lines[7].substring(0, 10),
    info: {
      name: lines[3],
      fatherName: lines[4],
      dob: lines[5],
    },
  };
  console.log(JSON.stringify(result));
});
// });
