import { Link } from 'react-router-dom';

function EditExam() {
  return (
    <div>
      <h1>EditExam</h1>
      <Link to="/admin/exams" className="btn btn-secondary">
        Back
      </Link>
    </div>
  );
}

export default EditExam;
