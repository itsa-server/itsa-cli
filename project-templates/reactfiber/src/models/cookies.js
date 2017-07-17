const model = async (request, reply /* , modelConfig, language, manifest */) => {
    reply.setBodyDataAttr({marco: 'hoi'});
    return {
        bodyDataAttrCookie: request.getBodyDataAttrCookie().getProps(),
        notExposedcookie: request.getNotExposedCookie().getProps()
    };
};

module.exports = model;
