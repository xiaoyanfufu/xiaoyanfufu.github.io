// loading.js
document.addEventListener('DOMContentLoaded', function() {
    var links = document.querySelectorAll('a[href^="/"]:not([href*="#"]):not([target="_blank"])');
    links.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            var url = this.href;
            showLoading();
            setTimeout(function() {
                window.location.href = url;
            }, 500); // 延迟500毫秒以显示加载动画
        });
    });

    // 处理带有片段标识符的链接
    var fragmentLinks = document.querySelectorAll('a[href^="#"]:not([target="_blank"])');
    fragmentLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            var targetId = this.getAttribute('href').substring(1); // 获取片段标识符
            var targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

function showLoading() {
    var overlay = document.createElement('div');
    overlay.id = 'loading-overlay';
    overlay.innerHTML = '<div id="loading-spinner"></div>';
    document.body.appendChild(overlay);
    overlay.style.display = 'flex';
}