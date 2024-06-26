const carros = [{
    modelo : "Uno",
    ano: 2000,
    placa: "XXX11131"
},
{
    modelo: "Fusca",
    ano: 1978,
    placa: "XXX11132"
},{

    modelo: "Audi",
    ano: 2020,
    placa: "XXX11134"
},{
    modelo: "Mercedes",
    ano: 2024,
    placa: "XXX11137"
}
];

const novoCarro = {
   
    modelo: "Nivus", 
    ano: 2023, 
    placa: "DFC3R49" };


carros.push({ modelo: "t-cross", ano: 2022, placa: "DFC3R40" });
carros.push(novoCarro);

console.log(carros);
carros.sort((a,b) => a.modelo.localeCompare(b.modelo));

console.log(carros);

module.exports = carros;

