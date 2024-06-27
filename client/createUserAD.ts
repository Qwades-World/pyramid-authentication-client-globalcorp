import axios from 'axios';
import dotenv from "dotenv";

dotenv.config();

const apiUrl = process.env.ADAPIURL || "https://www.example.com";
const apiKey = process.env.APIKEY || "THISISAKEY";

const createUserDbArr = [
  {
    adDomainName: "gcorp.com",
    clientLicenseType: 100,
    userName: "bob.bobbert",
    inheritanceType: "CreateUserAdObject"
  },
  {
    adDomainName: "gcorp.com",
    clientLicenseType: 100,
    userName: "john.smith",
    inheritanceType: "CreateUserAdObject"
  },
]

axios.post(apiUrl, createUserDbArr, {
  headers: {
    paToken: apiKey
  }
})
  .then(response => {
    console.log('Success:', response.data);
  })
  .catch(error => {
    console.error('Error:', error);
  });