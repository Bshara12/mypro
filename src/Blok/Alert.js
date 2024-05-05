import { useRef, useState } from "react";
import {
  AlertDialog,
  AlertDialogLabel,
  AlertDialogDescription,
  AlertDialogOverlay,
  AlertDialogContent,
} from "@reach/alert-dialog";

// first do npm install @reach/alert-dialog

export default function Example() {
  const [showDialog, setShowDialog] = useState(false);
  const cancelRef = useRef();
  const open = () => setShowDialog(true);
  const close = () => setShowDialog(false);

  return (
    <div className="alert">
      <button onClick={open}>Delete something</button>

      {showDialog && (
        <AlertDialog leastDestructiveRef={cancelRef}>
          <AlertDialogLabel>Please Confirm!</AlertDialogLabel>

          <AlertDialogDescription>
            Are you sure you want to delete something? This action is permanent,
            and we're totally not just flipping a field called "deleted" to
            "true" in our database, we're actually deleting something.
          </AlertDialogDescription>

          <div className="alert-buttons">
            <button onClick={close}>Yes, delete</button>{" "}
            <button ref={cancelRef} onClick={close}>
              Nevermind, don't delete.
            </button>
          </div>
        </AlertDialog>
      )}
    </div>
  );
}
