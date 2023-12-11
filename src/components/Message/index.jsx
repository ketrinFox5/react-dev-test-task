const Message = ({message, closeMessage}) => {
    const close = () => {
        closeMessage();
    }
    return(
        <div className="message">
            <div className="message-text">
                {message}
            </div>
            <button className="btn-modal" onClick={() => close()}>
                Закрыть
            </button>
        </div>
    )
}

export default Message