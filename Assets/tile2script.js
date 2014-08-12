

function Start () {


}

function Update () {


}

function OnMouseDown(){
	
	var hit : RaycastHit;
	var ray = Camera.main.ScreenPointToRay(Input.mousePosition); 
	if (Physics.Raycast (ray, hit))
	{ 
		GameObject.Find("NextSphere").GetComponent(movescreen).TileHit(2);
	}
}