import "./vite-env.d.ts";

import { defineAsyncComponent as ac } from "vue";
import "./styles/style.css";

export const Accordion = ac(
  () => import("./components/Accordion/Accordion.vue"),
);
export const AccordionContent = ac(
  () => import("./components/Accordion/AccordionContent.vue"),
);
export const AccordionItem = ac(
  () => import("./components/Accordion/AccordionItem.vue"),
);
export const AccordionTrigger = ac(
  () => import("./components/Accordion/AccordionTrigger.vue"),
);
export const Attachment = ac(
  () => import("./components/Attachment/Attachment.vue"),
);
export const AttachmentAction = ac(
  () => import("./components/Attachment/AttachmentAction.vue"),
);
export const AttachmentActions = ac(
  () => import("./components/Attachment/AttachmentActions.vue"),
);
export const AttachmentContent = ac(
  () => import("./components/Attachment/AttachmentContent.vue"),
);
export const AttachmentDescription = ac(
  () => import("./components/Attachment/AttachmentDescription.vue"),
);
export const AttachmentGroup = ac(
  () => import("./components/Attachment/AttachmentGroup.vue"),
);
export const AttachmentMedia = ac(
  () => import("./components/Attachment/AttachmentMedia.vue"),
);
export const AttachmentMediaTrigger = ac(
  () => import("./components/Attachment/AttachmentMediaTrigger.vue"),
);
export const AttachmentTitle = ac(
  () => import("./components/Attachment/AttachmentTitle.vue"),
);
export const AttachmentTrigger = ac(
  () => import("./components/Attachment/AttachmentTrigger.vue"),
);
export const ImageViewer = ac(
  () => import("./components/ImageViewer/ImageViewer.vue"),
);
export const Action = ac(() => import("./components/Action/Action.vue"));
export const AdaptiveModal = ac(
  () => import("./components/AdaptiveModal/AdaptiveModal.vue"),
);
export const Avatar = ac(() => import("./components/Avatar/Avatar.vue"));
export const Button = ac(() => import("./components/Button/Button.vue"));
export const ButtonGroup = ac(
  () => import("./components/ButtonGroup/ButtonGroup.vue"),
);
export const ButtonGroupSeparator = ac(
  () => import("./components/ButtonGroup/ButtonGroupSeparator.vue"),
);
export const ButtonGroupText = ac(
  () => import("./components/ButtonGroup/ButtonGroupText.vue"),
);
export const Breadcrumb = ac(
  () => import("./components/Breadcrumb/Breadcrumb.vue"),
);
export const BreadcrumbItem = ac(
  () => import("./components/Breadcrumb/BreadcrumbItem.vue"),
);
export const BreadcrumbLink = ac(
  () => import("./components/Breadcrumb/BreadcrumbLink.vue"),
);
export const BreadcrumbList = ac(
  () => import("./components/Breadcrumb/BreadcrumbList.vue"),
);
export const BreadcrumbPage = ac(
  () => import("./components/Breadcrumb/BreadcrumbPage.vue"),
);
export const BreadcrumbSeparator = ac(
  () => import("./components/Breadcrumb/BreadcrumbSeparator.vue"),
);
export const Card = ac(() => import("./components/Card/Card.vue"));
export const Checkbox = ac(() => import("./components/Checkbox/Checkbox.vue"));
export const Switch = ac(() => import("./components/Switch/Switch.vue"));
export const Chip = ac(() => import("./components/Chip/Chip.vue"));
export const ChipGroup = ac(() => import("./components/Chip/ChipGroup.vue"));
export const Dot = ac(() => import("./components/Dot/Dot.vue"));
export const Gap = ac(() => import("./components/Gap/Gap.vue"));
export const Field = ac(() => import("./components/Field/Field.vue"));
export const FieldContent = ac(
  () => import("./components/Field/FieldContent.vue"),
);
export const FieldDescription = ac(
  () => import("./components/Field/FieldDescription.vue"),
);
export const FieldHelper = ac(
  () => import("./components/FieldHelper/FieldHelper.vue"),
);
export const FieldLabel = ac(() => import("./components/Field/FieldLabel.vue"));
export const FieldLegend = ac(
  () => import("./components/Field/FieldLegend.vue"),
);
export const FieldSeparator = ac(
  () => import("./components/Field/FieldSeparator.vue"),
);
export const FieldSet = ac(() => import("./components/Field/FieldSet.vue"));
export const FieldTitle = ac(() => import("./components/Field/FieldTitle.vue"));
export const FormError = ac(
  () => import("./components/FormError/FormError.vue"),
);
export const Input = ac(() => import("./components/Input/Input.vue"));
export const PhoneInput = ac(
  () => import("./components/PhoneInput/PhoneInput.vue"),
);
export {
  canApplyPhoneInput,
  formatPhoneInput,
  formatPhoneInputWithCaret,
  isAllowedPhoneInput,
  isValidPhone,
  parsePhone,
  sanitizePhoneInput,
  type PhoneInputChange,
  type PhoneInputFormatResult,
  type PhoneValue,
} from "./components/PhoneInput/phone";
export const FileInput = ac(
  () => import("./components/FileInput/FileInput.vue"),
);
export const FileUpload = ac(
  () => import("./components/FileUpload/FileUpload.vue"),
);
export const FileUploadClear = ac(
  () => import("./components/FileUpload/FileUploadClear.vue"),
);
export const FileUploadDropzone = ac(
  () => import("./components/FileUpload/FileUploadDropzone.vue"),
);
export const FileUploadItem = ac(
  () => import("./components/FileUpload/FileUploadItem.vue"),
);
export const FileUploadList = ac(
  () => import("./components/FileUpload/FileUploadList.vue"),
);
export const FileUploadTrigger = ac(
  () => import("./components/FileUpload/FileUploadTrigger.vue"),
);
export const Item = ac(() => import("./components/Item/Item.vue"));
export const ItemActions = ac(
  () => import("./components/Item/ItemActions.vue"),
);
export const ItemContent = ac(
  () => import("./components/Item/ItemContent.vue"),
);
export const ItemDescription = ac(
  () => import("./components/Item/ItemDescription.vue"),
);
export const ItemMedia = ac(() => import("./components/Item/ItemMedia.vue"));
export const ItemTitle = ac(() => import("./components/Item/ItemTitle.vue"));
export const PincodeInput = ac(
  () => import("./components/PincodeInput/PincodeInput.vue"),
);
export const Link = ac(() => import("./components/Link/Link.vue"));
export const Row = ac(() => import("./components/Row/Row.vue"));
export const Sidebar = ac(() => import("./components/Sidebar/Sidebar.vue"));
export const Stack = ac(() => import("./components/Stack/Stack.vue"));
export const Tab = ac(() => import("./components/Tabs/Tab.vue"));
export const Tabs = ac(() => import("./components/Tabs/Tabs.vue"));
export const Table = ac(() => import("./components/Table/Table.vue"));
export const TableBody = ac(() => import("./components/Table/TableBody.vue"));
export const TableCaption = ac(
  () => import("./components/Table/TableCaption.vue"),
);
export const TableCell = ac(() => import("./components/Table/TableCell.vue"));
export const TableFooter = ac(
  () => import("./components/Table/TableFooter.vue"),
);
export const TableHead = ac(() => import("./components/Table/TableHead.vue"));
export const TableHeader = ac(
  () => import("./components/Table/TableHeader.vue"),
);
export const TableRow = ac(() => import("./components/Table/TableRow.vue"));
export const Text = ac(() => import("./components/Text/Text.vue"));
export const Separator = ac(
  () => import("./components/Separator/Separator.vue"),
);
export const Tooltip = ac(() => import("./components/Tooltip/Tooltip.vue"));
export const Badge = ac(() => import("./components/Badge/Badge.vue"));
export const SidebarItem = ac(
  () => import("./components/Sidebar/SidebarItem.vue"),
);
export const SidebarList = ac(
  () => import("./components/Sidebar/SidebarList.vue"),
);
export const Modal = ac(() => import("./components/Modal/Modal.vue"));
export const PasswordInput = ac(
  () => import("./components/PasswordInput/PasswordInput.vue"),
);
export const PasswordStrengthInput = ac(
  () => import("./components/PasswordStrengthInput/PasswordStrengthInput.vue"),
);
export const Picker = ac(() => import("./components/Picker/Picker.vue"));
export const ProgressBar = ac(
  () => import("./components/ProgressBar/ProgressBar.vue"),
);
export const Dropdown = ac(() => import("./components/Dropdown/Dropdown.vue"));
export const DropdownList = ac(
  () => import("./components/Dropdown/DropdownList.vue"),
);
export const DropdownItem = ac(
  () => import("./components/Dropdown/DropdownItem.vue"),
);
export const DropdownSeparator = ac(
  () => import("./components/Dropdown/DropdownSeparator.vue"),
);
export const Sheet = ac(() => import("./components/Sheet/Sheet.vue"));
export const Skeleton = ac(() => import("./components/Skeleton/Skeleton.vue"));
export const SkeletonProvider = ac(
  () => import("./components/Skeleton/SkeletonProvider.vue"),
);
export const AvatarSkeleton = ac(
  () => import("./components/Skeleton/AvatarSkeleton.vue"),
);
export const ButtonSkeleton = ac(
  () => import("./components/Skeleton/ButtonSkeleton.vue"),
);
export const CardSkeleton = ac(
  () => import("./components/Skeleton/CardSkeleton.vue"),
);
export const FormSkeleton = ac(
  () => import("./components/Skeleton/FormSkeleton.vue"),
);
export const TextSkeleton = ac(
  () => import("./components/Skeleton/TextSkeleton.vue"),
);
export const Empty = ac(() => import("./components/Empty/Empty.vue"));
export const EmptyContent = ac(
  () => import("./components/Empty/EmptyContent.vue"),
);
export const EmptyDescription = ac(
  () => import("./components/Empty/EmptyDescription.vue"),
);
export const EmptyHeader = ac(
  () => import("./components/Empty/EmptyHeader.vue"),
);
export const EmptyMedia = ac(() => import("./components/Empty/EmptyMedia.vue"));
export const EmptyTitle = ac(() => import("./components/Empty/EmptyTitle.vue"));
export const Loader = ac(() => import("./components/Loader/Loader.vue"));
export const HoverMenu = ac(
  () => import("./components/HoverMenu/HoverMenu.vue"),
);
export const HoverMenuList = ac(
  () => import("./components/HoverMenu/HoverMenuList.vue"),
);
export const HoverMenuItem = ac(
  () => import("./components/HoverMenu/HoverMenuItem.vue"),
);
export const HoverMenuSeparator = ac(
  () => import("./components/HoverMenu/HoverMenuSeparator.vue"),
);
export const HoverCard = ac(
  () => import("./components/HoverCard/HoverCard.vue"),
);
export const HourPicker = ac(
  () => import("./components/HourPicker/HourPicker.vue"),
);
export const ContextMenu = ac(
  () => import("./components/ContextMenu/ContextMenu.vue"),
);
export const ContextSubmenu = ac(
  () => import("./components/ContextMenu/ContextSubmenu.vue"),
);
export const ContextMenuList = ac(
  () => import("./components/ContextMenu/ContextMenuList.vue"),
);
export const ContextMenuItem = ac(
  () => import("./components/ContextMenu/ContextMenuItem.vue"),
);
export const ContextMenuSeparator = ac(
  () => import("./components/ContextMenu/ContextMenuSeparator.vue"),
);
export const Confirm = ac(() => import("./components/Confirm/Confirm.vue"));
export const Calendar = ac(() => import("./components/Calendar/Calendar.vue"));
export const DateInput = ac(
  () => import("./components/DateInput/DateInput.vue"),
);
export const DatePicker = ac(
  () => import("./components/DatePicker/DatePicker.vue"),
);
export const DateNavigator = ac(
  () => import("./components/DateNavigator/DateNavigator.vue"),
);
export const Select = ac(() => import("./components/Select/Select.vue"));
export const SelectOption = ac(
  () => import("./components/Select/SelectOption.vue"),
);
export const SuggestInput = ac(
  () => import("./components/SuggestInput/SuggestInput.vue"),
);
export const Textarea = ac(() => import("./components/Textarea/Textarea.vue"));
export const Toaster = ac(() => import("./components/Toaster/Toaster.vue"));
export const GridLayout = ac(() => import("./components/Grid/GridLayout.vue"));
export const GridRow = ac(() => import("./components/Grid/GridRow.vue"));
export const GridColumn = ac(() => import("./components/Grid/GridColumn.vue"));

import useTabs from "./components/Tabs/useTabs";
import {
  useSelect,
  type RegisteredOption,
} from "./components/Select/useSelect";
import { useConfirm } from "./components/Confirm/useConfirm";
import { useResize } from "./hooks/useResize";
import { useSize } from "./hooks/useSize";
import { useModal } from "./hooks/useModal";
import { useContextMenu } from "./components/ContextMenu/useContextMenu";
import {
  provideSkeletonLoading,
  useSkeletonLoading,
} from "./components/Skeleton/context";
import { useViewportBreakpoint } from "./hooks/useViewportBreakpoint";
import { useContainerBreakpoint } from "./hooks/useContainerBreakpoint";
import { useGridBreakpoint } from "./hooks/useGridBreakpoint";
import { toast, useVueSonner } from "vue-sonner";
export type { Color } from "./types/colors";
export type { ComponentSize } from "./types/component-size";
export type { ChipMode, ChipSize, ChipValue } from "./components/Chip/types";
export type {
  Breakpoint,
  BreakpointResult,
} from "./hooks/breakpoints/breakpoints";
export type {
  CalendarDay,
  CalendarMode,
  CalendarMonthChangePayload,
  CalendarRangePayload,
  CalendarRangeValue,
  CalendarSelectPayload,
  CalendarSize,
  CalendarValue,
} from "./components/Calendar/types";
export type {
  DateNavigatorChangePayload,
  DateNavigatorMode,
  DateNavigatorRange,
} from "./components/DateNavigator/types";
export type {
  DateInputChangePayload,
  DateInputValue,
} from "./components/DateInput/types";
export type {
  DatePickerChangePayload,
  DatePickerValue,
} from "./components/DatePicker/types";
export type {
  HourPickerChangePayload,
  HourPickerValue,
} from "./components/HourPicker/types";
export type {
  AttachmentMediaVariant,
  AttachmentOrientation,
  AttachmentSize,
  AttachmentState,
} from "./components/Attachment/types";
export type {
  FileUploadOrientation,
  FileUploadRejection,
  FileUploadSize,
  FileUploadValidator,
} from "./components/FileUpload/types";
export type {
  ImageViewerError,
  ImageViewerItem,
  ImageViewerThumbnails,
} from "./components/ImageViewer/types";
export { formatFileUploadSize } from "./components/FileUpload/fileUpload";
export type {
  ExternalToast,
  ToastClasses,
  ToastT,
  ToasterProps,
} from "vue-sonner";
export {
  addDays,
  addMonths,
  addYears,
  addHours,
  differenceInCalendarDays,
  endOfDay,
  formatRuDayMonth,
  formatRuMonthYear,
  formatRuReadableDateTime,
  formatRuRelativeTime,
  formatRuShortWeekdayMonthDay,
  isAfterDay,
  isBeforeDay,
  isSameDay,
  roundDateToNearestHour,
  startOfDay,
  startOfMonth,
  startOfWeek,
  startOfYear,
  setDateHour,
  snapDateToHour,
  toDate,
} from "./utils/date";
export { pluralize } from "./utils/pluralize";

export {
  useSelect,
  useConfirm,
  useTabs,
  useResize,
  useSize,
  useModal,
  useContextMenu,
  provideSkeletonLoading,
  useSkeletonLoading,
  useViewportBreakpoint,
  useContainerBreakpoint,
  useGridBreakpoint,
  toast,
  useVueSonner,
};

export type { RegisteredOption };
