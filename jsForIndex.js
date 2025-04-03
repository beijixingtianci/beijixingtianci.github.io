document.addEventListener('DOMContentLoaded', function() {
    var wechatBtn = document.querySelector('#icons .wechat'); //返回文档中 第一个 匹配指定 CSS 选择器的元素
    var qrModal = document.getElementById('wechat-qr');
    var closeBtn = document.getElementById('close-qr');

    wechatBtn.addEventListener('click', function(e) {
        e.preventDefault(); //阻止链接默认行为(防止页面跳转)
        qrModal.style.display = 'block';
    });

    closeBtn.addEventListener('click', function() {
        qrModal.style.display = 'none';
    });
});
