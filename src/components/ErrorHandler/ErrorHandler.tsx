import { Typography } from '@mui/material';

type ErrorHandlerProps = {
    errorMessage?: string;
};

export const ErrorHandler: React.FC<ErrorHandlerProps> = ({ errorMessage }) => {
    return (
        <>
            {(() => {
                switch (errorMessage) {
                    case 'Request failed with status code 404': {
                        return (
                            <Typography variant="h3" textAlign="center">
                                Country not found
                            </Typography>
                        );
                    }
                    case 'Network Error': {
                        return (
                            <Typography variant="h3" textAlign="center">
                                Network Error
                            </Typography>
                        );
                    }
                }
            })()}
        </>
    );
};
