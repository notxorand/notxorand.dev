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
	];

	let research =
	[
		{
			name: 'porter',
			description: 'gateway experiment for passing around live sockets between processes.',
			url: 'https://github.com/notxorand/porter'
		},
	];

	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<p>
	hi. I'm Ewan, I'm weird -- weird is awesome! I love art, tennis, and things that go super fast (like Formula 1). I write code for fun and work.
</p>

<span>
	<a href="https://github.com/notxorand">github</a>
	<a href="https://twitter.com/notxorand">twitter</a>
	<a href="https://discordapp.com/users/748600243599442021">discord</a>
</span>

<p class="mt-6 mb-3">
	I currently contribute to open-source and spend my time doing research and development on low-level systems.
</p>

<h2>latest research</h2>

<ul>
	{#each research as project}
	<li class="block">
		<a href={project.url} class="my-1 no-underline!" target="_blank">
			<span class="underline">{project.name}</span>
			-
			<span class="text-gray-600">{project.description}</span>
		</a>
		</li>
	{/each}
</ul>

<h2>oss and other projects</h2>

<ul>
	{#each projects as project}
	<li class="block">
		<a href={project.url} class="my-1 no-underline!" target="_blank">
			<span class="underline">{project.name}</span>
			-
			<span class="text-gray-600">{project.description}</span>
		</a>
		</li>
	{/each}
</ul>

<p class="mt-3">
	find my resume: <a href="/resume.pdf" target="_blank">view</a> |
	<a href="/resume.pdf" download>download</a>.
</p>

<p class="mt-6">
	I keep a log of research papers I've read
	<a href="https://github.com/notxorand/papers">here</a>.
</p>

<p class="mt-6">I also like to write. read what what drafts I went through with publishing:</p>

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
