
var k ={
    "z":"1",
    "x":"2",
    "c":"3",
    "v":"4",
    "b":"5",
    "n":"6",
    "m":"7",
    "a":"8",
    "s":"9",
    "d":"10",
    "f":"11",
    "g":"12",
    "h":"13",
};
console.log(k[z]);


document.addEventListener("keypress", (e)=>{
    var prs = e.key
    //console.log(k[prs]);
    var audio = new Audio("./sounds/key"+k[prs]+".mp3");
        audio.play();
});

var pianobtn = document.querySelectorAll(".btn")

for (let i=0; i<=pianobtn.length; i++){

    pianobtn[i].addEventListener("click", function(){
        var audio = new Audio(`./sounds/key${i+1}.mp3`);
        audio.play();
    });
};