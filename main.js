    dog = 0;
    cat = 0;
    cow = 0;
    lion = 0;
function start(){
    navigator.mediaDevices.getUserMedia({audio:true})
    Classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/sLYDd91qc/model.json', modelReady);
}
function modelReady(){
    Classifier.classify(gotResult)
}
function gotResult(error, results){
    if (error){
        console.log(error);
    }
    else{
    console.log("got result")
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;
    document.getElementById("numberoftimes").innerHTML = "Detected Dog" + " " + dog + " " + "Detected Cat" + " " + cat + " " + "Detected Cow" + " " + cow + " " + "Detected Lion" + " " + " " + lion ;
    document.getElementById("sound").innerHTML = "Detected voice is of - " + results[0].label;
    document.getElementById("numberoftimes").style.color = "rgb("+random_number_r +","+ random_number_g +","+ random_number_b+")";
    document.getElementById("sound").style.color = "rgb("+random_number_r +","+ random_number_g +","+ random_number_b+")";
    img = document.getElementById('img')
    if(results[0].label == 'Barking'){
        img.src = 'dog.jpeg'
        dog = dog + 1
    }
    else if(results[0].label == 'Meowing'){
        img.src = 'cat.jpeg'
        cat = cat + 1
    }
    else if(results[0].label == 'Mooing'){
        img.src = 'cow.jpeg'
        cow = cow + 1
    }
    else if(results[0].label == 'Roar'){
        img.src = 'lion.jpeg'
        lion = lion + 1
    }
    else{
        img.src = 'listen.gif'
    }
    }
}