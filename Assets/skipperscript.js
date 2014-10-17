#pragma strict
public var skipperslide=0;
public var skipperslidecounter=0;
function Start () {
skipperslide =0;
skipperslidecounter=0;
}

function Update () {
if(skipperslide==1)
	{
		skipperslidecounter++;
		GameObject.Find("skipconfirm").transform.position += new Vector3(0.5,0,0);
		GameObject.Find("agreebutton").transform.position += new Vector3(0.5,0,0);
		GameObject.Find("cancelbutton").transform.position += new Vector3(0.5,0,0);
		if(skipperslidecounter == 22){
		skipperslidecounter=0;
		skipperslide=0;
		}
	}
}
function OnMouseDown(){
skipperslide=1;
}