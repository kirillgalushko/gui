import { defineAsyncComponent as ac } from 'vue';
import './styles/style.css';

export const Button = ac(() => import('./components/Button/Button.vue'));
export const Card = ac(() => import('./components/Card/Card.vue'));
export const Gap = ac(() => import('./components/Gap/Gap.vue'));
export const Input = ac(() => import('./components/Input/Input.vue'));
export const Row = ac(() => import('./components/Row/Row.vue'));
export const Sidebar = ac(() => import('./components/Sidebar/Sidebar.vue'));
export const Stack = ac(() => import('./components/Stack/Stack.vue'));
export const Tab = ac(() => import('./components/Tabs/Tab.vue'));
export const Tabs = ac(() => import('./components/Tabs/Tabs.vue'));
export const Text = ac(() => import('./components/Text/Text.vue'));
export const Separator = ac(() => import('./components/Separator/Separator.vue'));
export const Tooltip = ac(() => import('./components/Tooltip/Tooltip.vue'));
export const Badge = ac(() => import('./components/Badge/Badge.vue'));
export const SidebarItem = ac(() => import('./components/Sidebar/SidebarItem.vue'));
export const SidebarList = ac(() => import('./components/Sidebar/SidebarList.vue'));
export const Modal = ac(() => import('./components/Modal/Modal.vue'));
export const Dropdown = ac(() => import('./components/Dropdown/Dropdown.vue'));
export const DropdownList = ac(() => import('./components/Dropdown/DropdownList.vue'));
export const DropdownItem = ac(() => import('./components/Dropdown/DropdownItem.vue'));
export const DropdownSeparator = ac(() => import('./components/Dropdown/DropdownSeparator.vue'));
export const Loader = ac(() => import('./components/Loader/Loader.vue'));
export const HoverMenu = ac(() => import('./components/HoverMenu/HoverMenu.vue'));
export const HoverMenuList = ac(() => import('./components/HoverMenu/HoverMenuList.vue'));
export const HoverMenuItem = ac(() => import('./components/HoverMenu/HoverMenuItem.vue'));
export const HoverMenuSeparator = ac(() => import('./components/HoverMenu/HoverMenuSeparator.vue'));
export const ContextMenu = ac(() => import('./components/ContextMenu/ContextMenu.vue'));
export const ContextSubmenu = ac(() => import('./components/ContextMenu/ContextSubmenu.vue'));
export const ContextMenuList = ac(() => import('./components/ContextMenu/ContextMenuList.vue'));
export const ContextMenuItem = ac(() => import('./components/ContextMenu/ContextMenuItem.vue'));
export const ContextMenuSeparator = ac(() => import('./components/ContextMenu/ContextMenuSeparator.vue'));
export const Confirm = ac(() => import('./components/Confirm/Confirm.vue'));
export const Select = ac(() => import('./components/Select/Select.vue'));
export const SelectOption = ac(() => import('./components/Select/SelectOption.vue'));

import useTabs from './components/Tabs/useTabs';
import { useSelect, type RegisteredOption } from './components/Select/useSelect';
import { useConfirm } from './components/Confirm/useConfirm';
import { useResize } from './hooks/useResize';
import { useSize } from './hooks/useSize';
import { useContextMenu } from './components/ContextMenu/useContextMenu';

export {
  useSelect,
  RegisteredOption,
  useConfirm,
  useTabs,
  useResize,
  useSize,
  useContextMenu,
};
