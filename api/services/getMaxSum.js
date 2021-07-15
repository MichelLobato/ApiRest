/* Funcao usada para devolver a maior soma de um sequencia em uma array
* Recebe uma array(list)
* Busca a maior soma primero da Direita para Esq, definindo um indice no inicio da sequencia e depois da Esquerda para Direita ate o indice
*/


function getMaxSum (list) {
	
	var soma = 0; 									// Usada para armazenar o valor do soma apos o for
	var result = 0; 								// Varialvel de saida
	var x = list.length;							// Tamanho do Vetor
	var indice = 0; 								// Valor que determina o ponto de saida na soma do vetor
	var maxdir = 0; 								// Valor da maior soma do lado direito para o lado esquerdo
	var guardaindice = 0;	 						// Guarda o valor do indice de onde comeca a maior soma
	var maxesq = 0; 								// Valor da maior soma da esquerda ate o indice da maior soma pela direita
	var guardaindiceesq = 0; 						// Guarda o valor do indice de onde termina a maior soma da esquerda para direita

	//Achar maior sequencia do lado direito
	for(var s = 0; s < x; s++){						// Um laco que faz o calculo da soma quantas vezes forem necessarias para obter o maior valor
		for (var i = 0 + indice; i < x; i++){       // Soma de forma recursiva os valores de cada vetor
			soma += list[i];
		};
		if(soma > maxdir){							// Salva apenas se o valor da soma for maior que o valor do MaxDir			
			maxdir = soma;							// Guarda o valor do indice do vetor MaxDir
			guardaindice = indice;
		};
		indice++;
		soma = 0;
	};
	
	
	//Achar a maior sequencia do lado esquerdo
	indice = 0;
	for(var s = x -1 -indice; s >= guardaindice; s--){ 			// Apos achar o valor MaxDir basta achar a Maior soma da Esquerda para Direita
		for (var i = x -1 -indice; i >= guardaindice; i--){		// Um laco de repeticao que vai do Final do vetor ate o indice do MaxDir
			soma += list[i];
		};
		if(soma > maxesq){										// Armazena apenas o maior valor do MasEsq
			maxesq = soma;
			guardaindiceesq = i;
		};
		indice++;
		soma = 0;
	};

	result = maxesq;	
	return result;
};

module.exports = getMaxSum;