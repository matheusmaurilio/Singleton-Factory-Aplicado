import { Logger } from "./classes/Logger";
import { VehicleFactory } from "./factories/VehicleFactory";

const myLogger: Logger = Logger.getInstance()

myLogger.separator();
myLogger.log("Singleton aprendido com sucesso", "success");
myLogger.separator();

VehicleFactory.createCar("Motorcycle");
