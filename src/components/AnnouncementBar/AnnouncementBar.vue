<script setup lang="ts">
import { computed } from "vue";

export type AnnouncementBarMode =
  | "default"
  | "contrast"
  | "accent"
  | "positive"
  | "warning"
  | "negative";
export type AnnouncementBarSize = "small" | "medium";

export interface AnnouncementBarProps {
  mode?: AnnouncementBarMode;
  size?: AnnouncementBarSize;
  role?: "status" | "alert";
  backgroundColor?: string;
  textColor?: string;
  borderColor?: string;
}

const props = withDefaults(defineProps<AnnouncementBarProps>(), {
  mode: "default",
  size: "medium",
  role: "status",
});

const modeColors: Record<
  AnnouncementBarMode,
  { background: string; text: string; border: string }
> = {
  default: {
    background: "hsl(var(--background))",
    text: "hsl(var(--foreground))",
    border: "hsl(var(--border))",
  },
  contrast: {
    background: "hsl(var(--background))",
    text: "hsl(var(--foreground))",
    border: "hsl(var(--border))",
  },
  accent: {
    background: "hsl(var(--accent))",
    text: "hsl(0 0% 98%)",
    border: "hsl(var(--accent))",
  },
  positive: {
    background:
      "color-mix(in oklab, hsl(var(--positive)) 16%, hsl(var(--background)))",
    text: "hsl(var(--foreground))",
    border: "color-mix(in oklab, hsl(var(--positive)) 35%, hsl(var(--border)))",
  },
  warning: {
    background:
      "color-mix(in oklab, hsl(var(--warning)) 20%, hsl(var(--background)))",
    text: "hsl(var(--foreground))",
    border: "color-mix(in oklab, hsl(var(--warning)) 40%, hsl(var(--border)))",
  },
  negative: {
    background:
      "color-mix(in oklab, hsl(var(--negative)) 16%, hsl(var(--background)))",
    text: "hsl(var(--foreground))",
    border: "color-mix(in oklab, hsl(var(--negative)) 35%, hsl(var(--border)))",
  },
};

const barStyle = computed(() => {
  const colors = modeColors[props.mode];

  return {
    "--announcement-bar-background": props.backgroundColor ?? colors.background,
    "--announcement-bar-text": props.textColor ?? colors.text,
    "--announcement-bar-border": props.borderColor ?? colors.border,
  };
});
</script>

<template>
  <aside
    :class="[
      'announcement-bar',
      `announcement-bar--${props.size}`,
      `announcement-bar--${props.mode}`,
      { 'inverted-colors': props.mode === 'contrast' },
    ]"
    :style="barStyle"
    :role="props.role"
  >
    <div
      :class="[
        'announcement-bar__inner',
        { 'announcement-bar__inner--with-icon': $slots.icon },
      ]"
    >
      <div v-if="$slots.icon" class="announcement-bar__icon" aria-hidden="true">
        <slot name="icon"></slot>
      </div>
      <div class="announcement-bar__content"><slot></slot></div>
      <div v-if="$slots.actions" class="announcement-bar__actions">
        <slot name="actions"></slot>
      </div>
    </div>
  </aside>
</template>

<style scoped>
.announcement-bar {
  width: 100%;
  box-sizing: border-box;
  background: var(--announcement-bar-background);
  color: var(--announcement-bar-text);
  border-block: 1px solid var(--announcement-bar-border);
  font-family: var(--font-family);
}

.announcement-bar--small {
  --announcement-bar-padding-block: var(--gap-1);
  --announcement-bar-padding-inline: var(--gap-2);
  --announcement-bar-font-size: 13px;
  --announcement-bar-line-height: 18px;
}

.announcement-bar--medium {
  --announcement-bar-padding-block: var(--gap-3);
  --announcement-bar-padding-inline: var(--gap-6);
  --announcement-bar-font-size: 14px;
  --announcement-bar-line-height: 20px;
}

.announcement-bar__inner {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--gap-3);
  min-width: 0;
  padding: var(--announcement-bar-padding-block)
    var(--announcement-bar-padding-inline);
  font-size: var(--announcement-bar-font-size);
  font-weight: 500;
  line-height: var(--announcement-bar-line-height);
  text-align: center;
}

.announcement-bar__icon {
  display: inline-flex;
  flex: none;
  font-size: 18px;
}

.announcement-bar__content {
  min-width: 0;
  text-wrap: balance;
}

.announcement-bar__actions {
  display: inline-flex;
  flex: none;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--gap-2);
}

@media (max-width: 640px) {
  .announcement-bar__inner {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    column-gap: var(--gap-3);
    row-gap: var(--gap-2);
    padding-inline: var(--gap-3);
  }

  .announcement-bar__inner--with-icon {
    grid-template-columns: auto minmax(0, 1fr);
  }

  .announcement-bar__icon {
    align-self: start;
    grid-column: 1;
    grid-row: 1;
  }

  .announcement-bar__content {
    grid-column: 1;
    grid-row: 1;
    text-align: start;
    text-wrap: pretty;
  }

  .announcement-bar__inner--with-icon .announcement-bar__content {
    grid-column: 2;
  }

  .announcement-bar__actions {
    grid-column: 1;
    grid-row: 2;
    justify-self: start;
  }

  .announcement-bar__inner--with-icon .announcement-bar__actions {
    grid-column: 2;
  }
}
</style>
