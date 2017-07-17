const generalModel = async (/* request, reply, modelConfig, language, manifest */) => {
    // invokes before a view is rendered. Use this phase to preset any values to the view.
    // you can use `reply.addAppCookieValue(value)` to add extra values to the cookie
    // or `reply.setAppCookie(value)` to redefine the cookie
    // where `value` id an object

    // example: read the zoomlevel and merge it into this.props.zoomlevel:
    // const zoomLevel = appCookie ? appCookie.zoomLevel : 0;
    // return {zoomLevel};
    // request.getBodyDataAttrCookie().defineProps(reply, {test3: 44});
    return {
        // bodyDataAttr: {
        //     test1: 11,
        //     test2: 22
        // }
    };
};

module.exports = generalModel;
