const list_subjet = [{
    name: "Music",
    description: "Will learn how to play instruments",
    duration: "100 hrs",
    started: false
},{
    name: "Software Dvelopment",
    description: "Will learn how to develop software",
    duration: "200 hrs",
    started: false
},{
    name: "English",
    description: "Will learn how to speak english",
    duration: "120 hrs",
    started: false
}]

function list(){
    list_subjet.forEach(i=> {
        console.log(i)
    });
}
//list()

function add_subjet(){
    let Nname = prompt("Ingrese nombre del curso: ")
    let Ndescription = prompt("Ingrese una descrpcion: ")
    let Nduration = prompt("Ingrese nombre del curso: ")
    let Nstarted = prompt("Ingrese nombre del curso: ")
    let new_subjet={
        name:Nname,
        description:Ndescription,
        duration:Nduration,
        started:Nstarted
   }
   list_subjet.push(new_subjet)
   console.log("Se ha agreagado el curso correctamente")
}
//add_subjet()

function edit_subjet(){
    let curso = prompt("Ingrese el index del curso adecuado")
    for (let index = 0; index < list_subjet.length; index++) {
        const i = list_subjet[index];
        if(curso == i){
                let Nname = prompt("Ingrese nombre del curso: ", list_subjet[i].name)
                let Ndescription = prompt("Ingrese una descrpcion: ",list_subjet[i].description)
                let Nduration = prompt("Ingrese nombre del curso: ",list_subjet[i].duration)
                let Nstarted = prompt("Ingrese nombre del curso: ",list_subjet[i].started)
                list_subjet[i].name=Nname
                list_subjet[i].description=Ndescription
                list_subjet[i].duration=Nduration
                list_subjet[i].started=Nstarted
            }else{
                console.log(error)
            }
        }
    }
//edit_subjet()

function delete_subjet(){

}
const filtrar_duration = function (list_subjet) {
    return new Promise(function (resolve) {
        setTimeout(() => {
            for (const product of list_subjet){
                    console.log(product.duration);
            }
            for (const product of list_subjet){
                if (product.duration === "duration"){
                    console.log(product.duration);
                }
            }
            resolve("Duraciòn de los cursos");
        }, 1000);
    });
}

filtrar_duration()



 function menu() {
    console.log(`
        ---- Ingrese la opción deseada ----
    [1].  Para ver la lista de cursos dispobible
    [2].  Para agregar un curso nuevo
    [3].  Para editar un curso
    [4].  Para eliminar un curso
    `
    )
    opc = prompt(" ¬ Ingrrese la opción deseada ¬")
    opc = Number(opc)
     }
    switch (opc) {
        case 1:list()
            break;
        case 2:add_subjet()
            break;
        case 3:edit_subjet()
            break;
        case 4: filtrar_duration()
            break;
    
        default:
            break;
    }
//menu()





















































