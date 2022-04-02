footer_init();

function footer_init() {
	document.getElementById('common-footer').innerHTML = `
		<div class="row">
			<div class="one-third column">
				<h3 class="section-heading"><a href="https://resourcible.com" style="text-decoration: none; color: inherit;">Resourcible</a></h3>
				A collective of IT industry specialists dedicated to delivering elegant solutions at scale
			</div>
			<div class="one-third column">
				something in here
			</div>
			<div class="one-third column">
				<i class="fa-brands fa-linkedin fa-2x"></i>
			</div>
		</div>
		<style>
			.footer {
			  background-color: #444;
			  color: #ccc;
			}
		</style>
	`;
}
