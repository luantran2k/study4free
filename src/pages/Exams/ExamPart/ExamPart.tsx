
import { useParams } from 'react-router-dom'
import Speaking from '../Speaking';
import Listening from '../Listening';
import Reading from '../Reading';
import Writing from '../Writing';

const ExamPart = () => {
    const { type } = useParams();
    return (
        <>
            {type === "speaking" ? <Speaking /> : type === "listening" ? <Listening /> : type === "reading" ? <Reading /> : <Writing />}
        </>
    )
}

export default ExamPart