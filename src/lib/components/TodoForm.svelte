<script>
	import Input from '$lib/components/Input.svelte';

	let todo = '';

	function handleSubmit(e) {
		e.preventDefault();
		console.log('Submitted!');
	}
</script>

<div class="container mx-auto">
	<form on:submit={handleSubmit} class="card card-body max-w-sm">
		<Input label="Whatcha doing?" id="todo" bind:value={todo} type="text" />
		<Input label="Whatcha doing?" id="todo" bind:value={todo} type="text" />
		<Input label="Whatcha doing?" id="todo" bind:value={todo} type="text" />
		<button type="submit" class="btn btn-primary">Submit</button>
	</form>
</div>
