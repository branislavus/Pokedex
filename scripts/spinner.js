function showLoadingSpinner() {
    const spinner = document.getElementById("loadingSpinner");
    spinner.classList.remove("hidden");
}

function hideLoadingSpinner() {
    const spinner = document.getElementById("loadingSpinner");
    spinner.classList.add("hidden");
}