import { LanguageDirection } from './language-direction';
import { Options } from "@emotion/cache";

export type CreateCacheOptions = {
  [KEY in LanguageDirection]: Options;
}