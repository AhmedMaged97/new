const validator = require("validator")
const chal = require("chalk")
const deal = require ("./dealWithJson")

const add = (userData)=>{
    const users = deal.read()
    const checkEmail = users.find(em => em.email == userData.email)
    if (checkEmail) return console.log("email repeated change it")
    userData.id= Date.now()
    users.push(userData)
    deal.write(users)
    console.log("user Added")

}
const showAll = ()=>{
    const users = deal.read()
    console.log(users)
    users.forEach(user=>{
        console.log(chal.green(`id: ${user.id} - name: ${user.name} - age: ${user.age} - email: ${user.email} `))
})
}
const showSingle= (userId)=> {
        const users = deal.read()
        const user = users.find(u=> u.id== userId)
        if(user) console.log(user)
        else console.log(chal.red('not found'))
}
const del = ()=> {

}
const edit = ()=>{

}
module.exports = { add , showAll, showSingle , del, edit}