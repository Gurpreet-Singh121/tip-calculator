window.onload = () => {
    document.querySelector(".preload").removeAttribute("class");
}
document.addEventListener("touchstart", function(){}, true);

const DATASET = document.querySelector("#percentage").dataset;
const PERCENT_17 = document.querySelector("#percent17");
const PERCENT_18 = document.querySelector("#percent18");
const PERCENT_19 = document.querySelector("#percent19");
const PERCENT_20 = document.querySelector("#percent20");
const PERCENT_OTHER = document.querySelector("#percentOther");
const OTHER_VALUE = document.querySelector(".otherValue");
const ORIGINAL_AMOUNT = document.querySelector("#originalAmount");
const TIP_INSIDE = document.querySelector("#tipInside");
const TOTAL_INSIDE = document.querySelector("#totalAmount");
const VALID_AREA = document.querySelector("#validValue");
const RANGE_SLIDER = document.querySelector("#rangeValue");
const RANGE_ACTUAL_VAL = document.querySelector("#rangeActualValue");
let currentPercent = DATASET.current;
let tip;
let totalAmount;

if (currentPercent == "17") {
    PERCENT_17.classList.add("selected");
    PERCENT_18.classList.remove("selected");
    PERCENT_19.classList.remove("selected");
    PERCENT_20.classList.remove("selected");
    PERCENT_OTHER.classList.remove("selected");
}

PERCENT_17.addEventListener("click", function(e) {
    changeSelected("17")
});
PERCENT_18.addEventListener("click", function(e) {
    changeSelected("18")
});
PERCENT_19.addEventListener("click", function(e) {
    changeSelected("19")
});
PERCENT_20.addEventListener("click", function(e) {
    changeSelected("20")
});
PERCENT_OTHER.addEventListener("click", function(e) {
    changeSelected("other")
});
ORIGINAL_AMOUNT.addEventListener("keyup", testing);
RANGE_SLIDER.addEventListener("input", range);

function range(e) {
    RANGE_ACTUAL_VAL.innerHTML = RANGE_SLIDER.value + "%";
    currentPercent = RANGE_SLIDER.value;
    testing();
}

function testing(e) {
    if (ORIGINAL_AMOUNT || ORIGINAL_AMOUNT != 0) {
        tip = ORIGINAL_AMOUNT.value  * (currentPercent / 100);
        if ((tip != 0) && !(isNaN(tip))) {
            totalAmount = parseFloat(ORIGINAL_AMOUNT.value) + tip;
            tip = parseFloat(Math.round(tip * 100) / 100).toFixed(2);
            totalAmount = parseFloat(Math.round(totalAmount * 100) / 100).toFixed(2);
            TIP_INSIDE.innerHTML = tip;
            TOTAL_INSIDE.innerHTML = totalAmount;
            VALID_AREA.classList.add("true");
        }
        else {
            TIP_INSIDE.innerHTML = "";
            TOTAL_INSIDE.innerHTML = "";
            if(VALID_AREA.classList.contains("true")) {
                VALID_AREA.removeAttribute("class");
            }
        }
    }
}

function changeSelected(percentage) {
    DATASET.current = percentage;
    currentPercent = percentage;
    if (percentage == "other") {
        currentPercent = RANGE_SLIDER.value;
    }
    testing();
    if (currentPercent == "17") {
        PERCENT_17.classList.add("selected");
        PERCENT_18.classList.remove("selected");
        PERCENT_19.classList.remove("selected");
        PERCENT_20.classList.remove("selected");
        PERCENT_OTHER.classList.remove("selected");
    }
    if (currentPercent == "18") {
        PERCENT_17.classList.remove("selected");
        PERCENT_18.classList.add("selected");
        PERCENT_19.classList.remove("selected");
        PERCENT_20.classList.remove("selected");
        PERCENT_OTHER.classList.remove("selected");
    }
    if (currentPercent == "19") {
        PERCENT_17.classList.remove("selected");
        PERCENT_18.classList.remove("selected");
        PERCENT_19.classList.add("selected");
        PERCENT_20.classList.remove("selected");
        PERCENT_OTHER.classList.remove("selected");
    }
    if (currentPercent == "20") {
        PERCENT_17.classList.remove("selected");
        PERCENT_18.classList.remove("selected");
        PERCENT_19.classList.remove("selected");
        PERCENT_20.classList.add("selected");
        PERCENT_OTHER.classList.remove("selected");
    }
    if (percentage == "other") {
        PERCENT_17.classList.remove("selected");
        PERCENT_18.classList.remove("selected");
        PERCENT_19.classList.remove("selected");
        PERCENT_20.classList.remove("selected");
        PERCENT_OTHER.classList.add("selected");
        OTHER_VALUE.classList.add("activeOther");
    } else {
        OTHER_VALUE.classList.remove("activeOther");
    }
}