// day 11 
//🚀 **Day 11 Challenge: Start Coding!** 🚀
// **Question 31:** No Users: Ensure your user list isn’t empty.

interface User{
    name: string;
}

const userList: User[] = [];

if (userList.length === 0) {
    console.log("No users!");
} else {
    userList.forEach(singleuser => {
        console.log(`hello, ${singleuser.name}!`);
    });
}








