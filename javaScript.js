const currencyButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".select-currency-to-converted")
const currencySelectConvert = document.querySelector(".select-currency-to-convert")

function convertValues () {
const inputCurrency = document.querySelector(".input-value").value
const currencyValueConvert = document.querySelector(".currency-value-to-convert")
const currencyValueConverted = document.querySelector(".currency-value")
console.log(currencySelect.value)
console.log(currencySelectConvert.value)

const dolarToday = 4.98
const euroToday = 5.39
const libraToday = 6.30

//CONVERTENDO O REAL //

if(currencySelectConvert.value == "real-convert") {
    currencyValueConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency" , 
        currency: "BRL"
    }).format(inputCurrency)
    
    }

if(currencySelectConvert.value == "dolar-convert") {
    currencyValueConvert.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency" , 
        currency: "USD"
    }).format(inputCurrency)
    
    }

if(currencySelect.value == "real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency" ,
        currency: "BRL"
    }).format(inputCurrency)
    }

if(currencySelect.value == "dolar") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency" , 
        currency: "USD"
    }).format(inputCurrency / dolarToday)
    
    }


if(currencySelect.value == "euro") {
    
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", { 
        style: "currency", 
        currency: "EUR" 
    }).format (inputCurrency / euroToday)
     

    }

    if(currencySelect.value == "libra") {
    
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-IN", { 
            style: "currency", 
            currency: "GBP" 
        }).format (inputCurrency / libraToday)
    }



// CONVERTENDENDO O DOLAR //

if(currencySelectConvert.value == "dolar-convert" && currencySelect.value == "dolar") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
    style: "currency" ,
    currency: "USD"
}).format(inputCurrency)
    }

if(currencySelectConvert.value == "dolar-convert" && currencySelect.value == "real") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency" ,
    currency: "BRL"
}).format(inputCurrency / dolarToday)
}

if(currencySelectConvert.value == "dolar-convert" && currencySelect.value == "euro") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
    style: "currency" ,
    currency: "EUR"
}).format(inputCurrency * 0.92)
}

if(currencySelectConvert.value == "dolar-convert" && currencySelect.value == "libra") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-IN", {
    style: "currency" ,
    currency: "GBP"
}).format(inputCurrency * 0.78)
}

//CONVERTENDO O EURO//

if(currencySelectConvert.value == "euro-convert" && currencySelect.value == "euro") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency" ,
        currency: "EUR"
    }).format(inputCurrency)
}

if(currencySelectConvert.value == "euro-convert" && currencySelect.value == "real") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency" ,
        currency: "BRL"
    }).format(inputCurrency/euroToday)
}

if(currencySelectConvert.value == "euro-convert" && currencySelect.value == "dolar") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency" ,
        currency: "USD"
    }).format(inputCurrency * 1.09)
}

if(currencySelectConvert.value == "euro-convert" && currencySelect.value == "libra") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-IN", {
        style: "currency" ,
        currency: "GBP"
    }).format(inputCurrency * 0.85)
}

//CONVERTENDO A LIBRA//

if(currencySelectConvert.value == "libra-convert" && currencySelect.value == "libra") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-IN", {
        style: "currency" ,
        currency: "GBP"
    }).format(inputCurrency)
}

if(currencySelectConvert.value == "libra-convert" && currencySelect.value == "real") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency" ,
        currency: "BRL"
    }).format(inputCurrency / libraToday)
}

if(currencySelectConvert.value == "libra-convert" && currencySelect.value == "dolar") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency" ,
        currency: "USD"
    }).format(inputCurrency * 1.28)
}

if(currencySelectConvert.value == "libra-convert" && currencySelect.value == "euro") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency" ,
        currency: "EUR"
    }).format(inputCurrency * 1.17)
}
}
function changeCurrency() {
    const currencyNameConverted = document.querySelector(".currency-name-converted")
    const currencyImage = document.querySelector(".currency-img")
    

    if(currencySelect.value == "dolar") {
        currencyNameConverted.innerHTML = "Dólar Americano"
        currencyImage.src = "./assest/dolar.png"
    }

    if(currencySelect.value == "euro") {
        currencyNameConverted.innerHTML = "Euro"
        currencyImage.src = "./assest/euro.png"
    }

    if(currencySelect.value == "libra") {
        currencyNameConverted.innerHTML = "Libra"
        currencyImage.src = "./assest/libra.png"
    }

    if(currencySelect.value == "real") {
        currencyNameConverted.innerHTML = "Real Brasileiro"
        currencyImage.src = "./assest/real.png"
    }

    convertValues ()
}

function changeCurrencyConvert() {
    const currencyImageConvert = document.querySelector(".image-currency-convert")
    const currencyNameConvert = document.querySelector(".currency-name-convert")
    
    if(currencySelectConvert.value == "real-convert") {
        currencyNameConvert.innerHTML = "real"
        currencyImageConvert.src = "./assest/real.png"
    }
    
    if(currencySelectConvert.value == "dolar-convert") {
        currencyNameConvert.innerHTML = "dolar"
        currencyImageConvert.src = "./assest/dolar.png"
    }

    if(currencySelectConvert.value == "euro-convert") {
        currencyNameConvert.innerHTML = "euro"
        currencyImageConvert.src = "./assest/euro.png"
    }
    convertValues()
}


currencyButton.addEventListener("click" , convertValues )
currencySelect.addEventListener("change", changeCurrency)
currencySelectConvert.addEventListener("change" , changeCurrencyConvert)
