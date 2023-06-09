const {updateProduct, createProduct} = require('../../src/products/products.controllers')

const {describe, it} = require('mocha')
const {assert} = require('chai')

describe('Testing de los controladores para modificar products', () => {
    it('Deberia retornar un null si le pasamos un id incorrecto', (done) => {
        
        updateProduct(1252234, {
            description: 'lorem lorem'
        })
            .then(data => {
                assert.equal(data, null)
                done()
            })
            .catch(done)
    })
    it('Deberia retornar el producto actualizado si le pasamos un id correcto', (done) => {
        createProduct({
            name: "Iphone 13",
            description: "Lorem",
            price: 1000.00,
            stock: 10
        })
            .then((data1) => {
                updateProduct(data1.id,{
                    description: "Lorem Ipsum",
                    price: 999.99,
                    stock: 9
                })
                    .then(data => {
                        assert.equal(data.description, "Lorem Ipsum")
                        assert.equal(data.price, 999.99)
                        assert.equal(data.stock, 9)
                        done()
                    })
                    .catch(done)
            })
            .catch(done)

    })
})



