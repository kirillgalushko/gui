import "./vite-env.d.ts";
import "./styles/style.css";
export declare const Accordion: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("./components/Accordion/Accordion.vue").AccordionProps> & Readonly<{
        onChange?: ((value: string[]) => any) | undefined;
        "onUpdate:modelValue"?: ((value: string[]) => any) | undefined;
    }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        change: (value: string[]) => any;
        "update:modelValue": (value: string[]) => any;
    }, import("vue").PublicProps, {
        disabled: boolean;
        multiple: boolean;
        defaultValue: string[];
        modelValue: string[];
    }, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("./components/Accordion/Accordion.vue").AccordionProps> & Readonly<{
        onChange?: ((value: string[]) => any) | undefined;
        "onUpdate:modelValue"?: ((value: string[]) => any) | undefined;
    }>, {}, {}, {}, {}, {
        disabled: boolean;
        multiple: boolean;
        defaultValue: string[];
        modelValue: string[];
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("./components/Accordion/Accordion.vue").AccordionProps> & Readonly<{
    onChange?: ((value: string[]) => any) | undefined;
    "onUpdate:modelValue"?: ((value: string[]) => any) | undefined;
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    change: (value: string[]) => any;
    "update:modelValue": (value: string[]) => any;
}, string, {
    disabled: boolean;
    multiple: boolean;
    defaultValue: string[];
    modelValue: string[];
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    };
});
export declare const AccordionContent: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {}, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, {}>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    };
});
export declare const AccordionItem: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("./components/Accordion/AccordionItem.vue").AccordionItemProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        disabled: boolean;
    }, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("./components/Accordion/AccordionItem.vue").AccordionItemProps> & Readonly<{}>, {}, {}, {}, {}, {
        disabled: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("./components/Accordion/AccordionItem.vue").AccordionItemProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    disabled: boolean;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    };
});
export declare const AccordionTrigger: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {}, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, {}>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    };
});
export declare const AnnouncementBar: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("./index.ts").AnnouncementBarProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        mode: import("./index.ts").AnnouncementBarMode;
        size: import("./index.ts").AnnouncementBarSize;
        role: "status" | "alert";
    }, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("./index.ts").AnnouncementBarProps> & Readonly<{}>, {}, {}, {}, {}, {
        mode: import("./index.ts").AnnouncementBarMode;
        size: import("./index.ts").AnnouncementBarSize;
        role: "status" | "alert";
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("./index.ts").AnnouncementBarProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    mode: import("./index.ts").AnnouncementBarMode;
    size: import("./index.ts").AnnouncementBarSize;
    role: "status" | "alert";
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        icon?: (props: {}) => any;
    } & {
        default?: (props: {}) => any;
    } & {
        actions?: (props: {}) => any;
    };
});
export type { AnnouncementBarMode, AnnouncementBarProps, AnnouncementBarSize, } from "./components/AnnouncementBar/AnnouncementBar.vue";
export declare const Navbar: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("./components/Navbar/Navbar.vue").NavbarProps> & Readonly<{
        "onUpdate:mobileOpen"?: ((value: boolean) => any) | undefined;
    }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        "update:mobileOpen": (value: boolean) => any;
    }, import("vue").PublicProps, {
        mode: import("./index.ts").NavbarMode;
        blur: boolean;
        ariaLabel: string;
        defaultMobileOpen: boolean;
        mobileMenuLabel: string;
        mobileMenuTitle: string;
        mobileMenuVariant: import("./components/Navbar/Navbar.vue").NavbarMobileVariant;
        mobileOpen: boolean;
        sticky: boolean;
    }, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("./components/Navbar/Navbar.vue").NavbarProps> & Readonly<{
        "onUpdate:mobileOpen"?: ((value: boolean) => any) | undefined;
    }>, {}, {}, {}, {}, {
        mode: import("./index.ts").NavbarMode;
        blur: boolean;
        ariaLabel: string;
        defaultMobileOpen: boolean;
        mobileMenuLabel: string;
        mobileMenuTitle: string;
        mobileMenuVariant: import("./components/Navbar/Navbar.vue").NavbarMobileVariant;
        mobileOpen: boolean;
        sticky: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("./components/Navbar/Navbar.vue").NavbarProps> & Readonly<{
    "onUpdate:mobileOpen"?: ((value: boolean) => any) | undefined;
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:mobileOpen": (value: boolean) => any;
}, string, {
    mode: import("./index.ts").NavbarMode;
    blur: boolean;
    ariaLabel: string;
    defaultMobileOpen: boolean;
    mobileMenuLabel: string;
    mobileMenuTitle: string;
    mobileMenuVariant: import("./components/Navbar/Navbar.vue").NavbarMobileVariant;
    mobileOpen: boolean;
    sticky: boolean;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        left?: (props: {}) => any;
    } & {
        default?: (props: {}) => any;
    } & {
        actions?: (props: {}) => any;
    } & {
        compactActions?: (props: {}) => any;
    } & {
        mobile?: (props: {}) => any;
    } & {
        default?: (props: {}) => any;
    } & {
        actions?: (props: {}) => any;
    } & {
        mobile?: (props: {}) => any;
    } & {
        default?: (props: {}) => any;
    } & {
        actions?: (props: {}) => any;
    };
});
export declare const NavigationMenu: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("./components/NavigationMenu/NavigationMenu.vue").NavigationMenuProps> & Readonly<{
        onChange?: ((value: string) => any) | undefined;
        "onUpdate:modelValue"?: ((value: string) => any) | undefined;
    }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        change: (value: string) => any;
        "update:modelValue": (value: string) => any;
    }, import("vue").PublicProps, {
        ariaLabel: string;
        orientation: import("./index.ts").NavigationMenuOrientation;
        defaultValue: string;
        modelValue: string;
        closeDelayDuration: number;
        delayDuration: number;
        openOnHover: boolean;
    }, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("./components/NavigationMenu/NavigationMenu.vue").NavigationMenuProps> & Readonly<{
        onChange?: ((value: string) => any) | undefined;
        "onUpdate:modelValue"?: ((value: string) => any) | undefined;
    }>, {}, {}, {}, {}, {
        ariaLabel: string;
        orientation: import("./index.ts").NavigationMenuOrientation;
        defaultValue: string;
        modelValue: string;
        closeDelayDuration: number;
        delayDuration: number;
        openOnHover: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("./components/NavigationMenu/NavigationMenu.vue").NavigationMenuProps> & Readonly<{
    onChange?: ((value: string) => any) | undefined;
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    change: (value: string) => any;
    "update:modelValue": (value: string) => any;
}, string, {
    ariaLabel: string;
    orientation: import("./index.ts").NavigationMenuOrientation;
    defaultValue: string;
    modelValue: string;
    closeDelayDuration: number;
    delayDuration: number;
    openOnHover: boolean;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    };
});
export declare const NavigationMenuContent: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {}, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, {}>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    };
});
export declare const NavigationMenuIndicator: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export declare const NavigationMenuItem: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("./components/NavigationMenu/NavigationMenuItem.vue").NavigationMenuItemProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        disabled: boolean;
    }, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("./components/NavigationMenu/NavigationMenuItem.vue").NavigationMenuItemProps> & Readonly<{}>, {}, {}, {}, {}, {
        disabled: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("./components/NavigationMenu/NavigationMenuItem.vue").NavigationMenuItemProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    disabled: boolean;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    };
});
export declare const NavigationMenuLink: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("./components/NavigationMenu/NavigationMenuLink.vue").NavigationMenuLinkProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        size: import("./index.ts").ComponentSize;
        asChild: boolean;
        rounded: boolean;
        disabled: boolean;
        Element: "a" | "button";
        active: boolean;
        closeOnSelect: boolean;
    }, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("./components/NavigationMenu/NavigationMenuLink.vue").NavigationMenuLinkProps> & Readonly<{}>, {}, {}, {}, {}, {
        size: import("./index.ts").ComponentSize;
        asChild: boolean;
        rounded: boolean;
        disabled: boolean;
        Element: "a" | "button";
        active: boolean;
        closeOnSelect: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("./components/NavigationMenu/NavigationMenuLink.vue").NavigationMenuLinkProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    size: import("./index.ts").ComponentSize;
    asChild: boolean;
    rounded: boolean;
    disabled: boolean;
    Element: "a" | "button";
    active: boolean;
    closeOnSelect: boolean;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    } & {
        default?: (props: {}) => any;
    };
});
export declare const NavigationMenuList: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {}, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, {}>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    };
});
export declare const NavigationMenuTrigger: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {}, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, {}>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    };
});
export type { NavbarMode } from "./components/Navbar/Navbar.vue";
export type { NavigationMenuOrientation } from "./components/NavigationMenu/context";
export declare const CollapsibleSection: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("./components/CollapsibleSection/CollapsibleSection.vue").CollapsibleSectionProps> & Readonly<{
        onChange?: ((opened: boolean) => any) | undefined;
        "onUpdate:modelValue"?: ((opened: boolean) => any) | undefined;
    }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        change: (opened: boolean) => any;
        "update:modelValue": (opened: boolean) => any;
    }, import("vue").PublicProps, {
        disabled: boolean;
        modelValue: boolean;
        defaultOpened: boolean;
    }, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("./components/CollapsibleSection/CollapsibleSection.vue").CollapsibleSectionProps> & Readonly<{
        onChange?: ((opened: boolean) => any) | undefined;
        "onUpdate:modelValue"?: ((opened: boolean) => any) | undefined;
    }>, {}, {}, {}, {}, {
        disabled: boolean;
        modelValue: boolean;
        defaultOpened: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("./components/CollapsibleSection/CollapsibleSection.vue").CollapsibleSectionProps> & Readonly<{
    onChange?: ((opened: boolean) => any) | undefined;
    "onUpdate:modelValue"?: ((opened: boolean) => any) | undefined;
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    change: (opened: boolean) => any;
    "update:modelValue": (opened: boolean) => any;
}, string, {
    disabled: boolean;
    modelValue: boolean;
    defaultOpened: boolean;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default(): unknown;
        icon(): unknown;
    };
});
export declare const Collapse: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("./components/Collapse/Collapse.vue").CollapseProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        duration: number;
        labelledBy: string;
    }, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("./components/Collapse/Collapse.vue").CollapseProps> & Readonly<{}>, {}, {}, {}, {}, {
        duration: number;
        labelledBy: string;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("./components/Collapse/Collapse.vue").CollapseProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    duration: number;
    labelledBy: string;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default(): unknown;
    };
});
export declare const Attachment: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("./components/Attachment/Attachment.vue").AttachmentProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        size: import("./index.ts").AttachmentSize;
        stretched: boolean;
        orientation: import("./index.ts").AttachmentOrientation;
        state: import("./index.ts").AttachmentState;
    }, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("./components/Attachment/Attachment.vue").AttachmentProps> & Readonly<{}>, {}, {}, {}, {}, {
        size: import("./index.ts").AttachmentSize;
        stretched: boolean;
        orientation: import("./index.ts").AttachmentOrientation;
        state: import("./index.ts").AttachmentState;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("./components/Attachment/Attachment.vue").AttachmentProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    size: import("./index.ts").AttachmentSize;
    stretched: boolean;
    orientation: import("./index.ts").AttachmentOrientation;
    state: import("./index.ts").AttachmentState;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    };
});
export declare const AttachmentAction: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("./components/Attachment/AttachmentAction.vue").AttachmentActionProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        mode: "default" | "contrast" | "ghost" | "outline" | "negative" | "accent";
        size: import("./index.ts").ComponentSize;
        disabled: boolean;
    }, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("./components/Attachment/AttachmentAction.vue").AttachmentActionProps> & Readonly<{}>, {}, {}, {}, {}, {
        mode: "default" | "contrast" | "ghost" | "outline" | "negative" | "accent";
        size: import("./index.ts").ComponentSize;
        disabled: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("./components/Attachment/AttachmentAction.vue").AttachmentActionProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    mode: "default" | "contrast" | "ghost" | "outline" | "negative" | "accent";
    size: import("./index.ts").ComponentSize;
    disabled: boolean;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    };
});
export declare const AttachmentActions: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {}, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, {}>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    };
});
export declare const AttachmentContent: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {}, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, {}>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    };
});
export declare const AttachmentDescription: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {}, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, {}>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    };
});
export declare const AttachmentGroup: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("./components/Attachment/AttachmentGroup.vue").AttachmentGroupProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        orientation: import("./index.ts").AttachmentOrientation;
    }, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("./components/Attachment/AttachmentGroup.vue").AttachmentGroupProps> & Readonly<{}>, {}, {}, {}, {}, {
        orientation: import("./index.ts").AttachmentOrientation;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("./components/Attachment/AttachmentGroup.vue").AttachmentGroupProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    orientation: import("./index.ts").AttachmentOrientation;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    };
});
export declare const AttachmentMedia: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("./components/Attachment/AttachmentMedia.vue").AttachmentMediaProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        variant: import("./index.ts").AttachmentMediaVariant;
    }, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("./components/Attachment/AttachmentMedia.vue").AttachmentMediaProps> & Readonly<{}>, {}, {}, {}, {}, {
        variant: import("./index.ts").AttachmentMediaVariant;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("./components/Attachment/AttachmentMedia.vue").AttachmentMediaProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    variant: import("./index.ts").AttachmentMediaVariant;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    };
});
export declare const AttachmentMediaTrigger: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {}, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, {}>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    };
});
export declare const AttachmentTitle: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {}, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, {}>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    };
});
export declare const AttachmentTrigger: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {}, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, {}>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    };
});
export declare const Timeline: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("./components/Timeline/Timeline.vue").TimelineProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        direction: import("./index.ts").TimelineDirection;
        orientation: import("./index.ts").TimelineOrientation;
        datePosition: import("./index.ts").TimelineDatePosition;
        railSize: string;
    }, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("./components/Timeline/Timeline.vue").TimelineProps> & Readonly<{}>, {}, {}, {}, {}, {
        direction: import("./index.ts").TimelineDirection;
        orientation: import("./index.ts").TimelineOrientation;
        datePosition: import("./index.ts").TimelineDatePosition;
        railSize: string;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("./components/Timeline/Timeline.vue").TimelineProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    direction: import("./index.ts").TimelineDirection;
    orientation: import("./index.ts").TimelineOrientation;
    datePosition: import("./index.ts").TimelineDatePosition;
    railSize: string;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    };
});
export declare const TimelineContent: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {}, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, {}>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    };
});
export declare const TimelineDate: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("./components/Timeline/TimelineDate.vue").TimelineDateProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        Element: "time" | "div" | "span";
    }, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("./components/Timeline/TimelineDate.vue").TimelineDateProps> & Readonly<{}>, {}, {}, {}, {}, {
        Element: "time" | "div" | "span";
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("./components/Timeline/TimelineDate.vue").TimelineDateProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    Element: "time" | "div" | "span";
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    };
});
export declare const TimelineHeader: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {}, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, {}>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    };
});
export declare const TimelineIndicator: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("./components/Timeline/TimelineIndicator.vue").TimelineIndicatorProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        mode: import("./index.ts").TimelineTone;
        size: import("./index.ts").TimelineIndicatorSize;
        variant: import("./index.ts").TimelineIndicatorVariant;
    }, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("./components/Timeline/TimelineIndicator.vue").TimelineIndicatorProps> & Readonly<{}>, {}, {}, {}, {}, {
        mode: import("./index.ts").TimelineTone;
        size: import("./index.ts").TimelineIndicatorSize;
        variant: import("./index.ts").TimelineIndicatorVariant;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("./components/Timeline/TimelineIndicator.vue").TimelineIndicatorProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    mode: import("./index.ts").TimelineTone;
    size: import("./index.ts").TimelineIndicatorSize;
    variant: import("./index.ts").TimelineIndicatorVariant;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    };
});
export declare const TimelineItem: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("./components/Timeline/TimelineItem.vue").TimelineItemProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {}, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("./components/Timeline/TimelineItem.vue").TimelineItemProps> & Readonly<{}>, {}, {}, {}, {}, {}>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("./components/Timeline/TimelineItem.vue").TimelineItemProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    };
});
export declare const TimelineSeparator: import("vue").DefineComponent<import("./components/Timeline/TimelineSeparator.vue").TimelineSeparatorProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("./components/Timeline/TimelineSeparator.vue").TimelineSeparatorProps> & Readonly<{}>, {
    dashed: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export declare const TimelineTitle: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("./components/Timeline/TimelineTitle.vue").TimelineTitleProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        Element: "h2" | "h3" | "h4" | "div" | "span";
    }, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("./components/Timeline/TimelineTitle.vue").TimelineTitleProps> & Readonly<{}>, {}, {}, {}, {}, {
        Element: "h2" | "h3" | "h4" | "div" | "span";
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("./components/Timeline/TimelineTitle.vue").TimelineTitleProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    Element: "h2" | "h3" | "h4" | "div" | "span";
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    };
});
export declare const ImageViewer: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("./components/ImageViewer/ImageViewer.vue").ImageViewerProps> & Readonly<{
        onChange?: ((index: number, image: import("./index.ts").ImageViewerItem) => any) | undefined;
        onClose?: (() => any) | undefined;
        onError?: ((value: import("./index.ts").ImageViewerError) => any) | undefined;
        "onUpdate:isOpened"?: ((value: boolean) => any) | undefined;
        "onUpdate:activeIndex"?: ((value: number) => any) | undefined;
    }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        change: (index: number, image: import("./index.ts").ImageViewerItem) => any;
        close: () => any;
        error: (value: import("./index.ts").ImageViewerError) => any;
        "update:isOpened": (value: boolean) => any;
        "update:activeIndex": (value: number) => any;
    }, import("vue").PublicProps, {
        isOpened: boolean;
        activeIndex: number;
        loop: boolean;
        showTitle: boolean;
        showCounter: boolean;
        showThumbnails: import("./index.ts").ImageViewerThumbnails;
        zoomable: boolean;
        rotatable: boolean;
        closeOnBackdrop: boolean;
        minScale: number;
        maxScale: number;
        preload: number;
        swipeThreshold: number;
    }, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("./components/ImageViewer/ImageViewer.vue").ImageViewerProps> & Readonly<{
        onChange?: ((index: number, image: import("./index.ts").ImageViewerItem) => any) | undefined;
        onClose?: (() => any) | undefined;
        onError?: ((value: import("./index.ts").ImageViewerError) => any) | undefined;
        "onUpdate:isOpened"?: ((value: boolean) => any) | undefined;
        "onUpdate:activeIndex"?: ((value: number) => any) | undefined;
    }>, {}, {}, {}, {}, {
        isOpened: boolean;
        activeIndex: number;
        loop: boolean;
        showTitle: boolean;
        showCounter: boolean;
        showThumbnails: import("./index.ts").ImageViewerThumbnails;
        zoomable: boolean;
        rotatable: boolean;
        closeOnBackdrop: boolean;
        minScale: number;
        maxScale: number;
        preload: number;
        swipeThreshold: number;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("./components/ImageViewer/ImageViewer.vue").ImageViewerProps> & Readonly<{
    onChange?: ((index: number, image: import("./index.ts").ImageViewerItem) => any) | undefined;
    onClose?: (() => any) | undefined;
    onError?: ((value: import("./index.ts").ImageViewerError) => any) | undefined;
    "onUpdate:isOpened"?: ((value: boolean) => any) | undefined;
    "onUpdate:activeIndex"?: ((value: number) => any) | undefined;
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    change: (index: number, image: import("./index.ts").ImageViewerItem) => any;
    close: () => any;
    error: (value: import("./index.ts").ImageViewerError) => any;
    "update:isOpened": (value: boolean) => any;
    "update:activeIndex": (value: number) => any;
}, string, {
    isOpened: boolean;
    activeIndex: number;
    loop: boolean;
    showTitle: boolean;
    showCounter: boolean;
    showThumbnails: import("./index.ts").ImageViewerThumbnails;
    zoomable: boolean;
    rotatable: boolean;
    closeOnBackdrop: boolean;
    minScale: number;
    maxScale: number;
    preload: number;
    swipeThreshold: number;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        toolbar?: (props: {
            image: import("./index.ts").ImageViewerItem;
            index: number;
        }) => any;
    } & {
        error?: (props: {
            image: import("./index.ts").ImageViewerItem;
            index: number;
            retry: () => void;
        }) => any;
    } & {
        caption?: (props: {
            image: import("./index.ts").ImageViewerItem;
            index: number;
        }) => any;
    } & {
        thumbnail?: (props: {
            image: import("./index.ts").ImageViewerItem;
            index: number;
        }) => any;
    };
});
export declare const IconContainer: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("./components/IconContainer/IconContainer.vue").IconContainerProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        mode: import("./components/IconContainer/IconContainer.vue").IconContainerMode;
        size: string;
    }, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("./components/IconContainer/IconContainer.vue").IconContainerProps> & Readonly<{}>, {}, {}, {}, {}, {
        mode: import("./components/IconContainer/IconContainer.vue").IconContainerMode;
        size: string;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("./components/IconContainer/IconContainer.vue").IconContainerProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    mode: import("./components/IconContainer/IconContainer.vue").IconContainerMode;
    size: string;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    };
});
export declare const Action: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {}, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, {}>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    };
});
export declare const AdaptiveModal: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("./components/AdaptiveModal/AdaptiveModal.vue").AdaptiveModalProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        showCloseButton: boolean;
    }, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("./components/AdaptiveModal/AdaptiveModal.vue").AdaptiveModalProps> & Readonly<{}>, {}, {}, {}, {}, {
        showCloseButton: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("./components/AdaptiveModal/AdaptiveModal.vue").AdaptiveModalProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    showCloseButton: boolean;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    } & {
        footer?: (props: {}) => any;
    } & {
        default?: (props: {}) => any;
    } & {
        footer?: (props: {}) => any;
    };
});
export declare const Avatar: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("./index.ts").AvatarProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        mode: import("./index.ts").AvatarMode;
    }, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("./index.ts").AvatarProps> & Readonly<{}>, {}, {}, {}, {}, {
        mode: import("./index.ts").AvatarMode;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("./index.ts").AvatarProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    mode: import("./index.ts").AvatarMode;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    };
});
export declare const AvatarGroup: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("./index.ts").AvatarGroupProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        size: string;
        shape: import("./index.ts").AvatarShape;
        surface: string;
    }, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("./index.ts").AvatarGroupProps> & Readonly<{}>, {}, {}, {}, {}, {
        size: string;
        shape: import("./index.ts").AvatarShape;
        surface: string;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("./index.ts").AvatarGroupProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    size: string;
    shape: import("./index.ts").AvatarShape;
    surface: string;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    };
});
export declare const AvatarGroupCount: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("./index.ts").AvatarGroupCountProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        mode: import("./index.ts").AvatarMode;
    }, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("./index.ts").AvatarGroupCountProps> & Readonly<{}>, {}, {}, {}, {}, {
        mode: import("./index.ts").AvatarMode;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("./index.ts").AvatarGroupCountProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    mode: import("./index.ts").AvatarMode;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    };
});
export type { AvatarColor, AvatarMode, AvatarProps, AvatarShape, } from "./components/Avatar/Avatar.vue";
export type { AvatarGroupProps } from "./components/Avatar/AvatarGroup.vue";
export type { AvatarGroupCountProps } from "./components/Avatar/AvatarGroupCount.vue";
export declare const Button: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("./components/Button/Button.vue").ButtonProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        mode: "default" | "contrast" | "ghost" | "outline" | "negative" | "accent";
        size: import("./index.ts").ComponentSize;
    }, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("./components/Button/Button.vue").ButtonProps> & Readonly<{}>, {}, {}, {}, {}, {
        mode: "default" | "contrast" | "ghost" | "outline" | "negative" | "accent";
        size: import("./index.ts").ComponentSize;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("./components/Button/Button.vue").ButtonProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    mode: "default" | "contrast" | "ghost" | "outline" | "negative" | "accent";
    size: import("./index.ts").ComponentSize;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    } & {
        default?: (props: {}) => any;
    };
});
export declare const ButtonGroup: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("./components/ButtonGroup/ButtonGroup.vue").ButtonGroupProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        orientation: import("./components/ButtonGroup/context.ts").ButtonGroupOrientation;
    }, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("./components/ButtonGroup/ButtonGroup.vue").ButtonGroupProps> & Readonly<{}>, {}, {}, {}, {}, {
        orientation: import("./components/ButtonGroup/context.ts").ButtonGroupOrientation;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("./components/ButtonGroup/ButtonGroup.vue").ButtonGroupProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    orientation: import("./components/ButtonGroup/context.ts").ButtonGroupOrientation;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    };
});
export declare const ButtonGroupSeparator: import("vue").DefineComponent<import("./components/ButtonGroup/ButtonGroupSeparator.vue").ButtonGroupSeparatorProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("./components/ButtonGroup/ButtonGroupSeparator.vue").ButtonGroupSeparatorProps> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export declare const ButtonGroupText: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {}, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, {}>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    };
});
export declare const Breadcrumb: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("./components/Breadcrumb/Breadcrumb.vue").BreadcrumbProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        label: string;
    }, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("./components/Breadcrumb/Breadcrumb.vue").BreadcrumbProps> & Readonly<{}>, {}, {}, {}, {}, {
        label: string;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("./components/Breadcrumb/Breadcrumb.vue").BreadcrumbProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    label: string;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    };
});
export declare const BreadcrumbItem: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {}, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, {}>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    };
});
export declare const BreadcrumbLink: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("./components/Breadcrumb/BreadcrumbLink.vue").BreadcrumbLinkProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        Element: "a" | "button" | "span";
    }, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("./components/Breadcrumb/BreadcrumbLink.vue").BreadcrumbLinkProps> & Readonly<{}>, {}, {}, {}, {}, {
        Element: "a" | "button" | "span";
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("./components/Breadcrumb/BreadcrumbLink.vue").BreadcrumbLinkProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    Element: "a" | "button" | "span";
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    };
});
export declare const BreadcrumbList: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {}, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, {}>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    };
});
export declare const BreadcrumbPage: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {}, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, {}>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    };
});
export declare const BreadcrumbSeparator: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {}, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, {}>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    };
});
export declare const Pagination: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("./components/Pagination/Pagination.vue").PaginationProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        size: import("./index.ts").ComponentSize;
        label: string;
    }, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("./components/Pagination/Pagination.vue").PaginationProps> & Readonly<{}>, {}, {}, {}, {}, {
        size: import("./index.ts").ComponentSize;
        label: string;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("./components/Pagination/Pagination.vue").PaginationProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    size: import("./index.ts").ComponentSize;
    label: string;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    };
});
export declare const PaginationContent: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {}, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, {}>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    };
});
export declare const PaginationItem: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {}, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, {}>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    };
});
export declare const PaginationLink: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("./components/Pagination/PaginationLink.vue").PaginationLinkProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        Element: "a" | "button";
    }, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("./components/Pagination/PaginationLink.vue").PaginationLinkProps> & Readonly<{}>, {}, {}, {}, {}, {
        Element: "a" | "button";
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("./components/Pagination/PaginationLink.vue").PaginationLinkProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    Element: "a" | "button";
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    } & {
        default?: (props: {}) => any;
    } & {
        default?: (props: {}) => any;
    };
});
export declare const PaginationPrevious: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("./components/Pagination/PaginationPrevious.vue").PaginationPreviousProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        label: string;
        text: string;
        Element: "a" | "button";
    }, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("./components/Pagination/PaginationPrevious.vue").PaginationPreviousProps> & Readonly<{}>, {}, {}, {}, {}, {
        label: string;
        text: string;
        Element: "a" | "button";
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("./components/Pagination/PaginationPrevious.vue").PaginationPreviousProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    label: string;
    text: string;
    Element: "a" | "button";
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    };
});
export declare const PaginationNext: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("./components/Pagination/PaginationNext.vue").PaginationNextProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        label: string;
        text: string;
        Element: "a" | "button";
    }, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("./components/Pagination/PaginationNext.vue").PaginationNextProps> & Readonly<{}>, {}, {}, {}, {}, {
        label: string;
        text: string;
        Element: "a" | "button";
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("./components/Pagination/PaginationNext.vue").PaginationNextProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    label: string;
    text: string;
    Element: "a" | "button";
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    };
});
export declare const PaginationEllipsis: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("./components/Pagination/PaginationEllipsis.vue").PaginationEllipsisProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        label: string;
    }, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("./components/Pagination/PaginationEllipsis.vue").PaginationEllipsisProps> & Readonly<{}>, {}, {}, {}, {}, {
        label: string;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("./components/Pagination/PaginationEllipsis.vue").PaginationEllipsisProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    label: string;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    };
});
export declare const PaginationPageSize: import("vue").DefineComponent<import("./components/Pagination/PaginationPageSize.vue").PaginationPageSizeProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    change: (value: number) => any;
}, string, import("vue").PublicProps, Readonly<import("./components/Pagination/PaginationPageSize.vue").PaginationPageSizeProps> & Readonly<{
    onChange?: ((value: number) => any) | undefined;
}>, {
    mode: import("./index.ts").PickerMode;
    size: import("./index.ts").ComponentSize;
    label: string;
    options: readonly number[];
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export declare const PaginationSummary: import("vue").DefineComponent<import("./components/Pagination/PaginationSummary.vue").PaginationSummaryProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("./components/Pagination/PaginationSummary.vue").PaginationSummaryProps> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export declare const Card: import("vue").DefineSetupFnComponent<Record<string, any>, {}, {}, Record<string, any> & {}, import("vue").PublicProps> & (new () => {
    $slots: {
        default?: (props: {}) => any;
    };
});
export declare const Checkbox: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("./components/Checkbox/Checkbox.vue").CheckboxProps & {
        modelValue?: boolean | unknown[];
    }> & Readonly<{
        "onUpdate:modelValue"?: ((value: boolean | unknown[] | undefined) => any) | undefined;
    }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        "update:modelValue": (value: boolean | unknown[] | undefined) => any;
    }, import("vue").PublicProps, {
        maxWidth: string;
    }, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("./components/Checkbox/Checkbox.vue").CheckboxProps & {
        modelValue?: boolean | unknown[];
    }> & Readonly<{
        "onUpdate:modelValue"?: ((value: boolean | unknown[] | undefined) => any) | undefined;
    }>, {}, {}, {}, {}, {
        maxWidth: string;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("./components/Checkbox/Checkbox.vue").CheckboxProps & {
    modelValue?: boolean | unknown[];
}> & Readonly<{
    "onUpdate:modelValue"?: ((value: boolean | unknown[] | undefined) => any) | undefined;
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: boolean | unknown[] | undefined) => any;
}, string, {
    maxWidth: string;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    };
});
export declare const RadioGroup: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("./components/RadioGroup/RadioGroup.vue").RadioGroupProps & {
        modelValue?: import("./index.ts").RadioGroupValue | null;
    }> & Readonly<{
        "onUpdate:modelValue"?: ((value: import("./index.ts").RadioGroupValue | null) => any) | undefined;
    }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        "update:modelValue": (value: import("./index.ts").RadioGroupValue | null) => any;
    }, import("vue").PublicProps, {
        mode: import("./index.ts").RadioGroupMode;
        stretched: boolean;
        orientation: import("./index.ts").RadioGroupOrientation;
    }, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("./components/RadioGroup/RadioGroup.vue").RadioGroupProps & {
        modelValue?: import("./index.ts").RadioGroupValue | null;
    }> & Readonly<{
        "onUpdate:modelValue"?: ((value: import("./index.ts").RadioGroupValue | null) => any) | undefined;
    }>, {}, {}, {}, {}, {
        mode: import("./index.ts").RadioGroupMode;
        stretched: boolean;
        orientation: import("./index.ts").RadioGroupOrientation;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("./components/RadioGroup/RadioGroup.vue").RadioGroupProps & {
    modelValue?: import("./index.ts").RadioGroupValue | null;
}> & Readonly<{
    "onUpdate:modelValue"?: ((value: import("./index.ts").RadioGroupValue | null) => any) | undefined;
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: import("./index.ts").RadioGroupValue | null) => any;
}, string, {
    mode: import("./index.ts").RadioGroupMode;
    stretched: boolean;
    orientation: import("./index.ts").RadioGroupOrientation;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    };
});
export declare const RadioGroupItem: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("./components/RadioGroup/RadioGroupItem.vue").RadioGroupItemProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {}, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("./components/RadioGroup/RadioGroupItem.vue").RadioGroupItemProps> & Readonly<{}>, {}, {}, {}, {}, {}>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("./components/RadioGroup/RadioGroupItem.vue").RadioGroupItemProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    } & {
        description?: (props: {}) => any;
    };
});
export declare const ScrollArea: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        maxHeight: {
            type: import("vue").PropType<import("./components/ScrollArea/ScrollArea.vue").ScrollAreaProps["maxHeight"]>;
            default: undefined;
        };
        orientation: {
            type: import("vue").PropType<import("./index.ts").ScrollAreaOrientation>;
            default: string;
        };
        keyboardFocusable: {
            type: BooleanConstructor;
            default: boolean;
        };
        stableScrollbar: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        maxHeight: import("csstype").Property.MaxHeight<string | number> | undefined;
        orientation: import("./index.ts").ScrollAreaOrientation;
        keyboardFocusable: boolean;
        stableScrollbar: boolean;
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        maxHeight: {
            type: import("vue").PropType<import("./components/ScrollArea/ScrollArea.vue").ScrollAreaProps["maxHeight"]>;
            default: undefined;
        };
        orientation: {
            type: import("vue").PropType<import("./index.ts").ScrollAreaOrientation>;
            default: string;
        };
        keyboardFocusable: {
            type: BooleanConstructor;
            default: boolean;
        };
        stableScrollbar: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{}>, {}, {}, {}, {}, {
        maxHeight: import("csstype").Property.MaxHeight<string | number> | undefined;
        orientation: import("./index.ts").ScrollAreaOrientation;
        keyboardFocusable: boolean;
        stableScrollbar: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    maxHeight: {
        type: import("vue").PropType<import("./components/ScrollArea/ScrollArea.vue").ScrollAreaProps["maxHeight"]>;
        default: undefined;
    };
    orientation: {
        type: import("vue").PropType<import("./index.ts").ScrollAreaOrientation>;
        default: string;
    };
    keyboardFocusable: {
        type: BooleanConstructor;
        default: boolean;
    };
    stableScrollbar: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    maxHeight: import("csstype").Property.MaxHeight<string | number> | undefined;
    orientation: import("./index.ts").ScrollAreaOrientation;
    keyboardFocusable: boolean;
    stableScrollbar: boolean;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    };
});
export declare const Switch: import("vue").DefineComponent<import("./components/Switch/Switch.vue").SwitchProps & {
    modelValue?: boolean;
}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: boolean) => any;
}, string, import("vue").PublicProps, Readonly<import("./components/Switch/Switch.vue").SwitchProps & {
    modelValue?: boolean;
}> & Readonly<{
    "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
}>, {
    size: "small" | "medium";
    disabled: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export declare const Chip: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("./components/Chip/Chip.vue").ChipProps> & Readonly<{
        onSelect?: ((value: import("./index.ts").ChipValue | undefined) => any) | undefined;
    }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        select: (value: import("./index.ts").ChipValue | undefined) => any;
    }, import("vue").PublicProps, {
        size: import("./index.ts").ChipSize;
    }, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("./components/Chip/Chip.vue").ChipProps> & Readonly<{
        onSelect?: ((value: import("./index.ts").ChipValue | undefined) => any) | undefined;
    }>, {}, {}, {}, {}, {
        size: import("./index.ts").ChipSize;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("./components/Chip/Chip.vue").ChipProps> & Readonly<{
    onSelect?: ((value: import("./index.ts").ChipValue | undefined) => any) | undefined;
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    select: (value: import("./index.ts").ChipValue | undefined) => any;
}, string, {
    size: import("./index.ts").ChipSize;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    };
});
export declare const ChipGroup: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("./components/Chip/ChipGroup.vue").ChipGroupProps & {
        modelValue?: import("./index.ts").ChipValue | import("./index.ts").ChipValue[] | null;
    }> & Readonly<{
        "onUpdate:modelValue"?: ((value: import("./index.ts").ChipValue | import("./index.ts").ChipValue[] | null) => any) | undefined;
    }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        "update:modelValue": (value: import("./index.ts").ChipValue | import("./index.ts").ChipValue[] | null) => any;
    }, import("vue").PublicProps, {
        mode: import("./index.ts").ChipMode;
        size: import("./index.ts").ChipSize;
    }, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("./components/Chip/ChipGroup.vue").ChipGroupProps & {
        modelValue?: import("./index.ts").ChipValue | import("./index.ts").ChipValue[] | null;
    }> & Readonly<{
        "onUpdate:modelValue"?: ((value: import("./index.ts").ChipValue | import("./index.ts").ChipValue[] | null) => any) | undefined;
    }>, {}, {}, {}, {}, {
        mode: import("./index.ts").ChipMode;
        size: import("./index.ts").ChipSize;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("./components/Chip/ChipGroup.vue").ChipGroupProps & {
    modelValue?: import("./index.ts").ChipValue | import("./index.ts").ChipValue[] | null;
}> & Readonly<{
    "onUpdate:modelValue"?: ((value: import("./index.ts").ChipValue | import("./index.ts").ChipValue[] | null) => any) | undefined;
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: import("./index.ts").ChipValue | import("./index.ts").ChipValue[] | null) => any;
}, string, {
    mode: import("./index.ts").ChipMode;
    size: import("./index.ts").ChipSize;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    };
});
export type { RadioGroupMode, RadioGroupOrientation, RadioGroupValue, } from "./components/RadioGroup/radioGroup";
export type { ScrollAreaOrientation } from "./components/ScrollArea/ScrollArea.vue";
export declare const Dot: import("vue").DefineComponent<import("./components/Dot/Dot.vue").DotProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("./components/Dot/Dot.vue").DotProps> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export declare const Gap: import("vue").DefineComponent<import("./components/Gap/Gap.vue").GapProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("./components/Gap/Gap.vue").GapProps> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export declare const Field: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("./components/Field/Field.vue").FieldProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        stretched: boolean;
        orientation: "vertical" | "horizontal" | "responsive";
    }, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("./components/Field/Field.vue").FieldProps> & Readonly<{}>, {}, {}, {}, {}, {
        stretched: boolean;
        orientation: "vertical" | "horizontal" | "responsive";
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("./components/Field/Field.vue").FieldProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    stretched: boolean;
    orientation: "vertical" | "horizontal" | "responsive";
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    };
});
export declare const FieldContent: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("./components/Field/FieldContent.vue").FieldContentProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        align: "start" | "center" | "end";
    }, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("./components/Field/FieldContent.vue").FieldContentProps> & Readonly<{}>, {}, {}, {}, {}, {
        align: "start" | "center" | "end";
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("./components/Field/FieldContent.vue").FieldContentProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    align: "start" | "center" | "end";
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    };
});
export declare const FieldDescription: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("./components/Field/FieldDescription.vue").FieldDescriptionProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {}, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("./components/Field/FieldDescription.vue").FieldDescriptionProps> & Readonly<{}>, {}, {}, {}, {}, {}>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("./components/Field/FieldDescription.vue").FieldDescriptionProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    };
});
export declare const FieldHelper: import("vue").DefineComponent<import("./components/FieldHelper/FieldHelper.vue").FieldHelperProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("./components/FieldHelper/FieldHelper.vue").FieldHelperProps> & Readonly<{}>, {
    gap: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export declare const FieldLabel: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("./components/Field/FieldLabel.vue").FieldLabelProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {}, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("./components/Field/FieldLabel.vue").FieldLabelProps> & Readonly<{}>, {}, {}, {}, {}, {}>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("./components/Field/FieldLabel.vue").FieldLabelProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    };
});
export declare const FieldLegend: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("./components/Field/FieldLegend.vue").FieldLegendProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {}, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("./components/Field/FieldLegend.vue").FieldLegendProps> & Readonly<{}>, {}, {}, {}, {}, {}>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("./components/Field/FieldLegend.vue").FieldLegendProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    };
});
export declare const FieldSeparator: import("vue").DefineComponent<import("./components/Field/FieldSeparator.vue").FieldSeparatorProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("./components/Field/FieldSeparator.vue").FieldSeparatorProps> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export declare const FieldSet: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("./components/Field/FieldSet.vue").FieldSetProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {}, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("./components/Field/FieldSet.vue").FieldSetProps> & Readonly<{}>, {}, {}, {}, {}, {}>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("./components/Field/FieldSet.vue").FieldSetProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    };
});
export declare const FieldTitle: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {}, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, {}>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    };
});
export declare const FormError: import("vue").DefineComponent<import("./components/FormError/FormError.vue").FormErrorProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("./components/FormError/FormError.vue").FormErrorProps> & Readonly<{}>, {
    gap: string;
    textAlign: import("csstype").Property.TextAlign;
    Element: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div" | "a" | "button" | "label";
    typography: import("./components/Text/types.ts").Typography;
    color: "default" | "inherit" | "secondary" | "negative";
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export declare const Input: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("./components/Input/Input.vue").InputProps & {
        modelValue?: any;
    }> & Readonly<{
        "onUpdate:modelValue"?: ((value: any) => any) | undefined;
    }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        "update:modelValue": (value: any) => any;
    }, import("vue").PublicProps, {
        size: import("./index.ts").ComponentSize;
        maxWidth: string;
    }, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("./components/Input/Input.vue").InputProps & {
        modelValue?: any;
    }> & Readonly<{
        "onUpdate:modelValue"?: ((value: any) => any) | undefined;
    }>, {}, {}, {}, {}, {
        size: import("./index.ts").ComponentSize;
        maxWidth: string;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("./components/Input/Input.vue").InputProps & {
    modelValue?: any;
}> & Readonly<{
    "onUpdate:modelValue"?: ((value: any) => any) | undefined;
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: any) => any;
}, string, {
    size: import("./index.ts").ComponentSize;
    maxWidth: string;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        leftAdornment?: (props: {}) => any;
    } & {
        rightAdornment?: (props: {}) => any;
    };
});
export declare const PhoneInput: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<{
        modelValue?: string;
    }> & Readonly<{
        onInput?: ((event: Event) => any) | undefined;
        onBeforeinput?: ((event: InputEvent) => any) | undefined;
        onPaste?: ((event: ClipboardEvent) => any) | undefined;
        "onUpdate:modelValue"?: ((value: string) => any) | undefined;
    }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        input: (event: Event) => any;
        beforeinput: (event: InputEvent) => any;
        paste: (event: ClipboardEvent) => any;
        "update:modelValue": (value: string) => any;
    }, import("vue").PublicProps, {}, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<{
        modelValue?: string;
    }> & Readonly<{
        onInput?: ((event: Event) => any) | undefined;
        onBeforeinput?: ((event: InputEvent) => any) | undefined;
        onPaste?: ((event: ClipboardEvent) => any) | undefined;
        "onUpdate:modelValue"?: ((value: string) => any) | undefined;
    }>, {}, {}, {}, {}, {}>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<{
    modelValue?: string;
}> & Readonly<{
    onInput?: ((event: Event) => any) | undefined;
    onBeforeinput?: ((event: InputEvent) => any) | undefined;
    onPaste?: ((event: ClipboardEvent) => any) | undefined;
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    input: (event: Event) => any;
    beforeinput: (event: InputEvent) => any;
    paste: (event: ClipboardEvent) => any;
    "update:modelValue": (value: string) => any;
}, string, {}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        leftAdornment?: (props: {}) => any;
    } & {
        rightAdornment?: (props: {}) => any;
    };
});
export { canApplyPhoneInput, formatPhoneInput, formatPhoneInputWithCaret, isAllowedPhoneInput, isValidPhone, parsePhone, sanitizePhoneInput, type PhoneInputChange, type PhoneInputFormatResult, type PhoneValue, } from "./components/PhoneInput/phone";
export declare const FileInput: import("vue").DefineComponent<import("./components/FileInput/FileInput.vue").FileInputProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    change: (files: File[]) => any;
}, string, import("vue").PublicProps, Readonly<import("./components/FileInput/FileInput.vue").FileInputProps> & Readonly<{
    onChange?: ((files: File[]) => any) | undefined;
}>, {
    size: import("./index.ts").ComponentSize;
    label: string;
    disabled: boolean;
    multiple: boolean;
    accept: string;
    capture: "user" | "environment";
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export declare const FileUpload: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("./components/FileUpload/FileUpload.vue").FileUploadProps> & Readonly<{
        onChange?: ((files: File[]) => any) | undefined;
        "onUpdate:modelValue"?: ((files: File[]) => any) | undefined;
        onAccept?: ((files: File[]) => any) | undefined;
        onReject?: ((rejections: import("./index.ts").FileUploadRejection[]) => any) | undefined;
    }>, {
        clear: () => void;
        open: () => void;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        change: (files: File[]) => any;
        "update:modelValue": (files: File[]) => any;
        accept: (files: File[]) => any;
        reject: (rejections: import("./index.ts").FileUploadRejection[]) => any;
    }, import("vue").PublicProps, {
        size: import("./index.ts").FileUploadSize;
        invalid: boolean;
        name: string;
        stretched: boolean;
        disabled: boolean;
        required: boolean;
        multiple: boolean;
        defaultValue: File[];
        modelValue: File[];
        accept: string;
        capture: "user" | "environment";
        maxFiles: number;
        maxSize: number;
        validate: import("./index.ts").FileUploadValidator;
    }, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("./components/FileUpload/FileUpload.vue").FileUploadProps> & Readonly<{
        onChange?: ((files: File[]) => any) | undefined;
        "onUpdate:modelValue"?: ((files: File[]) => any) | undefined;
        onAccept?: ((files: File[]) => any) | undefined;
        onReject?: ((rejections: import("./index.ts").FileUploadRejection[]) => any) | undefined;
    }>, {
        clear: () => void;
        open: () => void;
    }, {}, {}, {}, {
        size: import("./index.ts").FileUploadSize;
        invalid: boolean;
        name: string;
        stretched: boolean;
        disabled: boolean;
        required: boolean;
        multiple: boolean;
        defaultValue: File[];
        modelValue: File[];
        accept: string;
        capture: "user" | "environment";
        maxFiles: number;
        maxSize: number;
        validate: import("./index.ts").FileUploadValidator;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("./components/FileUpload/FileUpload.vue").FileUploadProps> & Readonly<{
    onChange?: ((files: File[]) => any) | undefined;
    "onUpdate:modelValue"?: ((files: File[]) => any) | undefined;
    onAccept?: ((files: File[]) => any) | undefined;
    onReject?: ((rejections: import("./index.ts").FileUploadRejection[]) => any) | undefined;
}>, {
    clear: () => void;
    open: () => void;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    change: (files: File[]) => any;
    "update:modelValue": (files: File[]) => any;
    accept: (files: File[]) => any;
    reject: (rejections: import("./index.ts").FileUploadRejection[]) => any;
}, string, {
    size: import("./index.ts").FileUploadSize;
    invalid: boolean;
    name: string;
    stretched: boolean;
    disabled: boolean;
    required: boolean;
    multiple: boolean;
    defaultValue: File[];
    modelValue: File[];
    accept: string;
    capture: "user" | "environment";
    maxFiles: number;
    maxSize: number;
    validate: import("./index.ts").FileUploadValidator;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    };
});
export declare const FileUploadClear: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("./components/FileUpload/FileUploadClear.vue").FileUploadClearProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        label: string;
    }, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("./components/FileUpload/FileUploadClear.vue").FileUploadClearProps> & Readonly<{}>, {}, {}, {}, {}, {
        label: string;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("./components/FileUpload/FileUploadClear.vue").FileUploadClearProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    label: string;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    };
});
export declare const FileUploadDropzone: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("./components/FileUpload/FileUploadDropzone.vue").FileUploadDropzoneProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        title: string;
        description: string;
        triggerLabel: string;
    }, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("./components/FileUpload/FileUploadDropzone.vue").FileUploadDropzoneProps> & Readonly<{}>, {}, {}, {}, {}, {
        title: string;
        description: string;
        triggerLabel: string;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("./components/FileUpload/FileUploadDropzone.vue").FileUploadDropzoneProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    title: string;
    description: string;
    triggerLabel: string;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    };
});
export declare const FileUploadItem: import("vue").DefineComponent<import("./components/FileUpload/FileUploadItem.vue").FileUploadItemProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("./components/FileUpload/FileUploadItem.vue").FileUploadItemProps> & Readonly<{}>, {
    progress: number;
    error: string;
    disabled: boolean;
    state: import("./index.ts").AttachmentState;
    removable: boolean;
    onRetry: () => void;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export declare const FileUploadList: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("./components/FileUpload/FileUploadList.vue").FileUploadListProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        orientation: import("./index.ts").FileUploadListOrientation;
    }, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("./components/FileUpload/FileUploadList.vue").FileUploadListProps> & Readonly<{}>, {}, {}, {}, {}, {
        orientation: import("./index.ts").FileUploadListOrientation;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("./components/FileUpload/FileUploadList.vue").FileUploadListProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    orientation: import("./index.ts").FileUploadListOrientation;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {
            files: File[];
        }) => any;
    };
});
export declare const FileUploadTrigger: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("./components/FileUpload/FileUploadTrigger.vue").FileUploadTriggerProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        mode: "default" | "contrast" | "ghost" | "outline" | "negative" | "accent";
        size: import("./index.ts").ComponentSize;
        label: string;
        stretched: boolean;
    }, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("./components/FileUpload/FileUploadTrigger.vue").FileUploadTriggerProps> & Readonly<{}>, {}, {}, {}, {}, {
        mode: "default" | "contrast" | "ghost" | "outline" | "negative" | "accent";
        size: import("./index.ts").ComponentSize;
        label: string;
        stretched: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("./components/FileUpload/FileUploadTrigger.vue").FileUploadTriggerProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    mode: "default" | "contrast" | "ghost" | "outline" | "negative" | "accent";
    size: import("./index.ts").ComponentSize;
    label: string;
    stretched: boolean;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    };
});
export declare const Item: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("./components/Item/Item.vue").ItemProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        mode: import("./components/Item/Item.vue").ItemMode;
        size: import("./components/Item/Item.vue").ItemSize;
        stretched: boolean;
        interactive: boolean;
    }, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("./components/Item/Item.vue").ItemProps> & Readonly<{}>, {}, {}, {}, {}, {
        mode: import("./components/Item/Item.vue").ItemMode;
        size: import("./components/Item/Item.vue").ItemSize;
        stretched: boolean;
        interactive: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("./components/Item/Item.vue").ItemProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    mode: import("./components/Item/Item.vue").ItemMode;
    size: import("./components/Item/Item.vue").ItemSize;
    stretched: boolean;
    interactive: boolean;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    };
});
export declare const ItemActions: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {}, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, {}>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    };
});
export declare const ItemContent: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {}, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, {}>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    };
});
export declare const ItemDescription: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("./components/Item/ItemDescription.vue").ItemDescriptionProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        Element: "a" | "button" | "div" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "label" | "p" | "span";
        ellipsis: boolean;
    }, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("./components/Item/ItemDescription.vue").ItemDescriptionProps> & Readonly<{}>, {}, {}, {}, {}, {
        Element: "a" | "button" | "div" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "label" | "p" | "span";
        ellipsis: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("./components/Item/ItemDescription.vue").ItemDescriptionProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    Element: "a" | "button" | "div" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "label" | "p" | "span";
    ellipsis: boolean;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    };
});
export declare const ItemGroup: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("./components/Item/ItemGroup.vue").ItemGroupProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        stretched: boolean;
        separated: boolean;
    }, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("./components/Item/ItemGroup.vue").ItemGroupProps> & Readonly<{}>, {}, {}, {}, {}, {
        stretched: boolean;
        separated: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("./components/Item/ItemGroup.vue").ItemGroupProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    stretched: boolean;
    separated: boolean;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    };
});
export declare const ItemMedia: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("./components/Item/ItemMedia.vue").ItemMediaProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {}, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("./components/Item/ItemMedia.vue").ItemMediaProps> & Readonly<{}>, {}, {}, {}, {}, {}>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("./components/Item/ItemMedia.vue").ItemMediaProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    };
});
export declare const ItemSeparator: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export declare const ItemTitle: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("./components/Item/ItemTitle.vue").ItemTitleProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        Element: "a" | "button" | "div" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "label" | "p" | "span";
        ellipsis: boolean;
    }, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("./components/Item/ItemTitle.vue").ItemTitleProps> & Readonly<{}>, {}, {}, {}, {}, {
        Element: "a" | "button" | "div" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "label" | "p" | "span";
        ellipsis: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("./components/Item/ItemTitle.vue").ItemTitleProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    Element: "a" | "button" | "div" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "label" | "p" | "span";
    ellipsis: boolean;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    };
});
export declare const PincodeInput: import("vue").DefineComponent<import("./components/PincodeInput/PincodeInput.vue").PincodeInputProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    complete: (value: string) => any;
    "update:modelValue": (value: string) => any;
}, string, import("vue").PublicProps, Readonly<import("./components/PincodeInput/PincodeInput.vue").PincodeInputProps> & Readonly<{
    onComplete?: ((value: string) => any) | undefined;
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
}>, {
    length: number;
    stretched: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export declare const Link: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("./components/Link/Link.vue").LinkProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        mode: "inherit" | "accent";
        Element: "a" | "button" | "span";
        typography: import("./components/Text/types.ts").Typography;
        inline: boolean;
    }, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("./components/Link/Link.vue").LinkProps> & Readonly<{}>, {}, {}, {}, {}, {
        mode: "inherit" | "accent";
        Element: "a" | "button" | "span";
        typography: import("./components/Text/types.ts").Typography;
        inline: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("./components/Link/Link.vue").LinkProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    mode: "inherit" | "accent";
    Element: "a" | "button" | "span";
    typography: import("./components/Text/types.ts").Typography;
    inline: boolean;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    } & {
        iconLeft?: (props: {}) => any;
    } & {
        default?: (props: {}) => any;
    } & {
        iconRight?: (props: {}) => any;
    };
});
export declare const Row: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("./components/Row/Row.vue").RowProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {}, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("./components/Row/Row.vue").RowProps> & Readonly<{}>, {}, {}, {}, {}, {}>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("./components/Row/Row.vue").RowProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    };
});
export declare const Sidebar: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("./components/Sidebar/Sidebar.vue").SidebarProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        mode: "default" | "floating";
        width: number;
        maxWidth: string;
        padding: import("./types/index.ts").Padding;
        minWidth: string;
        compactWidth: number;
    }, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("./components/Sidebar/Sidebar.vue").SidebarProps> & Readonly<{}>, {}, {}, {}, {}, {
        mode: "default" | "floating";
        width: number;
        maxWidth: string;
        padding: import("./types/index.ts").Padding;
        minWidth: string;
        compactWidth: number;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("./components/Sidebar/Sidebar.vue").SidebarProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    mode: "default" | "floating";
    width: number;
    maxWidth: string;
    padding: import("./types/index.ts").Padding;
    minWidth: string;
    compactWidth: number;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    };
});
export declare const Stack: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("./components/Stack/Stack.vue").StackProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {}, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("./components/Stack/Stack.vue").StackProps> & Readonly<{}>, {}, {}, {}, {}, {}>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("./components/Stack/Stack.vue").StackProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    };
});
export declare const Tab: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("./components/Tabs/Tab.vue").TabProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {}, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("./components/Tabs/Tab.vue").TabProps> & Readonly<{}>, {}, {}, {}, {}, {}>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("./components/Tabs/Tab.vue").TabProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    };
});
export declare const Tabs: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("./components/Tabs/Tabs.vue").TabsProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        size: import("./index.ts").ComponentSize;
    }, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("./components/Tabs/Tabs.vue").TabsProps> & Readonly<{}>, {}, {}, {}, {}, {
        size: import("./index.ts").ComponentSize;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("./components/Tabs/Tabs.vue").TabsProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    size: import("./index.ts").ComponentSize;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    };
});
export declare const Table: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        border: {
            type: BooleanConstructor;
            default: boolean;
        };
        layout: {
            type: import("vue").PropType<import("./components/Table/Table.vue").TableProps["layout"]>;
            default: string;
        };
        minWidth: {
            type: import("vue").PropType<import("./components/Table/Table.vue").TableProps["minWidth"]>;
            default: undefined;
        };
        maxHeight: {
            type: import("vue").PropType<import("./components/Table/Table.vue").TableProps["maxHeight"]>;
            default: undefined;
        };
        stickyHeader: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        maxHeight: import("csstype").Property.MaxHeight<string | number> | undefined;
        minWidth: import("csstype").Property.MinWidth<string | number> | undefined;
        border: boolean;
        layout: "fixed" | "auto" | undefined;
        stickyHeader: boolean;
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        border: {
            type: BooleanConstructor;
            default: boolean;
        };
        layout: {
            type: import("vue").PropType<import("./components/Table/Table.vue").TableProps["layout"]>;
            default: string;
        };
        minWidth: {
            type: import("vue").PropType<import("./components/Table/Table.vue").TableProps["minWidth"]>;
            default: undefined;
        };
        maxHeight: {
            type: import("vue").PropType<import("./components/Table/Table.vue").TableProps["maxHeight"]>;
            default: undefined;
        };
        stickyHeader: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{}>, {}, {}, {}, {}, {
        maxHeight: import("csstype").Property.MaxHeight<string | number> | undefined;
        minWidth: import("csstype").Property.MinWidth<string | number> | undefined;
        border: boolean;
        layout: "fixed" | "auto" | undefined;
        stickyHeader: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    border: {
        type: BooleanConstructor;
        default: boolean;
    };
    layout: {
        type: import("vue").PropType<import("./components/Table/Table.vue").TableProps["layout"]>;
        default: string;
    };
    minWidth: {
        type: import("vue").PropType<import("./components/Table/Table.vue").TableProps["minWidth"]>;
        default: undefined;
    };
    maxHeight: {
        type: import("vue").PropType<import("./components/Table/Table.vue").TableProps["maxHeight"]>;
        default: undefined;
    };
    stickyHeader: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    maxHeight: import("csstype").Property.MaxHeight<string | number> | undefined;
    minWidth: import("csstype").Property.MinWidth<string | number> | undefined;
    border: boolean;
    layout: "fixed" | "auto" | undefined;
    stickyHeader: boolean;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    };
});
export declare const TableBody: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {}, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, {}>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    };
});
export declare const TableCaption: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {}, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, {}>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    };
});
export declare const TableCell: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        width: {
            type: import("vue").PropType<import("./components/Table/TableCell.vue").TableColumnSize>;
            required: false;
        };
        minWidth: {
            type: import("vue").PropType<import("./components/Table/TableCell.vue").TableColumnSize>;
            required: false;
        };
        maxWidth: {
            type: import("vue").PropType<import("./components/Table/TableCell.vue").TableColumnSize>;
            required: false;
        };
    }>> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {}, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        width: {
            type: import("vue").PropType<import("./components/Table/TableCell.vue").TableColumnSize>;
            required: false;
        };
        minWidth: {
            type: import("vue").PropType<import("./components/Table/TableCell.vue").TableColumnSize>;
            required: false;
        };
        maxWidth: {
            type: import("vue").PropType<import("./components/Table/TableCell.vue").TableColumnSize>;
            required: false;
        };
    }>> & Readonly<{}>, {}, {}, {}, {}, {}>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    width: {
        type: import("vue").PropType<import("./components/Table/TableCell.vue").TableColumnSize>;
        required: false;
    };
    minWidth: {
        type: import("vue").PropType<import("./components/Table/TableCell.vue").TableColumnSize>;
        required: false;
    };
    maxWidth: {
        type: import("vue").PropType<import("./components/Table/TableCell.vue").TableColumnSize>;
        required: false;
    };
}>> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    };
});
export declare const TableFooter: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {}, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, {}>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    };
});
export declare const TableHead: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        width: {
            type: import("vue").PropType<import("./components/Table/TableHead.vue").TableColumnSize>;
            required: false;
        };
        minWidth: {
            type: import("vue").PropType<import("./components/Table/TableHead.vue").TableColumnSize>;
            required: false;
        };
        maxWidth: {
            type: import("vue").PropType<import("./components/Table/TableHead.vue").TableColumnSize>;
            required: false;
        };
    }>> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {}, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        width: {
            type: import("vue").PropType<import("./components/Table/TableHead.vue").TableColumnSize>;
            required: false;
        };
        minWidth: {
            type: import("vue").PropType<import("./components/Table/TableHead.vue").TableColumnSize>;
            required: false;
        };
        maxWidth: {
            type: import("vue").PropType<import("./components/Table/TableHead.vue").TableColumnSize>;
            required: false;
        };
    }>> & Readonly<{}>, {}, {}, {}, {}, {}>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    width: {
        type: import("vue").PropType<import("./components/Table/TableHead.vue").TableColumnSize>;
        required: false;
    };
    minWidth: {
        type: import("vue").PropType<import("./components/Table/TableHead.vue").TableColumnSize>;
        required: false;
    };
    maxWidth: {
        type: import("vue").PropType<import("./components/Table/TableHead.vue").TableColumnSize>;
        required: false;
    };
}>> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    };
});
export declare const TableHeader: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {}, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, {}>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    };
});
export declare const TableRow: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {}, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, {}>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    };
});
export declare const Text: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("./components/Text/types.ts").TextProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        textAlign: import("csstype").Property.TextAlign;
        Element: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div" | "a" | "button" | "label";
        color: "default" | "inherit" | "secondary" | "negative";
    }, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("./components/Text/types.ts").TextProps> & Readonly<{}>, {}, {}, {}, {}, {
        textAlign: import("csstype").Property.TextAlign;
        Element: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div" | "a" | "button" | "label";
        color: "default" | "inherit" | "secondary" | "negative";
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("./components/Text/types.ts").TextProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    textAlign: import("csstype").Property.TextAlign;
    Element: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div" | "a" | "button" | "label";
    color: "default" | "inherit" | "secondary" | "negative";
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    };
});
export declare const Separator: import("vue").DefineComponent<import("./components/Separator/Separator.vue").SeparatorProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("./components/Separator/Separator.vue").SeparatorProps> & Readonly<{}>, {
    stretched: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export declare const Tooltip: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("./components/Tooltip/Tooltip.vue").TooltipProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        mode: "default" | "contrast";
        stretched: boolean;
        delay: string | number | {
            show: number;
            hide: number;
        };
    }, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("./components/Tooltip/Tooltip.vue").TooltipProps> & Readonly<{}>, {}, {}, {}, {}, {
        mode: "default" | "contrast";
        stretched: boolean;
        delay: string | number | {
            show: number;
            hide: number;
        };
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("./components/Tooltip/Tooltip.vue").TooltipProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    mode: "default" | "contrast";
    stretched: boolean;
    delay: string | number | {
        show: number;
        hide: number;
    };
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    } & {
        popper?: (props: {}) => any;
    };
});
export declare const Badge: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("./components/Badge/Badge.vue").BadgeProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        mode: import("./components/Badge/Badge.vue").BadgeMode;
        size: import("./components/Badge/Badge.vue").BadgeSize;
        Element: "div" | "button" | "span";
    }, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("./components/Badge/Badge.vue").BadgeProps> & Readonly<{}>, {}, {}, {}, {}, {
        mode: import("./components/Badge/Badge.vue").BadgeMode;
        size: import("./components/Badge/Badge.vue").BadgeSize;
        Element: "div" | "button" | "span";
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("./components/Badge/Badge.vue").BadgeProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    mode: import("./components/Badge/Badge.vue").BadgeMode;
    size: import("./components/Badge/Badge.vue").BadgeSize;
    Element: "div" | "button" | "span";
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    } & {
        right?: (props: {}) => any;
    };
});
export declare const SidebarItem: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("./components/Sidebar/SidebarItem.vue").SidebarItemProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {}, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("./components/Sidebar/SidebarItem.vue").SidebarItemProps> & Readonly<{}>, {}, {}, {}, {}, {}>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("./components/Sidebar/SidebarItem.vue").SidebarItemProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        left?: (props: {}) => any;
    } & {
        default?: (props: {}) => any;
    } & {
        right?: (props: {}) => any;
    } & {
        compact?: (props: {}) => any;
    } & {
        left?: (props: {}) => any;
    } & {
        'compact-indicator'?: (props: {}) => any;
    } & {
        tooltip?: (props: {}) => any;
    } & {
        default?: (props: {}) => any;
    };
});
export declare const SidebarList: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("./components/Sidebar/SidebarList.vue").SidebarListProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        scrollable: boolean;
    }, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("./components/Sidebar/SidebarList.vue").SidebarListProps> & Readonly<{}>, {}, {}, {}, {}, {
        scrollable: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("./components/Sidebar/SidebarList.vue").SidebarListProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    scrollable: boolean;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    };
});
export declare const SidebarGroup: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("./components/Sidebar/SidebarGroup.vue").SidebarGroupProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {}, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("./components/Sidebar/SidebarGroup.vue").SidebarGroupProps> & Readonly<{}>, {}, {}, {}, {}, {}>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("./components/Sidebar/SidebarGroup.vue").SidebarGroupProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    };
});
export declare const SidebarCollapsible: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("./components/Sidebar/SidebarCollapsible.vue").SidebarCollapsibleProps> & Readonly<{
        onChange?: ((opened: boolean) => any) | undefined;
        "onUpdate:modelValue"?: ((opened: boolean) => any) | undefined;
    }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        change: (opened: boolean) => any;
        "update:modelValue": (opened: boolean) => any;
    }, import("vue").PublicProps, {
        disabled: boolean;
        modelValue: boolean;
        defaultOpened: boolean;
        selected: boolean;
    }, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("./components/Sidebar/SidebarCollapsible.vue").SidebarCollapsibleProps> & Readonly<{
        onChange?: ((opened: boolean) => any) | undefined;
        "onUpdate:modelValue"?: ((opened: boolean) => any) | undefined;
    }>, {}, {}, {}, {}, {
        disabled: boolean;
        modelValue: boolean;
        defaultOpened: boolean;
        selected: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("./components/Sidebar/SidebarCollapsible.vue").SidebarCollapsibleProps> & Readonly<{
    onChange?: ((opened: boolean) => any) | undefined;
    "onUpdate:modelValue"?: ((opened: boolean) => any) | undefined;
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    change: (opened: boolean) => any;
    "update:modelValue": (opened: boolean) => any;
}, string, {
    disabled: boolean;
    modelValue: boolean;
    defaultOpened: boolean;
    selected: boolean;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        icon?: (props: {}) => any;
    } & {
        default?: (props: {}) => any;
    } & {
        icon?: (props: {}) => any;
    } & {
        default?: (props: {}) => any;
    };
});
export declare const SidebarSubList: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {}, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, {}>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    };
});
export declare const SidebarSubItem: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("./components/Sidebar/SidebarSubItem.vue").SidebarSubItemProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {}, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("./components/Sidebar/SidebarSubItem.vue").SidebarSubItemProps> & Readonly<{}>, {}, {}, {}, {}, {}>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("./components/Sidebar/SidebarSubItem.vue").SidebarSubItemProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        icon?: (props: {}) => any;
    } & {
        default?: (props: {}) => any;
    };
});
export declare const Modal: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("./components/Modal/Modal.vue").ModalProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        size: "small" | "medium" | "large" | "full";
    }, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("./components/Modal/Modal.vue").ModalProps> & Readonly<{}>, {}, {}, {}, {}, {
        size: "small" | "medium" | "large" | "full";
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("./components/Modal/Modal.vue").ModalProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    size: "small" | "medium" | "large" | "full";
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    } & {
        footer?: (props: {}) => any;
    };
});
export declare const PasswordInput: import("vue").DefineComponent<import("./components/PasswordInput/PasswordInput.vue").PasswordInputProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: string) => any;
}, string, import("vue").PublicProps, Readonly<import("./components/PasswordInput/PasswordInput.vue").PasswordInputProps> & Readonly<{
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
}>, {
    maxWidth: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export declare const PasswordStrengthInput: import("vue").DefineComponent<import("./components/PasswordStrengthInput/PasswordStrengthInput.vue").PasswordStrengthInputProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: string) => any;
}, string, import("vue").PublicProps, Readonly<import("./components/PasswordStrengthInput/PasswordStrengthInput.vue").PasswordStrengthInputProps> & Readonly<{
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
}>, {
    maxWidth: string;
    rules: import("./components/PasswordStrengthInput/PasswordStrengthInput.vue").PasswordStrengthRule[];
    progressSegments: number;
    progressHeight: string;
    progressGap: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export declare const Picker: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("./components/Picker/Picker.vue").PickerProps> & Readonly<{}>, {
        elementRef: import("vue").Ref<HTMLButtonElement | null, HTMLButtonElement | null>;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        mode: import("./index.ts").PickerMode;
        size: import("./index.ts").ComponentSize;
    }, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("./components/Picker/Picker.vue").PickerProps> & Readonly<{}>, {
        elementRef: import("vue").Ref<HTMLButtonElement | null, HTMLButtonElement | null>;
    }, {}, {}, {}, {
        mode: import("./index.ts").PickerMode;
        size: import("./index.ts").ComponentSize;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("./components/Picker/Picker.vue").PickerProps> & Readonly<{}>, {
    elementRef: import("vue").Ref<HTMLButtonElement | null, HTMLButtonElement | null>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    mode: import("./index.ts").PickerMode;
    size: import("./index.ts").ComponentSize;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    } & {
        icon?: (props: {}) => any;
    };
});
export declare const ProgressBar: import("vue").DefineComponent<import("./components/ProgressBar/ProgressBar.vue").ProgressBarProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("./components/ProgressBar/ProgressBar.vue").ProgressBarProps> & Readonly<{}>, {
    progress: number;
    height: string;
    gap: string;
    color: string;
    max: number;
    segments: number;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export declare const Dropdown: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("./components/Dropdown/Dropdown.vue").DropdownProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        stretched: boolean;
        contentWidth: import("./index.ts").DropdownContentWidth;
        contentMaxWidth: string;
        contentPadding: "none" | "default" | "comfortable";
    }, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("./components/Dropdown/Dropdown.vue").DropdownProps> & Readonly<{}>, {}, {}, {}, {}, {
        stretched: boolean;
        contentWidth: import("./index.ts").DropdownContentWidth;
        contentMaxWidth: string;
        contentPadding: "none" | "default" | "comfortable";
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("./components/Dropdown/Dropdown.vue").DropdownProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    stretched: boolean;
    contentWidth: import("./index.ts").DropdownContentWidth;
    contentMaxWidth: string;
    contentPadding: "none" | "default" | "comfortable";
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    } & {
        popper?: (props: {}) => any;
    };
});
export type { DropdownContentWidth } from "./components/Dropdown/Dropdown.vue";
export declare const DropdownGroup: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {}, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, {}>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    };
});
/** @deprecated Use DropdownGroup. */
export declare const DropdownList: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {}, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, {}>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    };
});
export declare const DropdownLabel: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {}, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, {}>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    };
});
export declare const DropdownItem: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("./components/BaseMenu/BaseMenuItem.vue").BaseMenuItemProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {}, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("./components/BaseMenu/BaseMenuItem.vue").BaseMenuItemProps> & Readonly<{}>, {}, {}, {}, {}, {}>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("./components/BaseMenu/BaseMenuItem.vue").BaseMenuItemProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    } & {
        trailing?: (props: {}) => any;
    };
});
export declare const DropdownCheckboxItem: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("./components/BaseMenu/BaseMenuCheckboxItem.vue").BaseMenuCheckboxItemProps & {
        modelValue?: boolean;
    }> & Readonly<{
        "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
    }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        "update:modelValue": (value: boolean) => any;
    }, import("vue").PublicProps, {}, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("./components/BaseMenu/BaseMenuCheckboxItem.vue").BaseMenuCheckboxItemProps & {
        modelValue?: boolean;
    }> & Readonly<{
        "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
    }>, {}, {}, {}, {}, {}>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("./components/BaseMenu/BaseMenuCheckboxItem.vue").BaseMenuCheckboxItemProps & {
    modelValue?: boolean;
}> & Readonly<{
    "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: boolean) => any;
}, string, {}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    } & {
        indicator?: (props: {
            checked: boolean;
        }) => any;
    };
});
export declare const DropdownRadioGroup: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("./components/BaseMenu/BaseMenuRadioGroup.vue").BaseMenuRadioGroupProps & {
        modelValue?: import("./components/BaseMenu/baseMenuRadioGroup.ts").BaseMenuRadioValue | null;
    }> & Readonly<{
        "onUpdate:modelValue"?: ((value: import("./components/BaseMenu/baseMenuRadioGroup.ts").BaseMenuRadioValue | null) => any) | undefined;
    }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        "update:modelValue": (value: import("./components/BaseMenu/baseMenuRadioGroup.ts").BaseMenuRadioValue | null) => any;
    }, import("vue").PublicProps, {}, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("./components/BaseMenu/BaseMenuRadioGroup.vue").BaseMenuRadioGroupProps & {
        modelValue?: import("./components/BaseMenu/baseMenuRadioGroup.ts").BaseMenuRadioValue | null;
    }> & Readonly<{
        "onUpdate:modelValue"?: ((value: import("./components/BaseMenu/baseMenuRadioGroup.ts").BaseMenuRadioValue | null) => any) | undefined;
    }>, {}, {}, {}, {}, {}>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("./components/BaseMenu/BaseMenuRadioGroup.vue").BaseMenuRadioGroupProps & {
    modelValue?: import("./components/BaseMenu/baseMenuRadioGroup.ts").BaseMenuRadioValue | null;
}> & Readonly<{
    "onUpdate:modelValue"?: ((value: import("./components/BaseMenu/baseMenuRadioGroup.ts").BaseMenuRadioValue | null) => any) | undefined;
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: import("./components/BaseMenu/baseMenuRadioGroup.ts").BaseMenuRadioValue | null) => any;
}, string, {}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    };
});
export declare const DropdownRadioItem: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("./components/BaseMenu/BaseMenuRadioItem.vue").BaseMenuRadioItemProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {}, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("./components/BaseMenu/BaseMenuRadioItem.vue").BaseMenuRadioItemProps> & Readonly<{}>, {}, {}, {}, {}, {}>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("./components/BaseMenu/BaseMenuRadioItem.vue").BaseMenuRadioItemProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    } & {
        indicator?: (props: {
            checked: boolean;
        }) => any;
    };
});
export declare const DropdownSeparator: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export declare const DropdownSub: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("./components/Dropdown/DropdownSub.vue").DropdownSubProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {}, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("./components/Dropdown/DropdownSub.vue").DropdownSubProps> & Readonly<{}>, {}, {}, {}, {}, {}>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("./components/Dropdown/DropdownSub.vue").DropdownSubProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    } & {
        popper?: (props: {}) => any;
    };
});
export declare const DropdownSubTrigger: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("./components/Dropdown/DropdownSubTrigger.vue").DropdownSubTriggerProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {}, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("./components/Dropdown/DropdownSubTrigger.vue").DropdownSubTriggerProps> & Readonly<{}>, {}, {}, {}, {}, {}>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("./components/Dropdown/DropdownSubTrigger.vue").DropdownSubTriggerProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    };
});
export declare const Filters: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("./components/Filters/Filters.vue").FiltersProps & {
        modelValue?: import("./index.ts").ActiveFilter[];
    }> & Readonly<{
        onClear?: (() => any) | undefined;
        onAdd?: ((filter: import("./index.ts").ActiveFilter<unknown>) => any) | undefined;
        "onUpdate:modelValue"?: ((value: import("./index.ts").ActiveFilter<unknown>[]) => any) | undefined;
        onRemove?: ((filter: import("./index.ts").ActiveFilter<unknown>) => any) | undefined;
    }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        clear: () => any;
        add: (filter: import("./index.ts").ActiveFilter<unknown>) => any;
        "update:modelValue": (value: import("./index.ts").ActiveFilter<unknown>[]) => any;
        remove: (filter: import("./index.ts").ActiveFilter<unknown>) => any;
    }, import("vue").PublicProps, {
        mode: import("./index.ts").FilterControlMode;
        size: import("./index.ts").ComponentSize;
        selectedLabel: string;
        addLabel: string;
        clearLabel: string;
        showClear: boolean;
        showMenu: boolean;
        showItems: boolean;
        allowDuplicateFields: boolean;
        itemLayout: import("./index.ts").FilterItemLayout;
    }, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("./components/Filters/Filters.vue").FiltersProps & {
        modelValue?: import("./index.ts").ActiveFilter[];
    }> & Readonly<{
        onClear?: (() => any) | undefined;
        onAdd?: ((filter: import("./index.ts").ActiveFilter<unknown>) => any) | undefined;
        "onUpdate:modelValue"?: ((value: import("./index.ts").ActiveFilter<unknown>[]) => any) | undefined;
        onRemove?: ((filter: import("./index.ts").ActiveFilter<unknown>) => any) | undefined;
    }>, {}, {}, {}, {}, {
        mode: import("./index.ts").FilterControlMode;
        size: import("./index.ts").ComponentSize;
        selectedLabel: string;
        addLabel: string;
        clearLabel: string;
        showClear: boolean;
        showMenu: boolean;
        showItems: boolean;
        allowDuplicateFields: boolean;
        itemLayout: import("./index.ts").FilterItemLayout;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("./components/Filters/Filters.vue").FiltersProps & {
    modelValue?: import("./index.ts").ActiveFilter[];
}> & Readonly<{
    onClear?: (() => any) | undefined;
    onAdd?: ((filter: import("./index.ts").ActiveFilter<unknown>) => any) | undefined;
    "onUpdate:modelValue"?: ((value: import("./index.ts").ActiveFilter<unknown>[]) => any) | undefined;
    onRemove?: ((filter: import("./index.ts").ActiveFilter<unknown>) => any) | undefined;
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    clear: () => any;
    add: (filter: import("./index.ts").ActiveFilter<unknown>) => any;
    "update:modelValue": (value: import("./index.ts").ActiveFilter<unknown>[]) => any;
    remove: (filter: import("./index.ts").ActiveFilter<unknown>) => any;
}, string, {
    mode: import("./index.ts").FilterControlMode;
    size: import("./index.ts").ComponentSize;
    selectedLabel: string;
    addLabel: string;
    clearLabel: string;
    showClear: boolean;
    showMenu: boolean;
    showItems: boolean;
    allowDuplicateFields: boolean;
    itemLayout: import("./index.ts").FilterItemLayout;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        trigger?: (props: {
            label: string;
        }) => any;
    } & {
        field?: (props: {
            field: import("./index.ts").FilterField<unknown>;
        }) => any;
    } & {
        option?: (props: {
            field: import("./index.ts").FilterField<unknown>;
            option: import("./index.ts").FilterOption<unknown>;
        }) => any;
    } & {
        'filter-field'?: (props: {
            field: import("./index.ts").FilterField<unknown>;
        }) => any;
    } & {
        operator?: (props: {
            operator: import("./index.ts").FilterOperator;
            filter: import("./index.ts").ActiveFilter<unknown>;
        }) => any;
    } & {
        value?: (props: {
            filter: import("./index.ts").ActiveFilter<unknown>;
            field: import("./index.ts").FilterField<unknown>;
            label: string;
        }) => any;
    } & {
        'value-menu'?: (props: {
            filter: import("./index.ts").ActiveFilter<unknown>;
            field: import("./index.ts").FilterField<unknown>;
            updateFilter: (patch: Partial<import("./index.ts").ActiveFilter>) => void;
        }) => any;
    } & {
        'clear-icon'?: (props: {}) => any;
    };
});
export declare const FilterMenu: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("./components/Filters/FilterMenu.vue").FilterMenuProps> & Readonly<{
        onSelect?: ((payload: import("./index.ts").FilterMenuSelectPayload<unknown>) => any) | undefined;
    }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        select: (payload: import("./index.ts").FilterMenuSelectPayload<unknown>) => any;
    }, import("vue").PublicProps, {
        mode: import("./index.ts").FilterControlMode;
        size: import("./index.ts").ComponentSize;
        label: string;
        contentWidth: import("./index.ts").DropdownContentWidth;
        closeOnSelect: boolean;
        searchPlaceholder: string;
        optionSearchPlaceholder: string;
        emptyLabel: string;
        searchable: boolean;
    }, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("./components/Filters/FilterMenu.vue").FilterMenuProps> & Readonly<{
        onSelect?: ((payload: import("./index.ts").FilterMenuSelectPayload<unknown>) => any) | undefined;
    }>, {}, {}, {}, {}, {
        mode: import("./index.ts").FilterControlMode;
        size: import("./index.ts").ComponentSize;
        label: string;
        contentWidth: import("./index.ts").DropdownContentWidth;
        closeOnSelect: boolean;
        searchPlaceholder: string;
        optionSearchPlaceholder: string;
        emptyLabel: string;
        searchable: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("./components/Filters/FilterMenu.vue").FilterMenuProps> & Readonly<{
    onSelect?: ((payload: import("./index.ts").FilterMenuSelectPayload<unknown>) => any) | undefined;
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    select: (payload: import("./index.ts").FilterMenuSelectPayload<unknown>) => any;
}, string, {
    mode: import("./index.ts").FilterControlMode;
    size: import("./index.ts").ComponentSize;
    label: string;
    contentWidth: import("./index.ts").DropdownContentWidth;
    closeOnSelect: boolean;
    searchPlaceholder: string;
    optionSearchPlaceholder: string;
    emptyLabel: string;
    searchable: boolean;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        trigger?: (props: {
            label: string;
        }) => any;
    } & {
        field?: (props: {
            field: import("./index.ts").FilterField<unknown>;
        }) => any;
    } & {
        option?: (props: {
            field: import("./index.ts").FilterField<unknown>;
            option: import("./index.ts").FilterOption<unknown>;
        }) => any;
    } & {
        field?: (props: {
            field: import("./index.ts").FilterField<unknown>;
        }) => any;
    };
});
export declare const FilterItem: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("./components/Filters/FilterItem.vue").FilterItemProps & {
        modelValue: import("./index.ts").ActiveFilter;
    }> & Readonly<{
        "onUpdate:modelValue"?: ((value: import("./index.ts").ActiveFilter<unknown>) => any) | undefined;
        onRemove?: ((filter: import("./index.ts").ActiveFilter<unknown>) => any) | undefined;
    }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        "update:modelValue": (value: import("./index.ts").ActiveFilter<unknown>) => any;
        remove: (filter: import("./index.ts").ActiveFilter<unknown>) => any;
    }, import("vue").PublicProps, {
        mode: import("./index.ts").FilterControlMode;
        size: import("./index.ts").ComponentSize;
        contentWidth: import("./index.ts").DropdownContentWidth;
        layout: import("./index.ts").FilterItemLayout;
        selectedLabel: string;
        removeLabel: string;
    }, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("./components/Filters/FilterItem.vue").FilterItemProps & {
        modelValue: import("./index.ts").ActiveFilter;
    }> & Readonly<{
        "onUpdate:modelValue"?: ((value: import("./index.ts").ActiveFilter<unknown>) => any) | undefined;
        onRemove?: ((filter: import("./index.ts").ActiveFilter<unknown>) => any) | undefined;
    }>, {}, {}, {}, {}, {
        mode: import("./index.ts").FilterControlMode;
        size: import("./index.ts").ComponentSize;
        contentWidth: import("./index.ts").DropdownContentWidth;
        layout: import("./index.ts").FilterItemLayout;
        selectedLabel: string;
        removeLabel: string;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("./components/Filters/FilterItem.vue").FilterItemProps & {
    modelValue: import("./index.ts").ActiveFilter;
}> & Readonly<{
    "onUpdate:modelValue"?: ((value: import("./index.ts").ActiveFilter<unknown>) => any) | undefined;
    onRemove?: ((filter: import("./index.ts").ActiveFilter<unknown>) => any) | undefined;
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: import("./index.ts").ActiveFilter<unknown>) => any;
    remove: (filter: import("./index.ts").ActiveFilter<unknown>) => any;
}, string, {
    mode: import("./index.ts").FilterControlMode;
    size: import("./index.ts").ComponentSize;
    contentWidth: import("./index.ts").DropdownContentWidth;
    layout: import("./index.ts").FilterItemLayout;
    selectedLabel: string;
    removeLabel: string;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        field?: (props: {
            field: import("./index.ts").FilterField<unknown>;
        }) => any;
    } & {
        operator?: (props: {
            operator: import("./index.ts").FilterOperator;
            filter: import("./index.ts").ActiveFilter<unknown>;
        }) => any;
    } & {
        value?: (props: {
            filter: import("./index.ts").ActiveFilter<unknown>;
            field: import("./index.ts").FilterField<unknown>;
            label: string;
        }) => any;
    } & {
        'value-menu'?: (props: {
            filter: import("./index.ts").ActiveFilter<unknown>;
            field: import("./index.ts").FilterField<unknown>;
            updateFilter: (patch: Partial<import("./index.ts").ActiveFilter>) => void;
        }) => any;
    };
});
export declare const FilterClear: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("./components/Filters/FilterClear.vue").FilterClearProps> & Readonly<{
        onClear?: (() => any) | undefined;
    }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        clear: () => any;
    }, import("vue").PublicProps, {
        mode: import("./index.ts").FilterControlMode;
        size: import("./index.ts").ComponentSize;
        label: string;
        iconOnly: boolean;
    }, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("./components/Filters/FilterClear.vue").FilterClearProps> & Readonly<{
        onClear?: (() => any) | undefined;
    }>, {}, {}, {}, {}, {
        mode: import("./index.ts").FilterControlMode;
        size: import("./index.ts").ComponentSize;
        label: string;
        iconOnly: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("./components/Filters/FilterClear.vue").FilterClearProps> & Readonly<{
    onClear?: (() => any) | undefined;
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    clear: () => any;
}, string, {
    mode: import("./index.ts").FilterControlMode;
    size: import("./index.ts").ComponentSize;
    label: string;
    iconOnly: boolean;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        icon?: (props: {}) => any;
    } & {
        default?: (props: {}) => any;
    };
});
export declare const VisibilityMenu: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("./components/Filters/VisibilityMenu.vue").VisibilityMenuProps & {
        modelValue?: string[];
    }> & Readonly<{
        onToggle?: ((value: string, visible: boolean) => any) | undefined;
        "onUpdate:modelValue"?: ((value: string[]) => any) | undefined;
    }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        toggle: (value: string, visible: boolean) => any;
        "update:modelValue": (value: string[]) => any;
    }, import("vue").PublicProps, {
        mode: import("./index.ts").FilterControlMode;
        size: import("./index.ts").ComponentSize;
        label: string;
        contentWidth: import("./index.ts").DropdownContentWidth;
        menuLabel: string;
        minVisible: number;
    }, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("./components/Filters/VisibilityMenu.vue").VisibilityMenuProps & {
        modelValue?: string[];
    }> & Readonly<{
        onToggle?: ((value: string, visible: boolean) => any) | undefined;
        "onUpdate:modelValue"?: ((value: string[]) => any) | undefined;
    }>, {}, {}, {}, {}, {
        mode: import("./index.ts").FilterControlMode;
        size: import("./index.ts").ComponentSize;
        label: string;
        contentWidth: import("./index.ts").DropdownContentWidth;
        menuLabel: string;
        minVisible: number;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("./components/Filters/VisibilityMenu.vue").VisibilityMenuProps & {
    modelValue?: string[];
}> & Readonly<{
    onToggle?: ((value: string, visible: boolean) => any) | undefined;
    "onUpdate:modelValue"?: ((value: string[]) => any) | undefined;
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    toggle: (value: string, visible: boolean) => any;
    "update:modelValue": (value: string[]) => any;
}, string, {
    mode: import("./index.ts").FilterControlMode;
    size: import("./index.ts").ComponentSize;
    label: string;
    contentWidth: import("./index.ts").DropdownContentWidth;
    menuLabel: string;
    minVisible: number;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        trigger?: (props: {
            label: string;
        }) => any;
    } & {
        item?: (props: {
            item: import("./index.ts").VisibilityOption;
            visible: boolean;
        }) => any;
    };
});
export declare const Sheet: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("./components/Sheet/Sheet.vue").SheetProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        mode: "default" | "floating";
        rounded: boolean;
        showCloseButton: boolean;
        side: "left" | "right" | "top" | "bottom";
        showOverlay: boolean;
        closeOnOverlayClick: boolean;
        closeOnEscape: boolean;
    }, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("./components/Sheet/Sheet.vue").SheetProps> & Readonly<{}>, {}, {}, {}, {}, {
        mode: "default" | "floating";
        rounded: boolean;
        showCloseButton: boolean;
        side: "left" | "right" | "top" | "bottom";
        showOverlay: boolean;
        closeOnOverlayClick: boolean;
        closeOnEscape: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("./components/Sheet/Sheet.vue").SheetProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    mode: "default" | "floating";
    rounded: boolean;
    showCloseButton: boolean;
    side: "left" | "right" | "top" | "bottom";
    showOverlay: boolean;
    closeOnOverlayClick: boolean;
    closeOnEscape: boolean;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        header?: (props: {}) => any;
    } & {
        actions?: (props: {}) => any;
    } & {
        default?: (props: {}) => any;
    } & {
        footer?: (props: {}) => any;
    };
});
export declare const Skeleton: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("./components/Skeleton/Skeleton.vue").SkeletonProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        width: string;
        height: string;
        Element: "div" | "span";
        animated: boolean;
        radius: string;
    }, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("./components/Skeleton/Skeleton.vue").SkeletonProps> & Readonly<{}>, {}, {}, {}, {}, {
        width: string;
        height: string;
        Element: "div" | "span";
        animated: boolean;
        radius: string;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("./components/Skeleton/Skeleton.vue").SkeletonProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    width: string;
    height: string;
    Element: "div" | "span";
    animated: boolean;
    radius: string;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    };
});
export declare const SkeletonProvider: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("./components/Skeleton/SkeletonProvider.vue").SkeletonProviderProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        loading: boolean;
    }, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("./components/Skeleton/SkeletonProvider.vue").SkeletonProviderProps> & Readonly<{}>, {}, {}, {}, {}, {
        loading: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("./components/Skeleton/SkeletonProvider.vue").SkeletonProviderProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    loading: boolean;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {
            loading: boolean;
        }) => any;
    };
});
export declare const AvatarSkeleton: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("./components/Skeleton/AvatarSkeleton.vue").AvatarSkeletonProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        size: string;
        shape: "square" | "circle";
    }, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("./components/Skeleton/AvatarSkeleton.vue").AvatarSkeletonProps> & Readonly<{}>, {}, {}, {}, {}, {
        size: string;
        shape: "square" | "circle";
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("./components/Skeleton/AvatarSkeleton.vue").AvatarSkeletonProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    size: string;
    shape: "square" | "circle";
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    };
});
export declare const ButtonSkeleton: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("./components/Skeleton/ButtonSkeleton.vue").ButtonSkeletonProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        size: import("./index.ts").ComponentSize;
        width: string;
    }, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("./components/Skeleton/ButtonSkeleton.vue").ButtonSkeletonProps> & Readonly<{}>, {}, {}, {}, {}, {
        size: import("./index.ts").ComponentSize;
        width: string;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("./components/Skeleton/ButtonSkeleton.vue").ButtonSkeletonProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    size: import("./index.ts").ComponentSize;
    width: string;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    };
});
export declare const CardSkeleton: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("./components/Skeleton/CardSkeleton.vue").CardSkeletonProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        width: string;
        borderRadius: import("./types/index.ts").BorderRadius;
        padding: import("./types/index.ts").Padding;
        withAvatar: boolean;
    }, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("./components/Skeleton/CardSkeleton.vue").CardSkeletonProps> & Readonly<{}>, {}, {}, {}, {}, {
        width: string;
        borderRadius: import("./types/index.ts").BorderRadius;
        padding: import("./types/index.ts").Padding;
        withAvatar: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("./components/Skeleton/CardSkeleton.vue").CardSkeletonProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    width: string;
    borderRadius: import("./types/index.ts").BorderRadius;
    padding: import("./types/index.ts").Padding;
    withAvatar: boolean;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    };
});
export declare const FormSkeleton: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("./components/Skeleton/FormSkeleton.vue").FormSkeletonProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        button: boolean;
        fields: number;
    }, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("./components/Skeleton/FormSkeleton.vue").FormSkeletonProps> & Readonly<{}>, {}, {}, {}, {}, {
        button: boolean;
        fields: number;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("./components/Skeleton/FormSkeleton.vue").FormSkeletonProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    button: boolean;
    fields: number;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    };
});
export declare const TextSkeleton: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("./components/Skeleton/TextSkeleton.vue").TextSkeletonProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        width: string | string[];
        typography: import("./components/Text/types.ts").Typography;
        lines: number;
        lastLineWidth: string;
    }, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("./components/Skeleton/TextSkeleton.vue").TextSkeletonProps> & Readonly<{}>, {}, {}, {}, {}, {
        width: string | string[];
        typography: import("./components/Text/types.ts").Typography;
        lines: number;
        lastLineWidth: string;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("./components/Skeleton/TextSkeleton.vue").TextSkeletonProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    width: string | string[];
    typography: import("./components/Text/types.ts").Typography;
    lines: number;
    lastLineWidth: string;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    };
});
export declare const Empty: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {}, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, {}>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    };
});
export declare const EmptyContent: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {}, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, {}>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    };
});
export declare const EmptyDescription: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {}, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, {}>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    };
});
export declare const EmptyHeader: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {}, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, {}>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    };
});
export declare const EmptyMedia: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("./components/Empty/EmptyMedia.vue").EmptyMediaProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        variant: "default" | "icon";
    }, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("./components/Empty/EmptyMedia.vue").EmptyMediaProps> & Readonly<{}>, {}, {}, {}, {}, {
        variant: "default" | "icon";
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("./components/Empty/EmptyMedia.vue").EmptyMediaProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    variant: "default" | "icon";
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    };
});
export declare const EmptyTitle: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {}, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, {}>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    };
});
export declare const Loader: import("vue").DefineComponent<import("./components/Loader/Loader.vue").LoaderProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("./components/Loader/Loader.vue").LoaderProps> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export declare const HoverMenu: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {}, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, {}>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {
            ref: string;
        }) => any;
    } & {
        menu?: (props: {}) => any;
    };
});
export declare const HoverMenuList: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("./components/BaseMenu/BaseMenuGroup.vue").BaseMenuGroupProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        role: "group" | "menu";
    }, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("./components/BaseMenu/BaseMenuGroup.vue").BaseMenuGroupProps> & Readonly<{}>, {}, {}, {}, {}, {
        role: "group" | "menu";
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("./components/BaseMenu/BaseMenuGroup.vue").BaseMenuGroupProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    role: "group" | "menu";
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    };
});
export declare const HoverMenuItem: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("./components/BaseMenu/BaseMenuItem.vue").BaseMenuItemProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {}, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("./components/BaseMenu/BaseMenuItem.vue").BaseMenuItemProps> & Readonly<{}>, {}, {}, {}, {}, {}>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("./components/BaseMenu/BaseMenuItem.vue").BaseMenuItemProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    } & {
        trailing?: (props: {}) => any;
    };
});
export declare const HoverMenuSeparator: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export declare const HoverCard: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("./components/HoverCard/HoverCard.vue").HoverCardProps> & Readonly<{
        "onUpdate:open"?: ((value: boolean) => any) | undefined;
    }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        "update:open": (value: boolean) => any;
    }, import("vue").PublicProps, {
        disabled: boolean;
        placement: import("./components/HoverCard/HoverCard.vue").HoverCardPlacement;
        open: boolean;
        openDelay: number;
        closeDelay: number;
        sideOffset: number;
        updateKey: string | number | boolean;
    }, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("./components/HoverCard/HoverCard.vue").HoverCardProps> & Readonly<{
        "onUpdate:open"?: ((value: boolean) => any) | undefined;
    }>, {}, {}, {}, {}, {
        disabled: boolean;
        placement: import("./components/HoverCard/HoverCard.vue").HoverCardPlacement;
        open: boolean;
        openDelay: number;
        closeDelay: number;
        sideOffset: number;
        updateKey: string | number | boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("./components/HoverCard/HoverCard.vue").HoverCardProps> & Readonly<{
    "onUpdate:open"?: ((value: boolean) => any) | undefined;
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:open": (value: boolean) => any;
}, string, {
    disabled: boolean;
    placement: import("./components/HoverCard/HoverCard.vue").HoverCardPlacement;
    open: boolean;
    openDelay: number;
    closeDelay: number;
    sideOffset: number;
    updateKey: string | number | boolean;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    } & {
        content?: (props: {}) => any;
    };
});
export declare const FadeMask: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("./index.ts").FadeMaskProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        start: number;
        end: number;
        disabled: boolean;
        direction: import("./components/FadeMask/useFadeMask.ts").FadeMaskDirection;
        easing: import("./components/FadeMask/useFadeMask.ts").FadeMaskEasing;
        inline: boolean;
        overflow: boolean;
    }, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("./index.ts").FadeMaskProps> & Readonly<{}>, {}, {}, {}, {}, {
        start: number;
        end: number;
        disabled: boolean;
        direction: import("./components/FadeMask/useFadeMask.ts").FadeMaskDirection;
        easing: import("./components/FadeMask/useFadeMask.ts").FadeMaskEasing;
        inline: boolean;
        overflow: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("./index.ts").FadeMaskProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    start: number;
    end: number;
    disabled: boolean;
    direction: import("./components/FadeMask/useFadeMask.ts").FadeMaskDirection;
    easing: import("./components/FadeMask/useFadeMask.ts").FadeMaskEasing;
    inline: boolean;
    overflow: boolean;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    };
});
export type { FadeMaskProps } from "./components/FadeMask/FadeMask.vue";
export declare const Hover3d: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("./index.ts").Hover3dProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        stretched: boolean;
        disabled: boolean;
        scale: number;
        maxTilt: number;
    }, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("./index.ts").Hover3dProps> & Readonly<{}>, {}, {}, {}, {}, {
        stretched: boolean;
        disabled: boolean;
        scale: number;
        maxTilt: number;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("./index.ts").Hover3dProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    stretched: boolean;
    disabled: boolean;
    scale: number;
    maxTilt: number;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    };
});
export type { Hover3dProps } from "./components/Hover3d/Hover3d.vue";
export declare const AuroraBackground: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("./index.ts").AuroraBackgroundProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        animated: boolean;
        intensity: import("./index.ts").AuroraBackgroundIntensity;
        palette: import("./index.ts").AuroraBackgroundPalette;
    }, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("./index.ts").AuroraBackgroundProps> & Readonly<{}>, {}, {}, {}, {}, {
        animated: boolean;
        intensity: import("./index.ts").AuroraBackgroundIntensity;
        palette: import("./index.ts").AuroraBackgroundPalette;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("./index.ts").AuroraBackgroundProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    animated: boolean;
    intensity: import("./index.ts").AuroraBackgroundIntensity;
    palette: import("./index.ts").AuroraBackgroundPalette;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    };
});
export type { AuroraBackgroundIntensity, AuroraBackgroundPalette, AuroraBackgroundProps, } from "./components/AuroraBackground/AuroraBackground.vue";
export declare const NoiseOverlay: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("./index.ts").NoiseOverlayProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        grainSize: number;
        octaves: number;
        seed: number;
        blendMode: import("./index.ts").NoiseOverlayBlendMode;
        opacity: number;
        position: import("./index.ts").NoiseOverlayPosition;
        zIndex: number;
    }, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("./index.ts").NoiseOverlayProps> & Readonly<{}>, {}, {}, {}, {}, {
        grainSize: number;
        octaves: number;
        seed: number;
        blendMode: import("./index.ts").NoiseOverlayBlendMode;
        opacity: number;
        position: import("./index.ts").NoiseOverlayPosition;
        zIndex: number;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("./index.ts").NoiseOverlayProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    grainSize: number;
    octaves: number;
    seed: number;
    blendMode: import("./index.ts").NoiseOverlayBlendMode;
    opacity: number;
    position: import("./index.ts").NoiseOverlayPosition;
    zIndex: number;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    };
});
export type { NoiseOverlayBlendMode, NoiseOverlayPosition, NoiseOverlayProps, } from "./components/NoiseOverlay/NoiseOverlay.vue";
export declare const NumberFlow: import("vue").DefineComponent<import("./index.ts").NumberFlowProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "animations-finish": () => any;
    "animations-start": () => any;
}, string, import("vue").PublicProps, Readonly<import("./index.ts").NumberFlowProps> & Readonly<{
    "onAnimations-finish"?: (() => any) | undefined;
    "onAnimations-start"?: (() => any) | undefined;
}>, {
    direction: import("./index.ts").NumberFlowDirection;
    textAlign: import("csstype").Property.TextAlign;
    Element: "a" | "button" | "div" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "label" | "p" | "span";
    typography: import("./components/Text/types.ts").Typography;
    color: "default" | "negative" | "inherit" | "secondary";
    duration: number;
    easing: string;
    animated: boolean;
    animateOnMount: boolean;
    initialValue: number;
    mountDelay: number;
    startOnVisible: boolean;
    visibilityRootMargin: string;
    visibilityThreshold: number;
    continuous: boolean;
    respectMotionPreference: boolean;
    willChange: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export type { NumberFlowFormat, NumberFlowProps, } from "./components/NumberFlow/NumberFlow.vue";
export type { NumberFlowDirection, NumberFlowTimingOverrides, } from "./components/NumberFlow/useNumberFlow";
export declare const HourPicker: import("vue").DefineComponent<import("./components/HourPicker/HourPicker.vue").HourPickerProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("./components/HourPicker/HourPicker.vue").HourPickerProps> & Readonly<{}>, {
    label: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export declare const ContextMenu: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("./components/ContextMenu/ContextMenu.vue").ContextMenuProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {}, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("./components/ContextMenu/ContextMenu.vue").ContextMenuProps> & Readonly<{}>, {}, {}, {}, {}, {}>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("./components/ContextMenu/ContextMenu.vue").ContextMenuProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    };
});
export declare const ContextSubmenu: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {}, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, {}>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {
            ref: string;
        }) => any;
    } & {
        menu?: (props: {}) => any;
    };
});
export declare const ContextMenuList: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("./components/BaseMenu/BaseMenuGroup.vue").BaseMenuGroupProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        role: "group" | "menu";
    }, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("./components/BaseMenu/BaseMenuGroup.vue").BaseMenuGroupProps> & Readonly<{}>, {}, {}, {}, {}, {
        role: "group" | "menu";
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("./components/BaseMenu/BaseMenuGroup.vue").BaseMenuGroupProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    role: "group" | "menu";
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    };
});
export declare const ContextMenuItem: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("./components/BaseMenu/BaseMenuItem.vue").BaseMenuItemProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {}, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("./components/BaseMenu/BaseMenuItem.vue").BaseMenuItemProps> & Readonly<{}>, {}, {}, {}, {}, {}>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("./components/BaseMenu/BaseMenuItem.vue").BaseMenuItemProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    } & {
        trailing?: (props: {}) => any;
    };
});
export declare const ContextMenuSeparator: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export declare const Confirm: import("vue").DefineComponent<import("./components/Confirm/Confirm.vue").ConfirmProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("./components/Confirm/Confirm.vue").ConfirmProps> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export declare const Calendar: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<{
        mode?: import("./index.ts").CalendarMode;
        modelValue?: import("./index.ts").CalendarValue;
        rangeValue?: import("./index.ts").CalendarRangeValue;
        month?: Date | string;
        minDate?: Date | string | null;
        maxDate?: Date | string | null;
        disabledDates?: (date: Date) => boolean;
        showOutsideDays?: boolean;
        fixedWeeks?: boolean;
        readonly?: boolean;
        size?: import("./index.ts").CalendarSize;
    }> & Readonly<{
        onSelect?: ((payload: import("./index.ts").CalendarSelectPayload) => any) | undefined;
        "onUpdate:modelValue"?: ((value: Date | null) => any) | undefined;
        "onUpdate:rangeValue"?: ((value: import("./index.ts").CalendarRangePayload) => any) | undefined;
        "onUpdate:month"?: ((value: Date) => any) | undefined;
        "onRange-select"?: ((payload: import("./index.ts").CalendarRangePayload) => any) | undefined;
        "onRange-drag-start"?: ((payload: import("./index.ts").CalendarRangePayload) => any) | undefined;
        "onRange-drag"?: ((payload: import("./index.ts").CalendarRangePayload) => any) | undefined;
        "onRange-drag-end"?: ((payload: import("./index.ts").CalendarRangePayload) => any) | undefined;
        "onMonth-change"?: ((payload: import("./index.ts").CalendarMonthChangePayload) => any) | undefined;
        "onDay-hover"?: ((payload: import("./index.ts").CalendarSelectPayload) => any) | undefined;
    }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        select: (payload: import("./index.ts").CalendarSelectPayload) => any;
        "update:modelValue": (value: Date | null) => any;
        "update:rangeValue": (value: import("./index.ts").CalendarRangePayload) => any;
        "update:month": (value: Date) => any;
        "range-select": (payload: import("./index.ts").CalendarRangePayload) => any;
        "range-drag-start": (payload: import("./index.ts").CalendarRangePayload) => any;
        "range-drag": (payload: import("./index.ts").CalendarRangePayload) => any;
        "range-drag-end": (payload: import("./index.ts").CalendarRangePayload) => any;
        "month-change": (payload: import("./index.ts").CalendarMonthChangePayload) => any;
        "day-hover": (payload: import("./index.ts").CalendarSelectPayload) => any;
    }, import("vue").PublicProps, {
        mode: import("./index.ts").CalendarMode;
        size: import("./index.ts").CalendarSize;
        month: Date | string;
        modelValue: import("./index.ts").CalendarValue;
        readonly: boolean;
        rangeValue: import("./index.ts").CalendarRangeValue;
        minDate: Date | string | null;
        maxDate: Date | string | null;
        disabledDates: (date: Date) => boolean;
        showOutsideDays: boolean;
        fixedWeeks: boolean;
    }, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<{
        mode?: import("./index.ts").CalendarMode;
        modelValue?: import("./index.ts").CalendarValue;
        rangeValue?: import("./index.ts").CalendarRangeValue;
        month?: Date | string;
        minDate?: Date | string | null;
        maxDate?: Date | string | null;
        disabledDates?: (date: Date) => boolean;
        showOutsideDays?: boolean;
        fixedWeeks?: boolean;
        readonly?: boolean;
        size?: import("./index.ts").CalendarSize;
    }> & Readonly<{
        onSelect?: ((payload: import("./index.ts").CalendarSelectPayload) => any) | undefined;
        "onUpdate:modelValue"?: ((value: Date | null) => any) | undefined;
        "onUpdate:rangeValue"?: ((value: import("./index.ts").CalendarRangePayload) => any) | undefined;
        "onUpdate:month"?: ((value: Date) => any) | undefined;
        "onRange-select"?: ((payload: import("./index.ts").CalendarRangePayload) => any) | undefined;
        "onRange-drag-start"?: ((payload: import("./index.ts").CalendarRangePayload) => any) | undefined;
        "onRange-drag"?: ((payload: import("./index.ts").CalendarRangePayload) => any) | undefined;
        "onRange-drag-end"?: ((payload: import("./index.ts").CalendarRangePayload) => any) | undefined;
        "onMonth-change"?: ((payload: import("./index.ts").CalendarMonthChangePayload) => any) | undefined;
        "onDay-hover"?: ((payload: import("./index.ts").CalendarSelectPayload) => any) | undefined;
    }>, {}, {}, {}, {}, {
        mode: import("./index.ts").CalendarMode;
        size: import("./index.ts").CalendarSize;
        month: Date | string;
        modelValue: import("./index.ts").CalendarValue;
        readonly: boolean;
        rangeValue: import("./index.ts").CalendarRangeValue;
        minDate: Date | string | null;
        maxDate: Date | string | null;
        disabledDates: (date: Date) => boolean;
        showOutsideDays: boolean;
        fixedWeeks: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<{
    mode?: import("./index.ts").CalendarMode;
    modelValue?: import("./index.ts").CalendarValue;
    rangeValue?: import("./index.ts").CalendarRangeValue;
    month?: Date | string;
    minDate?: Date | string | null;
    maxDate?: Date | string | null;
    disabledDates?: (date: Date) => boolean;
    showOutsideDays?: boolean;
    fixedWeeks?: boolean;
    readonly?: boolean;
    size?: import("./index.ts").CalendarSize;
}> & Readonly<{
    onSelect?: ((payload: import("./index.ts").CalendarSelectPayload) => any) | undefined;
    "onUpdate:modelValue"?: ((value: Date | null) => any) | undefined;
    "onUpdate:rangeValue"?: ((value: import("./index.ts").CalendarRangePayload) => any) | undefined;
    "onUpdate:month"?: ((value: Date) => any) | undefined;
    "onRange-select"?: ((payload: import("./index.ts").CalendarRangePayload) => any) | undefined;
    "onRange-drag-start"?: ((payload: import("./index.ts").CalendarRangePayload) => any) | undefined;
    "onRange-drag"?: ((payload: import("./index.ts").CalendarRangePayload) => any) | undefined;
    "onRange-drag-end"?: ((payload: import("./index.ts").CalendarRangePayload) => any) | undefined;
    "onMonth-change"?: ((payload: import("./index.ts").CalendarMonthChangePayload) => any) | undefined;
    "onDay-hover"?: ((payload: import("./index.ts").CalendarSelectPayload) => any) | undefined;
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    select: (payload: import("./index.ts").CalendarSelectPayload) => any;
    "update:modelValue": (value: Date | null) => any;
    "update:rangeValue": (value: import("./index.ts").CalendarRangePayload) => any;
    "update:month": (value: Date) => any;
    "range-select": (payload: import("./index.ts").CalendarRangePayload) => any;
    "range-drag-start": (payload: import("./index.ts").CalendarRangePayload) => any;
    "range-drag": (payload: import("./index.ts").CalendarRangePayload) => any;
    "range-drag-end": (payload: import("./index.ts").CalendarRangePayload) => any;
    "month-change": (payload: import("./index.ts").CalendarMonthChangePayload) => any;
    "day-hover": (payload: import("./index.ts").CalendarSelectPayload) => any;
}, string, {
    mode: import("./index.ts").CalendarMode;
    size: import("./index.ts").CalendarSize;
    month: Date | string;
    modelValue: import("./index.ts").CalendarValue;
    readonly: boolean;
    rangeValue: import("./index.ts").CalendarRangeValue;
    minDate: Date | string | null;
    maxDate: Date | string | null;
    disabledDates: (date: Date) => boolean;
    showOutsideDays: boolean;
    fixedWeeks: boolean;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        title?: (props: {
            month: Date;
        }) => any;
    } & {
        day?: (props: {
            day: import("./index.ts").CalendarDay;
        }) => any;
    } & {
        footer?: (props: {
            mode: import("./index.ts").CalendarMode;
            month: Date;
        }) => any;
    };
});
export declare const DateInput: import("vue").DefineComponent<import("./components/DateInput/DateInput.vue").DateInputProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("./components/DateInput/DateInput.vue").DateInputProps> & Readonly<{}>, {
    value: import("./index.ts").DateInputValue;
    placeholder: string;
    maxWidth: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export declare const DatePicker: import("vue").DefineComponent<import("./components/DatePicker/DatePicker.vue").DatePickerProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("./components/DatePicker/DatePicker.vue").DatePickerProps> & Readonly<{}>, {
    size: import("./index.ts").ComponentSize;
    value: import("./index.ts").DatePickerValue;
    placeholder: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export declare const DateNavigator: import("vue").DefineComponent<import("./components/DateNavigator/DateNavigator.vue").DateNavigatorProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("./components/DateNavigator/DateNavigator.vue").DateNavigatorProps> & Readonly<{}>, {
    mode: import("./index.ts").DateNavigatorMode;
    size: import("./index.ts").ComponentSize;
    buttonMode: "default" | "contrast" | "accent" | "negative" | "ghost" | "outline";
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export declare const Select: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("./components/Select/Select.vue").SelectProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        mode: import("./index.ts").PickerMode;
        size: import("./index.ts").ComponentSize;
    }, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("./components/Select/Select.vue").SelectProps> & Readonly<{}>, {}, {}, {}, {}, {
        mode: import("./index.ts").PickerMode;
        size: import("./index.ts").ComponentSize;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("./components/Select/Select.vue").SelectProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    mode: import("./index.ts").PickerMode;
    size: import("./index.ts").ComponentSize;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    } & {
        default?: (props: {}) => any;
    };
});
export declare const SelectOption: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("./components/Select/SelectOption.vue").SelectOptionProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {}, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("./components/Select/SelectOption.vue").SelectOptionProps> & Readonly<{}>, {}, {}, {}, {}, {}>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("./components/Select/SelectOption.vue").SelectOptionProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    };
});
export declare const SuggestInput: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("./components/SuggestInput/SuggestInput.vue").SuggestInputProps & {
        modelValue?: string;
    }> & Readonly<{
        onInput?: ((event: Event) => any) | undefined;
        onBlur?: ((event: FocusEvent) => any) | undefined;
        onFocus?: ((event: FocusEvent) => any) | undefined;
        onKeydown?: ((event: KeyboardEvent) => any) | undefined;
        "onUpdate:shown"?: ((shown: boolean) => any) | undefined;
        "onUpdate:modelValue"?: ((value: string) => any) | undefined;
    }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        input: (event: Event) => any;
        blur: (event: FocusEvent) => any;
        focus: (event: FocusEvent) => any;
        keydown: (event: KeyboardEvent) => any;
        "update:shown": (shown: boolean) => any;
        "update:modelValue": (value: string) => any;
    }, import("vue").PublicProps, {}, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("./components/SuggestInput/SuggestInput.vue").SuggestInputProps & {
        modelValue?: string;
    }> & Readonly<{
        onInput?: ((event: Event) => any) | undefined;
        onBlur?: ((event: FocusEvent) => any) | undefined;
        onFocus?: ((event: FocusEvent) => any) | undefined;
        onKeydown?: ((event: KeyboardEvent) => any) | undefined;
        "onUpdate:shown"?: ((shown: boolean) => any) | undefined;
        "onUpdate:modelValue"?: ((value: string) => any) | undefined;
    }>, {}, {}, {}, {}, {}>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("./components/SuggestInput/SuggestInput.vue").SuggestInputProps & {
    modelValue?: string;
}> & Readonly<{
    onInput?: ((event: Event) => any) | undefined;
    onBlur?: ((event: FocusEvent) => any) | undefined;
    onFocus?: ((event: FocusEvent) => any) | undefined;
    onKeydown?: ((event: KeyboardEvent) => any) | undefined;
    "onUpdate:shown"?: ((shown: boolean) => any) | undefined;
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    input: (event: Event) => any;
    blur: (event: FocusEvent) => any;
    focus: (event: FocusEvent) => any;
    keydown: (event: KeyboardEvent) => any;
    "update:shown": (shown: boolean) => any;
    "update:modelValue": (value: string) => any;
}, string, {}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {
            close: () => void;
        }) => any;
    };
});
export declare const Textarea: import("vue").DefineComponent<import("./components/Textarea/Textarea.vue").TextareaProps & {
    modelValue?: string;
}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: string | undefined) => any;
}, string, import("vue").PublicProps, Readonly<import("./components/Textarea/Textarea.vue").TextareaProps & {
    modelValue?: string;
}> & Readonly<{
    "onUpdate:modelValue"?: ((value: string | undefined) => any) | undefined;
}>, {
    resize: "none" | "both" | "horizontal" | "vertical";
    layout: "fixed" | "fill-vertical" | "fill-horizontal" | "fill-both" | "hug";
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export declare const Toaster: import("vue").DefineComponent<import("vue-sonner").ToasterProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue-sonner").ToasterProps> & Readonly<{}>, {
    theme: "light" | "dark" | "system";
    gap: number;
    position: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "top-center" | "bottom-center";
    richColors: boolean;
    visibleToasts: number;
    closeButton: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export declare const GridLayout: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("./components/Grid/GridLayout.vue").GridLayoutProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        mode: "container" | "viewport";
        stretched: boolean;
        gutter: string;
        highlight: boolean;
    }, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("./components/Grid/GridLayout.vue").GridLayoutProps> & Readonly<{}>, {}, {}, {}, {}, {
        mode: "container" | "viewport";
        stretched: boolean;
        gutter: string;
        highlight: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("./components/Grid/GridLayout.vue").GridLayoutProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    mode: "container" | "viewport";
    stretched: boolean;
    gutter: string;
    highlight: boolean;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    };
});
export declare const GridRow: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("./components/Grid/GridRow.vue").GridRowProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        rowGap: string;
    }, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("./components/Grid/GridRow.vue").GridRowProps> & Readonly<{}>, {}, {}, {}, {}, {
        rowGap: string;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("./components/Grid/GridRow.vue").GridRowProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    rowGap: string;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    };
});
export declare const GridColumn: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("./components/Grid/GridColumn.vue").GridColumnProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {}, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("./components/Grid/GridColumn.vue").GridColumnProps> & Readonly<{}>, {}, {}, {}, {}, {}>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("./components/Grid/GridColumn.vue").GridColumnProps> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?: (props: {}) => any;
    };
});
export declare const OnboardingTour: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("./components/OnboardingTour/OnboardingTour.vue").OnboardingTourProps> & Readonly<{
        onClose?: ((reason: import("./index.ts").OnboardingTourCloseReason, payload: import("./index.ts").OnboardingTourStepPayload | null) => any) | undefined;
        onStart?: ((payload: import("./index.ts").OnboardingTourStepPayload) => any) | undefined;
        onPrevious?: ((payload: import("./index.ts").OnboardingTourStepPayload) => any) | undefined;
        onNext?: ((payload: import("./index.ts").OnboardingTourStepPayload) => any) | undefined;
        "onUpdate:open"?: ((value: boolean) => any) | undefined;
        "onUpdate:step"?: ((value: number) => any) | undefined;
        onFinish?: ((payload: import("./index.ts").OnboardingTourStepPayload) => any) | undefined;
        "onTarget-click"?: ((payload: import("./index.ts").OnboardingTourStepPayload) => any) | undefined;
        "onTarget-missing"?: ((payload: import("./index.ts").OnboardingTourTargetMissingPayload) => any) | undefined;
    }>, {
        start: (index?: number) => boolean;
        close: (reason?: import("./index.ts").OnboardingTourCloseReason) => void;
        next: () => void;
        previous: () => void;
        goTo: (index: number) => boolean;
        refresh: () => void;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        close: (reason: import("./index.ts").OnboardingTourCloseReason, payload: import("./index.ts").OnboardingTourStepPayload | null) => any;
        start: (payload: import("./index.ts").OnboardingTourStepPayload) => any;
        previous: (payload: import("./index.ts").OnboardingTourStepPayload) => any;
        next: (payload: import("./index.ts").OnboardingTourStepPayload) => any;
        "update:open": (value: boolean) => any;
        "update:step": (value: number) => any;
        finish: (payload: import("./index.ts").OnboardingTourStepPayload) => any;
        "target-click": (payload: import("./index.ts").OnboardingTourStepPayload) => any;
        "target-missing": (payload: import("./index.ts").OnboardingTourTargetMissingPayload) => any;
    }, import("vue").PublicProps, {
        showCloseButton: boolean;
        closeOnEscape: boolean;
        ariaLabel: string;
        animated: boolean;
        zIndex: number;
        step: number;
        open: boolean;
        sideOffset: number;
        teleportTo: string | HTMLElement;
        cardWidth: number;
        overlayOpacity: number;
        spotlightPadding: number;
        spotlightRadius: number;
        viewportPadding: number;
        targetTimeout: number;
        missingTargetBehavior: import("./index.ts").OnboardingTourMissingTargetBehavior;
        scrollBehavior: import("./index.ts").OnboardingTourScrollBehavior;
        lockTargetScroll: boolean;
        showProgress: boolean;
        previousLabel: string;
        nextLabel: string;
        finishLabel: string;
    }, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("./components/OnboardingTour/OnboardingTour.vue").OnboardingTourProps> & Readonly<{
        onClose?: ((reason: import("./index.ts").OnboardingTourCloseReason, payload: import("./index.ts").OnboardingTourStepPayload | null) => any) | undefined;
        onStart?: ((payload: import("./index.ts").OnboardingTourStepPayload) => any) | undefined;
        onPrevious?: ((payload: import("./index.ts").OnboardingTourStepPayload) => any) | undefined;
        onNext?: ((payload: import("./index.ts").OnboardingTourStepPayload) => any) | undefined;
        "onUpdate:open"?: ((value: boolean) => any) | undefined;
        "onUpdate:step"?: ((value: number) => any) | undefined;
        onFinish?: ((payload: import("./index.ts").OnboardingTourStepPayload) => any) | undefined;
        "onTarget-click"?: ((payload: import("./index.ts").OnboardingTourStepPayload) => any) | undefined;
        "onTarget-missing"?: ((payload: import("./index.ts").OnboardingTourTargetMissingPayload) => any) | undefined;
    }>, {
        start: (index?: number) => boolean;
        close: (reason?: import("./index.ts").OnboardingTourCloseReason) => void;
        next: () => void;
        previous: () => void;
        goTo: (index: number) => boolean;
        refresh: () => void;
    }, {}, {}, {}, {
        showCloseButton: boolean;
        closeOnEscape: boolean;
        ariaLabel: string;
        animated: boolean;
        zIndex: number;
        step: number;
        open: boolean;
        sideOffset: number;
        teleportTo: string | HTMLElement;
        cardWidth: number;
        overlayOpacity: number;
        spotlightPadding: number;
        spotlightRadius: number;
        viewportPadding: number;
        targetTimeout: number;
        missingTargetBehavior: import("./index.ts").OnboardingTourMissingTargetBehavior;
        scrollBehavior: import("./index.ts").OnboardingTourScrollBehavior;
        lockTargetScroll: boolean;
        showProgress: boolean;
        previousLabel: string;
        nextLabel: string;
        finishLabel: string;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("./components/OnboardingTour/OnboardingTour.vue").OnboardingTourProps> & Readonly<{
    onClose?: ((reason: import("./index.ts").OnboardingTourCloseReason, payload: import("./index.ts").OnboardingTourStepPayload | null) => any) | undefined;
    onStart?: ((payload: import("./index.ts").OnboardingTourStepPayload) => any) | undefined;
    onPrevious?: ((payload: import("./index.ts").OnboardingTourStepPayload) => any) | undefined;
    onNext?: ((payload: import("./index.ts").OnboardingTourStepPayload) => any) | undefined;
    "onUpdate:open"?: ((value: boolean) => any) | undefined;
    "onUpdate:step"?: ((value: number) => any) | undefined;
    onFinish?: ((payload: import("./index.ts").OnboardingTourStepPayload) => any) | undefined;
    "onTarget-click"?: ((payload: import("./index.ts").OnboardingTourStepPayload) => any) | undefined;
    "onTarget-missing"?: ((payload: import("./index.ts").OnboardingTourTargetMissingPayload) => any) | undefined;
}>, {
    start: (index?: number) => boolean;
    close: (reason?: import("./index.ts").OnboardingTourCloseReason) => void;
    next: () => void;
    previous: () => void;
    goTo: (index: number) => boolean;
    refresh: () => void;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    close: (reason: import("./index.ts").OnboardingTourCloseReason, payload: import("./index.ts").OnboardingTourStepPayload | null) => any;
    start: (payload: import("./index.ts").OnboardingTourStepPayload) => any;
    previous: (payload: import("./index.ts").OnboardingTourStepPayload) => any;
    next: (payload: import("./index.ts").OnboardingTourStepPayload) => any;
    "update:open": (value: boolean) => any;
    "update:step": (value: number) => any;
    finish: (payload: import("./index.ts").OnboardingTourStepPayload) => any;
    "target-click": (payload: import("./index.ts").OnboardingTourStepPayload) => any;
    "target-missing": (payload: import("./index.ts").OnboardingTourTargetMissingPayload) => any;
}, string, {
    showCloseButton: boolean;
    closeOnEscape: boolean;
    ariaLabel: string;
    animated: boolean;
    zIndex: number;
    step: number;
    open: boolean;
    sideOffset: number;
    teleportTo: string | HTMLElement;
    cardWidth: number;
    overlayOpacity: number;
    spotlightPadding: number;
    spotlightRadius: number;
    viewportPadding: number;
    targetTimeout: number;
    missingTargetBehavior: import("./index.ts").OnboardingTourMissingTargetBehavior;
    scrollBehavior: import("./index.ts").OnboardingTourScrollBehavior;
    lockTargetScroll: boolean;
    showProgress: boolean;
    previousLabel: string;
    nextLabel: string;
    finishLabel: string;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        card?: (props: {
            step: import("./index.ts").OnboardingTourStep;
            index: number;
            progress: {
                current: number;
                total: number;
            };
            next: () => void;
            previous: () => void;
            close: (reason?: import("./index.ts").OnboardingTourCloseReason) => void;
        }) => any;
    } & {
        title?: (props: {
            step: import("./index.ts").OnboardingTourStep;
            index: number;
        }) => any;
    } & {
        description?: (props: {
            step: import("./index.ts").OnboardingTourStep;
            index: number;
        }) => any;
    } & {
        content?: (props: {
            step: import("./index.ts").OnboardingTourStep;
            index: number;
        }) => any;
    } & {
        progress?: (props: {
            step: import("./index.ts").OnboardingTourStep;
            index: number;
            progress: {
                current: number;
                total: number;
            };
        }) => any;
    } & {
        actions?: (props: {
            step: import("./index.ts").OnboardingTourStep;
            index: number;
            isFirst: boolean;
            isLast: boolean;
            next: () => void;
            previous: () => void;
            close: (reason?: import("./index.ts").OnboardingTourCloseReason) => void;
        }) => any;
    };
});
import useTabs from "./components/Tabs/useTabs";
import { useSelect, type RegisteredOption } from "./components/Select/useSelect";
import { useConfirm } from "./components/Confirm/useConfirm";
import { useResize } from "./hooks/useResize";
import { useSize } from "./hooks/useSize";
import { useModal } from "./hooks/useModal";
import { useCollapse } from "./hooks/useCollapse";
import { useContextMenu } from "./components/ContextMenu/useContextMenu";
import { provideSkeletonLoading, useSkeletonLoading } from "./components/Skeleton/context";
import { useViewportBreakpoint } from "./hooks/useViewportBreakpoint";
import { useContainerBreakpoint } from "./hooks/useContainerBreakpoint";
import { useGridBreakpoint } from "./hooks/useGridBreakpoint";
import { useOnboardingTour } from "./components/OnboardingTour/useOnboardingTour";
import { toast, useVueSonner } from "vue-sonner";
export type { Color } from "./types/colors";
export type { ComponentSize } from "./types/component-size";
export type { ChipMode, ChipSize, ChipValue } from "./components/Chip/types";
export type { Breakpoint, BreakpointResult, } from "./hooks/breakpoints/breakpoints";
export type { CalendarDay, CalendarMode, CalendarMonthChangePayload, CalendarRangePayload, CalendarRangeValue, CalendarSelectPayload, CalendarSize, CalendarValue, } from "./components/Calendar/types";
export type { DateNavigatorChangePayload, DateNavigatorMode, DateNavigatorRange, } from "./components/DateNavigator/types";
export type { DateInputChangePayload, DateInputValue, } from "./components/DateInput/types";
export type { DatePickerChangePayload, DatePickerValue, } from "./components/DatePicker/types";
export type { HourPickerChangePayload, HourPickerValue, } from "./components/HourPicker/types";
export type { AttachmentMediaVariant, AttachmentOrientation, AttachmentSize, AttachmentState, } from "./components/Attachment/types";
export type { TimelineColor, TimelineDatePosition, TimelineDirection, TimelineIndicatorSize, TimelineIndicatorVariant, TimelineItemState, TimelineOrientation, TimelineStep, TimelineTone, } from "./components/Timeline/types";
export type { FileUploadListOrientation, FileUploadRejection, FileUploadSize, FileUploadValidator, } from "./components/FileUpload/types";
export type { ImageViewerError, ImageViewerItem, ImageViewerThumbnails, } from "./components/ImageViewer/types";
export type { ActiveFilter, FilterControlAppearance, FilterControlMode, FilterField, FilterFieldType, FilterItemLayout, FilterMenuSelectPayload, FilterOperator, FilterOption, VisibilityOption, } from "./components/Filters/types";
export type { OnboardingRect, OnboardingTourCloseReason, OnboardingTourMissingTargetBehavior, OnboardingTourScrollBehavior, OnboardingTourStep, OnboardingTourStepPayload, OnboardingTourTarget, OnboardingTourTargetMissingPayload, } from "./components/OnboardingTour/types";
export type { UseOnboardingTourOptions } from "./components/OnboardingTour/useOnboardingTour";
export type { PickerMode } from "./components/Picker/types";
export { formatFileUploadSize } from "./components/FileUpload/fileUpload";
export { createFilter, createFilterId, filterFieldsByQuery, filterOptionsByQuery, formatFilterValue, getFilterOperators, isFilterValueSelected, toggleFilterValue, } from "./components/Filters/filters";
export type { ExternalToast, ToastClasses, ToastT, ToasterProps, } from "vue-sonner";
export { addDays, addMonths, addYears, addHours, differenceInCalendarDays, endOfDay, formatRuDayMonth, formatRuMonthYear, formatRuReadableDateTime, formatRuRelativeTime, formatRuShortWeekdayMonthDay, isAfterDay, isBeforeDay, isSameDay, roundDateToNearestHour, startOfDay, startOfMonth, startOfWeek, startOfYear, setDateHour, snapDateToHour, toDate, } from "./utils/date";
export { pluralize } from "./utils/pluralize";
export { useSelect, useConfirm, useTabs, useResize, useSize, useModal, useCollapse, useContextMenu, provideSkeletonLoading, useSkeletonLoading, useViewportBreakpoint, useContainerBreakpoint, useGridBreakpoint, useOnboardingTour, toast, useVueSonner, };
export type { RegisteredOption };
