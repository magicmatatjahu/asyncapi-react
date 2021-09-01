export * from './BaseModal';
export * from './ConverterModal';
export * from './ExportToLinkModal';
export * from './ImportURLModal';
export * from './ImportBase64Modal';
export * from './ShareBase64Modal';

export interface IModalProps {
  title: React.ReactNode;
  description?: React.ReactNode;
  confirmText?: React.ReactNode;
  confirmDisabled?: boolean;
  opener: React.ReactNode;
  onSubmit?: () => void;
  onCancel?: () => void;
}
