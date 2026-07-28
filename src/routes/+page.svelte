<script lang="ts">
	let projects = [
		{
			name: 'zio',
			description: 'async I/O for zig with truly asynchronous std.Io interface.',
			url: 'https://github.com/lalinsky/zio'
		},
		{
			name: 'slung',
			description: 'algebraic payload typed fact rule engine in zig.',
			url: 'https://github.com/slunghq/slung'
		},
		{
			name: 'slick',
			description: 'multiplayer twin-stick inspired battle arena rally game',
			url: 'https://github.com/notxorand/slick'
		},
		{
			name: 'quartz.zig',
			description: 'simple zig benchmarking utility library.',
			url: 'https://github.com/notxorand/quartz.zig'
		}
	];

	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<p>
	hellooo, I'm Ewan, a systems engineer and a mechatronics engineering major. I write zig, rust, and
	use nix as my daily driver and for ci.
</p>

<span>
	<a href="https://github.com/notxorand">github</a>
	<a href="https://twitter.com/notxorand">twitter</a>
	<a href="https://discordapp.com/users/748600243599442021">discord</a>
</span>

<p class="mt-6 mb-3">
	I currently contribute entirely to open-source and work on low-level systems:
</p>

<div>
	{#each projects as project}
		<a href={project.url} class="my-1 block no-underline!" target="_blank">
			<span class="underline">{project.name}</span>
			-
			<span class="text-gray-600">{project.description}</span>
		</a>
	{/each}
</div>

<p class="mt-3">
	find my resume: <a href="/resume.pdf" target="_blank">view</a> |
	<a href="/resume.pdf" download>download</a>.
</p>

<p class="mt-6">
	I keep a log of research papers I've read
	<a href="https://github.com/notxorand/papers">here</a>.
</p>

<p class="mt-6">also, I like to write. read what I just wrote:</p>

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

<a href="/writing" class="block no-underline!">
	<span class="underline">more writings</span> <span class="text-sm text-gray-500">...</span>
</a>
