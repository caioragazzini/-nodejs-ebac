
const carros = require('./exercicio-1.js');

const finaisPlacaRodizio = [[1,2],[3,4],[5,6],[7,8],[9,0]];
const diasSemana = ["Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado", "Domingo"];

const obterVeiculosRodizio = (diaSemana) => {
    return carros.filter(carro => {
        const ultimoDigito = parseInt(carro.placa.slice(-1));
        return finaisPlacaRodizio[diaSemana].includes(ultimoDigito);
      });
    };
   
    let contador = 0;
    while (contador < 5) {
      const carrosRodizio = obterVeiculosRodizio(contador);
      const placasModeloRodizio = carrosRodizio.map(x => `${x.modelo} Placa: ${x.placa}`);
        
      console.log(`Na ${diasSemana[contador]}, os veículos de rodízio são: ${placasModeloRodizio.join(", ")}`);

      contador++;
    }

                            
                        