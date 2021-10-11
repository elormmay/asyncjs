// call backs

//async
// const test = () => {
//     setTimeout(() => {
//         console.log("start of code");
//         alert("notice me");
//         console.log("end of code");
//     }, 2000);

// }

// const test2 = () => {
//     console.log("Now i get attentions");
// }

// test();
// test2();



let logCall = () => console.log("logCall was called");
// }

setTimeout(() => {
    // logCall();
    console.log("setimeout called");
}, 2000);


let btn = document.querySelector("#item1")

btn.addEventListener("click", (e)=>{
    // e.preventDefault();
    console.log("The button was clicked");
});



const students = [{name: "Mary", score: 90, school: "East"},
{name: "James", score: 100, school: "East"},
{name:"Steve", score: 40, school: "East"},
{name:"Gabe", score: 90, school: "West"},
{name:"Rachel", score: 85, school: "East"},{name:"Rochelle", score: 95, school: "West"},
{name:"Lynette", score: 75, school: "East"}];


// students.forEach((c)=>{
//     console.log(c.name);
// })



let processStudents = (data, callback) => {
    data.forEach((i)=>{
        if (i.school.toLowerCase() === "east"){
            if(typeof callback === "function"){
                callback(i);
            }
        }
    });
}


    processStudents(students,  (obj)=>{
    if(obj.score > 60){
        console.log(`${obj.name} passed`);
    }
});






let determineTotal = () => {
    let total = 0;
    let count = 0;



    processStudents(students, (obj)=>{
        total += obj.score;
        count ++;
    });
    console.log(`Total: ${total} - Count: ${count}`);


}

// adding a parenthesis to a function get it invoked immediately
// thus in using setTimeout, eg. below, avoid parenthesis
setTimeout(determineTotal, 3000);



console.log("end of code")