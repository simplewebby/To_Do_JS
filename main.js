var h1=document.getElementById('hello');
var btn = document.getElementById('btn');
var btn2 = document.getElementById('btn2');
var tasks = document.getElementById('tasks');
var newText = 'I hate my job!';


function addTask(){
  var input = document.getElementById('input').value;
  var li = document.createElement('li');
  var InputText = document.createTextNode(input);
  li.appendChild(InputText);
var n = document.getElementById('tasks').appendChild(li);

    
    

}
 function removeTask(){
    var input = document.getElementById('input').value;
    var items = document.getElementsByClassName('task');
    var mylist = document.getElementById('tasks');
    var length = (document.getElementsByClassName('task').length);
    var checker = 'false';

mylist.querySelectorAll('li').forEach(function(item){
    if(item.innerHTML === input){
        item.remove();
    }
});
 }



btn.addEventListener('click', addTask);
btn2.addEventListener('click', removeTask);
