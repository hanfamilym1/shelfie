
module.exports={
    create: (req, res)=>{
      const db = req.app.get('db')
      const product = req.body
      let {id, name, price, img} = product
      console.log('name', name, 'price', price, 'img', img)
      db.create_product(name,price,img).then(result=>
       res.status(200).send(result[0])).catch(err=>console.log(err))
     
      },
    read:  (req, res) => {
        const db = req.app.get('db')
        // console.log(db)
        db.get_inventory().then(Products => {
          res.status(200).send(Products)
        })
      },
    update: ()=>{
      const db = req.app.get('db')


    },
    delete: (req,res)=>{
      const db = req.app.get('db')
      const {id} = req.params
      console.log(req)

      // db.delete_product(id).then(result=>
      // res.send(result))
    }
}