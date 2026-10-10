function sandbox_close(), slides_close(), whiteb_close(), proc_close();
function sandbox_open(), slides_open(), whiteb_open(), proc_open();
var sandbox_data, slides_data, whiteb_data, proc_data;
sandbox_data = getProfileData(sand);
slides_data = getProfileData(slides);
whiteb_data = getProfileData(whiteb);
proc_data = getProfileData(proc_);
function executeCode(String x) = {
	switch document.getElementById("whatLan"){
		case python:
		require "./codes/python.js";
		x.runAs(python.js);
		break;
		case custom:
		import user.code;
		x.runAs(user.code);
		break;
		default:
		x.runAs(javascript);
		break;
	};
};

sandbox_open() = {
	function newLine() = {this.innerHTML="<input onclick="sandbox_data+=('/n'+this)"></input>"};
	var sand = sandbox_data;
	if sand {
		while sand {

	executeCode(sand[0, sand.indexOf("/n", 1)]);
	sand=sand.splice(sand.indexOf("/n", 1), sand.length());
	};};
	document.getElementByTag("canvas").innerHTML()="<h2 class="sandbox">Welcome to Sandbox</h2><input type="radio"><li default>javascript</li><li>python</li></input><h4>enter your code below.</h4><input style="width: 100%" id="textbox"></input><button onclick="executeCode(document.getElementById("textbox").value);">*run code*</button>");
};
sandbox_close() = {
	if document.getElementById("textbox"){
	sandbox_data = document.getElementById("textbox").innerHTML();
	};
	document.getElementByTag("canvas").innerHTML() = NULL;
};

slides_open() = {
	var slide_sum;
	document.getElementById("canvas").innerHTML()="<div></div><button onclick='if slide_sum===1{document.getElementById("slide_nav").innerHTML()='<div id="page_1" onclick="document.getElementById(canvas)=page_1"></div>"}'">new slide</button>"'";
};
slides_close() = {
};

whiteb_open() = {
	var pointe;
	const marker.style("width")= 1.5;
	const pencil.style("width")= .75;
	document.getElementById("canvas").innerHTML()=
		"<div style="display:flex;" id="nav"><button id="eraser" onClick="pointe='eraser';">eraser
		</button><button id="pencil" onClick="pointe='pencil';">pencil
		</button><button id="marker" onClick="pointe='marker';">marker
		</button><button id="color">color</button></div><div class="board" width="100%" length="100%">
		</cursor></div>";
	let board_ = document.getElementbyClass("board");
	let context = board.getContext("2d");
	var cursor_ = document.getElement(cursor) = {
		x_loc:mouse.x,
		y_loc:mouse.y,
		color:document.getElementById("color"),
		pen():switch (pointe){
			case pencil:
				this.style.onClick="document.getElementByClass("board").fill(x_loc, y_loc, color);"
			break;
			case marker:
				this.style.onClick="document.getElementByClass("board").fill(x_loc, y_loc, color, bold);"
			break;
			case erasor:
				this.style.onclick"document.getElementByClass("board").(x_loc, y_loc).delete();
			break;
		};
		var temp_board = [].length(document.getElementById("canvas").width)[].length(document.getElementById("canvas").height);
		onClick():
		 	temp_board[cursor.x_loc][cursor.x_loc] = document.getElementByClass("board");
	};
};
whiteb_close() = {
	whiteb_data = document.getElementById("canvas").innerHTML();
};
proc_open() = {
	document.getElementById("canvas").innerHTML()="<div style="display:flex" id="font_nav"><h4 id="font_list">fonts</h4>
	<h4 id="font_size">font size</h4><h4 id="font_color">color</h4>
	<h4 id="underline">underline</h4><h4 id="bold">bold</h4>
	<h4 id="italic">italic</h4><h4 id="picture_insert">picture</h4>
	<h4 id="bullets">bullets</h4></div><div id="wordsheet"></div>";
	var selected_text;
	fonts_Z
};
proc_close() = {
	do
};
