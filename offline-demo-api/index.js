var express = require("express");
var app = express();
app.listen(3000, () => {
 console.log("Server running on port 3000");
});
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.get('/case/:caseId', (req, res) => {
    res.json( {
  "id": "FX190116510026590A",
  "case": {
    "customerId": "DN141002080255101A",
    "caseType": "ANNUAL_RENEWAL",
    "caseCurrency": "NOK",
    "customerGroupName": "XXL ASA - Gruppen",
    "caseDate": "20190123",
    "caseStatus": "SG",
    "name": "Test Credit case",
    "riskpoint": {
      "name": "XXL ASA - Gruppen",
      "onWatchList": "true",
      "debtorName": "XXL ASA - Gruppen"
    }
  }
})
})