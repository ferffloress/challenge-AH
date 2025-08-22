/* Esta solución muestra el paso a paso de forma clara, recorriendo con un bucle for. Creo que es la más óptima para mostrar el razonamiento detrás de los outputs. Sin embargo, hay otra solución más breve, utilizando reduce:

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