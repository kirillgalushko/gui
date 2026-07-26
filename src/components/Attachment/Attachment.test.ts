import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import Attachment from "./Attachment.vue";
import AttachmentAction from "./AttachmentAction.vue";
import AttachmentActions from "./AttachmentActions.vue";
import AttachmentContent from "./AttachmentContent.vue";
import AttachmentDescription from "./AttachmentDescription.vue";
import AttachmentTitle from "./AttachmentTitle.vue";

describe("Attachment", () => {
  it("exposes size, orientation and upload state", () => {
    const wrapper = mount(Attachment, {
      props: {
        orientation: "vertical",
        size: "small",
        state: "uploading",
      },
      slots: { default: "Файл" },
    });

    expect(wrapper.attributes("data-orientation")).toBe("vertical");
    expect(wrapper.attributes("data-size")).toBe("small");
    expect(wrapper.attributes("data-state")).toBe("uploading");
    expect(wrapper.attributes("aria-busy")).toBe("true");
  });

  it("keeps actions independently operable", async () => {
    const wrapper = mount(Attachment, {
      slots: {
        default: `
          <AttachmentContent>
            <AttachmentTitle>contract.pdf</AttachmentTitle>
            <AttachmentDescription>PDF</AttachmentDescription>
          </AttachmentContent>
          <AttachmentActions>
            <AttachmentAction aria-label="Удалить">×</AttachmentAction>
          </AttachmentActions>
        `,
      },
      global: {
        components: {
          AttachmentAction,
          AttachmentActions,
          AttachmentContent,
          AttachmentDescription,
          AttachmentTitle,
        },
      },
    });

    const action = wrapper.get('button[aria-label="Удалить"]');
    await action.trigger("click");
    expect(action.attributes("aria-label")).toBe("Удалить");
  });
});
