<script>
	import Input from '$lib/components/Input.svelte';
	import { addTodo } from '$lib/stores/TodosStore';

	let todo = '';

	function handleSubmit() {
		console.log('Submitted!');
		addTodo(todo);
		todo = '';
	}
</script>

<div class="container mx-auto">
	<form on:submit|preventDefault={handleSubmit} class="card card-body mx-auto max-w-lg">
		<Input label="Whatcha doing?" id="todo" bind:value={todo} type="text" />
		<button type="submit" class="btn btn-primary">Submit</button>
	</form>
</div>
