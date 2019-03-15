module.exports = {
    getStaff: (req, res) => {
        const db = req.app.get('db')

        db.get_staff().then(staff => {
            res.status(200).send(staff)
        }).catch(err => {
            res.sendStatus(500).send(err)
        })
    },
    updateStaff: (req, res) => {
        const db = req.app.get('db')

        db.update_staff().then( () => res.sendStatus(200)).catch(err => {
            res.sendStatus(500).send(err)
        })
    },
    deleteStaff: (req, res) => {
        const db = req.app.get('db')
        let {id} = req.params

        db.delete_staff([id]).then(staff => {
            res.status(200).send(staff)
        }).catch(err => {
            res.sendStatus(500).send(err)
        })
    }
}