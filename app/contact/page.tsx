'use client'
import { Modals } from "@/components/modals/core/modals-config";
import { useModal } from "@/hooks/use-modal";
import { useState } from "react";

export default function App() {
    const [name, setName] = useState("");
    const editModal = useModal(Modals.ContactFormModal);

    const displayEditModal = () => {
        editModal.open({
            name: name,
            onSave: (changedName: string) => {
                setName(changedName)
                editModal.close()
            },
            onCancel: editModal.close
        })
    }
    return (
        <div className="App">
            <button onClick={displayEditModal}>Edit Name</button>
        </div>
    );
}