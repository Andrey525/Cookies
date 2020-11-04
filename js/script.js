function setCookie(name, value) {
    // var today = new Date();
    // var expire = new Date();
    // alert(name + "=" + escape(value) + "; expires=" + expire.toGMTString());
    // expire.setTime(today.getTime() + 1000 * 60 * 60 * 24 * 365);
    // alert(name + "=" + escape(value) + "; expires=" + expire.toGMTString());
    // document.cookie =
    //     name +
    //     "=" +
    //     escape(value) +
    //     (expire == null ? "" : "; expires=" + expire.toGMTString());
    alert(name + "=" + escape(value));
    document.cookie = name + "=" + escape(value);
    alert(document.cookie);
}

function getCookie(name) {
    var search = name + "=";
    if (document.cookie.length > 0) {
        offset = document.cookie.indexOf(search);
        if (offset != -1) {
            offset += search.length;
            end = document.cookie.indexOf(";", offset);
            if (end == -1) {
                end = document.cookie.length;
            }
            return unescape(document.cookie.substring(offset, end));
        }
    }
}