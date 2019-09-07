const { Router } = require('express')
const AccountTable = require('../account/table.')
const Sessopn = require('../account/session')
const { hash } = require('../account/helper')
const { setSession } = require('./helper')

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
         return setSession({ username, res})
    })
    .then(({message}) => res.json({ message }))
     .catch(error => next(error))
})

router.post('./login', (req, res, next) => {
    const { username, password } = req.body

    AccountTable.getAccount({ usernameHash: hash(usernameHash) })
     .then(({ account }) => {
         if (account && account.passwordHash === hash(password)) {
             
            const {sessionId} = account

             return setSession({ username, res, sessionId })
         }else{
             const error = new Error('Incorrect username/password')

             error.statusCode = 409

             throw error
         }
     })
     .then(({ message })=> res.json({ message }))
     .catch(error => next(error))
})

router.get('/logout', (req, res,  next) => {
    const { username } = Session.parse(req.cookies.sessionString)

    AccountTable.updateSessionId({
        sessionId: null,
        usernameHash: hash(username)
    })
    .then(() => {
        res.clearCookie('sessionSring')

        res.json({message: 'Logout Successful'})
    })
    .catch(error => next(error))
})

module.exports = router