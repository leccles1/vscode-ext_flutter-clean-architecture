import { snakeCase } from "snake-case";
import { pascalCase } from "pascal-case";

export function getCubitStateTemplate (
  cubitName: string,
  useEquatable: boolean
): string {
  return useEquatable
    ? getEquatableCubitStateTemplate(cubitName)
    : getDefaultCubitStateTemplate(cubitName);
}

function getEquatableCubitStateTemplate (cubitName: string): string {
  const pascalCaseCubitName = pascalCase(cubitName.toLowerCase());
  const snakeCaseCubitName = snakeCase(cubitName.toLowerCase());
  return `part of '${snakeCaseCubitName}_cubit.dart';

abstract class ${pascalCaseCubitName}State extends Equatable {
  const ${pascalCaseCubitName}State();

  @override
  List<Object> get props => [];
}

class ${pascalCaseCubitName}Initial extends ${pascalCaseCubitName}State {}
`;
}

function getDefaultCubitStateTemplate (cubitName: string): string {
  const pascalCaseCubitName = pascalCase(cubitName.toLowerCase());
  const snakeCaseCubitName = snakeCase(cubitName.toLowerCase());
  return `part of '${snakeCaseCubitName}_cubit.dart';

@immutable
abstract class ${pascalCaseCubitName}State {}

class ${pascalCaseCubitName}Initial extends ${pascalCaseCubitName}State {}
`;
}