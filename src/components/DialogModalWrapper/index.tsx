import * as S from './Styles';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { DialogActions, IconButton } from '@mui/material';
import * as React from 'react';

const Transition = React.forwardRef<
    unknown,
    TransitionProps & {
        children: React.ReactElement;
    }
>((props, ref) => {
    return <Slide direction="up" ref={ref} {...props} />;
});

interface DialogSlide {
    title: React.ReactNode | string;
    body: React.ReactNode;
    footer?: React.ReactNode;
    open: boolean;
    handleClose: () => void;
}

const DialogWrapper: React.FC<DialogSlide> = ({
    title,
    body,
    open,
    footer,
    handleClose,
}) => {
    const handleDialogClose = () => {
        handleClose();
    };

    return (
        <>
            <S.StyledDialog
                open={open}
                TransitionComponent={Transition}
                fullWidth={true}
                keepMounted
                onClose={handleDialogClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <S.StyledDialogTitle>
                    {title}

                    <IconButton
                        aria-label="close"
                        onClick={handleClose}
                        style={{ position: 'absolute', left: 8, top: 8 }}
                    >
                        <S.StyledCancelPresentationOutlinedIcon />
                    </IconButton>
                </S.StyledDialogTitle>

                <S.StyledDialogContent>{body}</S.StyledDialogContent>
                <DialogActions>{footer}</DialogActions>
            </S.StyledDialog>
        </>
    );
};

export default DialogWrapper;
