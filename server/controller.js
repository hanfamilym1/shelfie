
module.exports={
    create: ()=>{

    },
    read:  (req, res) => {
        const db = req.app.get('db')
        // console.log(db)
        db.getAllProducts().then(Products => {
          res.send(Products)
        })
      },
    update: ()=>{

    },
    delete: ()=>{


    }
}