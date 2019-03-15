module.exports = {
    addEmployee: (req, res) => {
        const db = req.app.get('db')
        const {firstName, lastName, emailAddress, phoneNumber, salary} = req.body
        db.add_employee({firstName, lastName, emailAddress, phoneNumber, salary}).then(dbRes => {
            res.status(200).send(dbRes)
        }).catch(err => console.log(err))
    }
}
