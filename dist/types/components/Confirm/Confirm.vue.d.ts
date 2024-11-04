import { useConfirm } from './useConfirm';
type UseConfirmResult = Omit<ReturnType<typeof useConfirm>, 'confirm'>;
export interface ConfirmProps {
    title: UseConfirmResult['title'];
    description: UseConfirmResult['description'];
    isOpened: UseConfirmResult['isOpened'];
    resolve: UseConfirmResult['resolve'];
    reject: UseConfirmResult['reject'];
    confirmButtonText: UseConfirmResult['confirmButtonText'] | string;
    cancelButtonText: UseConfirmResult['cancelButtonText'] | string;
}
declare const _default: import("vue").DefineComponent<ConfirmProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<ConfirmProps> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
