const Session = require('../account/session')
const AccountTable = require('../account/table')
const {hash} = require('../account/helper')

const setSession = ({username, res}) => {
    return new Promise((resolve, reject) => {

        const session = new Session({username})
        const sessionString = session.toString()

        AccountTable.updateSession({
            sessionId: sessionId , 
            usernameHash: hash(username)
            })
            .then(() => {
                res.cookie('sessionString', sessionString, {
                    expire: Date.now() + 3600000,
                    httpOnly: true  //prevent javascript from stealing cookie(browser functionality)
                    //secure: true //must use with https
                 })

                 resolve({ message: 'Session Created' })
            })
            .catch(error => reject(error))
    })
}

module.exports = { setSession }