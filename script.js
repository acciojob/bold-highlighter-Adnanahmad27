const strong = document.getElementsByTagName('strong');
function highlight() {
	for(let i=0 ; i<strong.length ; i++){
		let node = strong[i];
		node.style.color = 'green';
	}
}


function return_normal() {
    for(let i=0 ; i<strong.length ; i++){
		let node = strong[i];
		node.style.color = 'black';
	}

    
}
