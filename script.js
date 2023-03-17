let json ={ 
    quetions :[ 
        {
           quetion :'What does HTML stand for?',
           answer : ["a) Hypertext Markup Language","b) Hyperlinks and Text Markup Language"],
           ans : " Hypertext Markup Language"
         
        },
        {
            quetion :'Which HTML tag is used to define a hyperlink?',
            answer : ["a) <link>","b)  <a>"],
            ans : "  <a>"
          
          
         }
    ]
};

console.log(json)
document.getElementById("quiz").innerHTML += json.quetions[0].quetion;
document.getElementById("quiz").innerHTML += json.quetions[0].answer;

document.getElementById("quiz").innerHTML += json.quetions[1].quetion;






 