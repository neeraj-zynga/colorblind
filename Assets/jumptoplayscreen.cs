﻿using UnityEngine;
using System.Collections;

public class jumptoplayscreen : MonoBehaviour {

	// Use this for initialization
	void Start () {
		Debug.Log ("Jump to screen script start");
	}
	
	// Update is called once per frame
	void Update () {

	}

	void OnMouseDown(){
		Debug.Log ("object lciked");
		Debug.Log (Application.loadedLevel);
		Application.LoadLevel ("scene1");
	}
}

