const faker = require('faker')

function testProducts(){

let products=[]

for (let i=0;i<5;i++){
let randomProduct={
    id:faker.datatype.uuid(),
    nombre:faker.name.firstName(),
    precio:faker.commerce.price(1000,150000,0,'$'),
    url:faker.image.business(300)}
    products.push(randomProduct)
}
return products
}

module.exports={testProducts}