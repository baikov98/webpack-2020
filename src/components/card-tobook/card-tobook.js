import './card-tobook.scss'


$(document).ready(() => {
    $('.card-tobook').click(() => {
        let price = $('.card-tobook').attr('data-price')
        let days = $('.card-tobook').attr('data-days')
        let addprice = $('.card-tobook').attr('data-addprices')
        let prnum = price*days
        let makeStr = (num) => {
            let sum1 = String(num)
            let sum1str = sum1.split('').reverse()
            sum1str.splice(3, 0, ' ')
            sum1str.reverse()
            let sum2str = sum1str.join('')
            return sum2str
        }
        let sumres = makeStr(prnum)
        let allsum = makeStr(+prnum + +addprice)
        console.log(allsum)

        $('.card-tobook__money-sum').children('span').html(sumres)
        $('.card-tobook__sum').children('span').html(allsum)

        console.log(price)
        console.log(days)
        console.log(addprice)

    })
})