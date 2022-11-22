const qS = sel => document.querySelector(sel);

function toTitleCase(str) {
    return str.replace(/\w\S*/g, txt => txt[0].toUpperCase() + txt.slice(1));
}

function setTitle(title) {
    document.title = title;
    qS("h1").innerHTML = title;
}

function setEntreprise(entreprise) {
    let ul = qS('#entreprise ul');
    let entList = [];
    for ([k, v] of Object.entries(entreprise)) {
        entList.push(`<li>${toTitleCase(k)}: ${v}</li>`);
    }
    ul.innerHTML = entList.join('\n');
}

function hydratePage(auditJson) {
    console.log(auditJson);
    setTitle(auditJson['titre']);
    setEntreprise(auditJson['entreprise']);
}

fetch('../static/garing-arnaud-schema-si.json')
    .then(resp => resp.json())
    .then(hydratePage)