print('numeros divisibles')
function isMultiple(a,b){
		if (b % a !== 0)
        return(a + " es divisible por " + b); 
		else
		return(a + " no es divisible por " + b); 
}


print(isMultiple(3,6))