footer_init();

function footer_init() {
	document.getElementById('common-footer').innerHTML = `
		<div class="row">
			<div class="one-third column">
				<a href="https://resourcible.com"><h3 class="section-heading">Resourcible</h3></a>
				A collective of IT industry specialists dedicated to delivering elegant solutions at scale
			</div>
			<div class="one-third column">
				something in here
			</div>
			<div class="one-third column">
				<i class="fa-brands fa-linkedin"></i>
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
