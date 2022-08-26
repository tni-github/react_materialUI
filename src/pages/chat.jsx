export const Chat = ({ chatId, name }) => {

    return (
        <div>
            <h4 className="chatlist__items-text">Чат № {chatId}, имя чата "{name}"</h4>
        </div>
    )
}