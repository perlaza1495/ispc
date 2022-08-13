export { matchers } from './client-matchers.js';

export const components = [
	() => import("..\\..\\src\\routes\\__layout.svelte"),
	() => import("..\\runtime\\components\\error.svelte"),
	() => import("..\\..\\src\\routes\\agendamiento.svelte"),
	() => import("..\\..\\src\\routes\\agendar.svelte"),
	() => import("..\\..\\src\\routes\\index.svelte"),
	() => import("..\\..\\src\\routes\\opciones.svelte")
];

export const dictionary = {
	"": [[0, 4], [1]],
	"agendamiento": [[0, 2], [1]],
	"agendar": [[0, 3], [1]],
	"opciones": [[0, 5], [1]]
};