const Dragon = require('./dragon')

const smoag = new Dragon({
    nickname: 'Smoag' ,
    birthdate: new Date()
})

setTimeout( () => {
    const aaa = new Dragon()
    console.log(aaa)
}, 3000 )

console.log(smoag)