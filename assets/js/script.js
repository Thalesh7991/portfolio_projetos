document.getElementById('downloadBtn').addEventListener('click', function() {
    // Localização do arquivo PDF
    var fileURL = 'assets/download/';
    
    // Nome do arquivo a ser baixado
    var fileName = 'curriculo_thales.pdf';
    
    // Criar um elemento 'a' temporário para iniciar o download
    var a = document.createElement('a');
    a.href = fileURL;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
});