import { snakeCase } from "snake-case";
import { pascalCase } from "pascal-case";

export function getBlocEventTemplate (
  blocName: string,
  useEquatable: boolean
): string {
  return useEquatable
    ? getEquatableBlocEventTemplate(blocName)
    : getDefaultBlocEventTemplate(blocName);
}

function getEquatableBlocEventTemplate (blocName: string): string {
  const pascalCaseBlocName = pascalCase(blocName.toLowerCase());
  const snakeCaseBlocName = snakeCase(blocName.toLowerCase());
  return `part of '${snakeCaseBlocName}_bloc.dart';

abstract class ${pascalCaseBlocName}Event extends Equatable {
  const ${pascalCaseBlocName}Event();

  @override
  List<Object> get props => [];
}
`;
}

function getDefaultBlocEventTemplate (blocName: string): string {
  const pascalCaseBlocName = pascalCase(blocName.toLowerCase());
  const snakeCaseBlocName = snakeCase(blocName.toLowerCase());
  return `part of '${snakeCaseBlocName}_bloc.dart';
@immutable
abstract class ${pascalCaseBlocName}Event {}
`;
}