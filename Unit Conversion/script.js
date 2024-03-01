
let inputValue = document.getElementById("num-convert-input")
let btnConvert = document.getElementById("btn-convert")
let btnReset = document.getElementById("btn-reset")
let convertContain = document.getElementById("convert-container")

const convert1 = document.querySelector(".conversion-1")
const convert2 = document.querySelector(".conversion-2")
const convert3 = document.querySelector(".conversion-3")


const convertLength = {
    meterToFeet: 3.281,
    feetToMeter: 1 / 3.281
}

const convertVolume = {
    literToGallon: 0.264,
    gallonToLiter: 1 / 0.264
}

const convertMass = {
    kilogramToPound: 2.204,
    poundToKilogram: 1 / 2.204
}

hardCoded = {
    conversion1: convert1.innerHTML,
    conversion2: convert2.innerHTML,
    conversion3: convert3.innerHTML
}

btnConvert.addEventListener("click", () => {
     const inputField = parseFloat(inputValue.value)

     const imperialLength = {
        meterToFeet: inputField * convertLength.meterToFeet,
        feetToMeter: inputField * convertLength.feetToMeter
     }

     const imperialVolume = {
        literToGallon: inputField * convertVolume.literToGallon,
        gallonToLiter: inputField * convertVolume.gallonToLiter
     }

     const imperialMass = {
        kilogramToPound: inputField * convertMass.kilogramToPound,
        poundToKilogram: inputField * convertMass.poundToKilogram

     }

    convert1.innerHTML = 
    `<h3 style="margin-bottom: .5rem"> Length (Meter/Feet) </h3>
     <p style="font-size: 18px"> ${inputField} Meters = ${imperialLength.meterToFeet.toFixed(3)} Feet
     <br />
     ${inputField} Feet = ${imperialLength.feetToMeter.toFixed(3)} Meters </p>`;

    convert2.innerHTML = 
    `<h3 style="margin-bottom: .5rem"> Volume (Liters/Gallons) </h3>
     <p style="font-size: 18px"> ${inputField} Liters = ${imperialVolume.literToGallon.toFixed(3)} Gallons
     <br />
     ${inputField} Gallons = ${imperialVolume.gallonToLiter.toFixed(3)} Liters </p>`;

    convert3.innerHTML = 
    `<h3 style="margin-bottom: .5rem"> Mass (Kilograms/Pounds) </h3> 
    <p style="font-size: 18px"> ${inputField} Kilograms = ${imperialMass.kilogramToPound.toFixed(3)} Pounds
    <br />
    ${inputField} Pounds = ${imperialMass.poundToKilogram.toFixed(3)} Kilograms </p>`;
});

btnReset.addEventListener("click", () => {
    inputValue.value = " "
    convert1.innerHTML = hardCoded.conversion1
    convert2.innerHTML = hardCoded.conversion2
    convert3.innerHTML = hardCoded.conversion3
});





