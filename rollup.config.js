import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import typescript from 'rollup-plugin-typescript2'
import external from 'rollup-plugin-peer-deps-external'
import svgr from '@svgr/rollup'
import pkg from './package.json'

const rollup = {
  input: './src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true
    },
    {
      file: pkg.module,
      format: 'esm',
      sourcemap: true
    }
  ],
  preserveModules: false,
  plugins: [
    external(),
    svgr(),
    resolve(),
    typescript({ useTsconfigDeclarationDir: true }),
    commonjs()
  ]
}

export default rollup
