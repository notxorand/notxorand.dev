<script lang="ts">
	let projects = [
		{
			name: 'slung',
			description: 'algebraic payload typed fact rule engine in zig.',
			url: 'https://github.com/slunghq/slung'
		},
		{
			name: 'fawna',
			description: 'time series database engine in zig. 3.7m wps sustained.',
			url: 'https://github.com/slunghq/fawna'
		},
		{
			name: 'slipstream',
			description:
				'stateless serverless runtime for hardened compute inside intel sgx tees in rust.',
			url: 'https://github.com/s3ndotxyz/runtime'
		},
		{
			name: 'quartz.zig',
			description: 'simple zig benchmarking utility library.',
			url: 'https://github.com/notxorand/quartz.zig'
		}
	];
</script>

<p>
	hellooo, im Ewan, a systems engineer and a mechatronics engineering major. i write zig, rust, and
	use nix as my daily driver and for ci.
</p>

<span>
	<a href="https://github.com/notxorand">github</a>
	<a href="https://twitter.com/notxorand">twitter</a>
	<a href="https://discordapp.com/users/748600243599442021">discord</a>
</span>

<p class="mt-6 mb-3">
	i currently contribute entirely to open-source and work on low-level systems.
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
