// const tabTitle = document.title;
// addEventListener("blur", () => {
//     document.title = "🙏 Come Back To Portfolio"
// })
// addEventListener("focus", () => {
//     document.title = "Portfolio | ISHIMWE Jean Gloire ";
// })


document.addEventListener('visibilitychange',
    function() {
        if (document.visibilityState === "visible") {
            document.title = "Portfolio | ISHIMWE Jean Gloire";
        } else {
            document.title = "🙏 Come Back To Portfolio 😢";
        }
    })