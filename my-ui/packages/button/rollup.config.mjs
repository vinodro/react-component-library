import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import dts from "rollup-plugin-dts";
import packageJson from "./package.json" assert { type: "json" };

export default [
  {
    input: "src/index.tsx",
    output: [
      {
        file: packageJson.main, // dist/index.cjs.js
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module, // dist/index.esm.js
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({
        tsconfig: "./tsconfig.json",
        declaration: true,
        declarationDir: "dist/types", // Ensure same as tsconfig.base.json
        outDir: "dist",
        exclude: ["**/*.stories.tsx", "**/*.test.tsx"]
      }),
      postcss({
        modules: true,
        extract: true,
        minimize: true,
        sourceMap: true,
      }),
    ],
  },
  {
    input: "dist/types/src/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "es" }],
    plugins: [dts()],
  },
];
