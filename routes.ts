/**
 * An array of routes that are accessible to the public
 * These routes do not require authentication
 * @type {string[]}
 */
export const publicRoutes: string[] = ["/"];

/**
 * An array of routes that are protected
 * These routes require authentication
 * @type {string[]}
 */
export const protectedRoutes: string[] = ["/dashboard", "/playground"];

/**
 * An array of routes that are used for authentication
 * @type {string[]}
 */
export const authRoutes: string[] = ["/auth/sign-in", "/auth/error"];
export const authRotues: string[] = authRoutes; // alias for backwards compatibility

/**
 * Routes that start with this prefix do not require authentication
 * @type {string}
 */
export const apiAuthPrefix: string = "/api/auth";

export const DEFAULT_LOGIN_REDIRECT = "/dashboard";
