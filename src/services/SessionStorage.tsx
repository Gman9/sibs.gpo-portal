const SessionStorage = (function () {
    /* let _service: any;

    function _getService() {
        if (!_service) {
            _service = this;
            return _service;
        }
        return _service;
    } */

    function _getToken() {
        return sessionStorage.getItem('token');
    }

    function _setToken(value: any) {
        sessionStorage.setItem('token', value);
    }

    return {
        /* getService: _getService,*/
        getToken: _getToken,
        setToken: _setToken,
    };
})();

export default SessionStorage;
