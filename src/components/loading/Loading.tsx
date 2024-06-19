import '../loading/loading.css'

interface LoadingProps {

}

export const Loading: React.FC<LoadingProps> = ({ }) => {
    return (
        <div className="loading">
            <div className="spinner"></div>
            <p>Loading...</p>
        </div>
    )
}