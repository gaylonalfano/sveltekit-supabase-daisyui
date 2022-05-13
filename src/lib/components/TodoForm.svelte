<script>
	import Input from '$lib/components/Input.svelte';
	import { TodosStore } from '$lib/stores/TodosStore';
	import { UserStore } from '$lib/stores/AuthStore';

	let text = '';

	function handleSubmit() {
		console.log('Submitted!');
		// NOTE There are several ways to build your Stores.
		// Below is me just experimenting with some variations.
		// addTodo(text);
		//customTodosStore.addTodo(text);
		TodosStore.addTodo(text, $UserStore.id);
		text = '';
	}
</script>

<div class="container mx-auto">
	<form on:submit|preventDefault={handleSubmit} class="card card-body mx-auto max-w-lg">
		<div class="form-control w-full">
			<label class="label" for="text">
				<span class="label-text">What needs doing?</span>
			</label>
			<input
				type="text"
				placeholder="Enter text..."
				name="text"
				id="text"
				class="input input-bordered w-full"
				bind:value={text}
			/>
		</div>
		<button type="submit" class="btn btn-primary">Submit</button>
	</form>
</div>
