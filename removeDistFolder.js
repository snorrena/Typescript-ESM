// @ts-nocheck
import { promises as fs } from "fs";
import path from "path";

/**
 * Deletes the top-level "dist" directory inside a project root.
 *
 * @param {string} rootDir - Absolute or relative project root path
 */
export async function removeTopLevelDist(rootDir) {
  const distPath = path.join(rootDir, "dist");

  try {
    const stat = await fs.stat(distPath);

    if (!stat.isDirectory()) {
      console.log(`Found "dist" but it is not a directory: ${distPath}`);
      return;
    }

    await fs.rm(distPath, { recursive: true, force: true });
    console.log(`Deleted: ${distPath}`);
  } catch (err) {
    if (err.code === "ENOENT") {
      console.log(`No top-level "dist" directory found in: ${rootDir}`);
    } else {
      throw err;
    }
  }
}
removeTopLevelDist(process.cwd())
  .then(() => console.log("Done"))
  .catch(console.error);
