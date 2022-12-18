const express = require("express");
const app = express();
const port = 8000;


// make sure these lines are above any app.get or app.post code blocks but I dont see them neccecry
// app.use( express.json() );
// app.use( express.urlencoded({ extended: true }) );

// this needs to be below the other code blocks or we can just type thr last line
// app.listen( port, () => console.log(`Listening on port: ${port}`) );

const { faker } = require('@faker-js/faker');
const { application } = require("express");



app.get("/api/users", (req, res) => {
    res.json( {message:"ok"} );
});


const createUser =() => {
    const newUser={
        email:faker.internet.email(),
        password:faker.internet.password(),
        phoneNumber:faker.phone.phoneNumber(),
        firstName:faker.name.firstName(),
        lastName:faker.name.lastName(),
        _id:faker.datatype.uuid(),
    }
    return newUser;
}



app.get("/api/users/new", (req, res) => {
    res.json(createUser());
});


const createCompany =() => {
    return {
        _id:faker.datatype.uuid(),
        name:faker.company.companyName(),
        address:{
            city:faker.address.cityName(),
            state:faker.address.state(),
            zipCode:faker.address.zipCode(),
            country:faker.address.country()
        }
    }
}
const newCompany = createCompany();

app.get("/api/companies/new", (req, res) => {
    res.json( createCompany());
})


app.get("/api/user/company", (req, res) => {
    res.json({user:createUser(),company:createCompany()});
})


app.listen(8000)