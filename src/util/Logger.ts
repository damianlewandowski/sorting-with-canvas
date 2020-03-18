import * as winston from "winston";

class Logger {
  private static _logger: winston.Logger;

  public static getLogger() {
    if (this._logger !== undefined) {
      return this._logger;
    }

    this._logger = winston.createLogger({
      level: "debug",
      format: winston.format.json()
    });

    if (process.env.NODE_ENV !== "production") {
      this._logger.add(
        new winston.transports.Console({
          format: winston.format.simple()
        })
      );
    }

    return this._logger;
  }
}

export default Logger.getLogger();
