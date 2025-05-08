import fs from 'fs';

/* 
const response = await fetch("https://www.proshop.dk/Baerbar");
const result = await response.text(); // Fetch the HTML content as text
fs.writeFileSync("index.html", result); // Save the HTML content to a file */


import { load } from 'cheerio'; 

const page = await fs.readFileSync("index.html", "utf-8"); // Read the HTML file and get as string

const $ = load(page); // Load the content into Cheerio

$("#products [product]").each((index, element) =>{ // Cheerio selector to find all products and take the product attribute and loop through them
    const name = $(element).find(".site-product-link").text(); // Find the name of the product
    const price = $(element).find(".site-currency-lg").text(); // Find the price of the product

    console.log(price, name.trim())
});