import { useParams } from 'react-router-dom';
import { Listening, Reading, Speaking, Writing } from '../../../routes/imports';


const ExamPart = () => {
    const { type } = useParams();
    return (
        <>
            {type === 'Speaking' ? (
                <Speaking />
            ) : type === 'Listening' ? (
                <Listening />
            ) : type === 'Reading' ? (
                <Reading />
            ) : (
                <Writing />
            )}
        </>
    );
};

export default ExamPart;
