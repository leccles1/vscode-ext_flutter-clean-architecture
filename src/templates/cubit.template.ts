import { pascalCase } from "pascal-case";
import { snakeCase } from "snake-case";

export function getCubitTemplate (cubitName: string, useEquatable: boolean): string {
  return useEquatable
    ? getEquatableCubitTemplate(cubitName)
    : getDefaultCubitTemplate(cubitName);
}

function getEquatableCubitTemplate (cubitName: string) {
  const pascalCaseCubitName = pascalCase(cubitName.toLowerCase());
  const snakeCaseCubitName = snakeCase(cubitName.toLowerCase());
  const cubitState = `${pascalCaseCubitName}State`;
  return `import 'package:bloc/bloc.dart';
import 'package:equatable/equatable.dart';

part '${snakeCaseCubitName}_state.dart';

class ${pascalCaseCubitName}Cubit extends Cubit<${cubitState}> {
  ${pascalCaseCubitName}Cubit() : super(${pascalCaseCubitName}Initial());
}
`;
}

function getDefaultCubitTemplate (cubitName: string) {
  const pascalCaseCubitName = pascalCase(cubitName.toLowerCase());
  const snakeCaseCubitName = snakeCase(cubitName.toLowerCase());
  const cubitState = `${pascalCaseCubitName}State`;
  return `import 'package:bloc/bloc.dart';
import 'package:meta/meta.dart';

part '${snakeCaseCubitName}_state.dart';

class ${pascalCaseCubitName}Cubit extends Cubit<${cubitState}> {
  ${pascalCaseCubitName}Cubit() : super(${pascalCaseCubitName}Initial());
}
`;
}