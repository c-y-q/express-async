const Mock = require('mockjs');
const Random = Mock.Random;
const provice = Random.province();
const city = Random.city(provice);
const county = Random.county();
const letter = Random.pick(['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'])
const idd = Random.id();
const name = Random.cname();
const address = Random.region();
const prefix = ['京','冀','渝','赣','晋','沪','苏']
const pickLetter = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
1,2,3,4,5,6,7,8,9,0]

const carctl = Mock.mock({
    'list|10':[{
        deviceSN:Random.id(),
        firstTime:'2019-06-07',
        tid:Random.id(),
        //name:'@name()',
        letter:Random.pick(prefix)+Random.pick(pickLetter),
        address:'@county(true)',
        operateTime:'2019-06-0'+Random.pick([1,2,3,4,5,6,7])//'@date'
    }]
})

console.log(8,carctl);