#pragma strict

function Start () {

}

function Update () {

}

function OnMouseDown(){
	GameObject.Find("skipconfirm").transform.position = new Vector3(-0.5922,0,1);
		GameObject.Find("agreebutton").transform.position = new Vector3(0.8017459,-0.5761868,2);
		GameObject.Find("cancelbutton").transform.position = new Vector3(-0.1346713,-0.5377451,2);
		GameObject.Find("NextSphere").GetComponent(movescreen).skipper();
		}