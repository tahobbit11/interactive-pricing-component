let costPerMonth = 16.00;
let pricingInterval = "month";

const billingIntervals = (price, int) => {
    let costPerYear = (price * 12) * .75;
    if(int === "month") {
        costPerMonth = price;
        return price
    }
    else {
        price = costPerYear;
        return price
    }
}

let discountText = document.getElementById("discount");
if(window.innerWidth >= 768) {
    discountText.innerHTML = "-25% Discount";
} else {
    discountText.innerText = "-25%";
}

let price = document.getElementById("monthly-cost");
let views = document.getElementById("page-views");
let interval = document.getElementById("interval");
const scrollBarChanges = (value) => {
    switch(value){
        case "4":
            costPerMonth = 36;
            document.getElementById("scroll").setAttribute("value", 4);

            views.innerHTML = "1M ";
            price.innerHTML = "$" + billingIntervals(costPerMonth, pricingInterval).toFixed(2);
            interval.innerHTML = " / " + pricingInterval;
            break;
        case "3":
            costPerMonth = 24;
            document.getElementById("scroll").setAttribute("value", 3);

            views.innerHTML = "500K ";
            price.innerHTML = "$" + billingIntervals(costPerMonth, pricingInterval).toFixed(2);
            interval.innerHTML = " / " + pricingInterval;
            break;
        case "2":
            costPerMonth = 16;
            document.getElementById("scroll").setAttribute("value", 2);

            views.innerHTML = "100K ";
            price.innerHTML = "$" + billingIntervals(costPerMonth, pricingInterval).toFixed(2);
            interval.innerHTML = " / " + pricingInterval;
            break;
        case "1":
            costPerMonth = 12;
            document.getElementById("scroll").setAttribute("value", 1);

            views.innerHTML = "50K ";
            price.innerHTML = "$" + billingIntervals(costPerMonth, pricingInterval).toFixed(2);
            interval.innerHTML = " / " + pricingInterval;
            break;
        case "0":
            costPerMonth = 8;
            document.getElementById("scroll").setAttribute("value", 0);

            views.innerHTML = "10K ";
            price.innerHTML = "$" + billingIntervals(costPerMonth, pricingInterval).toFixed(2);
            interval.innerHTML = " / " + pricingInterval;
            break;
        default:
            break;            
    }
}

document.getElementById("scroll").addEventListener("input", (e) => {
    scrollBarChanges(e.target.value);
})

const priceToggle = (value) => {
    if(value === "year") {
        document.getElementById("toggle").setAttribute("checked", true);
        scrollBarChanges(document.getElementById("scroll").value);
    } else {
        document.getElementById("toggle").setAttribute("checked", false);
        scrollBarChanges(document.getElementById("scroll").value);
    }
}

document.querySelector(".toggle").addEventListener("click", () => {
    if(pricingInterval !== "year") {
        pricingInterval = "year";
    } else {
        pricingInterval = "month";
    }
    priceToggle(pricingInterval);
})

addEventListener("resize", (e) => {
    if(window.innerWidth >= 768) {
        discountText.innerHTML = "-25% Discount";
    } else {
        discountText.innerText = "-25%";
    }
});
