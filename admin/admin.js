const sidebarToggle = () => {
	document.body.classList.toggle("sidebar-open");
};

const sidebarTrigger = document.getElementById("main-header-sidebar-toggle");

sidebarTrigger.addEventListener("click", sidebarToggle);
