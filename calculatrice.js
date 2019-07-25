function affichenombre (){
    document.getElementById("result").innerHTML += this.value;
}

function afficheresultat () {
    document.getElementById("result").innerHTML = (eval(result.textContent));
}

let reset = document.getElementById("reset");

function plusrien ()
{
    result.innerHTML ="";
}
reset.addEventListener("click", plusrien);

let action = document.getElementsByClassName("action");
for (let i=0; i < action.length; i++)
{
    action[i].addEventListener("click", affichenombre);
}

let op = document.getElementsByClassName("op")
for (let i=0; i < op.length; i++)
{
    op[i].addEventListener("click", affichenombre);
}

let egale = document.getElementsByClassName("egale")
for (let i=0; i < egale.length; i++)
{
    egale[i].addEventListener("click", afficheresultat);
}


//add event listener
// faire en sorte que quand tu cliques sur un bouton il l'affiche dans console log