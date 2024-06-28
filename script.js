const caixabranca = document.querySelector('.caixabranca');
const caixabrancaAberta = document.querySelector('.caixabrancaAberta');
const caixabrancabutton = document.querySelector('.caixabranca button');
const caixabrancaAbertabutton = document.querySelector('.caixabrancaAberta button');
const caixabrancaAbertap = document.querySelector('.arreyados')

caixabrancabutton.addEventListener('click', handleClick);
caixabrancaAbertabutton.addEventListener('click', handleResetClick);

var array = ["Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.","A sorte favorece a mente bem preparada.","Tente a sua sorte! A vida é feita de oportunidades. O homem que vai mais longe é quase sempre aquele que tem coragem de arriscar.","Siga os bons e aprenda com eles.", "Acredite em milagres, mas não dependa deles.","Se você se sente só é porque construiu muros ao invés de pontes.","Conhecimento é a única virtude e ignorância é o único vício."," Não há que ser forte. Há que ser flexível","Que ninguém se engane, só se consegue a simplicidade através de muito trabalho."]


function handleClick(){
  let i = (Math.floor(Math.random() * array.length))
  caixabrancaAbertap.innerText = `${array[i]}`
  caixabranca.classList.add('hide');
  caixabrancaAberta.classList.remove('hide');
}
function handleResetClick(){
  caixabranca.classList.remove('hide');
  caixabrancaAberta.classList.add('hide');
}