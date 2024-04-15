// 45 --- Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.






function store_car_info(manufacturer: string, model: string, ...details: { [key: string]: any }[]): { manufacturer: string, model: string, details: { [key: string]: any } } {
    let car_info: { manufacturer: string, model: string, details: { [key: string]: any } } = {
        manufacturer: manufacturer,
        model: model,
        details: {}
    };

    // Store additional details :

    for (let detail of details) {
        for (let key in detail) {
            car_info.details[key] = detail[key];
        }
    }

    return car_info;
}

// Calling the function with required information and additional details :
let car = store_car_info("Toyota", "Camry", { color: "Red", year: 2022, price: 25000 });

// Printing the object to ensure all information was stored correctly :
console.log(car);




