import {has, get}  from "lodash";

import { getPubspec } from ".";

export async function hasDependency (dependency: string) {
  const pubspec = await getPubspec();
  const dependencies = get(pubspec, "dependencies", {});
  return has(dependencies, dependency);
}