const MainAppRouterClass = require('itsa-react-server/lib/ClientApp');

let appInstance;
let MainApp = MainAppRouterClass.subClass(function() {
    // inititiate anything here

    /*  to read `this.props`, use either:
        this.getProps()
        this.getClonedProps()
    */

    /*  to use the router:
        this.router
    */

    /*  to use the controller:
        this.controller
    */

    /*  to use IO:
        this.io
    */

    /*  to use socket.io:
        this.socket
    */

    /*  to get the `state` after a reboot:
        let state = this.getStateAfterReboot();
        NOTE: the state is set by `this.saveStateOnReboot()` which should return an state-object
              this stateobject is stored in localstorage and after this.saveStateOnReboot() is called, it is removed from the localstorage
              Date-objects will be returned as trully Date-objects
    */

    /*  to go to href="#" with transition:
        this.router.setScrollAnchorTime(500);
    */
},
{
    zoomin() {
        const bodyDataAttrCookie = this.bodyDataAttrCookie;
        let bodydata = bodyDataAttrCookie.getProps(),
            zoom = bodydata.zoom || 2;

        zoom++;
        if (zoom>3) {
            zoom = 3;
        }
        bodyDataAttrCookie.setProps({zoom});
    },
    zoomout() {
        const bodyDataAttrCookie = this.bodyDataAttrCookie;
        let bodydata = bodyDataAttrCookie.getProps(),
            zoom = bodydata.zoom || 2;

        zoom--;
        if (zoom<1) {
            zoom = 1;
        }
        bodyDataAttrCookie.setProps({zoom});
    },
    destroy: function() {
        // destroy anything here
    }
});

const getApp = () => {
    if (!appInstance) {
        appInstance = new MainApp();
    }
    return appInstance;
};

module.exports = {
    getApp
};
