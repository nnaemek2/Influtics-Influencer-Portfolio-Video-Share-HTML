document.addEventListener("DOMContentLoaded", () => {
    "use strict";

    const tabButtons = document.querySelectorAll(".tab-nav");
    const tabs = document.querySelectorAll(".jo-tab");

    if (tabButtons) {
        tabButtons.forEach(button => {
            button.addEventListener("click", () => {
                const tabId = button.getAttribute("data-tab");

                tabs.forEach(tab => {
                    if (tab.id === tabId) {
                        tab.classList.add("active");
                    } else {
                        tab.classList.remove("active");
                    }
                });

                tabButtons.forEach(btn => {
                    btn.classList.remove("active");
                });
                button.classList.add("active");
            });
        });
    };
});