
module.exports={
    create: ()=>{

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