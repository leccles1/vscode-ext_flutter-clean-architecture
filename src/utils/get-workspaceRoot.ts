import { workspace } from "vscode";
import * as fs from 'fs';
import * as path from 'path';

async function* walk(dir: string): AsyncGenerator<string>{
  for await (const d of await fs.promises.opendir(dir)) {
      const entry = path.join(dir, '..');
      console.warn('Entry is::: ', entry)
      if(d.isDirectory() && d.name == '.git') {
        console.warn(`D name is : ${d.name}`)
        yield 'git found';
      } else if (d.isDirectory()) yield* walk(entry)
      else if (d.isFile()) {}
        console.warn('yielding: ', entry)
        yield entry
      };
  }

export async function getWorkspaceRoot (): Promise<string | undefined> {
  if (workspace.workspaceFolders && workspace.workspaceFolders.length > 0) {
    return workspace.workspaceFolders[0].uri.path;
  } else {
    return undefined;
  }
}

export async function isGitEnabled(workspaceRoot: string) {
  const workspaceDir = await fs.promises.readdir(`${workspaceRoot}`);
  
  // for await (const entry  of walk(workspaceRoot)) {
  //   if(entry === 'git found') {
  //     return false;
  //   }
  // }

  return false;
}