
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