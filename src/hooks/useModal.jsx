import { XMarkIcon } from '@heroicons/react/24/outline';
import * as Dialog from '@radix-ui/react-dialog';
import React, { useEffect, useState } from 'react';
export const ModalProvider = () => <div id="modal" />;

const useModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  const Modal = ({ children }) => {
    return (
      <Dialog.Root open={showModal} onOpenChange={setShowModal} modal={true}>
        {children}
      </Dialog.Root>
    );
  };

  const ModalTrigger = ({ children }) => {
    return (
      <Dialog.Trigger asChild className="state-focus">
        {children}
      </Dialog.Trigger>
    );
  };

  const ModalContent = React.forwardRef(({ children, title, description, ...props }, forwardedRef) => {
    return mounted ? (
      <Dialog.Portal>
        <Dialog.Overlay className="fixed flex-center inset-0 z-40 p-2 bg-neutral-800/40" forceMount>
          <Dialog.Content
            className="z-50 w-full p-4 overflow-hidden max-w-lg break-word  text-left align-middle rounded-lg shadow-md bg-neutral-50"
            forceMount
            {...props}
            ref={forwardedRef}
          >
            <div className="flex justify-between mb-4">
              <Dialog.Title className="text-lg font-medium underline decoration-2 decoration-primary-600">{title}</Dialog.Title>
              <Dialog.Close className="rounded-full state-focus w-6 h-6">
                <XMarkIcon className="p-1 ease-in-out    w-6 h-6 stroke-neutral-600 animate-action" />
              </Dialog.Close>
            </div>
            <Dialog.Description className="text-sm">{description}</Dialog.Description>
            {children}
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    ) : null;
  });

  ModalContent.displayName = 'ModalContent';

  return [Modal, ModalContent, ModalTrigger, setShowModal, showModal];
};

export default useModal;
