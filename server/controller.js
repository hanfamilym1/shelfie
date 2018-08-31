
module.exports={
    create: (req, res)=>{
      const db = req.app.get('db')
      const product = req.body
      console.log('its working', product)
      db.create_product().then(result=>
      res.send(result))
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