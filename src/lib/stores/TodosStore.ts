import { writable } from 'svelte/store';

export const TodosStore = writable<Record<string, any>[]>([]);

export function addTodo(task: string) {
	console.log('Adding todo...');
	TodosStore.update((items: Record<string, any>[]) => {
		return [...items, { task, isCompleted: false, id: Date.now() }];
	});
}

export function deleteTodo(id: Date) {
	console.log('Deleting todo...');
	TodosStore.update((items: Record<string, any>[]) => {
		return items.filter((item) => item.id !== id);
	});
}

export function toggleCompleted(id: Date) {
	TodosStore.update((items: Record<string, any>[]) => {
		// Find the index of the item
		let index = -1;
		for (let i = 0; i < items.length; i++) {
			if (items[i].id === id) {
				index = i;
				break;
			}
		}

		if (index !== -1) {
			// Item is found
			items[index].isCompleted != items[index].isCompleted;
		}

		return items;
	});

	// console.log('Toggling completed...');
	// todosStore.update((items: Record<string, any>[]) => {
	// 	items[index].isCompleted != items[index].isCompleted;
	// 	const todo = items[index];
	// 	todo.isCompleted != todo.isCompleted;
	// 	retur n
	// 	// const todo = items.find((item) => item.id === id);
	// 	// todo.isCompleted != todo.isCompleted;
	// });
}
