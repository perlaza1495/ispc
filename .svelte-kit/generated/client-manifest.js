export { matchers } from './client-matchers.js';

export const components = [
	() => import("..\\..\\src\\routes\\__layout.svelte"),
	() => import("..\\runtime\\components\\error.svelte"),
	() => import("..\\..\\src\\routes\\agendamiento_cita.svelte"),
	() => import("..\\..\\src\\routes\\creacion_pacientes.svelte"),
	() => import("..\\..\\src\\routes\\gestion.svelte"),
	() => import("..\\..\\src\\routes\\index.svelte"),
	() => import("..\\..\\src\\routes\\opciones.svelte")
];

export const dictionary = {
	"": [[0, 5], [1]],
	"agendamiento_cita": [[0, 2], [1]],
	"creacion_pacientes": [[0, 3], [1]],
	"gestion": [[0, 4], [1]],
	"opciones": [[0, 6], [1]]
};