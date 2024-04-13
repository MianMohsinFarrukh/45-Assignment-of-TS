"use strict";
// 20 --- Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
let country = ["China", "Pakistan", "Afghanistan", "Iran", "India"];
console.log("\nList of countries:");
country.forEach((c) => {
    console.log(c);
});
let mountains = [
    "Mount Everest",
    "K2",
    "Kangchenjunga",
    "Manaslu",
    "Nanga Parbat",
    "Annapurna"
];
console.log("\nList of mountains:");
mountains.forEach((mountain) => {
    console.log(mountain);
});
let rivers = [
    "Nile",
    "Amazon",
    "Yangtze",
    "Mississippi",
    "Yellow",
];
console.log("\nList of rivers:");
rivers.forEach((river) => {
    console.log(river);
});
let cities = [
    "Tokyo",
    "New York City",
    "Paris",
    "Beijing",
    "Istanbul",
    "Dubai"
];
console.log("\nList of cities:");
cities.forEach((city) => {
    console.log(city);
});
let languages = [
    "English",
    "Mandarin Chinese",
    "Spanish",
    "Hindi",
    "French",
];
console.log(`\nList of natural languages :`);
languages.forEach((language) => {
    console.log(`${language}`);
});
