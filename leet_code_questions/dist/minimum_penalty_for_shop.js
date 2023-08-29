function bestClosingTime(customers) {
    if (!customers.includes('N'))
        return customers.length;
    var minPenalty = Number.MAX_VALUE;
    var minPenaltyDay = customers.length;
    for (var i = 0; i < customers.length; i++) {
        var hourPenalty = 0;
        for (var pre = 0; pre < i; pre++) {
            if (customers[pre] == 'N') {
                hourPenalty += 1;
            }
        }
        for (var post = i; post < customers.length; post++) {
            if (customers[post] == 'Y') {
                hourPenalty += 1;
            }
        }
        if (hourPenalty < minPenalty) {
            minPenaltyDay = i;
            minPenalty = hourPenalty;
        }
    }
    return minPenaltyDay;
}
;
console.log(bestClosingTime('YYYY'));
