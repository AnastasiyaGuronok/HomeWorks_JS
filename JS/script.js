const form = document.querySelector('#form');
const taskInput = document.querySelector('#taskInput');
const tasksList = document.querySelector('#tasksList');
const emptyList = document.querySelector('#emptyList');


form.addEventListener('submit', addTask);
tasksList.addEventListener('click', deleteTask);
tasksList.addEventListener('change', doneTask);
tasksList.addEventListener('click', deleteTaskAll);

function addTask (event) {
	event.preventDefault();

	const taskText = taskInput.value;

	const taskHTML = `
                <li class="list-group-item d-flex justify-content-between">
					<div class="box_action">
						<input type="checkbox" data-action="done" class="task_chekbox">
					</div>
					
					<span class="task-title">${taskText}</span>
					
					<div class="delete_button">
						<button type="button" data-action="delete" class="btn-action">
							<img src="img/cross.svg" alt="cross" width="18" height="18">			
						</button>
        			</div>
				</li>`;

	tasksList.insertAdjacentHTML('beforeend', taskHTML);

	taskInput.value =""
	taskInput.focus();

}

function deleteTask(event) {
	if(event.target.dataset.action === 'delete') {
		
		const parenNode = event.target.closest('.list-group-item');

		parenNode.remove();
	}
}

function doneTask (event){
	if(event.target.dataset.action === "done") {
		const parentNode = event.target.closest('.list-group-item');
		const taskTitle = parentNode.querySelector('.task-title');
		taskTitle.classList.toggle('task-title--done');
		
	}
}

function deleteTaskAll (event) {
	
	if(event.target.dataset.action === 'deleteAll') {

	}
		const Node = event.target.closest('.tasksList');

		parenNode.remove();
	}

