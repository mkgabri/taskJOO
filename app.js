class Task { //OGGETTO
    constructor(name, place, year, description){
        this.name=name;
        this.place=place;
        this.data=year;
        this.description=description;
    }
}

//clase que maneja la interfaz
class UI {
    addTask(task) {
        const taskList= document.getElementById("task-list");
        const element = document.createElement('div');
        //taskList.innerHTML = "prueva"; codico prueba
        element.innerHTML = 
            '<div class="card text-center mb-4">'+
                '<div class="card-body">'+
                    '<strong>Task name</strong>: '+task.name+'  '+
                    '<strong>Place</strong>: '+task.place+'  '+
                    '<strong>Year</strong>: '+task.data+'  '+
                    '<strong>Description</strong>: '+task.description+'  '+
					'<a href="#" class="btn btn-danger" name="delete">Borrar</a>'+
                '</div>'+
            '</div>';
        console.log(element);
        taskList.appendChild(element);
		this.resetForm();
    }
	
	resetForm (){
		document.getElementById("task-form").reset();
	}
    
    deleteTask(element) {
        if(element.name === 'delete'){
			element.parentElement.parentElement.parentElement.remove();
			this.showMessage('task eliminado','danger');
		}
    }
    
    showMessage(message, cssClass) {
        const div = document.createElement('div');
		div.className = 'alert alert-' + cssClass + ' mt-4';
		div.appendChild(document.createTextNode(message));
		//mostrando en el DOM
		const container = document.querySelector('.container');
		const app = document.querySelector('#App');
		container.insertBefore(div, app);
		setTimeout(function(){
			document.querySelector('.alert').remove();
		}, 3000)
    }
}

//eventos de DOM para capturar
document.getElementById('task-form',addEventListener('submit',function(e){
       //alert('Enviando formulario');
    var name = document.getElementById('name').value;
    var place = document.getElementById('place').value;
    var year = document.getElementById('year').value;
    var mounth = document.getElementById('mounth').value;
    var day = document.getElementById('day').value;
	var desc = document.getElementById('task-description').value;
        
    const task = new Task(name, place, year, desc);
    console.log(task);
    
    const ui = new UI();
    if(name === '' || place === '' || task-description === ''){
       return ui.showMessage('completa i campi necessari','danger');
    }
    ui.addTask(task);
	ui.resetForm();
	ui.showMessage('task agregada fatisfactoriamente', 'success');
    
    e.preventDefault(); //Cancella l'azione predefinita associata a un evento
                        //in questo caso evita che l'evento submit cancelli i dati
    }));


///capturar en evento delete
document.getElementById('task-list').addEventListener('click',function(e){
	const ui = new UI();
	ui.deleteTask(e.target);
});

