
static var red;
static var green;
static var blue;
static var answerTile;

function Start () {
//console.log("start");
	GameObject.Find("Cubemain").renderer.material.color = Color(1, 0.92, 0.016);

//gameObject.renderer.material.color = Color.red;

}


function TileHit(whichTile : int) {
	
	if(whichTile == answerTile) {
	
	gameObject.Find("status").renderer.material.mainTexture = Resources.Load("happy") as Texture;
	}
	else {
	
	GameObject.Find("status").renderer.material.mainTexture = Resources.Load("smiley_sad") as Texture;
	}
	
}

function OnMouseDown(){
	
	GameObject.Find("status").renderer.material.mainTexture = Resources.Load("white_bg") as Texture;
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
		answerTile = mainTileIndex;
		
		GameObject.Find("tile"+mainTileIndex).renderer.material.color = Color(r,g,b);
		
		for(var i=1;i<10;i++) {
		
			/*	if(changeR ==1) {
				g=g+0.030;
				b=b+0.030;
				
			}
			if(changeG ==1) {
				r=r+0.030;
				b=b+0.030;
			}
			if(changeB ==1) {
				r=r+0.030;
				g=g+0.030;
				
			}
			*/
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
			
			
		//	colorArray[i].red =r;
		//	colorArray[i].green =g;
		//	colorArray[i].blue =b;
				
			
		var cube= "tile"+i;
		
		//Debug.Log("changed rgb" + r+ g+ b);
		if((i==mainTileIndex)){
		
		}else {
				GameObject.Find(cube).renderer.material.color = Color(r,g,b);
		}
	}
		
		//for(i=0;i<colorArray.length;i++) {
	//		var cube= "tile"+i+1;
//Debug.Log(colorArray[i].red);
			//GameObject.Find(cube).renderer.material.color = Color(colorArray[i].red,colorArray[i].green,colorArray[i].blue,1);
		//}
		//GameObject.Find("Camera").transform.position=Vector3(-5,0,5);
	}
	
	
}


