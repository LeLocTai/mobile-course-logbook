document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    console.log("ready");
    $("#show-btn").show();
}

function showDialog() {
    navigator.notification.confirm(
        "Choose action",
        onDialogConfirmed,
        "Dialog",
        ["Beep", "Vibrate"]
    );
}

function onDialogConfirmed(index) {
    switch (index) {
        case 1:
            navigator.notification.beep(1);
            break;
        case 2:
            navigator.vibrate(1000);
            break;
    }
}
