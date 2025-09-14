/* Parent function */
function createToaster(config) {
    const parent = document.querySelector(".parent");

    // parent ko ek hi baar setup karna
    parent.classList.add(config.positionX === "right" ? "right-5" : "left-5");
    parent.classList.add(config.positionY === "bottom" ? "bottom-5" : "top-5");

    return (str) => {
        let div = document.createElement("div");
        div.textContent = str;

        // theme set
        div.className = `inline-block 
            ${config.theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-200 text-black"} 
            px-6 py-3 rounded shadow-lg mb-2 pointer-events-none`;

        parent.appendChild(div);

        // remove after duration
        setTimeout(() => {
            div.remove();
        }, config.duration * 1000);
    };
}

// Example usage
let toaster = createToaster({
    positionX: "right",
    positionY: "bottom",
    theme: "light",
    duration: 4,
});

toaster("Download Done ✅");

setTimeout(() => {
toaster("Second message bhi aa gaya!");
    
}, 2000);

toaster("Alert!");

