<script>
	let title = $state('notxorand');

	function toggleTitle() {
		title = title === '¬⊕∧' ? 'notxorand' : '¬⊕∧';
	}
</script>

<nav class="flex items-center justify-between py-6">
	<button onclick={toggleTitle} class="text-lg font-bold no-underline! hover:underline">
		{title}
	</button>
	<div class="space-x-4">
		<a href="/" class="text-gray-600 hover:underline">home</a>
		<a href="/blog" class="text-gray-600 hover:underline">blog</a>
		<a href="/philosophy" class="text-gray-600 hover:underline">philosophy</a>
	</div>
</nav>
