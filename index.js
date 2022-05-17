const express = require('express');
//const path = require('path');
const generatePassword = require('password-generator');
const app = express();
const fs = require("fs");
const path = require("path");


//read in json and parse json
app.use(express.json());
//make html files available
app.use(express.static('templates'));
	// get env's
	const MY_POD_NAME = process.env.MY_POD_NAME;
	const MY_POD_IP = process.env.MY_POD_IP;
	//get time
	var a = Math.round((new Date()).getTime() / 1000);//unix timestamp
	//console.log("a " + a);//test
	var newdate = new Date(a*1000);
	var hour = newdate.getHours();
	var min = newdate.getMinutes();
	var sec = newdate.getSeconds();
	const timestamp = hour+":"+min+":"+sec+" "+ (hour >= 12 ? "PM" : "AM");
	//const timestamp = a ; 
	console.log("my root dir "+path.resolve());	//test
  var myJson = { "MY_POD_IP": MY_POD_IP, "MY_POD_NAME": MY_POD_NAME, "timestamp":timestamp };
  ///* write to file */
	fs.writeFile(path.resolve()+"/templates/data.js", "var myJson = "+JSON.stringify(myJson)+";", function(err) {
		if(err) {
			return console.log("file error: "+err);
		}
		console.log("The file was saved!");
	}); 
// Put all API endpoints under '/api'
app.get('/', (req, res) => {
	  // Return them as json
	  //res.status(200).json(passwords);
	  // prints date & time in YYYY-MM-DD HH:MM:SS format
  //console.log("my app path: "+app.get('appPath'));//test
  
	
  //res.status(200).sendFile(path.resolve()+"/templates/index.html");
  //res.status(200).sendFile(path.resolve()+"/templates/data.json");

  
  console.log(`hit home enpoint`);
});

app.get('/favico.ico', (req, res) => {
    res.sendStatus(404);
});

const port = process.env.PORT || 80;
app.listen(port);

console.log(`Password generator listening on ${port}`);