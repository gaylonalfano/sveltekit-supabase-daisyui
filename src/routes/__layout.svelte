<script>
	import '../app.css';
	import { db } from '$lib/supabase/db';
	import { UserStore } from '$lib/stores/AuthStore';
	import { TodosStore } from '$lib/stores/TodosStore';
	import Auth from '$lib/components/Auth.svelte';
	import Navbar from '$lib/components/Navbar.svelte';

	console.log(db.auth.user());
	// Update our UserStore with logged in Supabase user
	UserStore.set(db.auth.user());

	// What happens if/when the user logs out?
	db.auth.onAuthStateChange((_, session) => {
		UserStore.set(session?.user);

		if (session?.user) {
			TodosStore.loadTodos();
		}
	});
</script>

<main class="container mx-auto prose my-6 max-w-lg">
	{#if $UserStore}
		<Navbar />
		<slot />
	{:else}
		<Auth />
	{/if}
</main>
