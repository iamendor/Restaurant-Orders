export abstract class Rule<T, R> {
  filter: (data: T[], payload: R) => T[];
  filterFn: (check: R) => (data: T) => boolean;
}
