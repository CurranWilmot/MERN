const express = require("express")
const {faker} = require("@faker-js/faker");

const app = express()

app.use(express.json());

app.use(express.urlencoded({extended: true}));


class User{
    constructor(){
        this.password = faker.internet.password()
        this.email = faker.internet.email()
        this.phoneNumber = faker.phone.number()
        this.lastName = faker.name.lastName()
        this.firstName = faker.name.firstName()
        // this._id = 
    }
}

class Company{
    constructor(){
        // this._id
        this.name = faker.company.companyName()
        this.address = {
            "street": faker.address.street(),
            "city": faker.address.city(),
            "state": faker.address.state(),
            "zipCode": faker.address.zipCode(),
            "country": faker.address.country()
        }
    }
}



const hello = [
    {greeting: "Hello"}
]


//POST


//GET
app.get("/fakeapi/users/new", (request, response) =>{
    const randomUser = new User()
    response.json(randomUser)
})

app.get("/fakeapi/companies/new", (request, response) =>{
    const randomCompany = new Company()
    response.json(randomCompany)
})

app.get("/fakeapi/user/company", (request, response) =>{
    const randomCompany = new Company()
    const randomUser = new User()
    response.json([randomUser, randomCompany])
})

//PUT


//DELETE


app.listen(8000, () => console.log("Listening to port :8000"))