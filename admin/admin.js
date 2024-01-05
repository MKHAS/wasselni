const sidebarToggle = () => {
	document.body.classList.toggle("sidebar-open");
};

const sidebarTrigger = document.getElementById("main-header-sidebar-toggle");

sidebarTrigger.addEventListener("click", sidebarToggle);

// Sidebar collapse

const sidebarCollapse = () => {
	document.body.classList.toggle("sidebar-collapsed");
};

const sidebarCollapseTrigger = document.getElementById("sidebar-collapse");

sidebarCollapseTrigger.addEventListener("click", sidebarCollapse);
