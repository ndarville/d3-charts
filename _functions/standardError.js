// Returns standard error for percentage share of n respondents.
// se(0.5, 1000) -> 0,0158 = 1.58%
function se(p, n) {
    p = parseFloat(p);
    return Math.sqrt(p*(1-p)/n);
}

// Returns se with 95% confidence instead of 68%
// se95(0.5, 1000) -> 0.03099 = 3.099%
function se95(p, n) { return se(p, n) * 1.96; }
