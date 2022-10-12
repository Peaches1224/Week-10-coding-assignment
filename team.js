class Memeber{
    constructor( name, posistion) {
        this.name= name;
        this.posistion= posistion;
    }
}

class Team{
    constructor(id,name) {
this.id= id;
this.name= name;
this.member= [];  // the array is all the memebers that get added to the team
}

addmemeber(member) { // this is a method
 this.member.push(member);

}

deleteMemeber(member) { // method for deleating a memeber
 let index = this.members.indexOf(member);
 this.members.splice(index, 1) // this removes 1 member
}

}


let teams=[];
let teamid= 0;

onClick('new-team', () => {
 teams.push(new Team(teamId++, getValue('new-team-name')));
 drawDOM() // this reiterates over our teams array and build tables for each one
});

function onClick(id, action) {
    const el = document.getElementById('btn');
console.log(el); // 👉️ button#btn

    // let element = document.getElementById(id);
    // element.addEventListener('el.click', action);
    // return element; // We don't have to recreate the code above when we do this

}


function getValue(id){
    return document.getElementById(id).value;
}

function drawDOM(){
    let teamDiv = document.getElementById('teams'); // this is the teams div on the index page
clearElement(teamDiv)
for (team of teams) {
    let table = createTeamTable(team);
    let title = document.createElement('h2');
    title.innerHTML = team.name;
    title.appendChild(createDeleteTeamButton(team));
    teamDiv.appendChild(title);
    teamDiv.appendChild(table);
    for (member of team.members) {
        createMemberRow(team, table, member)
    }
}
}

//  this is what the drawDom will do, it will clear out the div and it will iterat
// over the teams and create a table for each team, create a dlete button and all the members to that team

function createMemberRow(team, table, member){
 let row = table.insertRow(2);
 row.insertCell(0).innerHTML = member.name;
 row.insertCell(1).innerHTML - member.posistion;
 let actions = row.insertCell(2);
 actions.appendChild(createDeleteRowButton(team, member));
}

function createDeleteRowButton(team, member) {
    let btn = document.createElement('button');
    btn.className = 'btn btn-primary';
    btn.innerHTML = 'Delete';
    btn.onclick= () => {
        let index = team.members.indexOf(member);
        team.member.splice(index, 1);
        drawDOM();
    }
    return btn;
}

function createDeleteTeamButton(team) {
let btn = document.createElement('button');
btn.className = 'btn btn-primary';
btn.onclick = () => {
    let index = teams.indexOf(team);
    teams.splice(index, 1);
    drawDOM();
};
return btn;

}


function createNewMemberButton(team) {
    let btn = document.createElement('button');
    btn.className = 'btn btn-priamry';
    btn.innerHTML = 'create';
    btn.onClick = () => {
    team.members. push(new Memeber(getValue(`name-input-${team.id}`)));
    team.members. push(new Memeber(getValue(`posistion-input-${team.id}`)));
    };
}


// this code builds out the entire table
function createTeamTable(team) {
    let table = document.createElement('table');
    table.setAttribute('class','table table-light table-striped');
    let row = table.insertRow(0);
    let nameColumn = document.createElement('th');
    let posistionColumn = document.createElement('th');
    nameColumn.innerHTML = 'Name';
    posistionColumn.innerHTML = 'Posistion';
    row.appearChild(nameColumn);
    row.appendChild(posistionColumn);
    let formRow = table.insertRow(1);
    let nameTh = document.createElement('th');
    let posistionTh = document.createElement('th');
    let createTh = document.createElement('th');
    let namneInput = document.createElement('input');
    posistionInput.setAttribute ('id', `posistion-input-${team.id}`);
    posistionInput.setAttribute('type', 'text');
    posistionInput.setAttribute('class', 'form-control');
     let newMemberButton = createNewMemberButton(team);
      nameTh.appendChild(nameInput);
       posistionTh.appendChild(posistionInput);
       createTh.appendChild(newMemberButton);
       formRow.appendChild(nameTh);
       formRow.appendChild(posistionTh);
       formRow.appendChild(createTh);
       return table;

}


function clearElement(element) {
    while(element.firstchild) {
        element.removeChild(element.firstChild);
    }
}

