const Storage =  {}

Storage.get = function (name) {
    return JSON.parse(localStorage.getItem(name))
}

Storage.set = function (name, val) {
    localStorage.setItem(name, JSON.stringify(val))
}

Storage.add = function (name, addVal) {
    let oldVal = Storage.get(name)
    let newVal = oldVal.concat(addVal)
    Storage.set(name, newVal)
}

Storage.clear = function () {
   localStorage.clear();
}

Storage.key = function (index) {
   localStorage.key(index);
}
Storage.remove=function(key){
	//window.sessionStorage.removeItem(key);
	window.localStorage.removeItem(key);
}
export default Storage;