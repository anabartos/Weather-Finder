export const formatTemperature = (temperature) => {
    const kelvin = 273.15;
    return parseInt((temperature - kelvin).toString());
};
