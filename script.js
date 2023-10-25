function generar() {
    const numero = parseInt(document.getElementById("numero").value);
    let n1 = 0;
    let n2 = 1;
    let next;

    //imprime un numero definido de valores que da el usuario
    for (let i = 1; i < numero; i++) {
            const textSecuencia = document.createElement("p");
            //se imprime n1 porque es el que inicialmente va a tener  valor 0
            textSecuencia.textContent = `   Valor: ${n1}`;
            const contenedor = document.getElementById("contenedor");
            contenedor.appendChild(textSecuencia);
            
        next = n1+n2;
        n1=n2;
        n2=next;

    }
}