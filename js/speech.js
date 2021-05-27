function readAloud(IconId,text){
    const artyom = new Artyom();
    console.log("The text is being readed");
    artyom.say(text, {
        onStart: function () {
            console.log("The text is being readed");
            document.getElementById(IconId).style.color = "red"
        },
        onEnd: function () {
            document.getElementById(IconId).style.color = "#686868"
        }
    });
}