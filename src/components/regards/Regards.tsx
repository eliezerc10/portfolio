import React from "react";
import '../regards/regards.css'
interface RegardsProps {
    message: string
}

export const Regards: React.FC<RegardsProps> = ({message}) => {
    return (
        <section className="regards-section">
            <h2 className='bottom-title'>{message}</h2>
        </section>
    )
}