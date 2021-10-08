let arMapper = function (value){
    let a = {
        a: "ش",
        b: "ﻻ",
        c: "ؤ",
        d: "ي",
        e: "ث",
        f: "ب",
        g: "ل",
        h: "ا",
        i: "ه",
        j: "ت",
        k: "ن",
        l: "م",
        m: "ة",
        n: "ى",
        o: "خ",
        p: "ح",
        q: "ض",
        r: "ق",
        s: "س",
        t: "ف",
        u: "ع",
        v: "ر",
        w: "ص",
        x: "ء",
        y: "غ",
        z: "ئ",
        " ": " ",
        "`": "ذ",
        "[": "ج",
        "]": "د",
        ";": "ك",
        "'": "ط",
        ",": "و",
        ".": "ز",
        "\/": "ظ",

    };
    return a[value]
}
let converter =  function (lang, value) {
        return value.split('').map(x => arMapper(x)).join('')
    };
module.exports = {
    converter,
}