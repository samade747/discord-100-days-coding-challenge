// Question 40: Album: Create objects for music albums.

// Explain & TIP: Use functions to return objects. This exercise practices creating and manipulating objects, and introducing optional function parameters.

// Answer:

export default function musicalalbum(artist:string, title:string, tracks?:number){
    let album = {
        artist:artist,
        title:title
    };
    if (tracks){
        album[tracks] = tracks
    }
    return album;   
}

console.log(musicalalbum("one", "Thriller", 3))
console.log(musicalalbum("two", "Thriller"))
console.log(musicalalbum("three", "Thriller", 10))


// **Question 41:** Magicians: Display magician names from an array.
// **Explain & TIP:** Passing arrays to functions allows for the manipulation or display of their contents in a centralized manner. This is useful for handling lists of data.
// **Answer: Please try to do it yourself first!**

// DEFine array
const magician: string[] = ["hhe", "hoo", "haaa", "hohoho"];

// Define function to display magician names
function displayMagNames(displayArray: string[]):void{
    // Iterate over each element in the array
    // single element parameter for each function on array magician
    displayArray.forEach(function(magician) {
        // console log each element
        console.log(magician);
        
    });
        
}

// Call function
displayMagNames(magician);


// **Question 42:** Great Magicians: Add "the Great" to magician names.
// **Explain & TIP:** Modifying array contents within a function demonstrates how functions can change data. This shows the impact of passing arrays by reference.

// if void not return

function addingGreat(magicianss: string[]):void{
    for (let i = 0; i < magicianss.length; i++){
        magicianss[i] = "The Great " + magicianss[i];   
    }
}

addingGreat(magician);




