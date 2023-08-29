function bestClosingTime(customers: string): number {
    if (!customers.includes('N')) return customers.length;
    let minPenalty: number = Number.MAX_VALUE;
    let minPenaltyDay: number = customers.length;
    for (let i = 0; i < customers.length; i++) {
        let hourPenalty: number = 0;
        for (let pre = 0; pre < i; pre++) {
            if (customers[pre] == 'N') {
                hourPenalty += 1;
            }
        }
        for (let post = i; post < customers.length; post++) {
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
};

console.log(bestClosingTime('YYYY'));