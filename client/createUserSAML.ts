import axios from 'axios';
import dotenv from "dotenv";

dotenv.config();

const apiUrl = process.env.SAMLAPIURL || "https://www.example.com";
const apiKey = process.env.APIKEY || "THISISAKEY";

const createUserDbArr = [
  {
    adminType: 0,
    clientLicenseType: 100,
    email: "bob@bob@gcorp.com.com",
    firstName: "Robert",
    inheritanceType: "CreateUserSamlObject",
    lastName: "Bobbert",
    principalName: "bob.bobbert",
    tenantId: process.env.TENANTID!,
    usereName: "bob.bobbert"
  },
  {
    adminType: 0,
    clientLicenseType: 100,
    email: "james@gcorp.com",
    firstName: "James",
    inheritanceType: "CreateUserSamlObject",
    lastName: "Smithy",
    principalName: "james.smithy",
    tenantId: process.env.TENANTID!,
    usereName: "bob.james.smithy"
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