function compras(trabalho1, trabakho2){
    const comprarSorvete = trabalho1 || trabakho2
    const comprarTv50 = trabalho1 && trabakho2
   // const comprarTv32 = !!(trabalho1 ^ trabakho2) // bitwise xor
   const comprarTv32 = trabalho1 != trabakho2
   const manterSaudavel = !comprarSorvete // operador unário
    // foi criado um obejto com as const
   return {comprarSorvete, comprarTv32, comprarTv50, manterSaudavel}
} 

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))