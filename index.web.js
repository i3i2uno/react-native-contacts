class RNContacts {
    requestPermission() {
        return "authorized";
    }

    checkPermission() {
        return "authorized";
    }

    getAll() {
        return [];
    }
}

module.exports = new RNContacts();