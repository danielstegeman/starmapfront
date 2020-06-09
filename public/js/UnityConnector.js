
window.UnityConnector = {
    cameraPos : {
        x: -1,
        y: -1,
        z: -1
    },
    webglReady: false,

    SetCameraPos: function (x, y, z) {
        this.cameraPos.x = x;
        this.cameraPos.y = y;
        this.cameraPos.z = z;
    },
    SetWebglReady: function (bool) {
        this.webglReady = bool;
    },
    UseUnity: false,
    SelectedStar : null,
    unityInstance: null
}


