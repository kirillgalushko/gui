import type { ComputedRef, InjectionKey } from "vue";
import type {
  AttachmentOrientation,
  AttachmentSize,
  AttachmentState,
} from "./types";

export interface AttachmentContext {
  orientation: ComputedRef<AttachmentOrientation>;
  size: ComputedRef<AttachmentSize>;
  state: ComputedRef<AttachmentState>;
}

export const attachmentContextKey: InjectionKey<AttachmentContext> =
  Symbol("attachment");
