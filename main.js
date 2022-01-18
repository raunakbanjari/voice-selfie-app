var SpeechRecognition = window.webKitSpeechRecognition;
var Recognition = new SpeechRecognition;

function start(){
    document.getElementById("textbox").innerHTML = "";
    Recognition.start();
}
Recognition.onresult = function(event){

    console.log(event);

    var Content = event.results [0] [0].transcript;

    document.getElementById("textbox").innerHTML = Content;

    console.log(Content);

    if(Content = "take my selfie"){
        console.log("taking selfie ---");
        speak();
}



function speak(){
    var synth = window.speechSynthesis;
    speak_data = document.getElementById("textbox").value;
    speak_data = "taking selfie in 5 seconds";

    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth  = speak(utterThis);
    Webcam.attach(camera);
    
    setTimeout(function(){
        takeSnapshot();
        save();
    }, 5000);
    }
}
Webcam.set({
    height:250,
    width:360,
    image_format: 'png',
    png_quality:90
});
camera = document.getElementById("camera");

function takeSnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id = "selfie_image" src = "'+ data_uri +'">';
        });
}
function save(){
    link  = document.getElementById("link");
    image = document.getElementById("selfie_image").src;
    link.href = image;
    link.click();
}