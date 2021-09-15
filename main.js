const $botonRotar = document.getElementById("rotar");
const $inputMatriz = document.getElementById("matriz");
const $resultado = document.getElementById("resultado");

$botonRotar.addEventListener("click", () => {
  try {
    let matriz = JSON.parse($inputMatriz.value);
    let matrizRotada = rotarMatriz(matriz);
    $resultado.innerHTML = generarTabla(matrizRotada);
  } catch (error) {
    alert("Tienes que ser solo matriz de nxn");
  }
});

const rotarMatriz = (matriz) => {
  let nuevaMatriz = Array.from(Array(matriz.length)).map((_) => []); // creamos la matriz vacia

  // recorremos y llenamos la matriz de acuerdo a la posición del recorrido
  for (let i = 0; i < matriz.length; i++) {
    for (let x = 0; x < matriz[i].length; x++) {
      nuevaMatriz[x].push(matriz[i][x]);
    }
  }

  return nuevaMatriz.reverse(); // volteamos la matriz
};

const generarTabla = (matriz) => {
  let filas = matriz
    .map((el) => {
      let columnas = el.map((ee) => `<td>${ee}</td>`).join("");

      return `<tr>${columnas}</tr>`;
    })
    .join("");

  const template = `
      <table>
         ${filas}
      </table>`;

  return template;
};
