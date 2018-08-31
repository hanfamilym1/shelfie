
module.exports={
    create: (req, res)=>{
      const db = req.app.get('db')
      const product = req.body
      let {name, price, img} = product
      console.log('name', name, 'price', price, 'img', img)
      db.create_product(name,price,img).then(result=>
       res.send(result[0])).catch(err=>console.log(err))
     
      },
    read:  (req, res) => {
        const db = req.app.get('db')
        // console.log(db)
        db.get_inventory().then(Products => {
          res.send(Products)
        })
      },
    update: ()=>{

    },
    delete: ()=>{


    }
}