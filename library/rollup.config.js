import { DEFAULT_EXTENSIONS } from '@babel/core';
import babel from '@rollup/plugin-babel';
import typescript from 'rollup-plugin-typescript2';
import commonjs from '@rollup/plugin-commonjs';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json';
import ignore from 'rollup-plugin-ignore';
import { terser } from 'rollup-plugin-terser';
import builtins from 'builtin-modules';

import pkg from './package.json';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: 'es',
      exports: 'named',
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    // peerDepsExternal({
    //   includeDependencies: true,
    // }),
    typescript({ useTsconfigDeclarationDir: true }),
    // typescript({
    //   typescript: require('typescript'),
    //   include: ['*.js+(|x)', '**/*.js+(|x)'],
    //   exclude: [
    //     'coverage',
    //     'config',
    //     'dist',
    //     'node_modules/**',
    //     '*.test.{js+(|x), ts+(|x)}',
    //     '**/*.test.{js+(|x), ts+(|x)}',
    //   ],
    // }),
    // babel({
    //   presets: [
    //     'react-app',
    //   ],
    //   extensions: [
    //     ...DEFAULT_EXTENSIONS,
    //     '.ts',
    //     '.tsx',
    //   ],
    //   plugins: [
    //     '@babel/plugin-proposal-object-rest-spread',
    //     '@babel/plugin-proposal-optional-chaining',
    //     '@babel/plugin-syntax-dynamic-import',
    //     '@babel/plugin-proposal-class-properties',
    //     'transform-react-remove-prop-types',
    //   ],
    //   exclude: 'node_modules/**',
    //   babelHelpers: 'runtime',
    // }),
    json({
      compact: true,
      preferConst: true,
    }),
    commonjs({
      include: ['node_modules/**'],
    }),
    terser(),
  ],
};
