/* Esta solución considero que muestra el razonamiento de forma clara, iterando cada dígito con un bucle for 
y realizando la operación. Creo que es útil para mostrar la lógica detrás de los outputs. Sin embargo, hay 
otra solución más breve, utilizando "reduce":

export function compute(n: number): number {
  return String(n)
    .split("")
    .reduce((acc, digit) => acc + (Number(digit) ** 2), 0);
}

*/

export function compute(n: number): number {
  const cadenaNumeros = String(n);
  let acumulador = 0;

  for (let i = 0; i < cadenaNumeros.length; i++) {
    const caracterNumero = cadenaNumeros[i];
    const numeroListoParaOperar = Number(caracterNumero);
    const cuadrado = numeroListoParaOperar * numeroListoParaOperar;

    acumulador = acumulador + cuadrado;
  }

  return acumulador;
}
