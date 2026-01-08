function notEmpty(elem, helperMsg) {
    if (elem.value.trim() === "") {
        alert(helperMsg);
        elem.focus();
        return false;
    }
    alert("Input is filled");
    return true;
}
