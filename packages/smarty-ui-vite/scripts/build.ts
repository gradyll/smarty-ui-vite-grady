import { config } from '../vite.config'
import * as fs from "fs-extra";
import * as path from "path";
import { build, InlineConfig, defineConfig, UserConfig, FSWatcher } from "vite";

const buildAll = async () => {
  await build();

  const srcDir = path.resolve(__dirname, '../src/')
  fs.readdirSync(srcDir)
    .filter((name) => {
      // 只要目录不要文件，且里面包含index.ts
      const componentDir = path.resolve(srcDir, name)
      const isDir = fs.lstatSync(componentDir).isDirectory();
      return isDir && fs.readdirSync(componentDir).includes("index.ts");
    })
    .forEach(async (name) => {
      const outDir = path.resolve(config.build.outDir, name)
      const custom = {
        lib: {
          entry: path.resolve(srcDir, name),
          name,
          fileName: 'index',
          formats: ["esm", "umd"],
        },
        outDir
      }


      await build({
        build: custom
      } as InlineConfig)

      fs.outputFile(
        path.resolve(outDir, 'package.json'),
        `{
          "name": "smarty-ui-vite/${name}",
          "main": "index.umd.js",
          "module": "index.umd.js"
        }`,
        `utf-8`
      )
    });
}

buildAll();