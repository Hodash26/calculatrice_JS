function affichenombre (){
    document.getElementById("result").innerHTML += this.value;
}

function afficheresultat () {
    document.getElementById("result").innerHTML += (eval("action"));
}

let action = document.getElementsByClassName("action"); document.getElementsByClassName("egale");
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



// faire en sorte que quand tu cliques sur un bouton il l'affiche dans console log