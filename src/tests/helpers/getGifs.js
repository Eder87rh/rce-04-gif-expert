import { getGifs } from "../../helpers/getGifs";

describe("getGifs Fetch tests", () => {
  it("should return 10 elements", async () => {
    const res = await getGifs("One Puch");
    expect(res.length).toBe(10);
  });
  it("should return 0 elements", async () => {
    const res = await getGifs("");
    expect(res.length).toBe(0);
  });
});
