import './styles/style.css'
import 'virtual:svg-icons-register'

import Button, { type ButtonProps } from './components/Button/Button.vue';
import Card, { type CardProps } from './components/Card/Card.vue';
import Gap, { type GapProps } from './components/Gap/Gap.vue';
import Input, { type InputProps } from './components/Input/Input.vue';
import Row, { type RowProps } from './components/Row/Row.vue';
import Sidebar from './components/Sidebar/Sidebar.vue';
import Stack, { type StackProps } from './components/Stack/Stack.vue';
import Tab, { type TabProps } from './components/Tabs/Tab.vue';
import Tabs, { type TabsProps } from './components/Tabs/Tabs.vue';
import useTabs from './components/Tabs/useTabs'
import Text, { type TextProps } from './components/Text/Text.vue';
import Icon, { type IconProps } from './components/Icon/Icon.vue';
import Separator, { type SeparatorProps } from './components/Separator/Separator.vue';
import Tooltip, { type TooltipProps } from './components/Tooltip/Tooltip.vue'
import Badge, { type BadgeProps } from './components/Badge/Badge.vue'
import SidebarItem, { type SidebarItemProps } from './components/Sidebar/SidebarItem.vue'
import SidebarList from './components/Sidebar/SidebarList.vue'
import Modal, { type ModalProps } from './components/Modal/Modal.vue'
import Dropdown from './components/Dropdown/Dropdown.vue'
import DropdownList from './components/Dropdown/DropdownList.vue';
import DropdownItem, { type DropdownItemProps } from './components/Dropdown/DropdownItem.vue';
import DropdownSeparator from './components/Dropdown/DropdownSeparator.vue';
import Loader, { type LoaderProps } from './components/Loader/Loader.vue'
import HoverMenu from './components/HoverMenu/HoverMenu.vue';
import HoverMenuList from './components/HoverMenu/HoverMenuList.vue';
import HoverMenuItem, { type HoverMenuItemProps } from './components/HoverMenu/HoverMenuItem.vue'
import HoverMenuSeparator from './components/HoverMenu/HoverMenuSeparator.vue'
import ContextMenu, { type ContextMenuProps } from './components/ContextMenu/ContextMenu.vue';
import ContextSubmenu from './components/ContextMenu/ContextSubmenu.vue';
import ContextMenuList from './components/ContextMenu/ContextMenuList.vue';
import ContextMenuItem, { type ContextMenuItemProps } from './components/ContextMenu/ContextMenuItem.vue'
import ContextMenuSeparator from './components/ContextMenu/ContextMenuSeparator.vue'
import Confirm, { type ConfirmProps } from './components/Confirm/Confirm.vue'
import Select, { type SelectProps } from './components/Select/Select.vue'
import SelectOption, { type SelectOptionProps } from './components/Select/SelectOption.vue';
import { useSelect, type RegisteredOption } from './components/Select/useSelect'
import { useConfirm } from './components/Confirm/useConfirm';
import { useResize } from './hooks/useResize';
import { useSize } from './hooks/useSize';
import { useContextMenu } from './components/ContextMenu/useContextMenu';

export { Button, ButtonProps,
  Card, CardProps,
  Gap, GapProps,
  Input, InputProps,
  Row, RowProps,
  Stack, StackProps,
  Text, TextProps,
  Sidebar,
  SidebarList,
  SidebarItem, SidebarItemProps,
  Tab, TabProps,
  Tabs, TabsProps,
  Icon, IconProps,
  Separator, SeparatorProps,
  Tooltip, TooltipProps,
  Badge, BadgeProps,
  Modal, ModalProps,
  Dropdown,
  DropdownList,
  DropdownItem, DropdownItemProps,
  DropdownSeparator,
  HoverMenu,
  HoverMenuList,
  HoverMenuItem, HoverMenuItemProps,
  HoverMenuSeparator,
  ContextMenu, ContextMenuProps,
  ContextSubmenu,
  ContextMenuList,
  ContextMenuItem, ContextMenuItemProps,
  ContextMenuSeparator,
  Loader, LoaderProps,
  Confirm, ConfirmProps,
  Select, SelectProps,
  SelectOption, SelectOptionProps,
  useSelect, RegisteredOption,
  useConfirm,
  useTabs,
  useResize,
  useSize,
  useContextMenu,
};
