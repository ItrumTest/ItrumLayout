const files = [
    "./common/addElement.js",
    "./common/completeTask.js",
    "./common/selectAllTasks.js",
    "./common/deleteTask.js",
    "./common/restoreTask.js",
    "./common/basket.js",
    
];

function importFiles(files) {
    const selectAnchorJStag = document.getElementById("JSinject");
    files.map((el) => {
        const createJSfileConnect = document.createElement("script");
        createJSfileConnect.setAttribute("src", el);

        document.body.insertBefore(createJSfileConnect, selectAnchorJStag);
    });
}
importFiles(files);