import { createContext, useState } from "react";

export const ModalContext = createContext({
    isOpen: true,
    type: '',
    id: 0,
    handleSetIsOpen: () => { },
    handlesetType: (type) => { },
    handlesetId: (id) => { },
    openModal: (type, id) => { },
    closeModal: (e) => { },
})

export const ModalContextProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [type, setType] = useState('')
    const [id, setId] = useState('')

    const handleSetIsOpen = () => {
        setIsOpen((p) => !p);
    }

    const handlesetType = (type) => {
        setType(type)
        handleSetIsOpen();
    }

    const handlesetId = (id) => {
        setId(id)
        handleSetIsOpen();
    }

    const openModal = (type, id) => {
        if(!isOpen) {
            handleSetIsOpen()
            handlesetType(type)
            handlesetId(id)
        }
    }

    const closeModal = (e) => {
        const modalBody = document
            .querySelector("#modalBody")?.getBoundingClientRect();

        if (modalBody) {
            if (
                e?.clientY < modalBody?.top ||
                e?.clientY > modalBody?.bottom ||
                e?.clientX < modalBody?.left ||
                e?.clientX > modalBody?.right
            ) {
                handleSetIsOpen();
            }
        }
    }

    return (
        <ModalContext.Provider
            value={{
                isOpen,
                type,
                id,
                handleSetIsOpen,
                handlesetType,
                handlesetId,
                openModal,
                closeModal,
            }}>
            {children}
        </ModalContext.Provider>
    )
}
