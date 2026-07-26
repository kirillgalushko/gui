import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import FileUpload from "./FileUpload.vue";
import type { FileUploadRejection } from "./types";

const selectFiles = async (
  wrapper: ReturnType<typeof mount>,
  files: File[],
) => {
  const input = wrapper.get('input[type="file"]');
  Object.defineProperty(input.element, "files", {
    configurable: true,
    value: files,
  });
  await input.trigger("change");
};

describe("FileUpload", () => {
  it("accepts multiple valid files and updates the model", async () => {
    const wrapper = mount(FileUpload, {
      props: {
        accept: "image/*",
        maxFiles: 2,
        multiple: true,
      },
    });
    const files = [
      new File(["one"], "one.png", { type: "image/png" }),
      new File(["two"], "two.jpg", { type: "image/jpeg" }),
    ];

    await selectFiles(wrapper, files);

    expect(wrapper.emitted("accept")?.[0]).toEqual([files]);
    expect(wrapper.emitted("update:modelValue")?.[0]).toEqual([files]);
  });

  it("rejects invalid format and oversized files", async () => {
    const wrapper = mount(FileUpload, {
      props: {
        accept: "image/*",
        maxSize: 2,
      },
    });
    const file = new File(["large"], "document.pdf", {
      type: "application/pdf",
    });

    await selectFiles(wrapper, [file]);

    const rejectEvents = wrapper.emitted("reject") as unknown as [
      [FileUploadRejection[]],
    ];
    const rejection = rejectEvents[0][0][0];
    expect(rejection.errors).toContain("Недопустимый формат файла");
    expect(rejection.errors).toContain("Файл превышает допустимый размер");
    expect(wrapper.emitted("update:modelValue")).toBeUndefined();
  });

  it("does not accept files while disabled", async () => {
    const wrapper = mount(FileUpload, {
      props: { disabled: true },
    });

    await selectFiles(wrapper, [new File(["x"], "x.txt")]);
    expect(wrapper.emitted("accept")).toBeUndefined();
  });
});
