import { pascalCase } from "pascal-case";
import { snakeCase } from "snake-case";

export function getBlocStateTemplate (
  blocName: string,
  useEquatable: boolean
): string {
  return useEquatable
    ? getEquatableBlocStateTemplate(blocName)
    : getDefaultBlocStateTemplate(blocName);
}

function getEquatableBlocStateTemplate (blocName: string): string {
  const pascalCaseBlocName = pascalCase(blocName.toLowerCase());
  const snakeCaseBlocName = snakeCase(blocName.toLowerCase());
  return `part of '${snakeCaseBlocName}_bloc.dart';

abstract class ${pascalCaseBlocName}State extends Equatable {
  const ${pascalCaseBlocName}State();  

  @override
  List<Object> get props => [];
}
class ${pascalCaseBlocName}Initial extends ${pascalCaseBlocName}State {}
`;
}

function getDefaultBlocStateTemplate (blocName: string): string {
  const pascalCaseBlocName = pascalCase(blocName.toLowerCase());
  const snakeCaseBlocName = snakeCase(blocName.toLowerCase());
  return `part of '${snakeCaseBlocName}_bloc.dart';
@immutable
abstract class ${pascalCaseBlocName}State {}
class ${pascalCaseBlocName}Initial extends ${pascalCaseBlocName}State {}
`;
}