import { useTranslation } from 'react-i18next';
import '../loading/loading.css'

interface LoadingProps {
}

export const Loading: React.FC<LoadingProps> = () => {
    const { t } = useTranslation();
    
    return (
        <div className="loading">
            <div className="spinner"></div>
            <p>{t('loading.message')}</p>
        </div>
    )
}