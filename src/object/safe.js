exports.getProperty = function (obj, path) {
    let name = path.split('.');
    for (let i = 0; i < name.length - 1; i++) {
        obj = obj[name[i]];
        if (typeof obj !== 'object' || !obj || Array.isArray(obj)) return;
    }
    return obj[name.pop()];
};

exports.setProperty = function (obj, path, value) {
    let name = path.split('.');
    for (let i = 0; i < name.length - 1; i++) {
        if (typeof obj[name[i]] !== 'object' && obj[name[i]] !== undefined)
            return;
        if (Array.isArray(obj[name[i]])) return;
        if (!obj[name[i]]) obj[name[i]] = {};
        obj = obj[name[i]];
    }
    obj[name.pop()] = value;
};
