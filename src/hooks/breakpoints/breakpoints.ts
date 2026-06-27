export const breakpointNames = ['xs', 's', 'm', 'l', 'xl', 'xxl'] as const;

export type Breakpoint = (typeof breakpointNames)[number];

export interface BreakpointResult {
  breakpoint: Breakpoint;
  isXS: boolean;
  isS: boolean;
  isM: boolean;
  isL: boolean;
  isXL: boolean;
  isXXL: boolean;
  isMobile: boolean;
  isGtXS: boolean;
  isGtS: boolean;
  isGtM: boolean;
  isGtL: boolean;
}

export const breakpointMinWidths: Record<Breakpoint, number> = {
  xs: 0,
  s: 576,
  m: 1024,
  l: 1280,
  xl: 1440,
  xxl: 1920,
};

export const breakpointColumns: Record<Breakpoint, number> = {
  xs: 4,
  s: 8,
  m: 12,
  l: 12,
  xl: 12,
  xxl: 12,
};

export function getBreakpointName(width: number): Breakpoint {
  let current: Breakpoint = 'xs';

  for (const breakpoint of breakpointNames) {
    if (width >= breakpointMinWidths[breakpoint]) {
      current = breakpoint;
    }
  }

  return current;
}

export function createBreakpointResult(readBreakpoint: () => Breakpoint): BreakpointResult {
  return {
    get breakpoint() {
      return readBreakpoint();
    },
    get isXS() {
      return readBreakpoint() === 'xs';
    },
    get isS() {
      return readBreakpoint() === 's';
    },
    get isM() {
      return readBreakpoint() === 'm';
    },
    get isL() {
      return readBreakpoint() === 'l';
    },
    get isXL() {
      return readBreakpoint() === 'xl';
    },
    get isXXL() {
      return readBreakpoint() === 'xxl';
    },
    get isMobile() {
      const breakpoint = readBreakpoint();

      return breakpoint === 'xs' || breakpoint === 's';
    },
    get isGtXS() {
      return breakpointNames.indexOf(readBreakpoint()) > breakpointNames.indexOf('xs');
    },
    get isGtS() {
      return breakpointNames.indexOf(readBreakpoint()) > breakpointNames.indexOf('s');
    },
    get isGtM() {
      return breakpointNames.indexOf(readBreakpoint()) > breakpointNames.indexOf('m');
    },
    get isGtL() {
      return breakpointNames.indexOf(readBreakpoint()) > breakpointNames.indexOf('l');
    },
  };
}
