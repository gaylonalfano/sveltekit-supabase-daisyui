<script>
	import TodoForm from '$lib/components/TodoForm.svelte';
	import TodoItem from '$lib/components/TodoItem.svelte';
	import { TodosStore } from '$lib/stores/TodosStore';

	TodosStore.loadTodos();
</script>

<main class="prose">
	<h1 class="text-center">My Todos</h1>

	<TodoForm />
	<ul class="card card-body py-0">
		{#each $TodosStore as todo, index}
			<TodoItem {todo} />
		{/each}
	</ul>
</main>
