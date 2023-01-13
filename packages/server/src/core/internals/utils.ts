import { ProcedureParams } from '../procedure';

/**
 * @internal
 */
export type Overwrite<TType, TWith> = Omit<TType, keyof TWith> & TWith;
/**
 * @internal
 */
export type OverwriteKnown<TType, TWith> = {
  [K in keyof TType]: K extends keyof TWith ? TWith[K] : TType[K];
};
/**
 * @internal
 */
export type DefaultValue<TValue, TFallback> = undefined extends TValue
  ? TFallback
  : TValue;

/**
 * @internal
 */
export const middlewareMarker = 'middlewareMarker' as 'middlewareMarker' & {
  __brand: 'middlewareMarker';
};

/**
 * @internal
 */
export type MiddlewareMarker = typeof middlewareMarker;

/**
 * @internal
 */
export interface ResolveOptions<TParams extends ProcedureParams> {
  ctx: TParams['_ctx_out'];
  input: TParams['_input_out'];
}

/**
 * @internal
 */
export type ValidateShape<TActualShape, TExpectedShape> =
  TActualShape extends TExpectedShape
    ? Exclude<keyof TActualShape, keyof TExpectedShape> extends never
      ? TActualShape
      : TExpectedShape
    : never;

/**
 * @internal
 */
export type PickFirstDefined<TType, TPick> = undefined extends TType
  ? undefined extends TPick
    ? never
    : TPick
  : TType;
