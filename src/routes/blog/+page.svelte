<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>ewan writes too</title>
</svelte:head>

<h1 class="mb-8">blog</h1>

<div class="space-y-4">
	{#each data.posts as post}
		<a href="/blog/{post.slug}" class="my-2 block no-underline!">
			<span class="underline"># {post.title}</span>
			-
			{#if post.date}
				<span class="text-sm text-gray-500">{new Date(post.date).toLocaleDateString()}</span>
			{/if}
		</a>
	{/each}
</div>
