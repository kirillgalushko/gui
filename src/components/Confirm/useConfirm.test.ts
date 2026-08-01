import { describe, expect, it } from "vitest";
import { useConfirm } from "./useConfirm";

describe("useConfirm", () => {
  it("resolves with the primary action", async () => {
    const confirmation = useConfirm();
    const result = confirmation.confirm();

    confirmation.resolve.value();

    await expect(result).resolves.toBe("confirm");
    expect(confirmation.isOpened.value).toBe(false);
  });

  it("resolves with the secondary action", async () => {
    const confirmation = useConfirm();
    const result = confirmation.confirm({
      secondaryButtonText: "Продолжить без сохранения",
    });

    confirmation.secondary.value();

    await expect(result).resolves.toBe("secondary");
    expect(confirmation.secondaryButtonText.value).toBe(
      "Продолжить без сохранения",
    );
    expect(confirmation.isOpened.value).toBe(false);
  });

  it("rejects when the action is cancelled", async () => {
    const confirmation = useConfirm();
    const result = confirmation.confirm();

    confirmation.reject.value();

    await expect(result).rejects.toBeUndefined();
    expect(confirmation.isOpened.value).toBe(false);
  });
});
