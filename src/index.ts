import { webpack } from "replugged";
import { AnyFunction } from "replugged/dist/types/util";

export async function start(): Promise<void> {
  const getTokenMod = (await webpack.waitForModule(webpack.filters.byProps("getToken"))) as {
    getToken: AnyFunction;
  };

  if (getTokenMod) {
    const token = getTokenMod.getToken();
    console.log(token);
  }
  console.log(getTokenMod);
}

// It took me way too long to figure this out, I did not remember anything about types at all prior to this.
// Thanks a lot albert n fish for helping me, I had really dumbass questions but you are were really patient <3
