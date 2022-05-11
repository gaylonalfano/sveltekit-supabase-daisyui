<script>
	import '../app.css';
	import { db } from '$lib/supabase/db';

	console.log(db);
</script>

<main class="container mx-auto my-6 max-w-lg">
	<slot />
</main>
