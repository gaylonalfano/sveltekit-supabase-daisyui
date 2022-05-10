<script lang="ts">
	// https://dev.to/brewhousedigital/adding-tailwind-and-daisy-ui-to-sveltekit-2hk5
	export let label = '';
	export let type = '';
	export let id = '';
	export let placeholder = '';
	export let value = '';

	function onInput(e: any) {
		value = e.target.value;
	}
</script>

<div class="form-control">
	<label class="label" for={id}>
		<span class="label-text">{label}</span>
	</label>
	<input {type} {placeholder} {id} {value} on:input={onInput} class="input input-bordered w-full" />
</div>
