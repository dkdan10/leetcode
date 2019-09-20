/**
 * @param {number} day
 * @param {number} month
 * @param {number} year
 * @return {string}
 */


const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

var dayOfTheWeek = function(day, month, year) {
    date = new Date(year, month - 1, day)
    return days[date.getDay()]
};