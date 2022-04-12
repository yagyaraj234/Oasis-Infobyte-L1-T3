const calcTemperature = () => {

    const tempNumber = document.getElementById('temp').value;
    const valueSelected = document.getElementById('value');
    const tempValue = value.options[valueSelected.selectedIndex].value;

    const celToFeh = (cel) => {
        let farenheit = Math.round((cel * 9 / 5) + 32);
        return farenheit;
    }

    const fehToCel = (feh) => {
        let celsius = Math.round((feh - 32) * 5 / 9);
        return celsius;
    }

    let result;

    if (tempValue == 'cel') {
        result = celToFeh(tempNumber);
        document.getElementById('finalResult').innerHTML = `=  ${result}°Fahrenheit`;
    }
    else {
        result = fehToCel(tempNumber);
        document.getElementById('finalResult').innerHTML = `=  ${result}°Celsius`;
    }
} 
