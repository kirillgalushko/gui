import type { ComputedRef, InjectionKey } from "vue";
import type { AvatarShape } from "./Avatar.vue";

export interface AvatarGroupContext {
  shape: ComputedRef<AvatarShape>;
  size: ComputedRef<string>;
}

export const avatarGroupContextKey: InjectionKey<AvatarGroupContext> = Symbol(
  "avatar-group-context",
);
