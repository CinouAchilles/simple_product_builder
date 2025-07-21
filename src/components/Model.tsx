import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import type { ReactNode } from 'react';

interface Iprops {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    closeModal: () => void;
    openModal: () => void;

    title?: string,
    children: ReactNode;
}


export default function Model(props: Iprops) {
    const { title, children, isOpen, closeModal } = props;


    return (
        <>

            
            <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={closeModal}>
                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    {/* Background overlay */}
                    <div className="fixed inset-0 bg-black/25" aria-hidden="true" />

                    <div className="flex min-h-full items-center justify-center p-4">
                        <DialogPanel
                            transition
                            className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl backdrop-blur-md duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
                        >
                            {
                                title && (
                                    <DialogTitle as="h3" className="text-base/7 font-medium text-gray-900">
                                        {title}
                                    </DialogTitle>
                                )
                            }
                            <p className="mt-2 text-sm/6 text-gray-500">
                                Your payment has been successfully submitted. We’ve sent you an email with all of the details of your
                                order.
                            </p>
                            <div className="mt-4 flex flex-col items-center justify-between gap-2">

                                {children}
                            </div>
                            
                        </DialogPanel>
                    </div>
                </div>
            </Dialog>
        </>

    )
}
