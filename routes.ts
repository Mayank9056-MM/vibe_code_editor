/**
 * An array of routes that are accessible to the public
 * There routes do not require authentication
 * @type {string[]}
 */

export const publicRoutes: string[] = [];

/**
 * An array of routes that are protected
 * These routes require authentication
 * @type {string[]}
 */

export const protectedRoutes: string[] = ["/"];

/**
 * An array of routes that are accessible to the pubic
 * Routes that start with this (/api/auth) prefix do not require authentication
 * @type {string[]}
 */

export const authRotues: string[] = ["/auth/sign-in"]; // Added leading slash

/**
 * An array of routes that are accessible to the public
 * Routes that start with this (/api/auth) prefix do not require authentication
 * @type {string}
 */

export const apiAuthPrefix: string = "/api/auth";

export const DEFAULT_LOGIN_REDIRECT = "/"; // Changed to redirect to home page after login
