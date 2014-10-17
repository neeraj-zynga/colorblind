#pragma strict

function Start () {
	
	var currenthigh = PlayerPrefs.GetInt('0HScore');
	GameObject.Find("Currenthighscore").guiText.text = currenthigh+"";
}

function Update () {
	if(Input.GetKey(KeyCode.Escape)){
		Application.Quit();
	}

}