const Dragon = require('./dragon')

const smoag = new Dragon({
    nickname: 'Smog' ,
    birthdate: new Date(),
    traits: [
        {traitType: 'backgroundColor', traitValue: 'green'}
    ]
})

setTimeout( () => {
    const aaa = new Dragon()
    console.log(aaa)
}, 3000 )

setTimeout( () => {
    const aa = new Dragon()
    console.log(aa)
}, 3000 )

console.log(smoag)