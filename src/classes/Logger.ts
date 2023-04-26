import signale from 'signale';
 

export class Logger{

    private static instance: Logger

    public static getInstance(): Logger {
        if(!Logger.instance){
            Logger.instance = new Logger()
        }
        return Logger.instance
    }

    log(message: string, type: string) {
        const timestamp: string = new Date().toISOString();
        switch (type){
            case "success":
                signale.success(`${timestamp} - ${message}`);
                break;
            case "error":
                signale.fatal(`${timestamp} - ${message}`)
                break;
            default:
                signale.debug(`${timestamp} - ${message}`)

        }
        
    }

    separator(): void{
        signale.watch("---------------------------------------")
    }
}

