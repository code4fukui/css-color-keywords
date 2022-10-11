import * as t from "https://deno.land/std/testing/asserts.ts";
import { cssColorKeywords } from "./cssColorKeywords.js";

Deno.test("simple", () => {
  t.assertEquals(cssColorKeywords.black, '#000000');
  t.assertEquals(cssColorKeywords.orange, '#ffa500');  
});
