<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>ewan writes too</title>
	<meta
		name="description"
		content="a collection of writings by me, Ewan on systems engineering, tech, and anything that enters my head."
	/>
	<meta property="og:title" content="ewan writes too" />
	<meta
		property="og:description"
		content="a collection of writings by Ewan on systems engineering, tech, and anything that enters my head."
	/>
	<meta name="twitter:title" content="ewan writes too" />
	<meta
		name="twitter:description"
		content="a collection of writings by Ewan on systems engineering, tech, and anything that enters my head."
	/>
</svelte:head>

<h1 class="mb-8">my writings</h1>

<div class="space-y-4">
	{#each data.posts as post}
		<a href="/writing/{post.slug}" class="my-2 block no-underline!">
			<span class="underline"># {post.title}</span>
			-
			{#if post.date}
				<span class="text-sm text-gray-500">{new Date(post.date).toLocaleDateString()}</span>
			{/if}
		</a>
	{/each}
</div>
