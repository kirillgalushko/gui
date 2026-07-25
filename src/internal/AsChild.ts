import {
  Comment,
  Fragment,
  Text,
  cloneVNode,
  defineComponent,
  type VNode,
} from "vue";

const getValidChildren = (children: VNode[]): VNode[] =>
  children.flatMap((child) => {
    if (child.type === Fragment && Array.isArray(child.children)) {
      return getValidChildren(child.children as VNode[]);
    }

    if (child.type === Comment) {
      return [];
    }

    if (child.type === Text && String(child.children ?? "").trim() === "") {
      return [];
    }

    return [child];
  });

export default defineComponent({
  name: "AsChild",
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => {
      const children = getValidChildren(slots.default?.() ?? []);

      if (children.length !== 1) {
        throw new Error("asChild ожидает ровно один корневой элемент");
      }

      const child = children[0];

      if (!child) {
        throw new Error("asChild не получил корневой элемент");
      }

      return cloneVNode(child, attrs, true);
    };
  },
});
