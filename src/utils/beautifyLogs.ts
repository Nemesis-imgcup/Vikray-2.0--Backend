/**
 * Make console logs more readable and beautiful
 * @param {string} message - Message to be logged
 */
export const beautifyLogs = (message: string) => {
	console.log(`\x1b[0m ${message} \x1b[0m`);
};

/**
 * This function is used to success logs with `green` color
 */
const successLog = (message: string) => {
	console.log(`\x1b[32m ${message} \x1b[0m`);
};

/**
 * This function is used to error logs with `red` color
 */
const errorLog = (message: string) => {
	console.log(`\x1b[31m ${message} \x1b[0m`);
};

/**
 * This function is used to warning logs with `yellow` color
 */
const warningLog = (message: string) => {
	console.log(`\x1b[33m ${message} \x1b[0m`);
};

beautifyLogs.success = successLog;
beautifyLogs.error = errorLog;
beautifyLogs.warning = warningLog;

export default beautifyLogs;
