


function buscarCarrosPorMarca (frota: {marca:string}[], marca?:string):{}[] {

    if(marca === undefined){
        return frota
    }

    return frota.filter((carro)=>{
        return carro.marca === marca
    })
}


function checaTriangulo(a:number, b:number, c:number): "Escaleno" | "Equilátero" | "Isósceles" {
    if (a !== b && b !== c) {
      return "Escaleno";
    } else if (a === b && b === c) {
      return "Equilátero";
    } else {
      return "Isósceles";
    }
  }
///////////////////////////////////////////

  function imprimeTresCoresFavoritas(a:string,b:string,c:string):void {
    const cor1 = prompt("Insira sua primeira cor favorita")
    const cor2 = prompt("Insira sua segunda cor favorita")
    const cor3 = prompt("Insira sua terceira cor favorita")
    console.log([cor1, cor2, cor3])
 }

 function checaAnoBissexto(ano:number) {
    const cond1: number = ano % 400 === 0
    const cond2: number= (ano % 4 === 0) && (ano % 100 !== 0)
    return cond1 || cond2
 }