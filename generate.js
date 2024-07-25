import { mkdir, writeFile } from "node:fs/promises";

await mkdir("./dist", { recursive: true });
await writeFile(
  "./dist/foo.js",
  `import lpad from "lpad";

console.log((await import('indent-string')).default(lpad("bar", "foo")));
`
);
