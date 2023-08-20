
const inputeArea = document.getElementById("inputeArea");
const listItems = document.getElementById('lists')

function Add(){
    if (inputeArea.value === "") {
        alert ('The input box is empty') 
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = inputeArea.value;
        listItems.append(li);
        
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.append(span);
    }
    inputeArea.value = "";
    saveItems();
}

listItems.addEventListener('click', function(e){
    if (e.target.tagName === 'LI'){
        e.target.classList.toggle('checked')  
        saveItems();
    }
    else
        if(e.target.tagName === 'SPAN'){
            e.target.parentElement.remove();
            saveItems();
        }   
},false);

function saveItems(){
    localStorage.setItem('Data', lists.innerHTML);
}
function showData(){
    lists.innerHTML = localStorage.getItem('Data')
}
showData();