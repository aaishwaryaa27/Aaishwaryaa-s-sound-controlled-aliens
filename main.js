//https://teachablemachine.withgoogle.com/models/fRT1wnGZg/

function startclassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/fRT1wnGZg/model.json", modelReady);
}

//we need to write navigator.mediaDevices.getUserMedia() to grant the users to get the acess to their the microphones and cameras. 
//to get the data from the microphone we just need to set {audio:true} and pass this constraint inside this function
//Classify is a pre defined function of ml5.js used to compare the captured audio with the teachable machine model

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results){
    if (error){
        console.error(error);
    }
    else{
        console.log(results);

        random_number_r = Math.floor(Math.random()*255) + 1;
        random_number_g = Math.floor(Math.random()*255) + 1;
        random_number_b = Math.floor(Math.random()*255) + 1;

        document.getElementById("result_label").innerHTML = "I can hear - "+ results[0].label;
        document.getElementById("accuracy_label").innerHTML = "Accuracy - "+ (results[0].confidence*100).toFixed(2)+"%";

        document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("accuracy_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
    


img1 = document.getElementById("alien1");
img2 = document.getElementById("alien2");
img3 = document.getElementById("alien3");
img4 = document.getElementById("alien4");

if(results[0].label == "clapping"){
   img1.src = "aliens-01.gif";
   img2.src = "aliens-02.png";
   img3.src = "aliens-03.png";
   img4.src = "aliens-04.png";
}
else if(results[0].label == "crying"){
    img1.src = "aliens-01.png";
    img2.src = "aliens-02.gif";
    img3.src = "aliens-03.png";
    img4.src = "aliens-04.png";
}
else if(results[0].label == "Background Noise"){
    img1.src = "aliens-01.png";
    img2.src = "aliens-02.png";
    img3.src = "aliens-03.gif";
    img4.src = "aliens-04.png";
}
else{
    img1.src = "aliens-01.png";
    img2.src = "aliens-02.png";
    img3.src = "aliens-03.png";
    img4.src = "aliens-04.gif";
}}}
    