import { useEffect, useRef, useState } from 'react';
import './Form.css';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';


export const Form = ({ onSendMessage, messageList }) => {
    const [message, setMessage] = useState('');
    const autoFocus = useRef("true");

    const handleChange = (event) => {
        setMessage(event.target.value);
    }

    useEffect(() => {
        autoFocus.current?.focus();
    })

    return (
        <div className="form">
            <TextField
                variant="outlined"
                sx={
                    {
                        backgroundColor: '#fff',

                        boxSizing: 'border-box',
                        padding: '8px',
                        borderRadius: '10px',
                        fontStyle: 'Arial',
                        fontSize: '13px',
                    }
                }
                placeholder="Введите свое сообщение в этом поле..."
                value={message}
                onChange={handleChange}
                inputRef={autoFocus}
            />
            <Stack spacing={2} direction="row">
                <Button
                    sx={{

                        border: '1px solid rgb(68, 28, 143)',
                        borderRadius: '10px',
                        padding: '6px',
                        backgroundColor: '#fff',
                        color: '#000',
                        textTransform: 'lowercase',
                        boxSizing: 'border-box',
                        fontStyle: 'Arial',
                        fontSize: '13px'
                    }}
                    variant="contained"
                    size="medium"
                    onClick={() => {
                        onSendMessage(message);
                        setMessage('');
                    }}
                >
                    <span>отправить сообщение</span>
                </Button>
            </Stack>
        </div >
    )
}