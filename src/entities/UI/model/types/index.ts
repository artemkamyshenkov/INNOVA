export type ScrollSchema = Record<string, number>;

export type ScrollPosition = {
  path: string;
  position: number;
};
export interface UISchema {
  scroll: ScrollSchema;
}
