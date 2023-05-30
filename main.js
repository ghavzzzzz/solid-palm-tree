function preload() {
	m_jump=loadSound("jump.wav");
	m_gameover=loadSound("gameover.wav");
	m_coin=loadSound("coin.wav");
	m_kick=loadSound("kick.wav");
	m_die=loadSound("mariodie.wav");
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');

	video=createCapture(VIDEO);
	video.size(800,400);
	video.parent('game_console');

	instializeInSetup(mario);

	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);
}

function modelLoaded() {
	console.log('Model Loaded!');
  }
  
  function gotPoses(results)
  {
	if(results.length > 0)
	{
	  console.log(results);
	  noseX = results[0].pose.nose.x;
	  noseY = results[0].pose.nose.y;
	}
  }

function draw() {
	game();
}






