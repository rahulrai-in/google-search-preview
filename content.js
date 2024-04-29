document.addEventListener('mouseover', function (event) {
    let target = event.target.closest('a');
    if (target && target.href) {
        clearTimeout(document.hoverTimeout);
        document.hoverTimeout = setTimeout(function () {
            if (!document.getElementById('preview-iframe')) {
                let iframe = document.createElement('iframe');
                iframe.style.position = 'fixed';
                iframe.style.bottom = '10px';
                iframe.style.top = '150px';
                iframe.style.right = '0px';
                iframe.style.width = '45vw';
                iframe.style.height = '90vh';
                iframe.style.border = '1px solid white';
                iframe.id = 'preview-iframe';
                document.body.appendChild(iframe);

                // Add listener to handle clicks outside the iframe
                document.addEventListener('click', function (event) {
                    if (!iframe.contains(event.target) && document.getElementById('preview-iframe')) {
                        document.body.removeChild(iframe);
                        document.removeEventListener('click', arguments.callee);
                    }
                });
            }
            document.getElementById('preview-iframe').src = target.href;
        }, 1000);
    }
});

document.addEventListener('mouseout', function (event) {
    let target = event.target.closest('a');
    if (target) {
        clearTimeout(document.hoverTimeout);
    }
});