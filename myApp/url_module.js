var url=require('url');
const myurl=new URL("htpp://localhot:3000")
//Serialzed url
console.log(myurl.href);
console.log(myurl.toString());
//host(root domain)
console.log(myurl.host)
//hostname
console.log(myurl.hostname)