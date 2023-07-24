import { DOCUMENTREQUIRED } from "./docment"
import { VISADURATION } from "./visaDuration"
export interface COUNTRY {
  title?: string,
  img?: string,
  info?: string,
  name?: string,
  days?: string,
  price?: string,
  types?: string,
  last?: string,
  terms?: string[],
  visas?: VISADURATION[],

documents1?:DOCUMENTREQUIRED[]

}
