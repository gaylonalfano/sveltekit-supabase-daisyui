<script lang="ts">
	import { TodosStore } from '$lib/stores/TodosStore';
	// NOTE Could use a custom Input component
	// import Input from '$lib/components/Input.svelte';

	export let todo: Record<string, any>;

	$: {
		console.log('todo changed:', todo);
	}
</script>

<li class="list-none">
	<div class="form-control">
		<label class="label cursor-pointer">
			<input
				type="checkbox"
				checked={todo.isCompleted}
				class="checkbox"
				on:change={() => TodosStore.toggleCompleted(todo.id, todo.isCompleted)}
			/>
			<span class="label-text basis-3/4" class:line-through={todo.isCompleted}>{todo.text}</span>
			<button class="btn btn-error btn-xs" on:click={() => TodosStore.deleteTodo(todo.id)}
				>DELETE</button
			>
		</label>
	</div>
</li>
