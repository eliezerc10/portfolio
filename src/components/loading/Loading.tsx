interface LoadingProps {

}

export const Loading: React.FC<LoadingProps> = ({}) => {
    return(
        <div className="loader-container">
          <div className="loader">Loading...</div>
        </div>
    )
}