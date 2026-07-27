# node-fs-read-content

`node-fs-read-content` is a small ESM helper that turns a list of file paths into a list of file records with their full path and text content.

The package entry point is `index.js`. It finds the latest implementation under `bin/` and forwards the caller's `filePaths` as `inFilePaths` to that version.

## Current Story

The current version is `bin/v2/index.js`.

`bin/v2/index.js` keeps the job intentionally direct:

1. Receive `inFilePaths`.
2. Read each file with `fs.readFileSync(path, "utf8")`.
3. Return an array of objects shaped like:

```js
{
  fileFullPath: element,
  fileContent
}
```

That makes this package useful when another tool already knows which files are important and only needs their contents collected in one predictable structure.

## Usage Shape

```js
import readContent from "node-fs-read-content";

const filesWithContent = readContent({
  filePaths: [
    "/full/path/to/api/v1/bills/end-points.js",
    "/full/path/to/api/v1/doctors/end-points.js"
  ]
});
```

Each result item contains:

* `fileFullPath`: the original file path.
* `fileContent`: the UTF-8 text read from that file.

## Test V2

`test/v2/test.js` shows the intended flow.

It uses `node-fs-recursive` to scan the `test/v2/api` fixture folder for files named `end-points.js`, passes those paths into the package entry point, and logs the collected file-content records.

After dependencies are installed, run it from the package folder with:

```bash
node test/v2/test.js
```

Or move into the v2 test folder and run the local test file directly:

```bash
cd test/v2
node test
```

The console output is an array of collected file records. Each record shows the matched `end-points.js` file path in `fileFullPath` and the complete JavaScript source text in `fileContent`.

The test fixture includes multiple API resource folders, so the v2 path proves the package can read every matched `end-points.js` file and return their contents through the same public `index.js` API.
