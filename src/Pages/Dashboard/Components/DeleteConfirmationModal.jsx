import { FiAlertTriangle, FiLoader, FiX } from "react-icons/fi";
import ReusableBtn from "./ReusableBtn";

const DeleteConfirmationModal = ({
  isOpen,
  onClose,
  onConfirm,
  projectTitle,
  isDeleting,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl w-full max-w-md">
        <div className="flex items-start mb-4">
          <FiAlertTriangle className="text-red-500 w-6 h-6 mr-3 mt-1" />
          <div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
              Delete Project
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Are you sure you want to delete "{projectTitle}"? This action
              cannot be undone.
            </p>
          </div>
        </div>

        <div className="flex justify-end space-x-3 mt-6">
          <ReusableBtn
            onClick={onClose}
            icon={<FiX className="h-4 w-4 text-red-500" />}
            text="Cancel"
            disabled={isDeleting}
          />
          <ReusableBtn
            onClick={onConfirm}
            icon={
              isDeleting ? <FiLoader className="h-4 w-4 animate-spin" /> : null
            }
            text={isDeleting ? "Deleting..." : "Confirm Delete"}
            disabled={isDeleting}
          />
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmationModal;
