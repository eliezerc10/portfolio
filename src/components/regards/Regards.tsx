import React from "react";
import { useTranslation } from 'react-i18next';
import '../regards/regards.css'

export const Regards: React.FC = () => {
    const { t } = useTranslation();
    
    return (
        <section className="regards-section">
            <h2 className='bottom-title'>{t('regards.message')}</h2>
        </section>
    )
}