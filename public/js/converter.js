// ここからコードを書いてください
    const converterForm = document.querySelector(".converter-form");
    const converterInput = document.querySelector(".converter-input");
    const converterFrom = document.querySelector(".converter-from");
    const converterTo = document.querySelector(".converter-to");
    const converterResult = document.querySelector(".converter-result");


const setupConverter = () =>{
    
    const lengthUnit = [
    { name: "meter", base: 1 },
    { name: "kilometer", base: 1000 },
    { name: "centimeter", base: 0.01 },
    { name: "millimeter", base: 0.001 },
    { name: "inch", base: 0.0254 }, 
    { name: "foot", base: 0.3048 },
    { name: "yard", base: 0.9144 },
    { name: "mile", base: 1609.344 }
    ];

    lengthUnit.forEach(item => {
        const option = document.createElement("option");
        option.value = item.base;
        option.textContent = item.name;
        converterFrom.appendChild(option);
    });

    converterFrom.selectedIndex = 0;
    // console.log(converterFrom.selectedIndex);
    // const fromName = converterFrom.value;
    // // const fromName = converterFrom.options[converterFrom.selectedIndex].text;
    // console.log(fromName);

    lengthUnit.forEach(item => {
        const option = document.createElement("option");
        option.value = item.base;
        option.textContent = item.name;
        converterTo.appendChild(option);
    });

    converterTo.selectedIndex = 1;
    
}

const setupSwith = () => {
    const converterInputValue = document.querySelector(".converter-input").value;
    const inputValue = parseFloat(converterInputValue);
    // console.log(inputValue);
    if (isNaN(inputValue)) {
        converterResult.textContent = "Please enter a valid number";
        return;
    }
    const fromValue = converterFrom.value;
    const fromName = converterFrom.options[converterFrom.selectedIndex].text;
    // console.log(converterFrom.selectedIndex);
    // console.log(fromValue);
    // console.log(fromName);

    const toValue = converterTo.value;
    const toName = converterTo.options[converterTo.selectedIndex].text; 
    // console.log(toValue);
    // console.log(toName);

    const resultValue = (inputValue*fromValue)/toValue;
    const fixResultValue = (resultValue.toFixed(3));
    converterResult.textContent = (`${inputValue} ${fromName} = ${fixResultValue} ${toName}`);

    }
    converterForm.addEventListener("input", setupSwith);
    // document.addEventListener("DOMContentLoaded", () => {
    // setupSwith();
    // });



// export default setupConverter;
export {setupConverter, setupSwith};