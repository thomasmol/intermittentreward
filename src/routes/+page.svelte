<script lang="ts">
	import { browser } from '$app/environment';
	import {chance} from '$lib/stores';

	let getReward: boolean;
	let isLoading: boolean = false;
	function tossCoin() : void {
		if ($chance < 2) {
			$chance = 2;
		}
		isLoading = true;
		setTimeout(() => {
			const result = Math.random();
			if (result < 1 / $chance) {
				getReward = true;
			} else {
				getReward = false;
			}
			isLoading = false;
		}, $chance * 200);
	}
</script>

<main>
	<section class="container py-12 md:py-32">
		<h1 class="text-left text-4xl font-bold text-stone-800">Intermittent rewarding</h1>
		<h2 class="mt-1 text-left text-xl font-semibold text-stone-500">
			Should you give yourself a reward?
		</h2>
		<div class="mt-4 rounded-xl border border-stone-300 bg-stone-50 p-20 text-center ">
			{#if isLoading}
				<h3 class="text-4xl animate-spin">🎲</h3>
			{:else if getReward}
				<h3 class="text-4xl font-bold text-stone-500">Yes 👏</h3>
			{:else}
				<h3 class="text-4xl font-bold text-stone-500">No 🚫</h3>
			{/if}
		</div>
		<div class="mt-6">
			<button
				on:click={tossCoin}
				class:opacity-70={isLoading}
				class="w-full rounded-xl bg-stone-600 py-6 px-2 text-3xl font-bold text-stone-100 transition duration-100 ease-in-out hover:bg-stone-700">
				Toss
			</button>
		</div>
		<div class="mt-6">
			<div class="flex justify-start space-x-6">
				<div class="flex flex-col h-28 touch-pinch-zoom">
					<button
						on:click={() => $chance++}
						class="flex-1 rounded-t-xl border border-b-0 border-stone-500 text-stone-500 transition duration-100 ease-in-out bg-stone-100 hover:bg-stone-600 hover:text-stone-100"
						>&uparrow;</button>
					<button
						on:click={() => {
							if ($chance > 2) $chance--;
						}}
						class="flex-1 rounded-b-xl border border-t-1 border-stone-500 text-stone-500 transition duration-100 ease-in-out bg-stone-100 hover:bg-stone-600 hover:text-stone-100"
						>&downarrow;</button>
					<p class="mt-2 text-left text-sm text-stone-500">Adjust chances</p>
				</div>
				<div class="">
					<p class="text-2xl text-stone-800">
						Your chances are <strong>1 in {#if browser} {$chance} {:else}..{/if}</strong> to get a reward
					</p>
				</div>
			</div>
		</div>
		<div class="mt-8 rounded-xl border border-stone-200 bg-stone-50 p-4">
			<h4 class="text-xl font-bold text-stone-800">Why you should do this:</h4>
			<p class="mt-2 text-base leading-6 text-stone-600">
				Rewards can be a powerful motivator, and giving yourself a reward at random after completing
				a hard task can improve your performance and enjoyment of the task.
			</p>
			<h4 class="mt-4 text-lg font-semibold text-stone-700">💡 Here's why:</h4>
			<ul class="mt-3 list-inside list-disc space-y-3 text-base leading-6 text-stone-600">
				<li>
					🎰 Similar to how casinos work, the <strong
						>anticipation of potentially receiving a reward</strong> can motivate individuals to put
					in more effort into the task.
				</li>
				<li>
					🎲 The <strong>randomness of the reward</strong> adds an element of unpredictability and novelty,
					making the task more engaging and enjoyable.
				</li>
				<li>
					🔁 <strong>This creates a positive feedback loop</strong>, where the individual becomes
					more motivated to complete the task and receives a reward, increasing their motivation and
					enjoyment.
				</li>
			</ul>
			<p class="mt-4 text-base leading-6 text-stone-600">
				So next time you're faced with a challenging task, consider rewarding yourself at random for
				a boost in performance and enjoyment. 💪
			</p>
		</div>
		<div class="mt-8 rounded-xl border border-stone-200 bg-stone-50 p-4">
			<h4 class="text-xl font-bold text-stone-800">About</h4>
			<p class="mt-2 text-base text-stone-800">
				Built by <a
					href="https://thomasmol.com"
					target="_blank"
					rel="noreferrer"
					class="text-stone-700 underline hover:text-stone-500">Thomas</a> - December 2022
			</p>
		</div>
	</section>
</main>
