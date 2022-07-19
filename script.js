(function() {
    var $input = $('.TextBox\\.cls');

    $input.on('input', function (e) {
        var qrcode = new QRCode($('#QRCode\\.id').empty()[0]);

        qrcode.clear();

        if (e.target.value !== '') { qrcode.makeCode($input.val()); }
    });
})();