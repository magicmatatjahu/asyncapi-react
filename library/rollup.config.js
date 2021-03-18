import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';

import nodePolyfills from 'rollup-plugin-node-polyfills';
import nodeResolve from '@rollup/plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';

import json from '@rollup/plugin-json';
import { terser } from 'rollup-plugin-terser';

import packageJSON from './package.json';

const input = './dist/index.js';
const minifyExtension = pathToFile => pathToFile.replace(/\.js$/, '.min.js');

export default [
  // CommonJS
  {
    input,
    output: {
      file: packageJSON.main,
      format: 'cjs',
    },
    plugins: [
      replace({
        preventAssignment: true,
        'process.env.NODE_ENV': JSON.stringify('development'),
      }),
      external(),
      commonjs(),
      babel({
        exclude: 'node_modules/**',
      }),
      nodePolyfills(),
      nodeResolve({
        preferBuiltins: true,
      }),
      // parser-js has built-in JSON Schemas of AsyncAPI
      json(),
    ],
  },
  // minified CommonJS
  {
    input,
    output: {
      file: minifyExtension(packageJSON.main),
      format: 'cjs',
    },
    plugins: [
      replace({
        preventAssignment: true,
        'process.env.NODE_ENV': JSON.stringify('development'),
      }),
      external(),
      commonjs({
        include: /node_modules/,
      }),
      babel({
        exclude: 'node_modules/**',
      }),
      nodePolyfills(),
      nodeResolve({
        preferBuiltins: true,
      }),
      json(),
      terser(),
    ],
  },

  // UMD
  {
    input,
    output: {
      file: packageJSON.browser,
      format: 'umd',
      name: 'AsyncApiComponent',
      globals: {
        react: 'React',
      },
    },
    plugins: [
      replace({
        preventAssignment: true,
        'process.env.NODE_ENV': JSON.stringify('development'),
      }),
      external(),
      commonjs({
        include: /node_modules/,
      }),
      babel({
        exclude: 'node_modules/**',
      }),
      nodePolyfills(),
      nodeResolve({
        preferBuiltins: true,
      }),
      json(),
    ],
  },
  // minified UMD
  {
    input,
    output: {
      file: minifyExtension(packageJSON.browser),
      format: 'umd',
      name: 'AsyncApiComponent',
      globals: {
        react: 'React',
      },
    },
    plugins: [
      replace({
        preventAssignment: true,
        'process.env.NODE_ENV': JSON.stringify('development'),
      }),
      external(),
      commonjs({
        include: /node_modules/,
      }),
      babel({
        exclude: 'node_modules/**',
      }),
      nodePolyfills(),
      nodeResolve({
        preferBuiltins: true,
      }),
      json(),
      terser(),
    ],
  },
];
