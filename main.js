var canvas = new fabric.Canvas('myCanvas');
 varx= document.getElementById("bdayaudio.mp3");

function new_image()
{
	fabric.Image('Happy Birthday 2.gif',function(Img){
        block_image_object=Img;
        block_image_object.scaleToWidth(700);
        block_image_object.scaleToHeight(510);
        block_image_object.set({
            top:0,
            left:0
        });
        canvas.add(block_image_object)
    })
	
}

function playSound(){
	x.play(bdayaudio.mp3);
}
