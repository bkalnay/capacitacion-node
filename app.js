

const fs = require('fs');
const PATH = './';
const letter = 'a';


let getFiles = (p)=>{
    return fs.readdirSync(p);
}

let printFiles = (p) =>{
    fs.readdir(p, (err, files)=>{
        (err) ? console.log(err):console.log(files);
    });
}

let printFilesSorted = (p) =>{
    
    fs.readdir(p, (err, files)=>{
        (err) ? console.log(err):console.log(files.reverse());
    });

}

let count = (p, letra) =>{
    let c = 0;
    fs.readdir(p, (err, files)=>{
        if(err){
            console.log(err)
        }else{
            files.forEach(element=>{
                if(element.startsWith(letra)){
                    c++;
                }
            });
            console.log('Existen ' + c +  ' archivos que empiezan con la letra ' + letra);
        }
    });   
}

printFiles(PATH);
printFilesSorted(PATH);
count(PATH, letter);


//SYNC. Falta manejar posibles errores
/*
let getFiles = (p)=>{
    return fs.readdirSync(p);
}

let printFiles = (p) =>{
    console.log(getFiles(p));
}

let printFilesSorted = (p) =>{
    console.log(getFiles(p).reverse());
}

let count = (p, letra){
    let c = 0;
    getFiles(p).forEach(element => {
        if(element.startsWith(letra)){
            c++;
        }
    });
    console.log('Existen ' + c +  ' archivos que empiezan con la letra ' + letra);
}
*/