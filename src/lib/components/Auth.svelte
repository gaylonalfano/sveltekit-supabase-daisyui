<script>
	// NOTE Good Auth example with Svelte+Supabase:
	// https://www.eternaldev.com/blog/svelte-login-with-supabase/
	import { db } from '$lib/supabase/db';

	let loading = false;
	let email = '';
	let message = { success: null, display: '' };

	// const handleLogin = async () => {
	// 	try {
	// 		loading = true;
	// 		const { error } = await supabase.auth.signIn({ email, password });
	// 		if (error) throw error;
	// 		message = { success: true, display: 'Successfully logged in!' };
	// 	} catch (error) {
	// 		let errorMsg = error.error_description || error.message;
	// 		message = { success: false, display: errorMsg };
	// 	} finally {
	// 		loading = false;
	// 	}
	// };

	async function handleLogin() {
		try {
			loading = true;
			const { error } = await db.auth.signIn({ email });
			if (error) throw new Error();
			// message = { success: true, display: 'Successfully logged in!' };
			alert('Check your email for the login link!');
		} catch (error) {
			let errorMsg = error.error_description || error.message;
			// message = { success: false, display: errorMsg };
			console.error(error);
			alert(error.error_description || error.message);
		} finally {
			loading = false;
		}
	}
</script>

<h1 class="text-center">Log In</h1>
<p class="text-center">Sign in via magic link with your email below.</p>

<div class="container mx-auto">
	<form on:submit|preventDefault={handleLogin} class="card card-body mx-auto max-w-lg">
		<div class="form-control w-full">
			<label class="label" for="email">
				<span class="label-text">Email</span>
			</label>
			<input
				type="email"
				placeholder="Enter email address..."
				name="email"
				id="email"
				class="input input-bordered w-full"
				bind:value={email}
			/>
		</div>
		<button type="submit" class="btn btn-secondary">Log In</button>
	</form>
</div>
