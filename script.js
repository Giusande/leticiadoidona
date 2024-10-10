fetch('header.html')
.then(response => response.text())
.then(data => {
    document.getElementById('header-placeholder').innerHTML = data;
});

function procedimento(){
    window.location.href = "procedimento.html"
}