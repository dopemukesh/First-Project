import React from "react";
import { Button } from "../../../../Components/Common/Button/Button";

export const DeleteModal = ({ isOpen, title, message, onConfirm, onCancel }) => {
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-xl w-96">
                <h2 className="text-lg font-bold mb-2">{title}</h2>
                <div className="text-sm mb-4 text-gray-500 dark:text-gray-400">{message}</div>
                <div className="flex justify-end gap-2">
                    <Button
                        onClick={onCancel}
                        variant="outline2"
                        size="ssm"
                    >
                        Cancel
                    </Button>
                    <Button
                        onClick={onConfirm}
                        variant="danger"
                        size="ssm"
                    >
                        Delete
                    </Button>
                </div>
            </div>
        </div>
    );
};

export const EditModal = ({ isOpen, title, message, children, onConfirm, onCancel }) => {
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-xl w-96">
                <h2 className="text-lg font-bold">{title}</h2>
                <div className="text-sm mb-2 text-gray-500 dark:text-gray-400">{message}</div>
                <hr className="border-dashed border-gray-300 dark:border-gray-600 mb-6" />
                {children}
                <div className="flex justify-end gap-2 mt-4">
                    <Button
                        onClick={onCancel}
                        variant="outline2"
                        size="ssm"
                    >
                        Cancel
                    </Button>
                    <Button
                        onClick={onConfirm}
                        variant="secondary"
                        size="ssm"
                    >
                        Save Changes
                    </Button>
                </div>
            </div>
        </div>
    );
};
