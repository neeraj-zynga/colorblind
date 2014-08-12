using UnityEngine;
using System.Collections;

public class Backbuttonscript : MonoBehaviour {

	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
	
	}
	void OnMouseDown(){
	
		Debug.Log ("Back clicked");
		Application.LoadLevel ("scene2");

	}
}
