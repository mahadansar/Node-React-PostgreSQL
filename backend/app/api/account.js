const { Router } = require('express')
const AccountTable = require('../account/table.')
const { hash } = require('../account/helper')
const Session = require('../account/session')

const router = new Router()

router.post('/signup', (req, res, next) => {
    const { username,password } = req.body
    const usernameHash = hash(username)
    const passwordHash = hash(password)

    AccountTable.getAccount({ usernameHash })
     .then(({ account }) => {
         if(!account){
            return AccountTable.storeAccount({ usernameHash, passwordHash})
         } else {
             const error = new Error('This username is already taken')

             error.statusCode = 409

             throw error
         }
     })
     .then(() => {
         const session = new Session({username})
         const sessionString = session.toString()
         
         res.cookie('sessionString', sessionString, {
             expire: Date.now() + 3600000,
             httpOnly: true  //prevent javascript from stealing cookie(browser functionality)
             //secure: true //must use with https
         })

          res.json({ message: 'success!' 
        })})

     .catch(error => next(error))
})

module.exports = router