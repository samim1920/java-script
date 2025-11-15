const name="samim"

const gamename=new String("samimali")

console.log(gamename[0]);
console.log(gamename.__proto__);

console.log(gamename.toUpperCase());

console.log(gamename.charAt(3)); //konsi psition pe consi char haa

console.log(gamename.indexOf("m"));

const newstring=gamename.substring(0, 4); //negetive value use kora jai na
console.log(newstring);

const anotherstring=gamename.slice(-8, 4); //negetive value use kora jai
console.log(anotherstring);

const newone="  samim  "

console.log(newone)
console.log(newone.trim());

const url= "https://github.com/samim%201920/java-script";

console.log (url.replace('%20','-'));
console.log(url.includes("big"));

