<script>
	import TodoForm from '$lib/components/TodoForm.svelte';
	import { TodosStore } from '$lib/stores/TodosStore';
</script>

<main class="prose">
	<h1 class="text-center">My Todos</h1>

	<TodoForm />
	<ul>
		{#each $TodosStore as todo}
			<li>{todo.id} {todo.task} {todo.isCompleted}</li>
		{/each}
	</ul>
</main>
