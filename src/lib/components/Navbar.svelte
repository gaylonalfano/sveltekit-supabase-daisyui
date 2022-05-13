<script>
	import { db } from '$lib/supabase/db';
	import { UserStore } from '$lib/stores/AuthStore';

	async function login() {
		console.log('login');
	}

	async function logout() {
		db.auth.signOut();
	}
</script>

<div class="navbar bg-base-100">
	<div class="navbar-start">
		<a class="btn btn-ghost normal-case text-xl" href="/">myTodos</a>
	</div>
	<div class="navbar-end">
		<button class="btn btn-accent" on:click={logout}>Log out</button>
	</div>
</div>
