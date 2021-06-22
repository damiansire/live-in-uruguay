
let beneficits = Array.from(document.getElementsByClassName("boxBeneficio"));

function convertToBeneficit(beneficit){
    return({ 
        "card" : "Itau Debito",
        "link" : beneficit.href,
        "imgUrl" : beneficit.getElementsByTagName("img")[0].src,
        "title" : beneficit.getElementsByClassName("tituloBeneficio")[0].textContent,
        "categories": ["cat1","cat2"],
        "amount": "natural language",
        "lugar": "name of place",
    })
}

const beneficitsDto = beneficits.map(beneficit => convertToBeneficit(beneficit))

function download(content, fileName, contentType) {
    var a = document.createElement("a");
    var file = new Blob([content], {type: contentType});
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
}

const beneficitsJson = JSON.stringify(beneficitsDto);

download(beneficitsJson, 'data.json', 'application/json');

