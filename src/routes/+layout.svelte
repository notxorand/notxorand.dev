<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.png';
	import Header from '$lib/Header.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>ewan is notxorand</title>
</svelte:head>

<div class="mx-auto max-w-2xl px-4 pb-12">
	<Header />
	<main>
		{@render children()}
	</main>
</div>
