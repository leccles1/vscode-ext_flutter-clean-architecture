import {load} from "js-yaml";
import { getPubspecPath } from "./get-pubspec-path";
import { workspace, Uri } from "vscode";

export async function getPubspec () {
  const pubspecPath = getPubspecPath();
  if (pubspecPath) {
    try {
      let content = await workspace.fs.readFile(Uri.file(pubspecPath));
      return load(content.toString());
    } catch (_) { }
  }
}