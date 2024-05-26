const excuseButton = document.querySelector("#excuse-button");

const generateExcuse = () => {
    const who = ["X-The broswer", "X-The Webflow editor"];
    const action = ["X-misinterpreted", "X-glitched on"];
    const what = ["X-my responsive settings", "X-the custom code"];
    const when = ["X-right before the demo", "X-during peak hours"];


    const whoIndex = Math.floor(Math.random() * who.length);
    const actionIndex = Math.floor(Math.random() * action.length);
    const whatIndex = Math.floor(Math.random() * what.length);
    const whenIndex = Math.floor(Math.random() * when.length);
    
    const excuse = `${who[whoIndex]} ${action[actionIndex]} ${what[whatIndex]} ${when[whenIndex]}`;
    console.log("excuse:");
    console.log(excuse);
    return excuse
};

excuseButton.addEventListener("click", () => {
    document.querySelector("#excuse-message").innerHTML = generateExcuse();
});
