const express = require('express');
//const path = require('path');
const generatePassword = require('password-generator');
const app = express();

//read in json and parse json
app.use(express.json());

// Put all API endpoints under '/api'
app.get('/api/passwords/', (req, res) => {
  
  const count = 5;
  
  // Generate some passwords
  const passwords = Array.from(Array(count).keys()).map(i =>
    generatePassword(12, false)
  )
    const MY_POD_NAME = process.env.MY_POD_NAME;
    const MY_POD_IP = process.env.MY_POD_IP;

    let date_ob = new Date();
    //current day
	let date = ("0" + date_ob.getDate()).slice(-2);

	// current month
	let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);

	// current year
	let year = date_ob.getFullYear();

	// current hours
	let hours = date_ob.getHours();

	// current minutes
	let minutes = date_ob.getMinutes();

	// current seconds
	let seconds = date_ob.getSeconds();
	  // Return them as json
	  //res.status(200).json(passwords);
	  // prints date & time in YYYY-MM-DD HH:MM:SS format
	console.log("date: "+year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds+" MY_POD_IP: "+MY_POD_IP+", MY_POD_NAME:"+MY_POD_NAME+" ALL variables: "+JSON.stringify(process.env));
  res.status(200).send("Update from container, "+JSON.stringify({ date: "date: "+year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds, passwords: passwords,
                                                                  mypodip: MY_POD_IP, mypodname: MY_POD_NAME}));
  

  console.log(`Sent ${count} passwords and received`);
});

app.get('/', (req, res) => {
  
  res.status(200).send("quick response on home api endpoint");
  // Return them as json
 // res.status(200).json(passwords);
  

  console.log(`hit home enpoint`);
});
app.post('/api/post', (req, res) => {
  
  // Return them as json
  const { logo } = req.body;
  res.status(201).send({ server_response: "your json logo was: "+logo});
  
  console.log(`received post request body logo: ${logo}`);
});
// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
//app.get('*', (req, res) => {
//  res.sendFile(path.join(__dirname+'/client/build/index.html'));
//});

const port = process.env.PORT || 80;
app.listen(port);

console.log(`Password generator listening on ${port}`);