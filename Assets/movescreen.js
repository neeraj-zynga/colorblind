
static var red;
static var green;
static var blue;
static var answerTile;
static var levelscore : int;
static var onceClicked =0;
static var fail=0;
public var speed : float = 30f;
public var rot=0;
public var slide=0;
public var slidecounter=0;
public var slidefailcounter=0;
public var selectedTile="tile1";
public var slidefail =0;


function Start () {
//console.log("start");
	GameObject.Find("Cubemain").renderer.material.color = Color(1, 0.92, 0.016);
	levelscore=0;
	fail =0;
//gameObject.renderer.material.color = Color.red;

}
function Update(){
	if(rot==1)
	{
		for(var i=0;i<10;i++){
		GameObject.Find(selectedTile).transform.Rotate(Vector3.forward, speed * Time.deltaTime);
		}
		
	}
	if(slide==1)
	{
		slidecounter++;
		GameObject.Find("slidingplane").transform.position -= new Vector3(0,0.5,0);
		GameObject.Find("playagainplane").transform.position -= new Vector3(0,0.5,0);
		if(slidecounter == 32){
		slidecounter=0;
		slide=0;
		}
	}
	if(slidefail==1)
	{
		slidefailcounter++;
		GameObject.Find("failclick").transform.position += new Vector3(0.5,0,0);
		if(slidefailcounter == 14){
		slidefailcounter=0;
		slidefail=0;
		}
	}
}

function AddScore(name : String, score : int){
   var newScore : int;
   var newName : String;
   var oldScore : int;
   var oldName : String;
   newScore = score;
   newName = name;
   for(var i=0;i<10;i++){
      if(PlayerPrefs.HasKey(i+"HScore")){
         if(PlayerPrefs.GetInt(i+"HScore")<newScore){ 
            // new score is higher than the stored score
            oldScore = PlayerPrefs.GetInt(i+"HScore");
            oldName = PlayerPrefs.GetString(i+"HScoreName");
            PlayerPrefs.SetInt(i+"HScore",newScore);
            PlayerPrefs.SetString(i+"HScoreName",newName);
            newScore = oldScore;
            newName = oldName;
         }
      }else{
         PlayerPrefs.SetInt(i+"HScore",newScore);
         PlayerPrefs.SetString(i+"HScoreName",newName);
         newScore = 0;
         newName = "";
      }
   }
}

function UpdateHScore(){
  var stScore = PlayerPrefs.GetInt('0HScore');
  var  stName = PlayerPrefs.GetString('0HScoreName');
  Debug.Log("score updated"+ stScore);
  }

function TileHit(whichTile : int) {
	if(onceClicked == 0){
		onceClicked = 1;
		selectedTile = "tile"+answerTile;
		
		if(whichTile == answerTile) {
		gameObject.Find("status").renderer.material.mainTexture = Resources.Load("happy") as Texture;
		var object1= GameObject.Find("status");
		object1.audio.Play();
		levelscore++;
		//GameObject.Find("scoretext").guiText.text= levelscore+"";
		GameObject.Find("scoretext").GetComponent.<TextMesh>().text = levelscore+"";
		AddScore("Neeraj",levelscore);
		UpdateHScore();
		
		//sliding place down
	
		
		slide=1;
		//Debug.Log(GameObject.Find("slidingplane").transform.position());
		
		}
		else {
			rot=1;
			GameObject.Find("status").renderer.material.mainTexture = Resources.Load("smiley_sad") as Texture;
			var object2= GameObject.Find("Cubemain");
			object2.audio.Play();
			
			fail=1;
			slidefail=1;
		}
	}
	else {
		// GameObject.Find("Cubemain").audio.Play();;
	}
	
}

function skipper(){
	if(levelscore>=3){
		levelscore-=3;
		GameObject.Find("scoretext").GetComponent.<TextMesh>().text = levelscore+"";
		OnMouseDown();
	}
}

function OnMouseDown(){
	
	//move sliding plane up
	GameObject.Find("slidingplane").transform.position = new Vector3(10,15,3);
	GameObject.Find("playagainplane").transform.position = new Vector3(10,15,4);
	GameObject.Find("playagainplane").renderer.material.mainTexture = Resources.Load("next") as Texture;

	rot=0;
	GameObject.Find(selectedTile).transform.Rotate(0,0,0);
	if(fail == 1){
	fail=0;
	Application.LoadLevel("scene2");
	}
	onceClicked =0;
	GameObject.Find("status").renderer.material.mainTexture = Resources.Load("qmark") as Texture;
	var allIndex = ArrayList();
	var random_pick = ArrayList();
	var hit : RaycastHit;
	var ray = Camera.main.ScreenPointToRay(Input.mousePosition); 
	if (Physics.Raycast (ray, hit))
	{  
		
		var r = Random.Range(0,1000)/1000.0;
		var g = Random.Range(0,1000)/1000.0;
		var b = Random.Range(0,1000)/1000.0;
		var midr=r;
		var midg=g;
		var midb =b;
		
		red = r;
		green=g;
		blue = b;
		
		GameObject.Find("Cubemain").renderer.material.color = Color(r,g,b,1);
		
		var primary1 = r>b?r:b;
		var primary= primary1>g?primary1:g;
		var changeR=0;
		var changeB=0;
		var changeG=0;
		
		//Debug.Log("primary"+primary);
		if(primary == r){
			changeR=1;
		} else if(primary == g) {
			changeG=1;
		}
		else {
		 	changeB=1;
		}
		
		//var colorArray =  new Object();


		//filling main tile
		var mainTileIndex= Random.Range(1,10);
		
		
		//GameObject.Find("tile"+mainTileIndex).renderer.material.color = Color(r,g,b);
		allIndex.Add(r);
		allIndex.Add(g);
		allIndex.Add(b);
		
		for(var i=1;i<10;i++) {
		
	
			if(i<5) {
				if(changeR ==1) {
				r=r-0.050;
				//g=g+0.030;
				//b=b+0.030;
				
				}
				if(changeG ==1) {
					//r=r+0.030;
					//b=b+0.030;
					g=g-0.050;
				}
				if(changeB ==1) {
					//r=r+0.030;
					//g=g+0.030;
					b=b-0.050;
					
				}
			} 
			else {
				if(changeR ==1) {
				
				//midr =r;
				g=g-0.050;
				b=b-0.050;
				
				}
				if(changeG ==1) {
					r=r-0.050;
					b=b-0.050;
					//g=midg+0.050;
					//midg=g;
				}
				if(changeB ==1) {
					r=r-0.060;
					g=g-0.060;
					//b=midb+0.050;
					//midb=b;;
					
				}
			
			}
			
		
			
		var cube= "tile"+i;
		
		//Debug.Log("changed rgb" + r+ g+ b);
		random_pick.Add(i-1);
		if((i==mainTileIndex)){
		
		}else {
				//GameObject.Find(cube).renderer.material.color = Color(r,g,b);
				allIndex.Add(r);
				allIndex.Add(g);
				allIndex.Add(b);
		}
		
		
	}
	
	
	for(var ran=8;ran>=0;ran--){
		var ran1= Random.Range(0,ran);
		var temp = random_pick[ran1];
		random_pick[ran1]=random_pick[ran];
		random_pick[ran]=temp;
		//Debug.Log(random_pick[ran]);
	}
	
	for(var assigner =0;assigner<9;assigner++){
		var wow1: int = (random_pick[assigner]);
		if(wow1 == 0) {
			answerTile = assigner+1;
			Debug.Log("answer"+answerTile);
			
		}
		var wow = 3 * wow1;
		var tiler = "tile"+(assigner+1);
		GameObject.Find(tiler).renderer.material.color = Color(allIndex[wow],allIndex[wow+1],allIndex[wow+2]);
		Debug.Log(answerTile);
	
	}
	
	
	
	
		
	
	}
	
	
}


