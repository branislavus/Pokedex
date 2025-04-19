function showLoadingSpinner() {
    const spinner = document.getElementById("loadingSpinner");
    spinner.classList.remove("hidden");
}

function hideLoadingSpinner(delay = 400) {
    setTimeout(() => {
        const spinner = document.getElementById("loadingSpinner");
        spinner.classList.add("hidden");
    }, delay);
}