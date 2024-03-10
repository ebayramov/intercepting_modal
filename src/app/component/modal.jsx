"use client";
import { useRouter } from 'next/navigation'
import { Modal, Button } from 'react-bootstrap';



export function MyModal({ children }) {
    const router = useRouter()


    return (
        <Modal show={true}>
            <Modal.Header >
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>{children}</Modal.Body>
            <Modal.Footer>
                <Button
                    onClick={() => {
                        router.back()
                    }}
                >
                    Close modal
                </Button>
            </Modal.Footer>
        </Modal>
    )
}