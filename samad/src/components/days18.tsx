//day18 Code

// Question 52: Make a Smartphone Object: Create a simple way to keep track of a smartphone's details. Include its brand, model, and other key features like how much storage it has,
//  the size of its screen, and how long its battery lasts.

type SmartPhoneSpecification = {
    storage: String;
    screen: String;
    battery: String;
}

type SmartPhone = {
    name: String;
    price: Number;
    make: String;
    model: String;
    specifications: SmartPhoneSpecification;
}

let SmartPhone: SmartPhone = {
    name: "iPhone",
    price: 100000,
    make: "Apple",
    model: "iPhone 12",
    specifications: {
        storage: "1tb",
        screen: "14.1 inch",
        battery: "15000 mAh"
    }
}


console.log(SmartPhone)




// Question 53: Pulling Apart a Nested Object: Imagine you have a list inside another list that shows what a computer programmer knows, like coding languages, tools, and software frameworks. Find a way to get three specific skills from this list and show them.

// Explain & TIP: Breaking down a complex list into simpler parts makes it easier to work with and understand specific pieces of information.


type Developerskills = {
    langugaes: string[];
    tools: string[];
    frameworks: string[];
};

let developerSkills: Developerskills = {
    langugaes: ["HTML", "CSS", "JavaScript", "TypeScript", "Python"],
    frameworks: ["React", "Angular", "Vue", "Svelte"],
    tools: ["Git", "GitHub", "Visual Studio Code" ]

}

// destructuring 
let {langugaes, tools, frameworks} = developerSkills;


console.log(`Language: ${langugaes[0]}, Framework: ${frameworks[0]}, Tool: ${tools[0]}`);

// Question 54: Making Flexible Object Keys: Learn how to set up a list where you can change the name of each section based on what you need at that moment, like adjusting labels based on user choices.

// Explain & TIP: This is like having labels you can rewrite anytime, which is great for when you need to adjust your list based on new information

// A function to create an object with a dynamic key
function createObjectWithDynamicKey(key: string, value: string) {
    // Initialize an empty object with dynamic key-value pair
    let obj: {[key: string]: string} = {};
       // Assign the provided key and value to the object
    obj[key] = value;
    // Return the object
    return obj;
}
// Call the function with "email" as the key and "samade747" as the value
let userinput = createObjectWithDynamicKey("github", "samade747");
    
console.log(userinput);