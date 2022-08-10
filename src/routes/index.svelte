<script>
	import Cursor, { handleMouseMove, handleMouseDown, handleMouseUp } from './Cursor.svelte';
	import Sidebar from './Sidebar.svelte';
	import VariableFont from './VariableFont.svelte';

	const outlineOpacities = ['opacity-20', 'opacity-30', 'opacity-50'];
	const languages = ['JS', 'Python', 'React'];
	let currentLanguage = 0;

	setInterval(() => {
		currentLanguage++;

		if (currentLanguage > 2) currentLanguage = currentLanguage % 3;
	}, 4000);
</script>

<svelte:head>
	<title>Diogenis Siganos</title>
</svelte:head>

<div class="bg-highlights-red">
	<Cursor />
	<main
		transition-style="in:circle:top-right"
		on:mousemove={handleMouseMove}
		on:mousedown={handleMouseDown}
		on:mouseup={handleMouseUp}
	>
		<header class="flex flex-row h-screen bg-background-blue">
			<Sidebar />
			<div class="container mx-auto relative h-max py-48">
				<div transition-style="fade-in-left" class="hidden lg:block">
					{#each outlineOpacities as opacity}
						<h1
							class={`${opacity} select-none text-center inverted-text text-background-blue sm:text-start`}
						>
							DIOGENIS SIGANOS.
						</h1>
					{/each}
				</div>
				<h1 transition-style="fade-in-right" class="text-white text-center sm:text-start mb-4">
					<VariableFont typing={false} text={'DIOGENIS SIGANOS.'} />
				</h1>
				<h2
					transition-style="fade-in-up"
					style={'animation-delay: 1s'}
					class="text-center text-highlights-red sm:text-start mb-4"
				>
					<VariableFont typing={false} text={'I enjoy coding with'} />
					{#each [languages[currentLanguage]] as language (currentLanguage)}
						<VariableFont typing={true} text={`${language}.`} />
					{/each}
				</h2>
				<p
					transition-style="fade-in-up"
					style="animation-delay: 1.3s"
					class="text-white text-center mx-4 sm:mx-0 sm:text-start md:w-3/4 xl:w-1/2"
				>
					I'm a high school student with an ardent interest in CS, mathematics and philosophy.
					Currently, I'm focused on augmenting my web development and designing skillset.
				</p>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="dotted-circle"
					width="352"
					height="352"
					overflow="visible"
				>
					<circle
						cx="176"
						cy="176"
						r="174"
						fill="none"
						stroke="#fff"
						stroke-width="2"
						stroke-miterlimit="10"
						stroke-dasharray="12.921,11.9271"
					/>
				</svg>
			</div>
		</header>
	</main>
</div>
