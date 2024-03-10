"use client"

import { MyModal } from "@/app/component/modal"
import SinglePhoto from "@/app/photo/[id]/page"

function ModalPhoto(props) { 

    return (
     <MyModal>
       <SinglePhoto params={{id: props.params.id}} modal={true}/>
     </MyModal>
    )
}

export default ModalPhoto