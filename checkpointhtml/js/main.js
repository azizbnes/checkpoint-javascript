

function bold() {

	var target = document.getElementById("texto");

	if( target.style.fontWeight == "bold" ) {
		console.log("xx");
		target.style.fontWeight = "normal";
	} else {
		target.style.fontWeight = "bold"
}
;
	}


function italic() {
	
	var target = document.getElementById("texto");
	if( target.style.fontStyle === "italic" ) {
		target.style.fontStyle = "normal";
	} else {
		target.style.fontStyle= "italic";
	}}
	function underline() {
	
	var target = document.getElementById("texto");
	if( target.style.fontStyle === "underline" ) {
		target.style.fontStyle = "none";
	} else {
		target.style.fontStyle= "underlinre";
	}}
function sizetype()   {    if(document.getElementById("fonttype").value == "Arial")   
 {        document.getElementById("texto").style.fontFamily  = 'Arial';
    }    else if(document.getElementById("fonttype").value == "Geneva")
        {        document.getElementById("texto").style.fontFamily  = 'Geneva';
    }    else if(document.getElementById("fonttype").value == "Verdena") 
       {        document.getElementById("texto").style.fontFamily  = 'Verdena';
    }}
    function sizetext()   {    if(document.getElementById("fontSizeDD").value == "20px") 
       {        document.getElementById("texto").style.fontSize  = '20px';
    }    else if(document.getElementById("fontSizeDD").value == "30px")
        {        document.getElementById("texto").style.fontSize  = '30px';
    }    else if(document.getElementById("fontSizeDD").value == "40px")
        {        document.getElementById("texto").style.fontSize  = '40px';
    }}