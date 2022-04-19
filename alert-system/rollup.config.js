import svelte from 'rollup-plugin-svelte';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import sveltePreprocess from 'svelte-preprocess';
import typescript from '@rollup/plugin-typescript';

export default {
    input: './src/index.ts',
    output: {
        format: 'iife',
        file: './build/bundle.js'
    },
    plugins: [
        svelte({
            preprocess: sveltePreprocess(),
        }),
        resolve({ browser: true }),
        commonjs(),
		typescript({
			sourceMap: !production,
			inlineSources: !production
		}),
        typescript(),
    ],
};