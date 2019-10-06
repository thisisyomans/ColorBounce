function resizeApp()
{
	var div = document.getElementById('thisiscanvas');

	div.style.width = window.innerHeight * 0.6;
	div.style.height = window.innerHeight;
}

window.addEventListener('resize', function(e)
{
	resizeApp();
});

resizeApp();
