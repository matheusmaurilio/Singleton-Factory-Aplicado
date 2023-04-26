import { Car } from "../classes/Car";
import { Truck } from "../classes/Truck";
import { Motorcicle } from "../classes/Motorcycle";
import { IVehicle } from "../interfaces/Vehicles";
import { Logger } from "../classes/Logger";

export class VehicleFactory{

    static createCar(type: string): IVehicle | undefined {
        const logger: Logger = Logger.getInstance();
        switch (type) {
            case 'Car':
                logger.log(`Instanciando um carro`, "success");
                return new Car();
            case 'Truck':
                logger.log(`Instanciando um caminhão`, "success");
                return new Truck();
            case 'Motorcycle':
                logger.log(`Instanciando uma moto`, "success");
                return new Motorcicle();
            default:
                logger.log(`Tipo de carro inválido `, "error");
        }
    }
}