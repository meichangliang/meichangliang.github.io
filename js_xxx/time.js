//当前日期 2018-06-15
var getNowDate = function () {
    let a = moment().format('YYYY-MM-DD')
    return a;
}

//当前时间 16:46:28
var getNowTime = function () {
    let a = moment().format('HH:mm:ss')
    return a;
}

//当前是今年的第几周
var getWeekFromYear = function () {
    //计算今年已过去多少周
    // var now = moment().startOf('isoWeek').unix()
    // var startYear = moment().startOf('year').unix()
    // var r = now - startYear;
    // var daySec = 24*60*60;
    // var weekSec = daySec*7;
    // return r/weekSec
    return moment().isoWeek()
}
//当前是今年的第几天
var getDayFromYear = function () {
    //计算今年已经过去多少天
    // var now = moment().startOf('day').unix()
    // var startYear = moment().startOf('year').unix()
    // var r = now - startYear;
    // var daySec = 24*60*60;
    // return r/daySec
    return moment().dayOfYear()
}

//今年总周数
var getWeekInYear = function () {
    return moment().isoWeeksInYear()
}

//今年总天数
var getDatInYear = function () {
    var daySec = 24 * 60 * 60;
    var yearStart = moment().startOf("year").unix();
    var yearEnd = moment().endOf("year").unix() + 1;
    var r = yearEnd - yearStart;
    return r / daySec
}
//本周开始日期
var getWeekStart = function () {
    let a = moment().startOf("isoWeek");
    return a.format('YYYY-MM-DD');
}
//本周结束日期
var getWeekEnd = function () {
    let a = moment().endOf("isoWeek");
    return a.format('YYYY-MM-DD');
}

//本周的日历
var getWeekDate = function () {
    var start = moment().startOf("isoWeek").unix();
    var end = moment().endOf("isoWeek").unix();
    var daySec = 24 * 60 * 60;
    var i = 0;
    var whileDate = start;
    var Str = "";
    while (whileDate < end) {
        Str += moment(whileDate * 1000).format('M/DD') + "  " +weekStr( moment(whileDate * 1000).isoWeekday() ) + "<br><br>"
        whileDate = moment((whileDate + daySec) * 1000).unix();
    }
    return Str
}

function weekStr(num) {
    var key = Number(num)
    switch (key) {
        case 1:
            return "星期一";
            break;
        case 2:
            return "星期二";
            break;
        case 3:
            return "星期三";
            break;
        case 4:
            return "星期四";
            break;
        case 5:
            return "星期五";
            break;
        case 6:
            return "星期六";
            break;
        case 7:
            return "星期日";
            break;
        default:
            return key;
            break;
    }
}