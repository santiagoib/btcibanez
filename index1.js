const btcs = [
    { year: 2013, price: 13 },
    { year: 2014, price: 300 },
    { year: 2015, price: 400 },
    { year: 2016, price: 750 },
    { year: 2017, price: 15000 },
    { year: 2018, price: 4000 },
    { year: 2019, price: 7000 },
    { year: 2020, price: 28000 },
    { year: 2021, price: 50000 },
    { year: 2022, price: 16000 }
];

const btcInput = document.getElementById( "btcInput" );
const yearInput = document.getElementById( "yearInput" );
const calculateBtc = document.getElementById( "calculateBtc" );
const result = document.getElementById( "result" );

calculateBtc.addEventListener("click", () => {
    const btc = parseFloat(btcInput.value);
    const year = parseInt(yearInput.value);

    if (isNaN(btc) || btc <= 0) {
    result.innerHTML = "Please enter a positive number of BTC";
    return;
    }

    if (isNaN(year) || year < 2013 || year > 2022) {
    result.innerHTML = "Please enter a year between 2013 and 2022";
    return;
    }

    const btcInfo = btcs.find(b => b.year === year);
    if (!btcInfo) {
    result.innerHTML = "Please enter a valid year";
    return;
    }

    const totalPrice = btc * btcInfo.price;
    result.innerHTML = `The total price of ${btc} BTC in ${year} is: $${totalPrice}`;
});
