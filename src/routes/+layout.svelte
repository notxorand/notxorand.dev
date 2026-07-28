<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.ico';
	import Header from '$lib/Header.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>ewan is notxorand</title>
	<meta name="description" content="I'm Ewan, I write code and think I'm a little philosopher." />
	<meta property="og:site_name" content="notxorand.dev" />
	<meta property="og:type" content="website" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:creator" content="@notxorand" />
	<meta property="og:image" content="/cat.jpg" />
	<meta name="twitter:image" content="/cat.jpg" />
</svelte:head>

<div class="mx-auto max-w-2xl px-4 pb-12">
	<Header />
	<main>
		{@render children()}
	</main>
</div>
