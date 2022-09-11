var prompt = require("prompt")

prompt.start()

const age_str = prompt.get(["Enter your age : "],(err,data)=>{
    if(err){
        console.log(err)
    }else{
        console.log(data)
    }
})
switch (age_str) {
    case "12":
        console.log("Your age is 12")
        break;
    case "14":
        console.log("Your age is 14")
        break;
    default:
        console.log("By default it's working")
        break;
}

