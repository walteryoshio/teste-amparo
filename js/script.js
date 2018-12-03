
function calculandoValor(){
		var origem = document.getElementById('origem').value;
				
		var destino = document.getElementById('destino').value;

		var tempo = document.getElementById('minutos').value;

		var tipoPlano = document.getElementById('plano').value;
		
		var valorMinuto = 0;
			
			if(origem == "" ){
			document.getElementById('alertaorigem').value = "Digite o DDD";
			}
			
			else{
			document.getElementById('alertaorigem').value = null;	
			}

			if(destino == "" ){
			document.getElementById('alertadestino').value = "Digite o DDD";
			}
			else{
			document.getElementById('alertadestino').value = null;	
			}

			if(tempo == "" || tempo == null){
					document.getElementById('alertatempo').value= "Coloque a quantidade de minutos";
			}
			else{
			document.getElementById('alertatempo').value = null;	
			}		
			

		if (origem == "1" && destino =="2"){
			var cobertura = true;
			var valorMinuto = 1.90;
		}
		if (origem == "2" && destino =="1"){
			var cobertura = true;
			var valorMinuto = 2.90;
		}
		if (origem == "1" && destino =="3"){
			var cobertura = true;
			var valorMinuto = 1.70;
		}
		if (origem == "3" && destino =="1"){
			var cobertura = true;
			var valorMinuto = 2.70;
		}
		if (origem == "1" && destino =="4"){
			var cobertura = true;
			var valorMinuto = 0.90;
		}
		if (origem == "4" && destino =="1"){
			var cobertura = true;
			var valorMinuto = 1.90;
		}
		
		else if (cobertura != true){
			document.getElementById('alertacobertura').value = "Chamada sem cobertura do plano";
			
			}

			else {
				document.getElementById('alertacobertura').value = null;
			}

			
		
			var valorSemPlano = tempo * valorMinuto;

			document.getElementById('semPlano').value = "R$ " + valorSemPlano.toFixed(2).replace(".",",");


			

			var tempoPlano = null;

		if (tipoPlano == "1"){
				tempoPlano = 30;
			}

		if (tipoPlano == "2"){
				tempoPlano = 60;
			}

		if (tipoPlano == "3"){
				tempoPlano = 120;
			}
		else{
			
			if(tipoPlano == "" ){
			document.getElementById('alertaplano').value = "Selecione o plano";
			valorComPlano = 0;
			}
			else{
			document.getElementById('alertaplano').value = null;	
			}

		}



			if (tempo <= tempoPlano) {
				valorComPlano = 0;
			}
			
			else 
			{
				var tempoRestante = tempo - tempoPlano;
					valorComPlano = tempoRestante * valorMinuto;
					valorComPlano = valorComPlano * 0.1 + valorComPlano;
			}


		document.getElementById('comPlano').value = "R$ " + valorComPlano.toFixed(2).replace(".",",");
}
	



