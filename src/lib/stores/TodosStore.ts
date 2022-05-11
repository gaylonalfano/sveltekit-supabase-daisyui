import { writable } from 'svelte/store';

// export const todos = writable<Record<string, any>[]>([]);

function addTodo(text: string) {
	console.log('Adding todo...');
	TodosStore.update((items: Record<string, any>[]) => {
		return [...items, { text, isCompleted: false, id: Date.now() }];
	});
}

function deleteTodo(id: Date) {
	console.log('Deleting todo...');
	TodosStore.update((items: Record<string, any>[]) => {
		return items.filter((item) => item.id !== id);
	});
}

function toggleCompleted(id: Date) {
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

function createTodosStore() {
	const { subscribe, set, update } = writable<Record<string, any>[]>([]);

	return {
		subscribe,
		addTodo: (text: string) => {
			update((items: Record<string, any>[]) => {
				return [...items, { text, isCompleted: false, id: Date.now() }];
			});
		},
		deleteTodo: (id: Date) => {
			update((items: Record<string, any>[]) => {
				return items.filter((item) => item.id !== id);
			});
		},
		toggleCompleted: (id: Date) => {
			update((items: Record<string, any>[]) => {
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
					items[index].isCompleted = !items[index].isCompleted;
				}

				return items;
			});
		},
		reset: () => set([])
	};
}
export const TodosStore = createTodosStore();
// export const TodosStore = {
// 	subscribe,
// 	set,
// 	update,
// 	addTodo,
// 	deleteTodo,
// 	toggleCompleted
// };

// export const customTodosStore = {
// 	...TodosStore,
// 	addTodo,
// 	deleteTodo,
// 	toggleCompleted
// };

// NOTE Max introduced the concept of CUSTOM STORES exporting an object that
// has a Store.subscribe property, along with other helper functions:
// NOTE You must FIRST create a default Store (const cart = writable([]))
//
// const cart = writable([]);
// const customCart = {
//	subscribe: cart.subscribe,
//	addItem: (item) => {
//		cart.update(items => {
//			return [...items, item];
//		});
//	},
//	removeItem: (id) => {
//		cart.update(items => {
//			return items.filter(item => item.id !== id);
//		});
//	}
// }
