function fetchAndInjectContent(url, targetId) {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(html => {
            document.getElementById(targetId).innerHTML = html;
        })
        .catch(error => console.error(`Error fetching ${url}:`, error));
}

document.addEventListener("DOMContentLoaded", function () {
    fetchAndInjectContent("childPage/book.html", "booking");
    fetchAndInjectContent("childPage/footer.html", "footer");
    fetchAndInjectContent("childPage/chefs.html", "chefs");
});
