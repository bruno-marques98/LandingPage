<script>
	import MaterialButton from "./MaterialButton.svelte";
</script>

<MaterialButton id="one" text="first button" onClickFunction={() => {
	console.log("clicked first button");
}} />
<MaterialButton id="two" text="second button" onClickFunction={() => {
	console.log("clicked second button");
}} />

<style global lang="scss">
@use "@material/button/styles";
</style>
