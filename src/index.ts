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
import { useResize } from './hooks/useResize';

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
  useTabs,
  useResize,
};
