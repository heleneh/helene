function setThemeClass(theme) {
	document.body.className = "theme-" + theme;
}

function toggleThemeClass() {
	var theme = document.body.classList.contains("theme-dark") ? 'dark' : 'light';
	theme = theme === 'dark' ? 'light' : 'dark';
	setThemeClass(theme);
	return theme;
}

function toggleTheme() {
	const theme = toggleThemeClass();
	localStorage.setItem('theme', theme);
}

function init() {
	var theme = localStorage.getItem('theme');
	if (theme === 'dark') {
		setThemeClass('dark');
		return;
	} else if (theme === 'light') {
		setThemeClass('light');
		return;
	}
	var hour = (new Date()).getHours();
	if (hour < 6 || hour > 18) {
		toggleThemeClass();
	}
}

document.addEventListener("DOMContentLoaded", function (event) {
	init();
});
