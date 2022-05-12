<script>
	import TodoForm from '$lib/components/TodoForm.svelte';
	import TodoItem from '$lib/components/TodoItem.svelte';
	import { TodosStore } from '$lib/stores/TodosStore';

	TodosStore.loadTodos();
</script>

<section>
	<TodoForm />
	<ul class="card card-body py-0">
		{#each $TodosStore as todo, index}
			<TodoItem {todo} />
		{/each}
	</ul>
</section>
