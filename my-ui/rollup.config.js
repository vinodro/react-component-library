import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

export default {
  input: 'src/index.ts', // or .tsx
  output: [
    {
      file: 'dist/index.cjs.js',
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: 'dist/index.esm.js',
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(), // Avoid bundling React, etc.
    postcss({
      extract: true, // generates a CSS file in dist
      modules: true, // enable CSS Modules
      use: ['sass'], // or ['less'], etc.
      plugins: [require('autoprefixer')],
    }),
    typescript({ useTsconfigDeclarationDir: true }),
  ],
  external: ['react', 'react-dom'], // Mark these as externals
};
