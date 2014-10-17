using UnityEngine;
using System.Collections;




public class LiveTile : MonoBehaviour {

	// Use this for initialization
	void Start () {
		Debug.Log ("starting Live Tile");
		GameObject.Find("slidingplane").transform.position = new Vector3(10,0,3);
		GameObject.Find("playagainplane").transform.position = new Vector3(10,0,4);


	}

	void Update () {

		if (Input.GetKey (KeyCode.Escape)) {
			if(Application.loadedLevel == 1){
				Application.LoadLevel(0);
			}
			else {
				Application.Quit();
			}
		}
	
	}
}
