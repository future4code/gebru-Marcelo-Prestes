    
        let cont;	
		let num = [];
	
		function insiraValor (num, cont){
		for (cont=0;cont<5;cont++){
		num.push(prompt("Digite valor", ""));
		}

		for (cont=0;cont<5;cont++){
			document.write(num[cont]);
		}
    }