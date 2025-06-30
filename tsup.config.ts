import { defineConfig } from "tsup";

export default defineConfig({
	entry: ["./index.ts"], // Your entry point
	outDir: "dist", // Output directory
	format: ["cjs", "esm"],
	dts: true,
	sourcemap: true,
	clean: true,
	shims: true, // Convert import.meta.url to a shim for CJS
	minify: true, // Set to true if you want to minify the output
	splitting: false, // Disable code splitting
});
