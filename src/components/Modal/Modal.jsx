import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import css from './Modal.module.css'
const rootModal = document.querySelector('#root-modal')



const Modal = ({children, onClose}) => {
    
    useEffect(() => {
        const handleEscape = (e) => {
            if(e.code === `Escape`){
                onClose()
            }
        }
        window.addEventListener('keydown', handleEscape)
    return () => {
        window.removeEventListener('keydown', handleEscape)
    }
    }, [onClose])

    const handleClose = (e) => {
        if(e.target === e.currentTarget){
            onClose()
            
        }
    }
    

    return (
        createPortal (
            <div onClick={handleClose} className={css.backdrop} >
                <div  className={css.modal}>
                {children}
                </div>
        </div> , 
        rootModal
        )
    )
}


export default Modal;