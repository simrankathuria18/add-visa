import { DOCUMENTREQUIRED } from "./docment"
import { VISADURATION } from "./visaDuration"
export interface SCHENGEN{
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
  theading?:string,

documents1?:DOCUMENTREQUIRED[]
}
