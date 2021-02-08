import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook } from "@testing-library/react-hooks";
import { waitFor } from "@testing-library/react";

describe("Pruebas en el hook useFetchGifs", () => {
  it("should return the initial state", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetchGifs("One punch"));
    const { data, loading } = result.current;

    await waitForNextUpdate();
    expect(data).toEqual([]);
    expect(loading).toBeTruthy();
  });

  it("should return an array of gifs and loading false", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs("One punch")
    );
    await waitForNextUpdate();
    const { data, loading } = result.current;

    expect(data.length).toBe(10);
    expect(loading).toBeFalsy();
  });
});
