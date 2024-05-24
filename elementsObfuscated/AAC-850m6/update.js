function(instance, properties, context){
	function _0x2d26() {
    var _0x807ef8 = [
        'hue',
        'seed',
        'luminosity',
        'color',
        'toLowerCase',
        '8GAHbze',
        '138125kagWaK',
        '77744GGLIxa',
        '4710139vpSXyi',
        'data',
        'publishState',
        '6eKEQJN',
        '1542500bhTFNU',
        '7915365BAjLmk',
        '144905gAwrPR',
        '1702560BUtXeh'
    ];
    _0x2d26 = function () {
        return _0x807ef8;
    };
    return _0x2d26();
}
(function (_0x24a301, _0x59d423) {
    var _0x492c08 = _0x303d, _0x2f09ca = _0x24a301();
    while (!![]) {
        try {
            var _0x16b2c4 = parseInt(_0x492c08(0x1bd)) / 0x1 + parseInt(_0x492c08(0x1c3)) / 0x2 + -parseInt(_0x492c08(0x1b6)) / 0x3 + -parseInt(_0x492c08(0x1be)) / 0x4 + parseInt(_0x492c08(0x1b5)) / 0x5 * (-parseInt(_0x492c08(0x1c2)) / 0x6) + -parseInt(_0x492c08(0x1bf)) / 0x7 + parseInt(_0x492c08(0x1bc)) / 0x8 * (parseInt(_0x492c08(0x1c4)) / 0x9);
            if (_0x16b2c4 === _0x59d423)
                break;
            else
                _0x2f09ca['push'](_0x2f09ca['shift']());
        } catch (_0x550c67) {
            _0x2f09ca['push'](_0x2f09ca['shift']());
        }
    }
}(_0x2d26, 0x7a14e));
function _0x303d(_0x51df02, _0x5cddc6) {
    var _0x2d26a8 = _0x2d26();
    return _0x303d = function (_0x303dff, _0x4b47d6) {
        _0x303dff = _0x303dff - 0x1b5;
        var _0x456907 = _0x2d26a8[_0x303dff];
        return _0x456907;
    }, _0x303d(_0x51df02, _0x5cddc6);
}
function update(_0x14e93f, _0x1c1686, _0x5b1d44) {
    var _0x56b452 = _0x303d;
    _0x14e93f[_0x56b452(0x1c0)]['generateColor'] = function () {
        var _0x275427 = _0x56b452, _0x5b0782, _0x260d02;
        _0x1c1686[_0x275427(0x1b7)] && (_0x5b0782 = _0x1c1686[_0x275427(0x1b7)][_0x275427(0x1bb)]());
        _0x1c1686[_0x275427(0x1b9)] && (_0x260d02 = _0x1c1686[_0x275427(0x1b9)]['toLowerCase']());
        var _0x43499d = randomColor({
            'count': _0x1c1686['num_colors'],
            'hue': _0x5b0782,
            'luminosity': _0x260d02,
            'seed': _0x1c1686[_0x275427(0x1b8)]
        });
        _0x14e93f[_0x275427(0x1c1)](_0x275427(0x1ba), _0x43499d);
    }, _0x14e93f[_0x56b452(0x1c0)]['generateColor']();
}
	 update(instance, properties, context);
}