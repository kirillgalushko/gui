import './vite-env.d.ts'

import { defineAsyncComponent as ac } from 'vue';
import './styles/style.css';

export const Action = ac(() => import('./components/Action/Action.vue'));
export const Avatar = ac(() => import('./components/Avatar/Avatar.vue'));
export const Button = ac(() => import('./components/Button/Button.vue'));
export const Breadcrumb = ac(() => import('./components/Breadcrumb/Breadcrumb.vue'));
export const BreadcrumbItem = ac(() => import('./components/Breadcrumb/BreadcrumbItem.vue'));
export const BreadcrumbLink = ac(() => import('./components/Breadcrumb/BreadcrumbLink.vue'));
export const BreadcrumbList = ac(() => import('./components/Breadcrumb/BreadcrumbList.vue'));
export const BreadcrumbPage = ac(() => import('./components/Breadcrumb/BreadcrumbPage.vue'));
export const BreadcrumbSeparator = ac(() => import('./components/Breadcrumb/BreadcrumbSeparator.vue'));
export const Card = ac(() => import('./components/Card/Card.vue'));
export const Checkbox = ac(() => import('./components/Checkbox/Checkbox.vue'));
export const Gap = ac(() => import('./components/Gap/Gap.vue'));
export const FormError = ac(() => import('./components/FormError/FormError.vue'));
export const FormHelper = ac(() => import('./components/FormHelper/FormHelper.vue'));
export const FormLabel = ac(() => import('./components/FormLabel/FormLabel.vue'));
export const Input = ac(() => import('./components/Input/Input.vue'));
export const Item = ac(() => import('./components/Item/Item.vue'));
export const ItemActions = ac(() => import('./components/Item/ItemActions.vue'));
export const ItemContent = ac(() => import('./components/Item/ItemContent.vue'));
export const ItemDescription = ac(() => import('./components/Item/ItemDescription.vue'));
export const ItemMedia = ac(() => import('./components/Item/ItemMedia.vue'));
export const ItemTitle = ac(() => import('./components/Item/ItemTitle.vue'));
export const PincodeInput = ac(() => import('./components/PincodeInput/PincodeInput.vue'));
export const Link = ac(() => import('./components/Link/Link.vue'));
export const Row = ac(() => import('./components/Row/Row.vue'));
export const Sidebar = ac(() => import('./components/Sidebar/Sidebar.vue'));
export const Stack = ac(() => import('./components/Stack/Stack.vue'));
export const Tab = ac(() => import('./components/Tabs/Tab.vue'));
export const Tabs = ac(() => import('./components/Tabs/Tabs.vue'));
export const Table = ac(() => import('./components/Table/Table.vue'));
export const TableBody = ac(() => import('./components/Table/TableBody.vue'));
export const TableCaption = ac(() => import('./components/Table/TableCaption.vue'));
export const TableCell = ac(() => import('./components/Table/TableCell.vue'));
export const TableFooter = ac(() => import('./components/Table/TableFooter.vue'));
export const TableHead = ac(() => import('./components/Table/TableHead.vue'));
export const TableHeader = ac(() => import('./components/Table/TableHeader.vue'));
export const TableRow = ac(() => import('./components/Table/TableRow.vue'));
export const Text = ac(() => import('./components/Text/Text.vue'));
export const Separator = ac(() => import('./components/Separator/Separator.vue'));
export const Tooltip = ac(() => import('./components/Tooltip/Tooltip.vue'));
export const Badge = ac(() => import('./components/Badge/Badge.vue'));
export const SidebarItem = ac(() => import('./components/Sidebar/SidebarItem.vue'));
export const SidebarList = ac(() => import('./components/Sidebar/SidebarList.vue'));
export const Modal = ac(() => import('./components/Modal/Modal.vue'));
export const PasswordInput = ac(() => import('./components/PasswordInput/PasswordInput.vue'));
export const PasswordStrengthInput = ac(() => import('./components/PasswordStrengthInput/PasswordStrengthInput.vue'));
export const ProgressBar = ac(() => import('./components/ProgressBar/ProgressBar.vue'));
export const Dropdown = ac(() => import('./components/Dropdown/Dropdown.vue'));
export const DropdownList = ac(() => import('./components/Dropdown/DropdownList.vue'));
export const DropdownItem = ac(() => import('./components/Dropdown/DropdownItem.vue'));
export const DropdownSeparator = ac(() => import('./components/Dropdown/DropdownSeparator.vue'));
export const Empty = ac(() => import('./components/Empty/Empty.vue'));
export const EmptyContent = ac(() => import('./components/Empty/EmptyContent.vue'));
export const EmptyDescription = ac(() => import('./components/Empty/EmptyDescription.vue'));
export const EmptyHeader = ac(() => import('./components/Empty/EmptyHeader.vue'));
export const EmptyMedia = ac(() => import('./components/Empty/EmptyMedia.vue'));
export const EmptyTitle = ac(() => import('./components/Empty/EmptyTitle.vue'));
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
export const Textarea = ac(() => import('./components/Textarea/Textarea.vue'));
export const GridLayout = ac(() => import('./components/Grid/GridLayout.vue'));
export const GridRow = ac(() => import('./components/Grid/GridRow.vue'));
export const GridColumn = ac(() => import('./components/Grid/GridColumn.vue'));

import useTabs from './components/Tabs/useTabs';
import { useSelect, type RegisteredOption } from './components/Select/useSelect';
import { useConfirm } from './components/Confirm/useConfirm';
import { useResize } from './hooks/useResize';
import { useSize } from './hooks/useSize';
import { useModal } from './hooks/useModal';
import { useContextMenu } from './components/ContextMenu/useContextMenu';
import { useViewportBreakpoint } from './hooks/useViewportBreakpoint';
import { useContainerBreakpoint } from './hooks/useContainerBreakpoint';
export type {
  Breakpoint,
  BreakpointResult,
} from './hooks/breakpoints/breakpoints';

export {
  useSelect,
  RegisteredOption,
  useConfirm,
  useTabs,
  useResize,
  useSize,
  useModal,
  useContextMenu,
  useViewportBreakpoint,
  useContainerBreakpoint,
};
