import { useEffect } from 'react';

const useLogger = (scope, consoleType, message, trigger) => {
  useEffect(() => {
    if (scope && consoleType && message) {
      const logMessage = `{${scope}} [${new Date().toLocaleString()}] ${message}`;

      switch (consoleType) {
        case 'ERROR':
          console.error(logMessage);
          break;
        case 'WARN':
          console.warn(logMessage);
          break;
        case 'LOG':
          console.log(logMessage);
          break;
        case 'DEBUG':
          console.debug(logMessage);
          break;
        default:
          console.log(logMessage);
      }
    }
  }, [scope, consoleType, message, trigger]);
};

export default useLogger;
