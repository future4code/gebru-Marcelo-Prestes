const alimentos = [
{Nome: 'Azeitona', Volume:'250g',Preço: 2.99,DataDeValidade:'22/10/2022',Quantidade:'25'}, 
{Nome: 'Feijão', Volume:'1k',Preço: 6.99,DataDeValidade:'03/11/2022',Quantidade:'50'},
{Nome: 'Arroz', Volume:'1k',Preço: 8.99,DataDeValidade:'07/0//2022',Quantidade:'60'}]


const brinquedos = [

{Nome:'Storm Shadow', Preço: 119.99, ClassificaçãoIndicativa:'12', Quantidade:'17'},
{Nome:'Snake Eyes', Preço: 119.99, ClassificaçãoIndicativa:'12', Quantidade:'13'},
{Nome:'baronesa', Preço: 119.99, ClassificaçãoIndicativa:'12', Quantidade:'8'}]

const mostraListBrinquedos = () =>{
    console.log(`Catalógo de brinquedos ${brinquedos}`)
  

}

const mostraListAlimentos = () =>{
     console.log(`Alimentos para sua refeição ${alimentos}`)
}