var currentInput = 0;
const regularEvents = {
	help: "<b>Commands:</b><br>help - get help<br>clear - clear the screen<br>github - visit DanielKohn1208<br>shrug - idek man <br> tableflip - flip the table",
	about: "<b>About</b><br>This website is a terminal based site created by Daniel Kohn<br>Github:DanielKohn1208 ",
	shrug: "¯\\_(ツ)_/¯",
	tableflip: "┻━┻"
}
function enterKeyPressed(event) {
	if (event.keyCode == 13) {
		startProcess();
	} else {
		return false;
	}
}

function startProcess() {
	const input = document.getElementById(`input-${currentInput}`);
	input.readOnly = true;
	const command = input.value.trim();

	var output;
	if(command == "clear"){
		output = "";
		document.getElementById('area').innerHTML="";
	}
	else if(command == ""){
		output = ""	;
	}
	else if(command == "github"){
		output = "opening github in new tab"
		window.open("https://github.com/DanielKohn1208", "_blank")
	}
	else {

		output = regularEvents[command]
		if(output == undefined){
			output = `<div class=\"warning\">Command not recognized. <br> Run \"help\" to get  help.</div>`
		}
	}
	
	currentInput += 1
	var area = document.getElementById('area');
	area.insertAdjacentHTML('beforeend', '')
	area.insertAdjacentHTML('beforeend', `
			${output}
			<div class="input-area">
				<label style=""for="input-${currentInput}">[<span class="green">user</span>@<span class="orange">terminal-site</span>]:~$</label>
				<input type="text" id="input-${currentInput}" style="" autofocus onkeypress="enterKeyPressed(event)" ></input>
			</div>
	`)
	document.getElementById(`input-${currentInput}`).focus();
}


