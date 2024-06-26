import axios from 'axios';
import dotenv from "dotenv";
import {CreateUserDbObject} from "../model/createUserDbObject"

dotenv.config();

const apiUrl = process.env.APIURL || "https://www.example.com";
const apiKey = process.env.APIKEY || "THISISAKEY";

const data = {
  lastName: "Smithy",
  userName: "bob",
  firstName: "Robert",
  password: "password",
  tenantId: process.env.TENANTID!, 
  adminType: 0,
  clientLicenseType: 100,
  email: "bob@bob.com",
  inheritanceType: "CreateUserDbObject"
};

axios.post(apiUrl, data, {
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