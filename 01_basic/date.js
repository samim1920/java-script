
//Dates

let myDate=new Date();
console.log(myDate.toString());
console.log(myDate.toDateString())
console.log(myDate.toJSON());
console.log(myDate.toLocaleTimeString())
console.log(typeof myDate)

let myCreatedDate=new Date(2025,0,23)
console.log(myCreatedDate.toDateString());

let createddate=new Date("11-08-2025")
console.log(createddate.toLocaleDateString());

console.log(createddate.toLocaleString())

let myTimeStamp=Date.now()
console.log(myTimeStamp);
 
console.log(myCreatedDate.getTime());

