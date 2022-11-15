difference = 1;
function setup()
{
    video= createCapture(VIDEO)
    video.size(550, 500)

    canvas= createCanvas(550,550 )
    canvas.position(560, 150)

    poseNet=ml5.poseNet(video, ModelLoaded)
    poseNet.on('pose', gotPoses)
}

function ModelLoaded()
{
    console.log('Posenet is initiated!');
}

function gotPoses(results)
{
    if(results.length > 0){
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        difference = floor(leftWristX - leftWristY);
    }
}
function draw()
{
    background('#6C91C2');
    textSize(difference);
    fill('#FFE787');
    text('Ashmit', 50, 200);
}